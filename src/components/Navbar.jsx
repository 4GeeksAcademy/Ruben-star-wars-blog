import PropTypes from "prop-types";

export const Navbar = ({ title }) => {

	return (
		<nav className="navbar bg-dark">
			<div className="container-fluid d-flex justify-content-start">
				<i className="fa-brands fa-empire fa-2xl text-white ms-2 me-4"></i>
				<a className="navbar-brand text-white" href="/">{title}</a>
			</div>
		</nav>
	);
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired
}