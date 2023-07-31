import { Banner } from "./features/movie/components/container/Banner";
import { Nav } from "./features/movie/components/container/Nav";
import { Movies } from "./features/movie/components/container/Movies";

function App() {
  return (
    <div className="App">
      <Banner />
      <Nav />
      <Movies type="netflix-original" />
      <Movies type="top-rated" large />
      <Movies type="trend" />
      <Movies type="comedy" />
      <Movies type="romance" />
      <Movies type="document" />
    </div>
  );
}

export default App;
