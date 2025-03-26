
import { ShoppingCart } from "lucide-react";
import styles from "./styles.module.css";
const { basketContainer, basketQuantity } = styles;

const HeaderBasket = () => {
  return (

    <div className={basketContainer}>
      <ShoppingCart className={styles.basketIcon} size={28} />
      <div className={basketQuantity}>0</div>
    </div>
  );
};

export default HeaderBasket;
