import * as React from 'react';
import SelectField from './components/SelectField';

export interface ISelectItems {
  value: string;
  key: number;
}

const cities: ISelectItems[] = [
  {key: 10, value: 'Kiel'},
  {key: 20, value: 'Gettorf'},
  {key: 30, value: 'Eckernförde'}
];

const schools: ISelectItems[] = [
  {key: 100, value: 'IGF'},
  {key: 200, value: 'HFG'},
  {key: 300, value: 'EBG'}
];

interface IState{
  city?: string;
  school?: string;
};

interface IProps{
}

export class App extends React.Component<IProps, IState> {

  constructor(props: IProps){
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
              name='city'
              classes={{}} 
              value={this.state.city as string}/>
        </div>

        <div>
            <SelectField 
              itemList={schools} 
              changeHandler={this.onChange} 
              label='Schule'
              name='school'
              classes={{}}
              value={this.state.school as string}/>
        </div>

      </div>
   );
 }
}