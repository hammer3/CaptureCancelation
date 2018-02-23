import React from 'react';
import { shallow } from 'enzyme';
import {SelectField} from './SelectField';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MenuItem from 'material-ui/Menu';
import { mount } from 'enzyme';
import { render } from 'enzyme';

import sinon from 'sinon';
import { createShallow } from 'material-ui/test-utils';

configure({ adapter: new Adapter() });

   // Following the material-ui test description
   describe('<SelectField  />', () => {
  
  
    it('should work', () => {
      var cities = [
        {value:'KI', name:'Kiel'},
        {value:'GET', name:'Gettorf'},
        {value:'ECK', name:'Eckernförde'}
      ];
      const wrapper = shallow(<SelectField itemList={cities} classes={{}}/>);
      expect(wrapper.render);
    });

    it('should contain menue items ', () => {
      var cities = [
        {value:'KI', name:'Kiel'},
        {value:'GET', name:'Gettorf'},
        {value:'ECK', name:'Eckernförde'}
      ];

      const wrapper = shallow(<SelectField itemList={cities} classes={{}}/>);
      console.log(wrapper.debug());
      //expect(wrapper.containsAllMatchingElements(MenuItem)).toBe(true);
      expect(wrapper.contains('Kiel'));
      expect(wrapper.contains('Eckernförde'));
      expect(wrapper.contains('Gettorf'));
      
    });

});