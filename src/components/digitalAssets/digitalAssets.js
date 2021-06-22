import React from 'react';
import Twitter from './twitter';

import './digitalAssets.css'

import { data } from './data';

export default function DigitalAssets(props){
    let fName = props.fName;
    let fFollowers = Intl.NumberFormat("es-ES").format(props.fFollowers);
    let fNick = props.fNick;
    let nick = props.nick;
    let ID = props.ID;
    return(
        <React.Fragment>
           <div className="MainBox">
               <h1>
                   Activos Digitales {ID}
               </h1>
                <div className="socialBox">
                    {nick && <Twitter fName={fName} fFollowers={fFollowers} fNick={fNick} />}
                    <div className="instaBox">
                        <h2>
                            Instagram
                        </h2>
                        <p>Seguidores<br/> 
                            <span>
                                {data[0].Redes[0].insta[0].Seguidores}
                            </span>
                        </p>
                        <p>Impresiones<br/> 
                            <span>
                                {data[0].Redes[0].insta[0].Impresiones}
                            </span>
                        </p>
                        <p>Post Engagements <br/> 
                            <span>
                                {data[0].Redes[0].insta[0].Post_Engagements}
                            </span>
                        </p>
                    </div>
                    <div className="faceBox">
                        <h2>
                            Facebook
                        </h2>
                        <p>Seguidores <br/> 
                            <span>
                                {data[0].Redes[0].facebook[0].Seguidores}
                            </span>
                        </p>
                        <p>Alcance Orgánico <br/> 
                            <span>
                                {data[0].Redes[0].facebook[0].Alcance_Organico}
                            </span>
                        </p>
                        <p>Views-video <br/> 
                            <span>
                                {data[0].Redes[0].facebook[0].Views_video}
                            </span>
                        </p>
                        <p>Post Engagements <br/> 
                            <span>
                                {data[0].Redes[0].facebook[0].Post_Engagements}
                            </span>
                        </p>
                    </div>
                </div>
                
           </div>
        </React.Fragment>
    );
}