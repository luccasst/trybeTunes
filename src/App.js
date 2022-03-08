import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Search from './pages/Search';

class App extends React.Component {
  render() {
    return (
      <main>
        <p>TrybeTunes</p>
        <BrowserRouter>
          <Switch>
            <Route path="/profile/edit" component={ ProfileEdit } />
            <Route path="/album/:id" component={ Album } />
            <Route path="/profile" component={ Profile } />
            <Route path="/favorites" component={ Favorites } />
            <Route path="/search" component={ Search } />
            <Route exact path="/" component={ Login } />
            <Route path="*" component={ NotFound } />
          </Switch>
        </BrowserRouter>
      </main>
    );
  }
}

export default App;
