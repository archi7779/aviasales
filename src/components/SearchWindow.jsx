import React from 'react';
import { connect } from 'react-redux';
import { Radio } from 'antd';
import PropTypes from 'prop-types';
import * as actions from '../actions';
import { RadioBWrapper } from './styledComponents';

const mapStateToProps = state => {
  const props = {
    transFilter: state.transplantationFilter,
  };
  return props;
};

const actionCreators = {
  handleRadio: actions.handleRadio,
};

class SearchWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { handleRadio, transFilter } = this.props;
    return (
      <RadioBWrapper>
        <span className="RadioBItem">Количесвто Пересадок</span>
        <Radio
          value="all"
          onClick={event => handleRadio(event.target.value)}
          checked={transFilter.all}
          className="RadioBItem radio"
        >
          Все
        </Radio>
        <Radio
          value="0"
          onClick={event => handleRadio(event.target.value)}
          checked={transFilter[0]}
          className="RadioBItem radio"
        >
          Без пересадок
        </Radio>
        <Radio
          value="1"
          onClick={event => handleRadio(event.target.value)}
          checked={transFilter[1]}
          className="RadioBItem radio"
        >
          1 Пересадка
        </Radio>
        <Radio
          value="2"
          onClick={event => handleRadio(event.target.value)}
          checked={transFilter[2]}
          className="RadioBItem radio"
        >
          2 Пересадки
        </Radio>
        <Radio
          value="3"
          onClick={event => handleRadio(event.target.value)}
          checked={transFilter[3]}
          className="RadioBItem radio"
        >
          3 Пересадки
        </Radio>
      </RadioBWrapper>
    );
  }
}

SearchWindow.propTypes = {
  handleRadio: PropTypes.func.isRequired,
  transFilter: PropTypes.objectOf(PropTypes.bool).isRequired,
};

export default connect(mapStateToProps, actionCreators)(SearchWindow);
