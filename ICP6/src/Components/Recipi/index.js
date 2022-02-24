
import "./index.css" 
import {Component} from "react"
import RecipeItems from "../RecipeItems"

class Recipi extends Component{

    

    state = {
        searchInput:'',
        RecipiList:[]
    }

    userSearchInput = (event)=>{
        this.setState({searchInput:event.target.value})
    }

    /*componentDidMount = async()=>{
        const {searchInput} = this.state;
        const APP_ID = "a52b4d43";
        const APP_KEY = "e0e5c667605f5e91d8275c973531b80a";
       const response = await fetch(`https://api.edamam.com/search?q=${searchInput}&app_id=${APP_ID}&app_key=${APP_KEY}`)
       const data= await response.json();
       console.log(data);
    }*/

    

    getRecipiData = async()=>{
        const {searchInput} = this.state;
        const APP_ID = "a52b4d43";
        const APP_KEY = "e0e5c667605f5e91d8275c973531b80a";
       const response = await fetch(`https://api.edamam.com/search?q=${searchInput}&app_id=${APP_ID}&app_key=${APP_KEY}`)
       const data= await response.json();
       //console.log(data.hits);

       const updatedData = data.hits.map(eachItem=>({
           name:eachItem.recipe.label,
           imageUrl:eachItem.recipe.image,
           aboutUrl:eachItem.recipe.url,
           ingredients:eachItem.recipe.ingredients,
           ingredientLines:eachItem.recipe.ingredientLines
       }))

       //console.log(updatedData)

       this.setState({RecipiList:updatedData})
      
    }

    render(){
        const {searchInput,RecipiList} = this.state;
        //console.log(RecipiList)
        return(
            <div className="recipi_main">
                <h1 className="search_recipe_heading"> Search for your favorite recipe</h1>
                <div className="search_container">
                    <input className="input_search_box" type="search" placeholder="Search Recipe" 
                    onChange={this.userSearchInput}
                    value={searchInput}/>

                <button type="button" className="search_button" onClick={this.getRecipiData}>Search Recipi</button>
                </div>
                
                <ul className="recipi_items_container">
                    {RecipiList.map(eachItem=>(
                        <RecipeItems RecipiItem={eachItem} key={eachItem.aboutUrl}/>
                ))}
                </ul>
            </div>
        )
    }
}

export default Recipi