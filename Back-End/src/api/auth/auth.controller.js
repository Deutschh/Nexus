// Em: src/api/auth/auth.controller.js

const db = require('../../config/database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// --- REGISTRO DE USUÁRIO (ATUALIZADO) ---
exports.registerUser = async (req, res) => {
  // 1. Recebemos os dados do NOVO formulário
  const {
    firstName,
    lastName,
    email,
    password,
    businessName, // Veio do 'nome-negocio'
    businessType, // Veio do 'tipo-negocio'
    cep,
    phone         // Veio do 'telefone'
  } = req.body;

  // 2. Juntamos o nome
  const fullName = `${firstName} ${lastName}`;

  // 3. Validação
  if (!firstName || !lastName || !email || !password || !businessName || !businessType || !cep || !phone) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
  }

  try {
    // Usamos uma TRANSAÇÃO
    await db.query('BEGIN');

    // 4. Criar a organização (AGORA COM OS NOVOS CAMPOS)
    const orgQuery = `
      INSERT INTO organizations(name, business_type, cep, phone) 
      VALUES($1, $2, $3, $4) 
      RETURNING id
    `;
    const orgResult = await db.query(orgQuery, [
      businessName,
      businessType,
      cep,
      phone
    ]);
    const organizationId = orgResult.rows[0].id;

    // 5. Criptografar a senha
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    // 6. Criar o usuário (AGORA COM O 'fullName')
    const userQuery = `
      INSERT INTO users(organization_id, name, email, password_hash, role) 
      VALUES($1, $2, $3, $4, $5) 
      RETURNING id, email, name, role
    `;
    const userResult = await db.query(userQuery, [
      organizationId,
      fullName, // <-- Usando o nome completo
      email,
      passwordHash,
      'owner'
    ]);

    // Confirma a transação
    await db.query('COMMIT');

    res.status(201).json({
      message: 'Organização e usuário criados com sucesso!',
      user: userResult.rows[0],
    });

  } catch (error) {
    // Desfaz tudo em caso de erro
    await db.query('ROLLBACK');
    console.error('Erro no registro:', error);

    if (error.code === '23505') { // Erro de e-mail duplicado
      return res.status(409).json({ error: 'Este e-mail já está em uso.' });
    }

    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

// --- LOGIN DE USUÁRIO ---
// (Não precisa de nenhuma alteração. Está perfeito.)
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'E-mail e senha são obrigatórios.' });
  }

  try {
    // 1. Encontrar o usuário
    const userQuery = 'SELECT * FROM users WHERE email = $1';
    const { rows } = await db.query(userQuery, [email]);
    const user = rows[0];

    if (!user) {
      return res.status(401).json({ error: 'Credenciais inválidas.' });
    }

    // 2. Comparar a senha
    const isMatch = await bcrypt.compare(password, user.password_hash);

    if (!isMatch) {
      return res.status(401).json({ error: 'Credenciais inválidas.' });
    }

    // 3. Criar o Token JWT (o "crachá")
    const payload = {
      id: user.id,
      email: user.email,
      role: user.role,
      organizationId: user.organization_id, // MUITO IMPORTANTE!
    };

    const token = jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1d' } // Token expira em 1 dia
    );

    res.status(200).json({
      message: 'Login realizado com sucesso!',
      token: token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {
    console.error('Erro no login:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};