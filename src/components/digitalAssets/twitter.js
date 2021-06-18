import React from 'react'

import './digitalAssets.css'

export default function Twitter(props){
    let fName = props.fName;
    let fFollowers = props.fFollowers;
    let fNick = props.fNick;
    return(
        <React.Fragment>
            <div className="twitterBox">
                <h2>
                    Twitter
                </h2>
                <p>Nombre:<br/> <span>{fName}</span>  </p>
                <p>Nick:<br/> <span>@{fNick}</span></p>
                <p>Seguidores<br/> <span>{fFollowers}</span></p>
                <p>Impresiones<br/><span></span> </p>
            </div>
        </React.Fragment>
    );
}