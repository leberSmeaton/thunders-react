import './App.css';
import WeatherApp from "./WeatherApp";

function App() {
  return (
    <div className="App">
      <WeatherApp defaultCity="Reservoir" />
      <footer>
        <p>
          <a  className="footer" href="https://github.com/leberSmeaton/thunders-react" target="blank">
            Open sourced on GitHub
          </a>
          {" "} by {" "}
          <a  className="footer" href="https://www.linkedin.com/in/bella-leber-smeaton/" target="blank">
            Bella Leber Smeaton
          </a> | Hosted by <a  className="footer"
            href="https://thirsty-bell-09c7e4.netlify.app" target="blank">
            Netlify
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
