import React from 'react';

import './digitalAssets.css'

export default function DigitalAssets(props){
    let fName = props.fName;
    let fFollowers = Intl.NumberFormat("es-ES").format(props.fFollowers);
    let fNick = props.fNick;
    return(
        <React.Fragment>
           <div className="MainBox">
                <p>it works!</p>
                <p> aqui pondria mas informacion si tuviera.</p>
                <div className="socialBox">
                    <div className="twitterBox" >
                        <h2>
                            Twitter
                        </h2>
                        <p>Nombre:  {fName} </p>
                        <p>Nick: @{fNick}</p>
                        <p>Followers: {fFollowers}</p>
                    </div>
                    <div className="instaBox">
                        <h2>
                            Instagram
                        </h2>
                    </div>
                    <div className="faceBox">
                        <h2>
                            Facebook
                        </h2>
                    </div>
                </div>
           </div>
        </React.Fragment>
    );
}