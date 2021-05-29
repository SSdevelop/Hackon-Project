//import logo from './logo.svg';
//import './App.css';
// import { BrowserRouter } from 'react-router-dom'
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { auth, createUserProfileRequest } from './firebase/firebaseUtils';
import Header from './components/header/Header.jsx'
// import Footer from './components/Footer/Footer'
import Home from './pages/home/Home.jsx';
import ContactUs from './pages/contact/contactUs';
import Resources from './pages/resources/Resources'
import SignInAndSignUp from './pages/sign-in-sign-up/signInSignUp.jsx';
// import Grid from '@material-ui/core/Grid';
// import { makeStyles } from '@material-ui/core/styles';
// import './components/header/Header.css'
class App extends Component {
  constructor() {
    super()

    this.state={
      currentUser: null
    };

    this.unsubscribe = null;
  }

  componentDidMount() {
    this.unsubscribe = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileRequest(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
    <div classname='App'>
       <Header user={this.state.currentUser}/>
        {/* These line will make sure thaat we access the correct page from the URL; once those components are ready*/}
         <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/resources" component={Resources} />
          <Route exact path="/signin" component={SignInAndSignUp} />
          <Route exact path="/contact" component={ContactUs} />
        </Switch> 
        {/* <Footer/> */}
    </div>
  );
  }
  
}

export default App;