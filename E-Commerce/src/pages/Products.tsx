import { Container, Row, Col } from "react-bootstrap";
import { Product } from "@components/eCommerce";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import {
  actGetProductsByCatPrefix,
  productsCleanUp,
} from "@store/products/productsSlice";
import { useParams } from "react-router-dom";
import { Loading } from "@components/feedback";
import { GridList } from "@components/shared";
const Products = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const { loading, error, records } = useAppSelector((state) => state.prodRdc);

  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(params.prefix as string));
    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, params]);

  return (
    <Container>
      <Loading status={loading} error={error}>
        <GridList
          records={records}
          renderItem={(rcd) => <Product {...rcd} />}
        />
      </Loading>
    </Container>
  );
};

export default Products;
