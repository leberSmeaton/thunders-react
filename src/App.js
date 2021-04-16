import './App.css';
import WeatherApp from "./WeatherApp";

function App() {
  return (
    <div className="App">
      <WeatherApp defaultCity="New York" />
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
          </a> | <a  className="footer"
            href="mailto:leber.smeaton@yahoo.com" target="blank">
              Contact + Feedback 
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
