import React, { Component } from 'react'
import 'react-date-range/dist/theme/default.css';
import 'react-date-range/dist/styles.css';
import { DateRange } from 'react-date-range';
import "./style.scss"

export class CreateEvents extends Component {
    render() {
        return (
            <div>
                <div className="container " style={{'margin-top': '1em'}}>
    
        <form>
       
        <div className="card person-card">
            <div className="card-body">
              
            <div className="preview text-center">
                <img className="preview-img" src="http://simpleicon.com/wp-content/uploads/account.png" alt="Preview Image" width="200" height="200"/>
                <div className="browse-button">
                    <i className="fa fa-pencil-alt"></i>
                    <input className="browse-input" type="file" required name="UploadedFile" id="UploadedFile"/>
                </div>
                </div>
                <h3 id="event_img" className="card-title">Event Image</h3>
               
                <div className="row">
                    <div className="form-group col-md-2">
                        <select  className="form-control">
                            <option value="Individual">Individual</option>
                            <option value="Non-Profit">Non-Profit</option>
                            <option value="Company">Company</option>
                        </select>
                        
                    </div>
                    <div className="form-group col-md-5">
                    <label for="eventname" className="col-form-label">Event Name:</label>
                            <input type="eventname" className="form-control"  placeholder="Example Beach Cleanup " required/>

                            <label for="date" className="col-form-label">Date:</label>
                            <input type="date" className="form-control" placeholder="September, 15, 2020" required/>
                       
                    </div>
                    <div class="form-group">
                        {/* <label for="exampleFormControlTextarea1">Example textarea</label>
                         <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div> */}
                        
                    </div>
                </div>
            </div>
        </div>
        
        <div className="row">
            <div className="col-md-6" style={{padding:"0.5em"}}>
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title">How to contact you?</h2>
                        <div className="form-group">
                            <label for="email" className="col-form-label">Contact Person:</label>
                            <input type="email" className="form-control" id="email" placeholder="example@gmail.com" required/>

                            <label for="email" className="col-form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="example@gmail.com" required/>
                            <div className="email-feedback"></div>
                        </div>
                        <div className="form-group">
                            <label for="tel" className="col-form-label">Phone number</label>
                            <input type="text" className="form-control" id="tel" placeholder="999-999-9999" required/>
                            <div className="phone-feedback">
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
            <div className="col-md-6 " style={{padding:"0.5em"}}>
                <div className="card"> 
                    <div className="card-body">
                        <h2 className="card-title">Location:</h2>
                        <div className="form-group">
                            <label for="address:" className="col-form-label">Address</label>
                            <input type="city" className="form-control" id="password" placeholder="249 beckon ave." required/>
                            
                        </div>
                        <div className="form-group">
                            <label for="city" className="col-form-label">City</label>
                            <input type="password" className="form-control" id="city" placeholder="Portsmouth" required/>

                            <label for="state" className="col-form-label">State</label>
                            <input type="password" className="form-control" id="state" placeholder="NH" required/>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row ">
            <div class="col-12 text-center">
        <button type="button" class="btn btn-success">Save</button>
        </div>
        </div>
        </form>
        </div>
            </div>
        )
    }
}

export default CreateEvents;
