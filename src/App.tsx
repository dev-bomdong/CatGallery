import React from 'react';
import Main from './page/Main';
import ListStore from './store/ListStore';

const Store = new ListStore();

function App() {
	return <Main store={Store} />;
}

export default App;
