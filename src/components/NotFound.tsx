import React from "react";
import { Cover } from "./Cover";
import { Banner } from "./ui/Banner";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <Cover>
      <Banner title="404" subtitle="Страница не найдена">
        <Link to="/" className="btn-primary">
          На главную
        </Link>
      </Banner>
    </Cover>
  );
};
