import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import Home from './Components/Home/Home';
import Favorite from './Components/notes/Favorite';
import NoteDetail from './Components/notes/NoteDetail'
import EditForm from './Components/notes/EditForm';
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/favorites" component={Favorite} />
        <Route exact path="/note/:id" component={NoteDetail} />
        <Route exact path="/editform/:id" component={EditForm} />
      </Switch>
    </Router>
  );
}

export default App;
