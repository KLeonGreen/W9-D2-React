import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./Components/MyNav";
import MyFooter from "./Components/MyFooter";
import Welcome from "./Components/Welcome";
import LatestRelease from "./Components/LatestRelease";

function App() {
  return (
    <div>
      <div>
        <MyNav />
      </div>
      <div>
        <Welcome />
      </div>
      <div>
        <LatestRelease />
      </div>
      <div>
        <MyFooter />
      </div>
    </div>
  );
}

export default App;
