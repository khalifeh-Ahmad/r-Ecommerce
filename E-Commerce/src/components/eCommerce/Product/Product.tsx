import { Button, Spinner } from "react-bootstrap";
import styles from "./styles.module.css";
import { TProduct } from "@customTypes/product";
import { useAppDispatch } from "@store/hooks";
import { addToCart } from "@store/cart/cartSlice";
import { memo, useEffect, useState } from "react";
const { product, productImg, maximumNotice } = styles;

const Product = memo(({ id, img, price, title, max, quantity }: TProduct) => {
  //we used memo to prevent render on all products, we need it only for product who chaned the QTY
  const dispatch = useAppDispatch();

  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  const currentRemainingQty = max - (quantity ?? 0); // because the qty could be undefined or null
  const qtyReachedToMax = currentRemainingQty <= 0 ? true : false;

  useEffect(() => {
    if (!isBtnDisabled) {
      return;
    }
    setIsBtnDisabled(true);
    const debounce = setTimeout(() => {
      setIsBtnDisabled(false);
    }, 300);
    return () => clearTimeout(debounce);
  }, [isBtnDisabled]);

  const addToCartHandler = () => {
    dispatch(addToCart(id));
    setIsBtnDisabled(true);
  };

  return (
    <div className={product}>
      <div className={productImg}>
        <img src={img} alt={title} />
      </div>
      <h2>{title}</h2>
      <h3>{price.toFixed(2)} $</h3>
      <p className={maximumNotice}>
        {qtyReachedToMax
          ? "You've reached the limit"
          : `You can add ${currentRemainingQty} item(s)`}
      </p>
      <Button
        variant="info"
        style={{ color: "white" }}
        onClick={addToCartHandler}
        disabled={isBtnDisabled || qtyReachedToMax}
      >
        {isBtnDisabled ? (
          <>
            <Spinner animation="border" size="sm" />
            Loading...{" "}
          </>
        ) : (
          "Add to Cart"
        )}
      </Button>
    </div>
  );
});

export default Product;
