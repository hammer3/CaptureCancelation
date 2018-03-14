import * as React from 'react';
import SelectField from './components/SelectField';

export interface Icity {
  value: string;
  key: number;
}

const cities: Icity[] = [
  {key: 10, value: 'Kiel'},
  {key: 20, value: 'Gettorf'},
  {key: 30, value: 'Eckernförde'}
];

const schools: Icity[] = [
  {key: 100, value: 'IGF'},
  {key: 200, value: 'HFG'},
  {key: 300, value: 'EBG'}
];

// App component - represents the whole app
// <Selection changeHandler={this.onChange} itemList={cities}/>
export class App extends React.Component {

  onChange(event: React.ChangeEvent<HTMLSelectElement>) {
    console.log('Change Event received: ' + event.target.value);
  }

 render() {
   return (
     <div className="container">
       <header>
         <h1>Capture Canceled Classes</h1>
       </header>

        <div>
            <SelectField itemList={cities} changeHandler={this.onChange} label='Stadt' classes={this}/>
        </div>

        <div>
            <SelectField itemList={schools} changeHandler={this.onChange} label='Schule' classes={this}/>
        </div>

      </div>
   );
 }
}