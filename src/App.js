import './App.css';
import WeatherApp from "./WeatherApp";

function App() {
  return (
    <div className="App">
      <WeatherApp defaultCity="New York" />
      <footer className="footer">
        <p>
          <a href="https://github.com/leberSmeaton/thunders-react" target="blank">
            Open sourced on GitHub
          </a>
          {" "} by {" "}
          <a href="https://www.linkedin.com/in/bella-leber-smeaton/" target="blank">
            Bella Leber Smeaton
          </a> | Hosted by <a
            href="https://thirsty-bell-09c7e4.netlify.app" target="blank">
            Netlify
          </a> | <a
            href="mailto:leber.smeaton@yahoo.com" target="blank">
              Contact + Feedback 
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
