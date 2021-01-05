import React from "react";
import { Link } from "react-router-dom";

export const EmptyRoom = () => {
  return (
    <div className="error">
      <h3>Не удалось найти номер...</h3>
      <Link to="/rooms" className="btn-primary">
        Все номера
      </Link>
    </div>
  );
};
