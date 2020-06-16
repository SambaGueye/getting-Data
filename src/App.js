import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class  App extends Component {

  constructor (props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
    });
  }

  render(){


    var {isLoaded, items}=this.state;

    if(!isLoaded){
      return <div>Loading....</div>
    }
    else {
      return (
        <div className="App">
          <ul>
              {items.map(item => (
                <li key={item.id} style={{fontSize:'20px', height:'50px'}}>
                  Name: {item.name} | Email: {item.email}
                </li>
              ))};
          </ul>
        </div>
      )};
    }

    
}

export default App;
