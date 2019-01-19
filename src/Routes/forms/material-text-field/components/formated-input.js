import React from 'react';
import MaskedInput from 'react-text-mask';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;
  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;
  return (
    <NumberFormat
      {...other}
      ref={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value,
          },
        });
      }}
      thousandSeparator
      prefix="$"
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default class FormattedInputs extends React.Component {
  state = {
    textmask: '(1  )    -    ',
    numberformat: '1320',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col-sm-6 col-md-6 col-xl-4">
          <Input fullWidth value={this.state.textmask} inputComponent={TextMaskCustom}
            onChange={this.handleChange('textmask')}
            inputProps={{ 'aria-label': 'Description', }}
          />
        </div>
        <div className="col-sm-6 col-md-6 col-xl-4">
          <Input fullWidth value={this.state.numberformat} onChange={this.handleChange('numberformat')}
            inputComponent={NumberFormatCustom}
            inputProps={{ 'aria-label': 'Description', }}
          />
        </div>
      </div>
    );
  }
}
