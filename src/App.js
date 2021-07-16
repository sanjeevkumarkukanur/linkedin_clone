import React, { useEffect }from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import Feed from './Feed';
import { auth } from './fireBase';
import Header from './Header';
import Login from './Login';
import SideBar from './SideBar';
import Widgets from './Widgets';

function App() {
  const user = useSelector(selectUser)

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.profilePic
      }));
      }
      else{
        dispatch(logout());
      }
    }) 
  }, [dispatch])  
    

  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ):(<div className="app__body">
        <SideBar />
        <Feed />
        <Widgets />
      </div>)
      }
      
         
    </div>
  );
}

export default App;
