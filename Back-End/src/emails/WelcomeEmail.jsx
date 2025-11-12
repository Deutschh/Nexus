// Em: src/emails/WelcomeEmail.jsx

import React from 'react';
import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
  Button,
  Hr,
} from '@react-email/components';

// Este é o seu email, escrito como um componente React!
export function WelcomeEmail({ userName }) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>Olá, {userName}!</Heading>
          <Text style={paragraph}>
            Estamos muito felizes em ter você e o seu negócio conosco.
          </Text>
          <Text style={paragraph}>
            Sua conta no ZenFlow foi criada com sucesso. Agora você pode fazer
            login a qualquer momento e começar a transformar seus dados em lucro.
          </Text>
          <Button
            style={button}
            href="http://localhost:5173/login" // Link para o seu app
          >
            Acessar minha conta
          </Button>
          <Hr style={hr} />
          <Text style={footer}>
            Atenciosamente, Equipe ZenFlow
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

// --- Nossos Estilos (serão "inlined" automaticamente) ---
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 48px',
  marginBottom: '64px',
  borderRadius: '8px',
  border: '1px solid #eaeaea',
};

const heading = {
  fontSize: '28px',
  fontWeight: 'bold',
  marginTop: '0px',
  color: '#333',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
  color: '#555',
};

const button = {
  backgroundColor: '#4f46e5', // Indigo
  borderRadius: '6px',
  color: '#fff',
  fontSize: '16px',
  textDecoration: 'none',
  padding: '12px 20px',
};

const hr = {
  borderColor: '#eaeaea',
  margin: '26px 0',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
};