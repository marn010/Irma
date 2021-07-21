import React from 'react';
import Slider from '../home/homeSlider';

import './About.css';


function AboutWeb(){
   return(
      <React.Fragment>
         <div className="IrmaMain">
               <div className="IrmaSigning">
                  <img className="MainSigning" src="/assets/img/Irma/IrmaSigning.png" alt="" />
               </div>
               <div className="IrmaMainPic ">
                  <img className="IrmaPic" src="/assets/img/IrmaMain.png" alt="Irma" />
               </div>
         </div>
         <a href="/home">
            <img className="backArrow" src="/assets/icons/backArrow.png" alt="" />
         </a>
         <div className="IrmaAboutBox">
               <div className="IrmaPicsBox">
                  <Slider />
               </div>
               <div className="IrmaMainTextBox">
                  <div style={{textAlign:"center"}}>
                     <img src="/assets/img/Irma/IrmaSigning.png" alt="" />
                  </div>
                  <div className="IrmaTextBox MuseoS-500">
                     <p className="">
                     Durante mucho tiempo he caminado al lado de personas de las que he aprendido y con las que he crecido. Hoy quiero compartir con ustedes esta etapa de mi vida, IRMA ARISTIZÁBAL, donde toda mi experiencia estará encaminada en representar a las personas más talentosas y bellas de nuestro país siempre con profesionalismo, calidad y compromiso.
                     </p>
                     <p>
                     <span className="Rosa">Origen:</span><br/>
                     IRMA ARISTIZÁBAL Fashion Marketing nace después de 20 años de experiencia en el mundo de la moda. Experta en representación de talentos y lanzamiento de productos. Representamos a las personas más bellas y talentosas del mundo de la moda y estilo de vida como: Andrea Serna, Claudia Bahamón, Ana Sofía Henao, Adriana Arboleda, Radamel Falcao, Sebastián Martínez, entre otros.
                     </p>
                     <p>
                     <span className="Rosa">Cómo lo hacemos:</span><br/>
                     Nuestra experiencia va más allá, pues sabemos hallar la esencia de cada persona para impulsar lo mejor de ella y poder compartir su talento con el mundo entero. Por medio del management de talentos tenemos la experiencia, el conocimiento y la capacidad de generar relaciones interpersonales.
                     </p>
                     <p>
                     IRMA ARISTIZÁBAL cuenta con diferentes contactos en el medio y amplio conocimiento del negocio con una alta capacidad de negociación; hemos tenido la oportunidad de trabajar en los últimos 20 años con diferentes marcas como: Tous, Procter & Gamble, Grupo Éxito, Bata, Samsung, Pat Primo, Cetaphil, Unilever, Cruz Verde, Genoma, Quala, entre otras.
                     </p>
                     <p>
                     <span className="Rosa">Nuestro equipo:</span><br/>
                     Contamos con un grupo de profesionales de diferentes disciplinas, comprometidos con el desarrollo de grandes proyectos. Espero tener la oportunidad de seguir caminando al lado de ustedes, desempeñándome y haciendo lo que más me gusta: MANAGEMENT.
                     </p>
                  </div>
                  <div className="IrmaSign">
                     <p>
                        IRMA ARISTIZÁBAL
                     <br/>
                        un equipo dedicado a impulsar
                     <br/>
                        lo mejor de ti.
                     </p>
                  </div>
               </div>
            </div>
      </React.Fragment>
   );
}
export default AboutWeb;