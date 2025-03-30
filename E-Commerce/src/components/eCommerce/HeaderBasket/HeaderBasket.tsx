import { ShoppingCart } from "lucide-react";
import styles from "./styles.module.css";
import { useAppSelector } from "@store/hooks";
import { getCartTotalQtySelector } from "@store/cart/selectors";

//import { useMemo } from "react";
const { basketContainer, basketQuantity } = styles;

const HeaderBasket = () => {
  const totalItems = useAppSelector(getCartTotalQtySelector);

  // const cartItems = useAppSelector((state) => state.cartRdc.item);
  // const totalItems = useMemo(() => {
  //   console.log("run");
  //   return Object.values(cartItems).reduce((acc, qty) => acc + qty, 0);
  // }, [cartItems]);

  return (
    <div className={basketContainer}>
      <ShoppingCart className={styles.basketIcon} size={28} />
      <div className={basketQuantity}>{totalItems}</div>
    </div>
  );
};

export default HeaderBasket;
