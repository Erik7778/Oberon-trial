import "./style.css";
import { Component } from "react";
// import audi from "..//..//assets/images/audi.jpg"
// ;import nasa from "..//..//assets/images/nasa.jpg"


class Oberon extends Component {

    render() {
        return (
            <div className="cont-oberon">
               <div className="cont-center">
                <div className="boxes-one">
                    <div className="for-topic">
                        <button>LIST STYLE</button> 
                        <p>The next 7 things to immediately do about car</p>
                    </div>
                </div>
                <div className="boxes-two">
                    <div className="for-topic">
                        <button>TECHNOLOGY</button>
                        <p>Cosmonauts prep for spacewalk</p>
                    </div>
                </div>
               </div>
            </div>
        );
    }
}
export default Oberon;