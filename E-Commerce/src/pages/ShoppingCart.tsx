import { CartItemList, CartSubtotalPrice } from "@components/eCommerce";
import { Loading } from "@components/feedback";
import { Heading } from "@components/shared";
import {
  actGetProductsByItems,
  cartItemChangeQuantity,
  cartItemRemove,
} from "@store/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useCallback, useEffect } from "react";

const ShoppingCart = () => {
  const dispatch = useAppDispatch();

  const { items, productsFullInfo, loading, error } = useAppSelector(
    (state) => state.cartRdc
  );

  useEffect(() => {
    dispatch(actGetProductsByItems());
  }, [dispatch]);

  const products = productsFullInfo.map((el) => ({
    ...el,
    quantity: items[el.id],
  }));

  const changeQuantityHandler = useCallback(
    (id: number, quantity: number) => {
      dispatch(cartItemChangeQuantity({ id, quantity }));
    },
    [dispatch]
  );

  const removeItemHandler = useCallback(
    (id: number) => {
      dispatch(cartItemRemove(id));
    },
    [dispatch]
  );

  return (
    <>
      <Heading>Your Cart</Heading>
      <Loading status={loading} error={error}>
        {products.length ? (
          <>
            <CartItemList
              products={products}
              changeQuantityHandler={changeQuantityHandler}
              removeItemHandler={removeItemHandler}
            />
            <CartSubtotalPrice products={products} />
          </>
        ) : (
          "Your Cart is empty"
        )}
      </Loading>
    </>
  );
};

export default ShoppingCart;
