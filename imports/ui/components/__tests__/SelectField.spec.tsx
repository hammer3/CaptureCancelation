import * as React from 'react';
import { shallow } from 'enzyme';
import {SelectField} from '../SelectField';
import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {ISelectItems} from '../../App';

configure({ adapter: new Adapter() });

   // Following the material-ui test description
   describe('<SelectField  />', () => {
  
    it('should work', () => {
      const cities: ISelectItems[] = [
        {key: 10, value: 'Kiel'},
        {key: 20, value: 'Gettorf'},
        {key: 30, value: 'Eckernförde'}
      ];

      const value = '';

      const wrapper = shallow(
        <SelectField 
          itemList={cities} 
          classes={{}} 
          label='Stadt' 
          name='city'
          changeHandler={{}} 
          value={value}/>);
      expect(wrapper.render);
    });

    it('should contain menue items ', () => {
      const cities: ISelectItems[] = [
        {key: 10, value: 'Kiel'},
        {key: 20, value: 'Gettorf'},
        {key: 30, value: 'Eckernförde'}
      ];

      const value = '';

      const wrapper = shallow(
        <SelectField 
        itemList={cities} 
        classes={{}} 
        label='Stadt' 
        name='city'
        changeHandler={{}} 
        value={value}/>);

      console.log(wrapper.debug());
      expect(wrapper.contains('Kiel'));
      expect(wrapper.contains('Eckernförde'));
      expect(wrapper.contains('Gettorf'));
      
    });

});