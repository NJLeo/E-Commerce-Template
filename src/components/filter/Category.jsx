import React from "react";
import { Link } from "react-router-dom";

const FilterCategory = (props) => {
  return (
    <div className="card mb-3">
      <div className="card-header font-weight-bold text-uppercase">
        Categorias
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <Link to="/" className="text-decoration-none stretched-link">
            Kits para Presente
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/" className="text-decoration-none stretched-link">
            Kits Dia-a-Dia
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/" className="text-decoration-none stretched-link">
            Outros Produtos
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/" className="text-decoration-none stretched-link">
            Documentação
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FilterCategory;
