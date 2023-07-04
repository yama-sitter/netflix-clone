import { Movies } from "./features/movie/components/container/Movies";

function App() {
	return (
		<div className="App">
			<Movies type="netflix-original" />
			<Movies type="trend" />
			<Movies type="top-rated" />
			<Movies type="action" />
			<Movies type="comedy" />
			<Movies type="horror" />
			<Movies type="romance" />
			<Movies type="document" />
		</div>
	);
}

export default App;
