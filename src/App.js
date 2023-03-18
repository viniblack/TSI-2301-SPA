import Header from "./Header";
import Search from "./Search";
import { videos } from "./data/Videos";
import { VideoContext } from "./VideoContext";
import ListVideo from "./ListVideo";

function App() {
  return (
    <div className="container">
      <VideoContext.Provider value={videos}>
        <Header />
        <Search />
        <ListVideo />
      </VideoContext.Provider>
    </div>
  );
}

export default App;
