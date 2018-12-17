import * as React from 'react';
import SelectField from './components/SelectField';
import {School, Schools} from '../api/schools';
import * as _ from 'underscore';
import { Classes, Class } from '../api/classes';

export interface ISelectItems {
  value: string;
  key: number;
}

function getCities(): ISelectItems[]{
  console.log('getCities ...');
  let cities: ISelectItems[] = [];
  let citiesFromDB: Array<School> = Schools.find({}).fetch();
  console.log(citiesFromDB);
  let distinctCities = _.uniq(citiesFromDB, false, function(d) {return d.city});
  distinctCities.forEach((School) => {
    console.log('ID:' + School._id +' City:'+School.city);
    cities.push({key: Number(School._id), value: School.city});
  });
  return cities;
}

function getSchoolsInCity (cityName: string){
  console.log('getSchoolsInCity for city:'+cityName+'.')
  const schoolsDB: ISelectItems[] = [];
  // let schoolsFromDB: Array<School> = Schools.find({ address_id: {$in: getAddresses(cityName)}}).fetch();
  let schoolsFromDB: Array<School> = Schools.find({ city:cityName}).fetch();
  console.log(schoolsFromDB);
  schoolsFromDB.forEach((school) => {
    console.log('ID:' + school._id +' Name:'+school.name);
    schoolsDB.push({key: Number(school._id), value: school.name});
  });
  return schoolsDB;
}

function getClasses(schoolID: string){
  console.log('getClasses for school ID:'+schoolID+'.');
  const classesDB: ISelectItems[] = [];
  let classesFromDB: Array<Class> = Classes.find({schoolId:schoolID}).fetch();
  console.log(classesFromDB);
  classesFromDB.forEach((schoolClass) => {
    console.log('ID'+schoolClass._id+' Name:'+schoolClass.name);
    classesDB.push({key: Number(schoolClass._id), value: schoolClass.name});
  });
  return classesDB;
}

interface IState{
  city?: string;
  cityName?: string;
  school?: string;
  class?: string;
};

interface IProps{
}

export class App extends React.Component<IProps, IState> {

  constructor(props: IProps){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      city: 'no city',
      cityName: 'no city name',
      school: 'no school',
      class: 'no class',
    }
  }

  onChange(event: React.ChangeEvent<HTMLSelectElement>) {
    console.log('Change Event received: ' + event.target.value);
    this.setState({ [event.target.name] : event.target.value });
    window.console.log('setting state: ' + event.target.name +'.');
    if(event.target.name === 'city'){
      this.setState({cityName : event.currentTarget.textContent as string})
      window.console.log('setting state text: ' + event.currentTarget.textContent as string +'.');
    }
  }

 render() {
   return (
     <div className="container">
       <header>
         <h1>Capture Canceled Classes</h1>
       </header>

        <div>
            <SelectField 
              itemList={getCities()} 
              changeHandler={this.onChange} 
              label='Stadt' 
              name='city'
              classes={{}} 
              value={this.state.city as string}/>
        </div>

        <div>
            <SelectField 
              itemList={getSchoolsInCity(this.state.cityName as string)} 
              changeHandler={this.onChange} 
              label='Schule'
              name='school'
              classes={{}}
              value={this.state.school as string}/>
        </div>

        <div>
            <SelectField 
              itemList={getClasses(String(this.state.school))}
              changeHandler={this.onChange} 
              label='Klasse'
              name='class'
              classes={{}}
              value={this.state.class as string}/>
        </div>

      </div>
   );
 }
}