import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";
import { Hero } from "../components/Hero.jsx";
import { Gallery } from "../components/Gallery.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {
		const getCharacters = async () => {
			try {
				const res = await fetch("https://swapi.tech/api/people");
				const data = await res.json();

				// Guardar en GlobalReducer
				dispatch({
					type: "SET_CHARACTERS",
					payload: data.results,
				});
			} catch (err) {
				console.log(err)
			}
		};

		const getPlanets = async () => {
			try {
				const res = await fetch("https://swapi.tech/api/planets");
				const data = await res.json();

				// Guardar en GlobalReducer
				dispatch({
					type: "SET_PLANETS",
					payload: data.results,
				});
			} catch (err) {
				console.log(err)
			}
		};

		const getStarships = async () => {
			try {
				const res = await fetch("https://swapi.tech/api/starships");
				const data = await res.json();

				// Guardar en GlobalReducer
				dispatch({
					type: "SET_STARSHIPS",
					payload: data.results,
				});
			} catch (err) {
				console.log(err)
			}
		};

		if(store.characters.length <= 0){
		getCharacters();
		}

		if(store.planets.length <= 0){
		getPlanets();
		}

		if(store.starships.length <= 0){
		getStarships();
		}
	})

	return (
		<>
			<Hero title="Explora una galaxia muy, muy lejana" text="Descubre personajes, naves y planetas del universo que todos amamos" />
			<Gallery cardsData={store.characters} title="Personajes" icon={<i className="fa-regular fa-user"></i>} dataType="people"/>
			<Gallery cardsData={store.starships} title="Naves espaciales" icon={<i className="fa-brands fa-space-awesome"></i>} dataType="starships"/>
			<Gallery cardsData={store.planets} title="Planetas" icon={<i className="fa-solid fa-earth-americas"></i>} dataType="planets"/>			
		</>
	);
};