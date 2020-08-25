import React, { Component } from 'react';
import { Parallax } from "react-parallax";
import Jumbotron from 'react-bootstrap/Jumbotron';
import "./style.scss";

    
    export class OceanParallax extends Component {

        componentDidMount() {
            
          }

        render() {
            const insideStyles = {
                background: "white",
                padding: 20,
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)"
              };
            const image1 ="https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
            const image2 =  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80';

            let cardDiv = <div className="card text-center text-white">
  				              	  <div className="card-header" style={{background: "#001a33"}}>
    				                  Oceans Pollution Dilema
                            </div>
  					                  <div className="card-body text-white" >
                            <h5 className="card-title">Special title treatment</h5>
                           
                            <div className="card" id="card-image">
                            <div className="card-body">
                              <img className="card-img rounded float-left" src="/assets/imgs/svg/scientist.svg" alt="Card image cap"/>
                                </div>
                                </div>
                   
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            
                            </div>
                           <div className="card-footer text-muted">
                            2 days ago
                          </div>
                        </div>
          
            return (
                <div className="wrapper">
                        {cardDiv}
                       <Parallax bgImage={image1} strength={500}>
                          <div style={{ height: 500 }}>
                               <div style={insideStyles}>HTML inside the parallax</div>
                          </div>
                      </Parallax>
                      {cardDiv}
                      <Parallax bgImage={image2} strength={500}>
                          <div style={{ height: 500 }}>
                            
                          </div>
                      </Parallax>
                      {cardDiv}
                      <Parallax bgImage={image2} strength={500}>
                          <div style={{ height: 500 }}>
                            
                          </div>
                      </Parallax>
                      {cardDiv}
                      <Parallax bgImage={image2} strength={500}>
                          <div style={{ height: 500 }}>
                            
                          </div>
                      </Parallax>


                </div>
            )
        }
    }
    
    export default OceanParallax;
    