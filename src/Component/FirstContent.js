
import { useEffect, useState } from "react";
import "./FirstContent.css";

function FirstContent() {


    const [color, setColor] = useState()
    useEffect(() => {

        document.body.style.backgroundColor = color;




    }, [color])

    return (
        <div className="first-content-one">

            <div className="first-content" >
                <center>
                    <div className="items">
                        <div className="para">
                            <p className="h2">Hi There, I am Anil Chauhan<br /> Web Developer</p>
                        </div>
                        <div className="myimage">
                            <img src="Assets/1697193552411.jpg" alt="anil chauhan" style={{ width: '200px', height: '200px' }} />
                        </div>
                        <a href="#" type="button" className="btn btn-danger">View Works</a>
                    </div>
                    <br />

                    <p className="h5  text-info">I Love coding and I have built my expertise in various technologies<br />

                        Such as HTML, Css,Javascript, Bootsrap, React js, MongoDb, Node js and Express.
                    </p>
                </center>


            </div>

        </div>
    )


}






export default FirstContent;