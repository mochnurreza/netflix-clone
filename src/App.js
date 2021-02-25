import './App.css';
import Home from './componenst/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './componenst/Login/Login';
import { useEffect } from 'react';
import { auth } from './config/firebas';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Profile from './componenst/Profile/Profile';
import { AnimatePresence } from 'framer-motion';

// https://netflix-clone-8ae3f.web.app

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  // dispatch with redux
  useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((userAuth) => {
    if(userAuth) {
      dispatch(login({
        uid: userAuth.uid,
        email: userAuth.email,
      }))
    } else {
      dispatch(logout())
    }
  })

  return unsubscribe
  }, [dispatch]);
  return (
    <div className="app">
      <Router>
      <AnimatePresence>
        {!user ? ( 
          <Login/>
        ): (
          <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/profile">
              <Profile/>
            </Route>
        </Switch>
        )}
        </AnimatePresence>
      </Router>
  
    </div>
  );
}

export default App;
