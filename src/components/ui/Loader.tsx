import React from "react";
import { Spin } from "antd";

interface IProps {
  loading?: boolean;
}

export const Loader: React.FC<IProps> = ({ loading, children }) => {
  return loading ? <Spin size={"large"}>{children}</Spin> : <>{children}</>;
};
