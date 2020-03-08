import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage(){
    return (
    <div className="jumbotron">
        <h1>HOME Admin</h1>
        <Link to = "/about" className="btn btn-primary">About</Link>
    </div>
    );
}

export default HomePage;