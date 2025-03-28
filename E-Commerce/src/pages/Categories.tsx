import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetCategories } from "@store/categories/categoriesSlice";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Category } from "@components/eCommerce";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.catRdc);
  useEffect(() => {
    dispatch(actGetCategories());
  }, [dispatch]);

  const catList =
    records.length > 0
      ? records.map((el) => (
          <Col
            key={el.id}
            xs={6}
            md={3}
            className="d-flex justify-content-center mb-5 mt-2"
          >
            <Category {...el} />
          </Col>
        ))
      : "There are no categories";

  return (
    <Container>
      <Row>{catList}</Row>
    </Container>
  );
};

export default Categories;
