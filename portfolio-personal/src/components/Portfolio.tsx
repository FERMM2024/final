import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
  IconButton,
  Avatar,
  LinearProgress,
  Paper,
  Fab,
  Divider,
  Switch,
  FormControlLabel,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import {
  GitHub,
  LinkedIn,
  Email,
  Phone,
  LocationOn,
  Download,
  Work,
  Brightness4,
  Brightness7,
  KeyboardArrowUp,
  Business,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import {
  personalInfo,
  technicalSkills,
  softSkills,
  projects,
  experiences,
  programmingLanguages,
} from '../data/portfolioData';

// Tema personalizado
const getTheme = (darkMode: boolean) => createTheme({
  palette: {
    mode: darkMode ? 'dark' : 'light',
    primary: {
      main: '#2196f3',
      light: '#64b5f6',
      dark: '#1976d2',
    },
    secondary: {
      main: '#f50057',
      light: '#ff5983',
      dark: '#c51162',
    },
    background: {
      default: darkMode ? '#121212' : '#f5f5f5',
      paper: darkMode ? '#1e1e1e' : '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
    },
  },
});

// Componentes estilizados
const HeroSection = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  color: 'white',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  position: 'relative',
}));

const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
}));

const SkillCard = styled(Card)(({ theme }) => ({
  height: '100%',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[8],
  },
}));

const ProjectCard = styled(Card)(({ theme }) => ({
  height: '100%',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

const ScrollToTopFab = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  zIndex: 1000,
}));

interface PortfolioProps {}

