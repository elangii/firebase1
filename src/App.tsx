import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Main } from './pages/main/main';
import { Login } from './pages/Login';
import { Navbar } from './components/navbar';
import { CreatePost } from './pages/create-post/create-post';

function App() {
	return (
		<div className="App">
			<Router>
			<Navbar/>
				<Routes>
					<Route path="/" element={<Main/>}></Route>
					<Route path="/login" element={<Login/>}></Route>
					<Route path="/createpost" element={<CreatePost/>}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
