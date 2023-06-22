import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppNavbar from './components/AppNavbar';
import Home from './pages/Home';
import About from './pages/About';
import Qualification from './pages/Qualification';
import Message from './pages/Message';

function App() {

	return (
		<Router>
			<Container fluid>
				<AppNavbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/qualifications" element={<Qualification />} />
				<Route path="/message" element={<Message />} />
			</Routes>
			</Container>
		</Router>
	)
}

export default App;
