import {Link} from "react-router-dom"
import {Component} from "react"
import "./index.css"

class TopComponent extends Component{

    render(){
        
        return(
            <div className="header_main_container">
                <div className="logo_container">
                    <img className="logo_image" src="https://cdn.dribbble.com/users/5246351/screenshots/13929150/yummy_food_4x.jpg" alt="logo-pic" />
                </div>
                <ul className="header_unordered_list">
                    <li className="header_list_item">
                        <Link className="header_link" to="/recipi">Search Your Recipi</Link>
                    </li>
                    <li className="header_list_item">
                        <Link className="header_link" to="resturant-finder">Find Restutants in your city</Link>
                    </li>
                </ul>
            </div>
        )
    }
 }

 export default TopComponent
