import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CakeView } from './redux/reducers/cake/CakeView';
import { IcecreamView } from './redux/reducers/icecream/IceCreamView';
import { UserView } from './redux/reducers/user/UserView';


function App() {
  return (
    <div className="App">
      <CakeView />
      <IcecreamView />
      <UserView />
    </div>
  );
}

export default App;
