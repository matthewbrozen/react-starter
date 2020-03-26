// Every React Component needs React
import React, { Component} from 'react';

// Bring in external component
import SecondComponent from './secondComponent';

//Class Declaration
class FirstComponent extends Component{


  //Constructor function
  constructor(props){
    //Allows us to use this.props as a reference to the argument
    super(props);


    //Load in initial state of data to null so we can change it on click
    this.state = {
      selectedData: null
    };
  }

  //function to handle the data selection from null to whatever the current element is
  onDataSelect(data) {
    //test to see if click is working
    console.log('CLICK');

    //set state from null to the current element
    this.setState({selectedData: data});
  }

  //Render return function, required for every React component
  render() {

    //in the class we can declare javascript constants, variables and lets. This iterates over the array and returns each element to the page
    const dataList = this.props.datas.map( data => {
      return(
        <div key={data.id}>
          <div onClick={() => this.onDataSelect(data)}>{data.name}</div>
        </div>
      );
    });

    return (

      <div>
          {/* returning the const we declared above */}
          <div className="firstComponentList">{dataList}</div>

          {/* External component that we imported */}
          <SecondComponent data={this.state.selectedData} />
      </div>
      )

  }
}


//All Components have a export so we can import this
export default FirstComponent;