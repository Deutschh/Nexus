// Em: src/services/email.service.js

const { Resend } = require('resend'); // Usa 'require' (CommonJS)
require('dotenv').config();

// Inicializa o Resend com a chave do .env
const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Envia um email de boas-vindas para um novo usuário.
 * @param {string} userEmail - O email do destinatário.
 * @param {string} userName - O primeiro nome do usuário.
 */
exports.sendWelcomeEmail = async (userEmail, userName) => {
  
  const fromAddress = 'onboarding@resend.dev'; // (Modo de teste)

  // --- HTML ESTILIZADO (COM ESTILOS INLINE) ---
  // Este é o "template" do seu email, escrito em HTML puro.
  // Clientes de email (Gmail, Outlook) funcionam melhor com estilos inline.
  const htmlBody = `
    <div style="font-family: Arial, sans-serif; background-color: #f6f9fc; padding: 40px;">
      <div style="background-color: #ffffff; margin: 0 auto; padding: 20px 48px; border-radius: 8px; border: 1px solid #eaeaea; max-width: 600px;">
        
        <h1 style="font-size: 28px; font-weight: bold; color: #333;">Olá, ${userName}!</h1>
        
        <p style="font-size: 16px; line-height: 26px; color: #555;">
          Estamos muito felizes em ter você e o seu negócio conosco.
        </p>
        
        <p style="font-size: 16px; line-height: 26px; color: #555;">
          Sua conta no ZenFlow foi criada com sucesso. Agora você pode fazer login a qualquer momento e começar a transformar seus dados em lucro.
        </p>
        
        <a 
          href="http://localhost:5173/login" 
          target="_blank"
          style="background-color: #4f46e5; border-radius: 6px; color: #fff; font-size: 16px; text-decoration: none; padding: 12px 20px; display: inline-block; margin-top: 20px; font-weight: bold;"
        >
          Acessar minha conta
        </a>
        
        <hr style="border: none; border-top: 1px solid #eaeaea; margin: 26px 0;" />
        
        <p style="color: #8898aa; font-size: 12px;">
          Atenciosamente,<br>Equipe ZenFlow
        </p>
      </div>
    </div>
  `;
  // --- FIM DO HTML ---

  try {
    const data = await resend.emails.send({
      from: `ZenFlow <${fromAddress}>`,
      to: [userEmail], // O email que o usuário cadastrou
      subject: `Bem-vindo ao ZenFlow, ${userName}!`,
      html: htmlBody, // Usamos nossa string de HTML puro
    });

    console.log(`Email de boas-vindas enviado para ${userEmail}:`, data.id);

  } catch (error) {
    console.error(`Falha ao enviar email para ${userEmail}:`, error);
  }
};