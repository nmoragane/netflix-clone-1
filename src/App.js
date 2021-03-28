import './App.css';
import Rows from './components/Rows';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <Rows title = "Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>   
      <Rows title = "Trending Now" fetchUrl={requests.fetchTrending}/>   
    </div>
  );
}

export default App;
