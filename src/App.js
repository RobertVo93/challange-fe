import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PortalPage from './Components/Portal/Portal';
import DownloadPage from './Components/Download/DownloadPage';

function App() {
  return (
    <Router>
      <div className="container App">
        <Switch>
          <Route path="/uploads">
            <DownloadPage />
          </Route>
          <Route exact path="/">
            <PortalPage />
          </Route>
          <Route>
            <div>
              Page not found
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
