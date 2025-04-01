import { Container } from "react-bootstrap";
import { Product } from "@components/eCommerce";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import {
  actGetProductsByCatPrefix,
  productsCleanUp,
} from "@store/products/productsSlice";
import { useParams } from "react-router-dom";
import { Loading } from "@components/feedback";
import { GridList, Heading } from "@components/shared";
const Products = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const { loading, error, records } = useAppSelector((state) => state.prodRdc);
  const cartItems = useAppSelector((state) => state.cartRdc.items);

  const productsFullInfo = records.map((el) => ({
    ...el,
    quantity: cartItems[el.id] || 0,
  }));

  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(params.prefix as string));
    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, params]);

  return (
    <Container>
      <Heading>
        <span className="text-capitalize">{params.prefix}</span> Products
      </Heading>
      <Loading status={loading} error={error}>
        <GridList
          records={productsFullInfo}
          renderItem={(rcd) => <Product {...rcd} />}
        />
      </Loading>
    </Container>
  );
};

export default Products;
