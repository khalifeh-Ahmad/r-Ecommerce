import { TLoading } from "@customTypes/sharedTypes";
import React from "react";

type loadingProps = {
  status: TLoading;
  error: null | string;
  children: React.ReactNode;
};

const Loading = ({ status, error, children }: loadingProps) => {
  if (status === "pending") {
    return <p>Pending, please wait</p>;
  }
  if (status === "failed") {
    return <p>{error}</p>;
  }

  return <>{children}</>;
};

export default Loading;
