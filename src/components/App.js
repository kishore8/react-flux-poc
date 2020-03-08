import React from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Header from './common/header';
import Courses from './CoursesPage';
import { Route,Switch, Redirect } from 'react-router-dom';
import PageNotFound from './404';
import ManageCoursePage from './ManageCoursePage';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App(){
    
  return(
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar/>
        <Header />
        <Switch>
            <Route path="/" exact component = {HomePage} />
            <Route path="/courses" component = {Courses} />
            <Route path="/about" component = {AboutPage} />
            <Route path="/course/:slug" component ={ManageCoursePage} />
            <Route path="/create-course/" component ={ManageCoursePage} />
            <Redirect from = "/about-page" to="about" />
            <Route component={PageNotFound} />
        </Switch>
        
    </div>
  ) ;
}


export default App;