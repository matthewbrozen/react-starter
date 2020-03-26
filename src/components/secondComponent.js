// Every React Component needs React
import React, { Component} from 'react';

//Class Declaration
class SecondComponent extends Component{

  //function to display the selected element passed by the parent component
  renderData(data){
    return(
      <div className="secondComponentHobby">
        {data.name}
      </div>
    )
  }

  //function to display the selected element array of hobbies passed by the parent component .hobbies
  renderHobbies(hobbies){
    //check if there are hobbies
    if(hobbies){
      
      return(
        //always return HTMl inside a div to make sure it doesn't break DOM
        <div> 

        {/* iterate over the array of hobbies with a for each loop shortcup .map the array is plural the element in the array is singular*/}
        {hobbies.map( hobby => {
          return(

            // every repeating element needs a unique key or React gets mad
            <div key={hobby.id}>

              {/* display the individual element name */}
              <div> {hobby.name}</div>
            </div>
          )
        })}
        </div>
      )
    }
    //if no hobbies just display a empty div
    return <div />
  }

  //Render return function, required for every React component
  render() {
    //check to see if there is data passed
    if(this.props.data){
      return(
        <div className="secondComponentBorder">
          <h1>You Selected:</h1>

            {/* call the function to display the current element clicked */}
            <h2>{this.renderData(this.props.data)}</h2>
            <h1>Their Hobbies are:</h1>

             {/* call the function to display the current element clicked array of hobbies*/}
            <div>{this.renderHobbies(this.props.data.hobbies)}</div>
        </div>
      )
    }
	  return <div />
  }
}


export default SecondComponent;