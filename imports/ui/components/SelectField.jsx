
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});



export class SelectField extends React.Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    console.log('constructor');
    
    this.state = {
      city: '',
      name: 'hai',
      }
  };

  handleChange (event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log('handle change event name:'+ event.target.name +'event value:'+event.target.value);
    this.props.changeHandler(event);
  };

  
    createMenueList(cities){
      const cityMenueItems = [];
      for (let i = 0; i <cities.length; i++ ) {
        var cityName = cities[i].name;
        var cityID = cities[i].value;
        cityMenueItems.push(<MenuItem value={cityID} key={cityID}>{cityName}</MenuItem>);
        console.log('Add city to the Select Item list:'+cityName);
      }
      console.log('itemList:'+cityMenueItems);
      return cityMenueItems;
    }

  render() {
    const { 
      classes, 
      changeHandler,
      itemList
    } = this.props;

    const cityMenueItems = this.createMenueList(itemList);
    
    return (
      <form className={classes.container} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="city-simple">Stadt</InputLabel>
          <Select
            value={this.state.city}
            //onChange={changeHandler}
            onChange={this.handleChange}
            input={<Input name="city" id="city-simple" />}
          >
            <MenuItem value="NONE"><em>None</em></MenuItem>
            {cityMenueItems}
          </Select>
        </FormControl>
      </form>
    );
  }
}

SelectField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectField);
