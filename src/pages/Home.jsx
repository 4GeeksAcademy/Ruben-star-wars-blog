import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Hero } from "../components/Hero.jsx";
import { Gallery } from "../components/Gallery.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	const placeholder = [
		{
			"uid": "1",
			"name": "Luke Skywalker",
			"url": "https://www.swapi.tech/api/people/1"
		},
		{
			"uid": "2",
			"name": "C-3PO",
			"url": "https://www.swapi.tech/api/people/2"
		},
		{
			"uid": "3",
			"name": "R2-D2",
			"url": "https://www.swapi.tech/api/people/3"
		}
	]

	return (
		<>
			<Hero title="Explora una galaxia muy, muy lejana" text="Descubre personajes, naves y planetas del universo que todos amamos" />
			<Gallery cardsData={placeholder} />
		</>
	);
}; 