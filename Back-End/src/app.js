// Em: src/app.js

const express = require('express');
require('dotenv').config();
const cors = require('cors');

// Importar nossas rotas
const authRoutes = require('./api/auth/auth.routes');
// const storeRoutes = require('./api/stores/stores.routes'); // LINHA COMENTADA

const app = express();
const PORT = process.env.PORT || 3000;

// === MIDDLEWARES ===
const corsOptions = {
  origin: 'http://localhost:5173'
};
app.use(cors(corsOptions));
app.use(express.json());

// === ROTAS ===
app.use('/api/auth', authRoutes);     
// app.use('/api/stores', storeRoutes);  // LINHA COMENTADA

// === INICIA O SERVIDOR ===
app.listen(PORT, () => {
  console.log(`🚀 Servidor ZenFlow rodando na porta http://localhost:${PORT}`);
});