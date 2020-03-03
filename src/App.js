import React from 'react';
import {GlobalContextProvider, GlobalContext} from './Components/GlobalContextProvider';
import {Login} from './Components/Login';
import './App.css';


function App() {
  return (<>
    <GlobalContextProvider settings={{password:'admin123' , username:'admin'}}>
      <div className="App">
        <Login></Login>
      </div>
    </GlobalContextProvider>
    
    </>
  );
}

export default App;
