import "./style.css";
import { Component } from "react";
import menu from "..//..//assets/images/menu.png"
import blog from "..//..//assets/images/blog.svg"
import search from "..//..//assets/images/search.png"


class Navlink extends Component {

    render() {
        return (
            <div className='cont-navlink'>
                <div className="for-boxes">
                <div className="menu-cont">
                    <img src={menu} alt="" />
                    <p>MENU</p>
                </div>
                <div className="for-blog">
                    <img src={blog} alt="" />
                </div>
                <div className="for-search">
                    <p>SEARCH</p>
                    <img src={search} alt="" />
                </div>
                </div>
            </div>
        );
    }
}
export default Navlink;