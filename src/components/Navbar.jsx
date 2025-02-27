import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <nav className="navbar navbar-light bg-dark">
      <div className="container">
        <Link to="/">
          <i id="logo" className="fa-solid fa-2x fa-jedi"></i>
        </Link>

        {/* Dropdown de Favoritos */}
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Favoritos <span className="badge bg-light text-dark">{store.favoritos.length}</span>
          </button>
          <ul className="dropdown-menu">
            {store.favoritos.length === 0 ? (
              <li className="dropdown-item">No hay favoritos</li>
            ) : (
              store.favoritos.map((fav) => (
                <li key={fav.uid} className="dropdown-item d-flex justify-content-between align-items-center">
                  <span>{fav.name}</span>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => dispatch({ type: "REMOVE_FAVORITO", payload: fav })}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
