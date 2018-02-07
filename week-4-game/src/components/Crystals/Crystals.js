import React from "react";
import "./Crystals.css";

const Crystals = props => (

    <div className="wrapper">
        <div className="card">
            <div className="img-container" value={props.crystalValues[0]} onClick={() => props.handleScore(props.crystalValues[0])}>
                <img alt="crystal-one" src="http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg" />
            </div>
        </div>
        <div className="card">
            <div className="img-container" value={props.crystalValues[1]} onClick={() => props.handleScore(props.crystalValues[1])}>
                <img alt="crystal-two" src="http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg" />
            </div>
        </div>
        <div className="card">
            <div className="img-container" value={props.crystalValues[2]} onClick={() => props.handleScore(props.crystalValues[2])}>
                <img alt="crystal-three" src="http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg" />
            </div>
        </div>
        <div className="card">
            <div className="img-container" value={props.crystalValues[3]} onClick={() => props.handleScore(props.crystalValues[3])}>
                <img alt="crystal-four" src="http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg" />
            </div>
        </div>
    </div>
);

export default Crystals;