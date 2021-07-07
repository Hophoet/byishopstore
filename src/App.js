import './App.css';
import Landing from './pages/Landing';
import ChangePassword from './pages/ChangePassword';
import ChangePasswordDone from './pages/ChangePasswordDone';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
	<Router>
		<div className="App">
			<Switch>
				<Route 
					path="/reset/done/"
				>
            		<ChangePasswordDone/>
				</Route>
				<Route 
					path="/reset/(.*)/(.*)/"
				>
            	<ChangePassword/>
				</Route>
				<Route path="/">
					<Landing/>
				</Route>
			</Switch>
    </div>
    </Router>
  );
}

export default App;
