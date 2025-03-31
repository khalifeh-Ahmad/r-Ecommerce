import { ShoppingCart } from "lucide-react";
import styles from "./styles.module.css";
import { useAppSelector } from "@store/hooks";
import { getCartTotalQtySelector } from "@store/cart/selectors";
import { useEffect, useState } from "react";
//import { useMemo } from "react";

const { basketContainer, basketQuantity, pumpCartQuantity } = styles;

const HeaderBasket = () => {
  const totalItems = useAppSelector(getCartTotalQtySelector);
  //or
  // const cartItems = useAppSelector((state) => state.cartRdc.item);
  // const totalItems = useMemo(() => {
  //   console.log("run");
  //   return Object.values(cartItems).reduce((acc, qty) => acc + qty, 0);
  // }, [cartItems]);
  const [isAnimate, setIsAnimate] = useState(false);
  const quantityStyle = `${basketQuantity} ${
    isAnimate ? pumpCartQuantity : ""
  }`;

  //Debounce Effect
  useEffect(() => {
    if (!totalItems) {
      return;
    }
    setIsAnimate(true);

    const debounce = setTimeout(() => {
      setIsAnimate(false);
    }, 500);

    return () => clearTimeout(debounce);
  }, [totalItems]);

  return (
    <div className={basketContainer}>
      <ShoppingCart className={styles.basketIcon} size={28} />
      <div className={quantityStyle}>{totalItems}</div>
    </div>
  );
};

export default HeaderBasket;
