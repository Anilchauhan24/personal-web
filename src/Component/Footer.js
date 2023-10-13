import { useEffect, useState } from "react";
import "./Footer.css";
function Footer() {

    const [time, setTime] = useState('');

    const clickDownload = () => {

        fetch("Assets/getMyResumeNew.pdf")
            .then(response => {

                response.blob()
                    .then(blob => {

                        const fileUrl = window.URL.createObjectURL(blob);
                        let aLink = document.createElement('a');
                        aLink.href = fileUrl;
                        aLink.download = 'Assets/getMyResumeNew.pdf';
                        aLink.click();
                    })
            })



    }



    useEffect(() => {
        const ptime = new Date().toLocaleTimeString();

        setTime(ptime);
        console.log(ptime)

    }, [])


    let hr = document.getElementById('hour');
    let min = document.getElementById('min');
    let sec = document.getElementById('sec');

    function disPlayTime() {

        let date = new Date();
        let hh = date.getHours();
        let mm = date.getMinutes();
        let ss = date.getSeconds();

        let hrRotation = 30 * hh + mm / 2;
        let mRotation = 6 * mm;
        let sRotation = 6 * ss;
        hr = `rotate(${hrRotation}deg)`;
        min = `rotate(${mRotation}deg)`;
        sec = `rotate(${sRotation}deg)`;

    }
    disPlayTime();

    return (
        <div>
            <footer>

                <div className="footer-content">
                    <p className="h4 text-color">Social Links</p>
                    <div className="combined-footer">
                        <div className="social">

                            <ul>

                                <li>

                                    <i className="fa-brands fa-linkedin text-light"></i> Linkedin
                                </li>


                                <li>

                                    <i className="fa-brands fa-facebook text-light"></i>Facebook
                                </li>
                                <li>

                                    <i className="fa-regular fa-envelope text-light"></i> Email
                                </li>
                                <li>

                                    <i className="fa-solid fa-phone-volume text-light"></i> Phone
                                </li>
                                <li>

                                    <i className="fa-brands fa-github text-light"></i> Github
                                </li>

                            </ul>

                        </div>

                        <div className="middle-footer">

                            <p className="h5 text-light">Click here to download Resume</p>
                            <button onClick={clickDownload} value="download" type="button" className="btn btn-primary"><i class="fa-solid fa-download"></i>Download Now</button>



                        </div>

                        <div className="watch text-light">
                            <div className="circle-watch">

                                <p id="point">.</p>
                                <div className="rotation">
                                    <span id="rotation-twelve">7</span>
                                    <span id="rotation-eleven">8</span>
                                    <span id="rotation-nine">9</span>
                                    <span id="rotation-ten">10</span>
                                    <span id="rotation-one">11</span>
                                    <span id="rotation">12</span>
                                    <span id="rotation-two">1</span>
                                    <span id="rotation-three">2</span>
                                    <span id="padding-four">3</span>
                                    <span id="rotation-five">4</span>
                                    <span id="rotation-six">5</span>
                                    <span id="rotation-seven">6</span>

                                </div>
                            </div>
                            <i className="fa-solid fa-arrow-up"  ></i>
                            <i class="fa-solid fa-arrow-right" ></i>
                            <i class="fa-solid fa-arrow-left"  ></i>
                        </div>

                    </div>
                    <br />
                    <p className="h5 text-info">
                        <center>

                            <i class="fa-solid fa-arrow-up-right-dots"></i>  Copyright 2023-2024 personalproject.com | operated by Anil chauhan |  <span className="time" >{time}</span>
                        </center>

                    </p>







                </div>





            </footer >

        </div >
    )
}
export default Footer;