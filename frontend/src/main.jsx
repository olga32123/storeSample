import React from 'react';
import { render } from 'react-dom';

const App = () => (<div> paki paki! </div>);

window.onload = () => {
	const root = document.getElementById('app');
	render(<App />, root)
}