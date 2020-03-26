// Every React Component needs React
import React from 'react';

// Link to external style sheet
import './App.css';

// Bring in external component
import FirstComponent from './components/firstComponent.js';

// Reactstrap components
import {Jumbotron, Button} from 'reactstrap';

// Data import, array of objects with a array inside
import { DATAS } from './shared/datas';


//Class Declaration
class App extends React.Component{

  //Constructor function
  constructor(props){

    //Allows us to use this.props as a reference to the argument
    super(props);

    //Load in external data
    this.state = {
      datas: DATAS
    };
  }

  //In the class we can write functions to handle all sorts of operations like going to a new page
  onJumbotronClick(){
    window.location.href = 'https://reactstrap.github.io/';
  }

  //Render return function, required for every React component
  render(){
    return (

      //Inside return always have a open and closing div to contain the rest of the code
      <div className="app">
          <Jumbotron>
            <h1 className="display-3">Hello, world!</h1>
            <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-2" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p className="lead">
              <Button color="primary" onClick={() => this.onJumbotronClick()}>Learn More</Button>
            </p>
          </Jumbotron>

          {/* External component that we imported */}
          <FirstComponent datas={this.state.datas} /> 

      </div>
    );
}
}

//All Components have a export so we can import this
export default App;
