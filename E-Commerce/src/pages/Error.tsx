import { Container } from "react-bootstrap";
import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  let errorStatus: number;
  let errorStatusText: string;

  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorStatusText = error.statusText;
  } else {
    errorStatus = 404;
    errorStatusText = "Page Not Found";
  }
  return (
    <Container className="errorContainer">
      <div className="errorContent">
        <h1 className="errorTitle">{errorStatus}</h1>
        <p className="errorMessage">{errorStatusText}</p>
        <Link to="/" replace={true} className="errorLink">
          {/* replace used to prevent user from going back to Error page */}
          How about going back to Safety?
        </Link>
      </div>
    </Container>
  );
};

export default Error;
