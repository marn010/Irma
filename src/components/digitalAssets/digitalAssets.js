import React from 'react';

import './digitalAssets.css'

export default function DigitalAssets(props){
    let fName = props.fName;
    let fFollowers = Intl.NumberFormat("es-ES").format(props.fFollowers);
    let fNick = props.fNick;
    return(
        <React.Fragment>
           <div className="MainBox">
                <div className="socialBox">
                    <div className="twitterBox" >
                        <h2>
                            Twitter
                        </h2>
                        <p>Nombre:<br/> <span>{fName}</span>  </p>
                        <p>Nick:<br/> <span>@{fNick}</span></p>
                        <p>Seguidores<br/> <span>{fFollowers}</span></p>
                        <p>Impresiones<br/><span></span> </p>
                    </div>
                    <div className="instaBox">
                        <h2>
                            Instagram
                        </h2>
                        <p>Seguidores<br/> <span></span></p>
                        <p>Impresiones<br/> <span></span></p>
                        <p>Post Engagements <br/> <span></span></p>
                    </div>
                    <div className="faceBox">
                        <h2>
                            Facebook
                        </h2>
                        <p>Seguidores <br/> <span></span></p>
                        <p>Alcance Orgánico <br/> <span></span></p>
                        <p>Views-video <br/> <span></span></p>
                        <p>Post Engagements <br/> <span></span></p>
                    </div>
                </div>
           </div>
        </React.Fragment>
    );
}