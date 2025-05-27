import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer text-center py-4">
      <p className="mb-1">Contacto: <a href="mailto:bifubanda@gmail.com" className="footer-link">bifubanda@gmail.com</a></p>
      <p className="mb-0">&copy; {new Date().getFullYear()} BIFŪ. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