const Portfolio: React.FC<PortfolioProps> = () => {
  const [darkMode, setDarkMode] = useState(false);
  const theme = getTheme(darkMode);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        {/* App Bar */}
        <AppBar position="fixed" elevation={2}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {personalInfo.name}
            </Typography>
            <FormControlLabel
              control={
                <Switch
                  checked={darkMode}
                  onChange={(e) => setDarkMode(e.target.checked)}
                />
              }
              label={darkMode ? <Brightness4 /> : <Brightness7 />}
            />
          </Toolbar>
        </AppBar>

        {/* Hero Section */}
        <HeroSection>
          <Container maxWidth="lg">
            <Grid container columns={12} spacing={4} alignItems="center" display="grid">
              <Grid sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }}>
                <Avatar
                  sx={{
                    width: { xs: 150, md: 200 },
                    height: { xs: 150, md: 200 },
                    margin: '0 auto 2rem',
                    border: '4px solid white',
                  }}
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                />
              </Grid>
              <Grid sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }}>
                <Typography variant="h1" gutterBottom>
                  {personalInfo.name}
                </Typography>
                <Typography variant="h3" gutterBottom sx={{ mb: 3 }}>
                  {personalInfo.title}
                </Typography>
                <Typography variant="h6" paragraph sx={{ mb: 4, opacity: 0.9 }}>
                  {personalInfo.description}
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    startIcon={<Download />}
                    sx={{ color: 'white' }}
                  >
                    Descargar CV
                  </Button>
                  <IconButton
                    color="inherit"
                    component="a"
                    href={personalInfo.github}
                    target="_blank"
                    sx={{ bgcolor: 'rgba(255,255,255,0.1)', mx: 1 }}
                  >
                    <GitHub />
                  </IconButton>
                  <IconButton
                    color="inherit"
                    component="a"
                    href={personalInfo.linkedin}
                    target="_blank"
                    sx={{ bgcolor: 'rgba(255,255,255,0.1)', mx: 1 }}
                  >
                    <LinkedIn />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </HeroSection>

        {/* Información de Contacto */}
        <Section>
          <Container maxWidth="lg">
            <Typography variant="h2" align="center" gutterBottom>
              Información de Contacto
            </Typography>
            <Grid container columns={12} spacing={4} justifyContent="center" sx={{ mt: 2 }} display="grid">
              <Grid sx={{ gridColumn: { xs: 'span 12', md: 'span 4' } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                  <Email sx={{ mr: 2, color: 'primary.main' }} />
                  <Typography>{personalInfo.email}</Typography>
                </Box>
              </Grid>
              <Grid sx={{ gridColumn: { xs: 'span 12', md: 'span 4' } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                  <Phone sx={{ mr: 2, color: 'primary.main' }} />
                  <Typography>{personalInfo.phone}</Typography>
                </Box>
              </Grid>
              <Grid sx={{ gridColumn: { xs: 'span 12', md: 'span 4' } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                  <LocationOn sx={{ mr: 2, color: 'primary.main' }} />
                  <Typography>{personalInfo.location}</Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Section>

        <Divider />

        {/* Habilidades Técnicas */}
        <Section sx={{ bgcolor: 'background.default' }}>
          <Container maxWidth="lg">
            <Typography variant="h2" align="center" gutterBottom>
              Habilidades Técnicas
            </Typography>
            <Grid container columns={12} spacing={4} sx={{ mt: 2 }} display="grid">
              {technicalSkills.map((skill, index) => (
                <Grid key={index} sx={{ gridColumn: { xs: 'span 12', sm: 'span 6', md: 'span 3' } }}>
                  <SkillCard>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {skill.name}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Box sx={{ width: '100%', mr: 1 }}>
                          <LinearProgress
                            variant="determinate"
                            value={skill.level}
                            sx={{
                              height: 8,
                              borderRadius: 5,
                              '& .MuiLinearProgress-bar': {
                                backgroundColor: skill.color,
                              },
                            }}
                          />
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                          {skill.level}%
                        </Typography>
                      </Box>
                    </CardContent>
                  </SkillCard>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Section>

        {/* Habilidades Blandas */}
        <Section>
          <Container maxWidth="lg">
            <Typography variant="h2" align="center" gutterBottom>
              Habilidades Blandas
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center', mt: 4 }}>
              {softSkills.map((skill, index) => (
                <Chip
                  key={index}
                  label={skill}
                  variant="outlined"
                  color="primary"
                  sx={{ fontSize: '1rem', padding: '8px 16px' }}
                />
              ))}
            </Box>
          </Container>
        </Section>

        <Divider />

        {/* Proyectos */}
        <Section sx={{ bgcolor: 'background.default' }}>
          <Container maxWidth="lg">
            <Typography variant="h2" align="center" gutterBottom>
              Proyectos Destacados
            </Typography>
            <Grid container columns={12} spacing={4} sx={{ mt: 2 }} display="grid">
              {projects.map((project, index) => (
                <Grid key={index} sx={{ gridColumn: { xs: 'span 12', md: 'span 4' } }}>
                  <ProjectCard>
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.image}
                      alt={project.title}
                    />
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {project.description}
                      </Typography>
                      <Box sx={{ mb: 2 }}>
                        {project.technologies.map((tech, techIndex) => (
                          <Chip
                            key={techIndex}
                            label={tech}
                            size="small"
                            sx={{ mr: 1, mb: 1 }}
                            variant="outlined"
                          />
                        ))}
                      </Box>
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <Button
                          size="small"
                          startIcon={<GitHub />}
                          component="a"
                          href={project.github}
                          target="_blank"
                        >
                          Código
                        </Button>
                        <Button
                          size="small"
                          variant="contained"
                          component="a"
                          href={project.demo}
                          target="_blank"
                        >
                          Demo
                        </Button>
                      </Box>
                    </CardContent>
                  </ProjectCard>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Section>

        {/* Lenguajes de Programación */}
        <Section>
          <Container maxWidth="lg">
            <Typography variant="h2" align="center" gutterBottom>
              Lenguajes de Programación Preferidos
            </Typography>
            <Grid container columns={12} spacing={4} sx={{ mt: 2 }} display="grid">
              {programmingLanguages.map((language, index) => (
                <Grid key={index} sx={{ gridColumn: { xs: 'span 12', sm: 'span 6', md: 'span 4' } }}>
                  <Paper
                    elevation={2}
                    sx={{
                      p: 3,
                      textAlign: 'center',
                      height: '100%',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    <Typography variant="h2" sx={{ mb: 1 }}>
                      {language.icon}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      {language.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {language.description}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Section>

        <Divider />

        {/* Experiencia Profesional */}
        <Section sx={{ bgcolor: 'background.default' }}>
          <Container maxWidth="lg">
            <Typography variant="h2" align="center" gutterBottom>
              Experiencia Profesional
            </Typography>
            <Box sx={{ mt: 4 }}>
              {experiences.map((exp, index) => (
                <Paper 
                  key={index} 
                  elevation={3} 
                  sx={{ p: 3, mb: 3, position: 'relative' }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Box 
                      sx={{ 
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        bgcolor: 'primary.main',
                        color: 'white',
                        flexShrink: 0
                      }}
                    >
                      <Work />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h6" component="h3">
                        {exp.title}
                      </Typography>
                      <Typography color="primary" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Business fontSize="small" />
                        {exp.company} • {exp.period}
                      </Typography>
                      <Typography variant="body2">
                        {exp.description}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              ))}
            </Box>
          </Container>
        </Section>

        {/* Footer */}
        <Box
          component="footer"
          sx={{
            py: 6,
            px: 2,
            mt: 'auto',
            backgroundColor: theme.palette.primary.main,
            color: 'white',
          }}
        >
          <Container maxWidth="lg">
            <Typography variant="h6" align="center" gutterBottom>
              {personalInfo.name}
            </Typography>
            <Typography variant="subtitle1" align="center" color="inherit">
              Desarrollador Full Stack apasionado por crear soluciones innovadoras
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <IconButton color="inherit" href={personalInfo.github} target="_blank">
                <GitHub />
              </IconButton>
              <IconButton color="inherit" href={personalInfo.linkedin} target="_blank">
                <LinkedIn />
              </IconButton>
              <IconButton color="inherit" href={`mailto:${personalInfo.email}`}>
                <Email />
              </IconButton>
            </Box>
            <Typography variant="body2" color="inherit" align="center" sx={{ mt: 2 }}>
              © 2025 {personalInfo.name}. Todos los derechos reservados.
            </Typography>
          </Container>
        </Box>

        {/* Scroll to Top Button */}
        <ScrollToTopFab
          color="primary"
          aria-label="scroll to top"
          onClick={scrollToTop}
        >
          <KeyboardArrowUp />
        </ScrollToTopFab>
      </Box>
    </ThemeProvider>
  );
};

export default Portfolio;
