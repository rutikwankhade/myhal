import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Welcome from './pages/Welcome'


const App = () => {
  return (
    <div>
      <Router>


        <h1 className="text-2xl italic p-4 px-10 font-bold font-mono">Myhal</h1>
        <Route exact path="/" component={Welcome}/>
      </Router>


    </div>
  );
}

export default App;
