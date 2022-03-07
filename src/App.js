import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
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
      <div>
        <p>TrybeTunes</p>
        <BrowserRouter>
          <Route exact path="/">
            <Login />
          </Route>

          <Route path="/Album/:id">
            <Album />
          </Route>

          <Route path="/favorites">
            <Favorites />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>

          <Route path="/profile/edit">
            <ProfileEdit />
          </Route>

          <Route path="/search">
            <Search />
          </Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
