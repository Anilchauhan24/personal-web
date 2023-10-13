import { Component } from "react";
import "./Aboutme.css";
export default class Aboutme extends Component {




    render() {
        return (
            <div className="aboutme">
                <h1 class="display-6 text-light">About me</h1>

                <div className="aboutme-content">

                    <div className="about-section">
                        <p className="h6 text-warning">
                            Hello There! My name is Anil chauhan and I do practise for the following technologies
                            <br /> such as you see below-
                        </p>
                        <ol className=" bg-light" style={{ fontWeight: 'bolder' }}>
                            <li>Express</li>
                            <li>Javascript</li>
                            <li>MongoDb</li>
                            <li>Node js</li>
                            <li>React js</li>

                        </ol>

                    </div>
                    <div className="about-section-first text-light">
                        <p className="h5">Check my Learnings</p>
                        <div class="progress">
                            <div className="progress-bar progress-bar-striped " role="progressbar" style={{ width: '50%', color: "red" }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />

                            <p className="h6 text-primary">HTML</p>


                        </div>
                        <div class="progress">
                            <div className="progress-bar progress-bar-striped " role="progressbar" style={{ width: '50%', color: "red" }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />

                            <p className="h6 text-primary">HTML</p>


                        </div>
                        <div class="progress">
                            <div className="progress-bar progress-bar-striped " role="progressbar" style={{ width: '50%', color: "red" }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />

                            <p className="h6 text-primary">HTML</p>


                        </div>
                        <div class="progress">
                            <div className="progress-bar progress-bar-striped " role="progressbar" style={{ width: '50%', color: "red" }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />

                            <p className="h6 text-primary">HTML</p>


                        </div>

                    </div>



                </div>




            </div >
        )
    }
}