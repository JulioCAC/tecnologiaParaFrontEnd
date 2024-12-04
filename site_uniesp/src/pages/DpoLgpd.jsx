import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';


const InfoCard = ({ imgSrc, imgAlt, title, description }) => (
  <Paper
    elevation={3}
    sx={{
      p: 3,
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      textAlign: 'center',
      '&:hover': {
        transform: 'scale(1.02)',
        transition: 'transform 0.3s ease-in-out',
      },
    }}
  >
    <img
      src={imgSrc}
      alt={imgAlt}
      loading="lazy"
      style={{ width: '100%', borderRadius: '8px', marginBottom: '16px' }}
    />
    <Typography variant="h6" gutterBottom>
      {title}
    </Typography>
    <Typography variant="body2">{description}</Typography>
  </Paper>
);

const DpoLgpd = () => {
  return (
    <Box sx={{ p: 4, backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
      <Typography variant="h3" gutterBottom>
        DPO e LGPD
      </Typography>

      <Paper elevation={3} sx={{ p: 3, mb: 4, backgroundColor: '#ffffff', borderRadius: '8px' }}>
        <Typography variant="body1" paragraph>
          A Lei Geral de Proteção de Dados (LGPD) é uma legislação brasileira que regula o tratamento de dados pessoais em diversos setores, tanto públicos quanto privados. Implementada para proteger a privacidade e os direitos dos titulares de dados, a LGPD impõe diretrizes rígidas para coleta, armazenamento e compartilhamento de informações pessoais.
        </Typography>
        <Typography variant="body1" paragraph>
          O DPO (Data Protection Officer), ou Encarregado de Proteção de Dados, é um profissional designado para garantir que uma organização esteja em conformidade com a LGPD. Esse profissional atua como ponto de contato entre a organização e os titulares de dados, bem como entre a organização e a Autoridade Nacional de Proteção de Dados (ANPD).
        </Typography>
        <Typography variant="body1">
          A seguir, você encontrará informações detalhadas sobre a importância da LGPD, o papel do DPO e como sua organização pode se beneficiar ao adotar práticas de conformidade. Entenda como a privacidade e a proteção de dados são fundamentais para o sucesso e a confiança dos seus clientes.
        </Typography>
      </Paper>

      <Grid container spacing={4}>
        {/* Primeira linha de cards */}
        <Grid item xs={12} md={4}>
          <InfoCard
            imgSrc="https://plus.unsplash.com/premium_photo-1661688118617-7a6834a9522c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            imgAlt="Compliance e Legislação"
            title="Compliance e Legislação"
            description="A conformidade com a LGPD é essencial para proteger a privacidade dos dados e evitar penalidades legais."
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <InfoCard
            imgSrc="https://plus.unsplash.com/premium_photo-1681487942927-e1a2786e6036?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            imgAlt="Gestão de Dados"
            title="Gestão de Dados"
            description="A coleta e o armazenamento seguro de dados pessoais são práticas fundamentais para a conformidade com a LGPD."
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <InfoCard
            imgSrc="https://images.unsplash.com/photo-1556740749-887f6717d7e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDJ8fGNvbmZpZGVuY2V8ZW58MHx8fHwxNjgyODU4NDU3&ixlib=rb-1.2.1&q=80&w=400"
            imgAlt="Confiança e Transparência"
            title="Confiança e Transparência"
            description="A transparência no tratamento de dados fortalece a confiança dos clientes e demonstra compromisso com a privacidade."
          />
        </Grid>
      </Grid>

      <Paper elevation={3} sx={{ p: 3, mt: 4, backgroundColor: '#ffffff', borderRadius: '8px' }}>
        <Typography variant="h5" gutterBottom>
          Princípios Fundamentais da LGPD
        </Typography>
        <Typography variant="body1" paragraph>
          A LGPD é baseada em dez princípios fundamentais que guiam o tratamento de dados pessoais, incluindo:
        </Typography>
        <ul>
          <li>
            <strong>Finalidade:</strong> O tratamento de dados deve ter uma finalidade específica e explícita.
          </li>
          <li>
            <strong>Adequação:</strong> Os dados devem ser utilizados de forma compatível com o objetivo informado ao titular.
          </li>
          <li>
            <strong>Necessidade:</strong> Coletar apenas os dados essenciais para o cumprimento da finalidade.
          </li>
          <li>
            <strong>Transparência:</strong> Informar claramente ao titular como seus dados serão usados.
          </li>
          <li>
            <strong>Segurança:</strong> Proteger os dados de acessos não autorizados e de situações acidentais.
          </li>
          <li>
            <strong>Prevenção:</strong> Adotar medidas para evitar danos ao titular dos dados.
          </li>
        </ul>
        <Typography variant="body1">
          Esses princípios garantem que as organizações respeitem os direitos dos titulares e mantenham uma postura ética no tratamento de dados.
        </Typography>
      </Paper>
    </Box>
  );
};

export default DpoLgpd;
