import React, { Component } from 'react'
import forestBackground from './greenforest.jpg';
import { Parallax, Background } from 'react-parallax';
import './style.scss'

export class RainforestInfo extends Component {
    render() {
        return (
            <div className="RainforestWrapper">
                <div className="container-fluid entire-container">
           
                    {/* jumbotron rainforst */}
                     <div className="jumbotron " id="jumbotron-rain" style={{ backgroundImage: `url(${forestBackground})`}}  >
                        <h1 className="display-4 text-white text-center">Forest fires & Deforestation</h1>
                            <p className="lead text-white text-center">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    </div>

                    {/* forest fires */}
                
                        <section class="under-rain">
                            
                            <div class="row mx-auto">
                                <div class ='col-md-6'> 
                                <div class="mo-fire">
                                 <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                                     width="125px" height="189.864px" viewBox="0 0 125 189.864" enable-background="new 0 0 125 189.864" >
                                    <path class="flame-main" fill="#F36E21" d="M76.553,186.09c0,0-10.178-2.976-15.325-8.226s-9.278-16.82-9.278-16.82s-0.241-6.647-4.136-18.465
                                        c0,0,3.357,4.969,5.103,9.938c0,0-5.305-21.086,1.712-30.418c7.017-9.333,0.571-35.654-2.25-37.534c0,0,13.07,5.64,19.875,47.54
                                        c6.806,41.899,16.831,45.301,6.088,53.985"/>
                                    <path class="flame-main one" fill="#F6891F" d="M61.693,122.257c4.117-15.4,12.097-14.487-11.589-60.872c0,0,32.016,10.223,52.601,63.123
                                        c20.585,52.899-19.848,61.045-19.643,61.582c0.206,0.537-19.401-0.269-14.835-18.532S57.576,137.656,61.693,122.257z"/>
                                    <path class="flame-main two" fill="#FFD04A" d="M81.657,79.192c0,0,11.549,24.845,3.626,40.02c-7.924,15.175-21.126,41.899-0.425,64.998
                                        C84.858,184.21,125.705,150.905,81.657,79.192z"/>
                                    <path class="flame-main three" fill="#FDBA16" d="M99.92,101.754c0,0-23.208,47.027-12.043,80.072c0,0,32.741-16.073,20.108-45.79
                                        C95.354,106.319,99.92,114.108,99.92,101.754z"/>
                                    <path class="flame-main four" fill="#F36E21" d="M103.143,105.917c0,0,8.927,30.753-1.043,46.868c-9.969,16.115-14.799,29.041-14.799,29.041
                                        S134.387,164.603,103.143,105.917z"/>
                                    <path class="flame-main five" fill="#FDBA16" d="M62.049,104.171c0,0-15.645,67.588,10.529,77.655C98.753,191.894,69.033,130.761,62.049,104.171z"/>
                                    <path class="flame" fill="#F36E21" d="M101.011,112.926c0,0,8.973,10.519,4.556,16.543C99.37,129.735,106.752,117.406,101.011,112.926z"/>
                                    <path class="flame one" fill="#F36E21" d="M55.592,126.854c0,0-3.819,13.29,2.699,16.945C64.038,141.48,55.907,132.263,55.592,126.854z"/>
                                    <path class="flame two" fill="#F36E21" d="M54.918,104.595c0,0-3.959,6.109-1.24,8.949C56.93,113.256,52.228,107.329,54.918,104.595z"/>
                                </svg>
                             </div>
                             </div>
                           </div>

                           
                             <div class = "row mx-auto" style={{marginTop: '-1.5rem'} }>
                                 
                                <div class="card forest-fire-card mb-3 mx-auto" style={{maxWidth: '1000px'}}>
                                    <div class="row">
                                    <div class="col-md-4">
                                    <img src="https://images.unsplash.com/photo-1553217420-13f2c0ac0002?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" class="card-img" alt="forest-floors burning"/>
                                    </div>
                                    <div class="col-md-8">
                                    <div class="card-body forest-fire-card ">
                                        <h2 class="card-title text-white ">Forest Fires</h2>
                                        <p class="card-text text-white text-right">For the United States as a country, the total number of acres burned by wildfires and the average acres burned per fire has been ticking up in recent decades. From 2000 to 2018, wildfires burned more than twice as much land area per year than those from 1985 to 1999.</p>

                                        <p class="text-white">In Alaska, temperatures are rising twice as fast as the rest of the country, wildfires have been increasing in frequency and size, these forests evolved with fire. Four of the ten largest fire years on record have occurred in the past 15 years, burning over 2 million acres in each of those large fire years.</p>

                                    <p class="text-white">
                                        As the climate continues to warm, wild fires will increase over the next couple decades. We must take swift action in order to improve forest and fire management practices and reduce our reliance on fossil fuels to limit the risks of worsening wildfires and move towards re-newable energy.</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            
                             
                    <div class ='row mx-auto'>
                      <div class="card mb-3 forest-fire-card mt-5 mx-auto" style={{maxWidth: '1000px'}}>
                       <div class="row ">
                        
                         <div class="col-md-8 ">
                           <div class="card-body forest-fire-card ">
                             <h2 class="card-title text-white">Amazon Rainforest Fires</h2>
                             <p class="card-text text-white">Thousands of fires are burning across a southern swath of the Amazon. They belch smoke and soot, blanketing those who live downwind with thick, dirty air, hurting wildlife in their path and destroying part of one the most important carbon storehouses left on the planet.</p>

                             <p class="text-white ">
                               About 76,000 fires were burning across the Brazilian Amazon at last official count, an increase of over 80 percent over the same time period last year, according to data from Brazil’s National Institute for Space Research (INPE). Since then, even more fires have appeared in the satellite imagery that scientists use to assess the extent and intensity of burning, and they expect the number to increase over coming months as the dry season intensifies.</p>
                             <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                           </div>
                         </div>

                         <div class="col-md-4">
                           <img src="https://images.unsplash.com/photo-1594984820817-d8317f74930c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" class="card-img " alt="picture of a burning forest and firemen"/>
                         </div>
                       </div>
                     </div>
                
                   </div> 

                    </section>
                    

                    <Parallax bgImage={`${forestBackground}`} strength={500}>
                        <div style={{ height: 500 }}>
                        <iframe width="100%" height="500" src="https://www.youtube.com/embed/icgEDDrlR28?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </Parallax>


                    <Parallax strength={500}>
                        <div style={{ height: '100%' }}>
                        
                     <div class = "row mb-5"> 
                     <div class="card mt-5 mx-auto border-0" style={{width: '25rem'}}>
                                <div class="card-body forest-fire-card">
                            <h3 class="card-title text-white text-center">Amazon Deforestation</h3>
                            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
                             <div class="carousel-inner">
                        <div class="carousel-item active">
                          <img src="../assets/imgs/rainforest/orangutans/babyorangutan.jpg" class="d-block w-100 baby-orang" alt="..."/>
                        </div>
                        <div class="carousel-item">
                          <img src="../assets/imgs/rainforest/orangutans/captiveorangutans.jpg" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                          <img src="../assets/imgs/rainforest/orangutans/motherorangutan.jpg" class="d-block w-100" alt="..."/>
                        </div>
                      </div>
                      <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                      </a>
                      <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                      </a>
                    </div>
                    <h6 class="card-subtitle mb-2 mt-2 text-muted text-center">Brazil</h6>
                    <p class="card-text text-white text-center">The Amazon is disappearing quickly due to deforestation. The amount of forest lost in the last 30-40 years is about 20% of its levels before that time. Brazil is considered to have one of the most detailed data, it seems to an area of forest the size of Texas every year.</p>
                    
                
                            </div>
                        </div> 
                        <div class="col-md-6 text-center">
                <iframe class="first-chart mt-5" width="500" height="525" frameborder="0" src="https://www.globalforestwatch.org/embed/widget/treeLossRanked/country/BRA"></iframe>
              </div> 

                     </div>
                        </div>
                    </Parallax>

                     
                    <Parallax bgImage={'https://images.unsplash.com/photo-1475139195209-c6343f17842f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80'} strength={500}>
                        <div style={{ height: 600 }}>
                        </div>
                    </Parallax>
                    
                   
                    <Parallax strength={500}>
                        <div style={{ height: '600px' }}>
                        
                        <div class="row justify-content-around mb-5">
                            <div class ='col-4'>
                                <div class="card mt-5 mx-auto mb-5 border-0" style={{width:'30rem'}}>
                                <div class="card-body forest-fire-card ">
                                    <h3 class="card-title text-white text-center">American Deforestation</h3>
                                    <h5 class="card-subtitle mb-2 text-muted text-white text-center">America</h5>
                                    <p class="card-text text-white text-center">United States deforestation has caused the destruction of virgin forests by 75% percent since 1600. In 2015, 33.9% of the total land area was under forests, inclduing primary, naturally regenerating and other woodlands.</p>
                                
                                </div>
                                </div>
                                </div>
                                <div class ='col-4'>
                                <iframe class="first-chart mt-5" width="600" height='600px' frameborder="0" src="https://www.globalforestwatch.org/embed/widget/treeLossTsc/country/USA?treeLossTsc=eyJpbnRlcmFjdGlvbiI6e30sImhpZ2hsaWdodGVkIjpmYWxzZX0="></iframe>
                            
                                </div>
                           </div>
                        </div>
                    </Parallax>
            
                    
                </div>
                
            </div>
        )
    }
}

export default RainforestInfo
