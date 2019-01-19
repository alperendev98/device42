/**
 * Select List
 */
import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';

import NativeSelect from './components/native-select';
import MultiSelect from './components/multiselect';

// intl messages
import IntlMessages from 'Util/IntlMessages';

// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

// rct card box
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

export default class SimpleSelect extends React.Component {

  state = {
    age: '',
    name: 'hai',
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="select-wrapper">
        <PageTitleBar title={<IntlMessages id="sidebar.selectList" />} match={this.props.match} />
        <RctCollapsibleCard heading="Simple Select">
          <form autoComplete="off">
            <div className="row">
              <div className="col-sm-6 col-md-6 col-xl-3">
                <div className="form-group">
                  <FormControl fullWidth>
                    <InputLabel htmlFor="age-simple">Age</InputLabel>
                    <Select value={this.state.age} onChange={this.handleChange}
                      inputProps={{ name: 'age', id: 'age-simple', }}>
                      <MenuItem value=""><em>None</em></MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="form-group">
                  <FormControl disabled fullWidth>
                    <InputLabel htmlFor="name-disabled">Name</InputLabel>
                    <Select
                      value={this.state.name}
                      onChange={this.handleChange}
                      input={<Input name="name" id="name-disabled" />}>
                      <MenuItem value=""><em>None</em></MenuItem>
                      <MenuItem value="olivier">Olivier</MenuItem>
                      <MenuItem value="hai">Hai</MenuItem>
                      <MenuItem value="kevin">Kevin</MenuItem>
                    </Select>
                    <FormHelperText>Disabled</FormHelperText>
                  </FormControl>
                </div>
                <div className="form-group">
                  <FormControl fullWidth>
                    <InputLabel htmlFor="age-simple">Age</InputLabel>
                    <Select
                      value={this.state.age}
                      onChange={this.handleChange}
                      input={<Input name="age" id="age-simple" />}
                      autoWidth>
                      <MenuItem value=""><em>None</em></MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <FormHelperText>Auto width</FormHelperText>
                  </FormControl>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-xl-3">
                <div className="form-group">
                  <FormControl fullWidth>
                    <InputLabel htmlFor="age-helper">Age</InputLabel>
                    <Select value={this.state.age} onChange={this.handleChange}
                      input={<Input name="age" id="age-helper" />}>
                      <MenuItem value=""><em>None</em></MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <FormHelperText>Some important helper text</FormHelperText>
                  </FormControl>
                </div>
                <div className="form-group">
                  <FormControl error fullWidth>
                    <InputLabel htmlFor="name-error">Name</InputLabel>
                    <Select
                      value={this.state.name}
                      onChange={this.handleChange}
                      name="name"
                      renderValue={value => `⚠️  - ${value}`}
                      input={<Input id="name-error" />}>
                      <MenuItem value=""><em>None</em></MenuItem>
                      <MenuItem value="hai">Hai</MenuItem>
                      <MenuItem value="olivier">Olivier</MenuItem>
                      <MenuItem value="kevin">Kevin</MenuItem>
                    </Select>
                    <FormHelperText>Error</FormHelperText>
                  </FormControl>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-xl-3">
                <div className="form-group">
                  <FormControl fullWidth>
                    <InputLabel htmlFor="age-helper">Age</InputLabel>
                    <Select
                      value={this.state.age}
                      onChange={this.handleChange}
                      input={<Input name="age" id="age-helper" />}>
                      <MenuItem value=""><em>None</em></MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <FormHelperText>Some important helper text</FormHelperText>
                  </FormControl>
                </div>
                <div className="form-group">
                  <FormControl fullWidth>
                    <InputLabel htmlFor="name-input">Name</InputLabel>
                    <Input id="name-input" />
                    <FormHelperText>Alignment with an input</FormHelperText>
                  </FormControl>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-xl-3">
                <div className="form-group">
                  <FormControl fullWidth>
                    <Select
                      value={this.state.age}
                      onChange={this.handleChange}
                      displayEmpty
                      name="age">
                      <MenuItem value=""><em>None</em></MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <FormHelperText>Without label</FormHelperText>
                  </FormControl>
                </div>
                <div className="form-group">
                  <FormControl fullWidth>
                    <InputLabel htmlFor="name-readonly">Name</InputLabel>
                    <Select
                      value={this.state.name}
                      onChange={this.handleChange}
                      input={<Input name="name" id="name-readonly" readOnly />}>
                      <MenuItem value=""><em>None</em></MenuItem>
                      <MenuItem value="hai">Hai</MenuItem>
                      <MenuItem value="olivier">Olivier</MenuItem>
                      <MenuItem value="kevin">Kevin</MenuItem>
                    </Select>
                    <FormHelperText>Read only</FormHelperText>
                  </FormControl>
                </div>
              </div>
            </div>
          </form>
        </RctCollapsibleCard>
        <RctCollapsibleCard heading="Native Select">
          <NativeSelect />
        </RctCollapsibleCard>
        <RctCollapsibleCard heading="Multi Select List">
          <MultiSelect />
        </RctCollapsibleCard>
      </div>
    );
  }
}
