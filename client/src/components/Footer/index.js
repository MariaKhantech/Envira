import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import "./style.scss"

export class Footer extends Component {
    render() {
        return (
            <div className="footer-wrapper ">
                < footer className="F-footer ">
                   
                <div className="container pt-5 border-bottom ">
                <Fade bottom>
                    <div className="col-sm-12 col-md-6">
                        <h6 className="text-white text-center">About</h6>
                        <hr class="bg-white"/>
                        <p className="text-justify text-white text-center">Envira is meant to bring a fun and educational atmosphere to the environmental community. With all the dangers happening with climate change from wildfires, heat waves, hurricanes, and droughts. We wanted to build a new way of delivering the information to the average person, both effective and helpful. We did not want to stop there. We also wanted to build a community where people can gather together to do something about it within their community. We have even allowed for companies to join in on the environmental change.</p>
                        <h6 class="text-white">Below you can click on our WEB DEVELOPER cards to find out more about each developer.</h6>
                    </div>
                    </Fade> 
                     {/* https://codepen.io/FrankieDoodie/pen/NOJpVX */}
                    <div className="row">
                        <Slide left>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="our-team rounded">
                            <div className="picture">
                            <img className="img-fluid" src="https://ca.slack-edge.com/TUW13PEF9-U0107B4J3S4-e5e83a9501d9-512"/>
                            </div>
                            <div className="team-content">
                            <h3 className="name">Maria Khan</h3>
                            <h4 className="title">Web Developer</h4>
                            </div>
                            <ul className="social">
                            <li><a href="https://github.com/MariaKhantech" className="fa fa-github" aria-hidden="true"></a></li>
                            <li><a href="https://mariakhantech.github.io/maria-khan-portfolio/" className="fa fa-address-card" aria-hidden="true"></a></li>
                            <li><a href="https://www.linkedin.com/in/maria-khan-tech/" className="fa fa-linkedin" aria-hidden="true"></a></li>
                            
                            </ul>
                        </div>
                        </div>
                        </Slide>

                        <Slide bottom>
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="our-team rounded">
                            <div className="picture">
                            <img className="img-fluid" src="https://ca.slack-edge.com/TUW13PEF9-U0109GCAY6A-d4f5063943d8-512"/>
                            </div>
                            <div className="team-content">
                            <h3 className="name">Priyanka Singh</h3>
                            <h4 className="title">Web Developer</h4>
                            </div>
                            <ul className="social">
                            <li><a href="#" className="fa fa-github" aria-hidden="true"></a></li>
                            <li><a href="#" className="fa fa-address-card" aria-hidden="true"></a></li>
                            <li><a href="#" className="fa fa-linkedin" aria-hidden="true"></a></li>
                            </ul>
                        </div>
                        </div>
                        </Slide>

                        <Slide right>
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="our-team rounded">
                            <div className="picture">
                            <img className="img-fluid" src="https://ca.slack-edge.com/TUW13PEF9-U0107AVQ269-d9bf053b182f-512"/>
                            </div>
                            <div className="team-content">
                            <h3 className="name">Gus Heptig</h3>
                            <h4 className="title">Web Developer</h4>
                            </div>
                            <ul className="social">
                            <li><a href="#" className="fa fa-github" aria-hidden="true"></a></li>
                            <li><a href="#" className="fa fa-address-card" aria-hidden="true"></a></li>
                            <li><a href="#" className="fa fa-linkedin" aria-hidden="true"></a></li>
                            </ul>
                        </div>
                        </div>
                        </Slide>
                            
                    </div>


                    
                    <div className="row">
                    <div className="col-md-3 col-sm-12 mb-3 text-center">
                    </div>
                    {/* <div className="col-md-9 col-sm-12 text-center"> */}


                        <div className="col-md-3 col-sm-6 col-6 p-0mb-3 float-left te">
                        <h5 className="mb-4 font-weight-bold text-uppercase  h5-Fstyle text-center text-white">Company</h5>
                        <ul className="list-group text-center">
                        <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a className="a-Fstyle" href="https://github.com/naologic">Envira</a></li>
                        {/* <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a className="a-Fstyle" href="https://stackshare.io/naologic">Priyanka Signh</a></li>
                        <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a className="a-Fstyle" href="https://stackshare.io/naologic">Gus Heptig</a></li> */}
                        </ul>
                        </div>

                        {/* <div className="col-md-3 col-sm-6 col-6 mb-3 p-0 float-left">
                        <h5 className="mb-4 font-weight-bold text-uppercase  h5-Fstyle text-white">Company</h5>
                        <ul className="list-group">
                        <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a className="a-Fstyle" href="https://github.com/naologic">Envira</a></li>
                        </ul>
                        </div> */}

                    

                        {/* <div className="col-md-12">
                        <div className="py-4 d-flex justify-content-center align-items-center">
                            <a className="mr-4 a-Fstyle" href="../privacy.html">Privacy & terms</a>
                            <a className="a-Fstyle" href="../sitemap.xml">Sitemap</a>
                        </div>
                        </div> */}
                    
                </div>
                </div>
                    
                </footer>
            </div>
        )
    }
}

export default Footer
