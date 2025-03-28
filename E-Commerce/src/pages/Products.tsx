import { Container, Row, Col } from "react-bootstrap";
import { Product } from "@components/eCommerce";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import { actGetProductsByCatPrefix } from "@store/products/productsSlice";
import { useParams } from "react-router-dom";
const Products = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const { loading, error, records } = useAppSelector((state) => state.prodRdc);

  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(params.prefix as string));
  }, [dispatch, params]);

  const prodList =
    records.length > 0
      ? records.map((el) => (
          <Col
            key={el.id}
            xs={6}
            md={3}
            className="d-flex justify-content-center mb-5 mt-2"
          >
            <Product {...el} />
          </Col>
        ))
      : "There are no categories";

  return (
    <Container>
      <Row>{prodList}</Row>
    </Container>
  );
};

export default Products;
