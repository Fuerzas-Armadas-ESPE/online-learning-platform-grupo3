import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../styles.css"; // Importa el archivo CSS
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Home = () => {
  return (
    <div style={{ padding: "20px", marginBottom: "80px" }}>
      <h1>Welcome to Online Learning Platform</h1>
      <p>Start your learning journey today!</p>
      <Button variant="contained" component={Link} to="/courses">
        Explore Courses
      </Button>
      <footer className="footer">
        <div>
          <p>© 2024 ESPE - Todos los derechos reservados ©</p>
        </div>
        <div className="footer-links">
          <a href="/about">Acerca de</a>
          <a href="/contact">Contacto</a>
          <a href="/terms">Terminos y Condiciones</a>
          {/* Agrega más enlaces según sea necesario */}
        </div>
        <div className="footer-social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          {/* Agrega más iconos y enlaces según sea necesario */}
        </div>
      </footer>
    </div>
  );
};

export default Home;
