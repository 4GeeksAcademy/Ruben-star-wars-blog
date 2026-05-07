import PropTypes from "prop-types";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useState } from "react";

export const Navbar = ({ title }) => {

	const { store, dispatch } = useGlobalReducer();
	const [showDropdown, setShowDropdown] = useState(false);
	const [active, setActive] = useState(false)

	const favoriteList = store.favorites.length > 0 ? (
		store.favorites.map((fav, index) => (
			<li
				key={index}
				className="list-group-item"
			>
				{fav.name}
			</li>
		))
	) : (
		<li className="list-group-item text-muted">
			No hay favoritos
		</li>
	)

	return (
		<nav className="navbar bg-dark">
			<div className="container-fluid d-flex justify-content-between align-items-center">

				<div className="d-flex justify-content-start">
					<i className="fa-brands fa-empire fa-2xl text-white ms-2 me-4"></i>
					<a className="navbar-brand text-white m-auto" href="/">{title}</a>
				</div>

				<div className="position-relative">
					<button
						className={`btn-sable m-3 ${active ? "active" : ""}`}
						onClick={() => {
							setShowDropdown(!showDropdown)
							setActive(!active)
						}}
					>
						Favoritos ({store.favorites.length})
					</button>

					{showDropdown && (
						<ul className="list-group position-absolute end-0 text-wite bg-dark">
							{favoriteList}
						</ul>
					)}
				</div>

			</div>
		</nav>
	);
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired
};