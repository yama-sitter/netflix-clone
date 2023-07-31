import { Banner } from "./features/movie/components/container/Banner";
import { Movies } from "./features/movie/components/container/Movies";

function App() {
  return (
    <div className="App">
      <Banner />
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
