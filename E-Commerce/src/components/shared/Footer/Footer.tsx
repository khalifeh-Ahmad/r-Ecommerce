import styles from "./styles.module.css";

const { footerContainer, brand, footerLinks } = styles;

const Footer = () => {
  return (
    <footer className={footerContainer}>
      <p>
        © 2024 <span className={brand}>Masha Store</span>. All rights reserved.
      </p>
      <div className={footerLinks}>
        <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a> |{" "}
        <a href="#">Contact Us</a>
      </div>
    </footer>
  );
};

export default Footer;
