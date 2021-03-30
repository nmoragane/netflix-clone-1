import './styles/App.css';
import Rows from './components/Rows';
import requests from './requests';
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <Nav/>

      {/* banner */}
      <Banner/>

      {/* rows */}
      <Rows title = "Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>   
      <Rows title = "Trending Now" fetchUrl={requests.fetchTrending}/>   
      <Rows title = "Top Rated" fetchUrl={requests.fetchTopRated}/>   
      <Rows title = "Action Movies" fetchUrl={requests.fetchActionMovies}/>   
      <Rows title = "Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>   
      <Rows title = "Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>   
      <Rows title = "Romanctic Movies" fetchUrl={requests.fetchRomanceMovies}/>   
      <Rows title = "Documentaries" fetchUrl={requests.fetchDocumentaries}/>   
    </div>
  );
}

export default App;
