import React, { Component } from 'react';
import Selection from './components/SelectField.jsx';
import { SIGKILL } from 'constants';


var cities = [
  {value:'KI', name:'Kiel'},
  {value:'GET', name:'Gettorf'},
  {value:'ECK', name:'Eckernförde'}
];

// App component - represents the whole app
export default class App extends Component {

  onChange(event) {
    console.log('Change Event received: '+ event.target.value);
  }

  

 render() {
   return (
     <div className="container">
       <header>
         <h1>Capture Canceled Classes</h1>
       </header>
     
        
        <div>
            <Selection changeHandler={this.onChange} itemList={cities}/>
        </div>

        <div>
            <Selection changeHandler={this.onChange} itemList={cities}/>
        </div>
        
      </div>
   );
 }
}