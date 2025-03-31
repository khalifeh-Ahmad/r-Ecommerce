import { CartItem, CartSubtotalPrice } from "@components/eCommerce";
import { Heading } from "@components/shared";

const ShoppingCart = () => {
  return (
    <>
      <Heading>Your Shopping Cart</Heading>
      <CartItem />
      <CartItem />
      <CartItem />
      {/* <CartSubtotalPrice /> */}
    </>
  );
};

export default ShoppingCart;
