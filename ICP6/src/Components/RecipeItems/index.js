import {Component} from "react"
import "./index.css"

/** material ui component */


class RecipeItems extends Component{

    
    render(){
        const {RecipiItem} = this.props;
        const {name,imageUrl,aboutUrl} = RecipiItem
        return (
            <div className="eachItem_container">
                <li className="each_recipe_item">
                    <img className="recipi_image" src={imageUrl} alt="recipe-alt"/>
                    <p className="recipe_name">{name}</p>
                    <a href={aboutUrl} target="_blank" className="about_hyper_link" rel="opener">
                        <button type="button" className="about_button">Instructions to cook</button>
                    </a>
                </li>
            </div>
        )
    }
}

export default RecipeItems