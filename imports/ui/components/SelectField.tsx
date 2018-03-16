
import * as React from 'react';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem, Theme } from 'material-ui';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import { ISelectItems } from '../App';
import withStyles from 'material-ui/styles/withStyles';

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

interface ISelectFieldState {
   value?: string
 };

export interface ISelectFieldProps {
  changeHandler: any;
  classes: any;
  itemList: ISelectItems[];
  label: string;
  name: string;
  value: string;
}


export class SelectField extends React.Component<ISelectFieldProps, ISelectFieldState> {

  constructor(props: ISelectFieldProps) {
    super(props as any);
    this.handleChange = this.handleChange.bind(this);
    console.log('constructor');
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    window.console.log('handleChange called: name:' + event.currentTarget.textContent 
      + ' value:' + event.target.value);
    this.props.changeHandler(event);
  }

  createMenueList(itemList: ISelectItems[]) {
      // FIXME type should be MenuItem instead of any
      // const cityMenueItems: React.ReactElement<ReactElement.MenuItem>[] = [];
      const menuItems: any = [];
      for (let i = 0; i < itemList.length; i++ ) {
        const name: string = itemList[i].value;
        const key: number = itemList[i].key;
        const item = <MenuItem key={key} value={key}>{name}</MenuItem>;
        menuItems.push(item);
        console.log('Add item to the Select Item list: key:'+key + '  name:' + name);
      }
      return menuItems;
  }

  render() {
    
    const menueItems = this.createMenueList(this.props.itemList);
    const value = this.props.value;

    return (
      <form className={this.props.classes.container} autoComplete="off">
        <FormControl className={this.props.classes.formControl}>
          <InputLabel htmlFor="simple Select List">{this.props.label}</InputLabel>
          <Select
            // Before: value= {this.state.name}
            value = {value}
            onChange={this.handleChange.bind(this)}
            input={<Input name={this.props.name} id={this.props.name}/>}
          >
            <MenuItem value={0}><em>None</em></MenuItem>
            {menueItems}
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


