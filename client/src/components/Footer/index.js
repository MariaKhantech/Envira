import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div className="footer-wrapper">
                < footer className="F-footer">
                <div className="container pt-5 border-bottom">
                    <div className="row">
                    <div className="col-md-3 col-sm-12 mb-3 text-center">
                    </div>
                    <div className="col-md-9 col-sm-12 text-center">


                        <div className="col-md-3 col-sm-6 col-6 p-0 mb-3 float-left te">
                        <h5 className="mb-4 font-weight-bold text-uppercase  h5-Fstyle text-center">Developers</h5>
                        <ul className="list-group text-center">
                        <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a className="a-Fstyle" href="https://github.com/naologic">Maria Khan</a></li>
                        <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a className="a-Fstyle" href="https://stackshare.io/naologic">Priyanka Signh</a></li>
                        <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a className="a-Fstyle" href="https://stackshare.io/naologic">Gus Heptig</a></li>
                        </ul>
                        </div>

                        <div className="col-md-3 col-sm-6 col-6 mb-3 p-0 float-left">
                        <h5 className="mb-4 font-weight-bold text-uppercase  h5-Fstyle">Company</h5>
                        <ul className="list-group">
                        <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a className="a-Fstyle" href="https://github.com/naologic">Envira</a></li>
                        </ul>
                        </div>

                    

                    </div>
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
