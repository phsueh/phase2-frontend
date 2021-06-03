
import React,{Component} from "react"


class CategorysSlots extends Component {
   
   helpChange =(e) => {
//   console.log(e.target.value)
 this.props.changeWhatIsChosen(e.target.value)
   }

    render() {


    
    return(
        <div>
         <h2>Filter By Categorys</h2>
         <select id="map" style={{margin:50, height:40, width:400 }} value={this.props.whatIsChosen} onChange={this.helpChange}>
             <option value="All">All</option>
             <option value="Music">Music</option>
             <option value="Sports">Sports</option>
             <option value="Gaming">Gaming</option>
             <option value="News">News</option>
         </select>
       </div>
    );
 }

}

export default CategorysSlots