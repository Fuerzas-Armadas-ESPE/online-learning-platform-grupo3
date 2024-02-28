// Importa React y otros componentes necesarios
import React from 'react';
import { Typography, Link, Grid, Box } from '@mui/material';
// Importa el archivo CSS de estilos
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer"> {/* Agrega la clase "footer" */}
      <Grid container justifyContent="center" alignItems="center" spacing={1}>
        <Grid item xs={12}>
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} Online Learning Platform. All rights reserved.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" align="center">
            <Link href="/privacy-policy" color="inherit" className="footer-link"> {/* Agrega la clase "footer-link" */}
              Privacy Policy
            </Link>{' '}
            |{' '}
            <Link href="/terms-of-service" color="inherit" className="footer-link"> {/* Agrega la clase "footer-link" */}
              Terms of Service
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" align="center">
            Developed with <span role="img" aria-label="love">❤️</span> by Your Company
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;

