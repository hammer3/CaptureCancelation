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

type State={
  city?: string;
  school?: string;
};
type Props={

}

// App component - represents the whole app
// <Selection changeHandler={this.onChange} itemList={cities}/>
export class App extends React.Component<Props, State> {

  constructor(props: Props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      city: 'no city',
      school: 'no school',
    }
  }

  onChange(event: React.ChangeEvent<HTMLSelectElement>) {
    console.log('Change Event received: ' + event.target.value);
    this.setState({ [event.target.name] : event.target.value });
    window.console.log('setting state: ' + event.target.name +'.');
  }


 render() {
   // const city = this.state.city;
   // const school = this.state.school;

   return (
     <div className="container">
       <header>
         <h1>Capture Canceled Classes</h1>
       </header>

        <div>
            <SelectField 
              itemList={cities} 
              changeHandler={this.onChange} 
              label='Stadt' 
              classes={{}} 
              value={this.state.city as string}/>
        </div>

        <div>
            <SelectField
              itemList={schools} 
              changeHandler={this.onChange} 
              label='Schule'
              classes={{}}
              value={this.state.school as string}/>
        </div>

      </div>
   );
 }
}