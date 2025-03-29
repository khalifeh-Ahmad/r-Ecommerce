import { Col, Row } from "react-bootstrap";

type gridListProps<T> = {
  records: T[];
  renderItem: (rcd: T) => React.ReactNode;
};

const GridList = <T extends { id?: number | string }>({
  records,
  renderItem,
}: gridListProps<T>) => {
  const catList =
    records.length > 0 ? (
      records.map((el) => (
        <Col
          key={el.id}
          xs={6}
          md={3}
          className="d-flex justify-content-center mb-5 mt-2"
        >
          {renderItem(el)}
        </Col>
      ))
    ) : (
      <Col xs={12}>
        <p className="text-center">There are no categories</p>
      </Col>
    );
  return <Row>{catList}</Row>;
};

export default GridList;
