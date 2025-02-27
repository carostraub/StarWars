import { Link } from "react-router-dom";

import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (

		<>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-4 p-1">
						<div className="card h-100">
							<img src="https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/3.jpg?raw=true" className="card-img-top" alt="..."></img>
							<div className="card-body">
								<h5 className="card-title">Personajes</h5>
								<p className="card-text">Revisa mas sobre los personajes dando en el boton</p>
								<Link to="./personajes" className="btn btn-primary">Personajes</Link>
							</div>
						</div>
					</div>
					<div className="col-md-4 p-1">
						<div className="card h-100">
							<img src="https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/planets/7.jpg?raw=true" className="card-img-top" alt="..."></img>
							<div className="card-body">
								<h5 className="card-title">Planetas</h5>
								<p className="card-text">Revisa mas sobre los planetas dando en el boton</p>
								<Link to="./planetas" className="btn btn-primary">Planetas</Link>
							</div>
						</div>
					</div>
					<div className="col-md-4 p-1">
						<div className="card h-100">
							<img src="https://pm1.aminoapps.com/6584/e7685f189b93b8574cca84670a49df7bea1579d2_hq.jpg" className="card-img-top" alt="..."></img>
							<div className="card-body">
								<h5 className="card-title">Vehiculos</h5>
								<p className="card-text">Revisa mas sobre los Vehiculos dando en el boton</p>
								<Link to="./vehiculos" className="btn btn-primary">Vehiculos</Link>
							</div>
						</div>
					</div>
				</div>

			</div>
		</>
	);
}; 