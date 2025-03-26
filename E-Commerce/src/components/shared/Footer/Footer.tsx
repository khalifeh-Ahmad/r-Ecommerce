import styles from "./styles.module.css";
const { footerContainer, brand } = styles;

const Footer = () => {
  return (
    <footer className={footerContainer}>
      <p>
        © 2024 <span className={brand}>Masha Store</span>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
