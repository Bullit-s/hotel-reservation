import React from "react";
import { Cover } from "../components/Cover";
import { Banner } from "../components/ui/Banner";
import { Link } from "react-router-dom";

const ErrorPage: React.FC = () => {
  return (
    <Cover>
      <Banner title="404" subtitle="page not found">
        <Link to="/" className="btn-primary">
          На главную
        </Link>
      </Banner>
    </Cover>
  );
};

export default ErrorPage;
