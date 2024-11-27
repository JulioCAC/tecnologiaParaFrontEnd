import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

// Componente reutilizável para Cards
const InfoCard = ({ imgSrc, imgAlt, title, description }) => (
  <Paper
    elevation={3}
    sx={{
      p: 3,
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      textAlign: 'center',
      minHeight: '380px', // Altura mínima uniforme
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
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
      style={{
        width: '100%',
        height: '180px', // Altura fixa para todas as imagens
        objectFit: 'cover',
        borderRadius: '8px',
        marginBottom: '16px',
      }}
    />
    <Typography variant="h6" gutterBottom>
      {title}
    </Typography>
    <Typography variant="body2">{description}</Typography>
  </Paper>
);

const Faculdade = () => {
  return (
    <Box
      sx={{
        maxWidth: '1200px', // Centraliza o conteúdo
        margin: '0 auto', // Centraliza horizontalmente
        p: { xs: 2, md: 4 },
        backgroundColor: '#f0f0f0',
        borderRadius: '8px',
      }}
    >
      <Typography variant="h3">
        A Faculdade
      </Typography>
      <Paper
        elevation={3}
        sx={{
          p: 3,
          mb: 4,
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          textAlign: 'justify',
        }}
      >
        <Typography variant="body1" paragraph>
          A Faculdade UNIESP é uma instituição comprometida com a excelência no ensino e no desenvolvimento de habilidades para o mercado de trabalho. Com uma infraestrutura moderna e professores altamente qualificados, oferecemos um ambiente vibrante e acolhedor para que nossos alunos possam crescer e alcançar seus objetivos.
        </Typography>
        <Typography variant="body1" paragraph>
          Nossos cursos são projetados para formar profissionais capacitados e conscientes de seu papel na sociedade. Junte-se a nós e faça parte de uma comunidade de aprendizado contínuo e inovação.
        </Typography>
      </Paper>

      <Grid container spacing={4}>
        {/* Primeira linha de cards */}
        <Grid item xs={12} sm={6} md={4}>
          <InfoCard
            imgSrc="https://images.unsplash.com/photo-1556761175-4b46a572b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDJ8fGNvbGxlZ2V8ZW58MHx8fHwxNjI2NzUwNzY0&ixlib=rb-1.2.1&q=80&w=400"
            imgAlt="Estudantes interagindo no campus universitário"
            title="Vida no Campus"
            description="Um ambiente vibrante, cheio de oportunidades para aprendizado, amizade e crescimento pessoal."
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <InfoCard
            imgSrc="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDJ8fGxpYnJhcnl8ZW58MHx8fHwxNjI2NzUwODE2&ixlib=rb-1.2.1&q=80&w=400"
            imgAlt="Interior da biblioteca da faculdade"
            title="Biblioteca"
            description="Nossa biblioteca moderna oferece uma vasta coleção de livros, revistas e recursos digitais para pesquisa."
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <InfoCard
            imgSrc="https://images.unsplash.com/photo-1652974731232-efc86a9bd985?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            imgAlt="Prédio principal da Faculdade UNIESP"
            title="Prédio Principal"
            description="O coração da nossa instituição, com salas de aula modernas, laboratórios e espaços de convivência."
          />
        </Grid>
      </Grid>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        {/* Segunda linha de cards */}
        <Grid item xs={12} sm={6}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              backgroundColor: '#ffffff',
              borderRadius: '8px',
              textAlign: 'justify',
              minHeight: '180px',
            }}
          >
            <Typography variant="h6" gutterBottom>
              Parcerias com Empresas
            </Typography>
            <Typography variant="body2">
              A UNIESP mantém parcerias com diversas empresas, permitindo que nossos alunos tenham acesso a oportunidades de estágio e emprego logo após a graduação. Essas parcerias são fundamentais para integrar os estudantes ao mercado e oferecer uma experiência educacional alinhada com a prática profissional.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              backgroundColor: '#ffffff',
              borderRadius: '8px',
              textAlign: 'justify',
              minHeight: '180px',
            }}
          >
            <Typography variant="h6" gutterBottom>
              Compromisso com a Educação
            </Typography>
            <Typography variant="body2">
              A UNIESP se dedica a oferecer uma educação acessível e de qualidade, acreditando que o conhecimento transforma vidas. Nossos programas são desenhados para preparar os alunos não apenas para carreiras, mas também para fazer contribuições significativas para a sociedade.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Faculdade;
