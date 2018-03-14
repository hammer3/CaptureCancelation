
import * as React from 'react';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem, Theme } from 'material-ui';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import { Icity } from '../App';
import withStyles from 'material-ui/styles/withStyles';
// import withStyles, { StyleRulesCallback, WithStyles } from 'material-ui/styles/withStyles';
// import withRoot from '../withRoot';

const styles = (theme: Theme) => ({
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

type State = {
  name?: string;
};

export interface ISelectFieldProps {
  changeHandler: any;
  classes: any;
  itemList: Icity[];
  label: string;
}


export class SelectField extends React.Component<ISelectFieldProps,State> {

  constructor(props: ISelectFieldProps) {
    super(props as any);
    this.handleChange = this.handleChange.bind(this);
    console.log('constructor');
    this.state = {
      name: 'no Selection',
    }
  };

  

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // tslint:disable-next-line:max-line-length
    window.console.log('handleChange called: name:' + event.currentTarget.textContent + ' value:' + event.target.value);
    window.console.log('setting state: ' + event.target.name +'.');
    this.setState({ [event.target.name] : event.target.value });
  }

    createMenueList(cities: Icity[]) {
      // FIXME type should be MenuItem instead of any
      // const cityMenueItems: React.ReactElement<ReactElement.MenuItem>[] = [];
      const cityMenueItems: any = [];
      for (let i = 0; i < cities.length; i++ ) {
        const name: string = cities[i].value;
        const key: number = cities[i].key;
        const item = <MenuItem key={key} value={key}>{name}</MenuItem>;
        cityMenueItems.push(item);
        console.log('Add item to the Select Item list: key:'+key + '  name:' + name);
      }
      return cityMenueItems;
    }

  render() {
    const {
      classes,
      itemList,
      label,
    } = this.props;

    const cityMenueItems = this.createMenueList(itemList);

    return (
      <form className={classes.container} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="city-simple">{label}</InputLabel>
          <Select
            value= {this.state.name}
            onChange={this.handleChange.bind(this)}
            input={<Input name="name" id="name" />}
          >
            <MenuItem value={0}><em>None</em></MenuItem>
            {cityMenueItems}
          </Select>
        </FormControl>
      </form>
    );
  }
}
// SelectField.propTypes = {
//  classes: PropTypes.object.isRequired,
// };

// Class components are a little more cumbersome.
// Due to a current limitation in TypeScript's decorator support, withStyles can't be used as a class decorator.
// Instead, we decorate a class component like so:
// https://material-ui-next.com/guides/typescript/
export default withStyles(styles as  any)(SelectField);


