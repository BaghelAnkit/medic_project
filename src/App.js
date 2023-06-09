import React from 'react';
import './scss/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Register from './components/Register';


function App() {
	return (
		// <div className="App">
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />	
				</Routes>
			</BrowserRouter>
		// </div>

	);
}

export default App;
