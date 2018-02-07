import React from "react";

const Nav = (props) => (
    <nav className="navbar navbar-light bg-light sticky-top">
        <a className="navbar-brand">Crystal Game!</a>
        <span className="navbar-text text-info">
            Target: {props.numberToGuess}
        </span>
        <span className="navbar-text text-primary">
            Score: {props.score}
        </span>
        <span className="navbar-text">
            {props.text}
        </span>
        <span className="navbar-text text-success">
            Wins: {props.wins} 
        </span>
        <span className="navbar-text text-danger">
            Losses: {props.losses}
        </span>
    </nav>
);

export default Nav;