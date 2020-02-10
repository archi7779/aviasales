import React from 'react';
import { connect } from 'react-redux';
import { Button, Spin } from 'antd';
import PropTypes from 'prop-types';
import * as actions from '../actions';
import Ticket from './Ticket';
import { OutPutWindowWrapper } from './styledComponents';

const mapStateToProps = state => {
  const props = {
    transFilter: state.transplantationFilter,
    ticketsStatus: state.ticketsStatus,
    tickets: state.tickets,
    sortWith: state.sortWith,
    filteredTickets: state.filteredTickets,
  };
  return props;
};

const actionCreators = {
  getTickets: actions.getTickets,
  handleSortBClick: actions.handleSortBClick,
  filterTickets: actions.filterTickets,
};

class SearchWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { transFilter, getTickets, sortWith } = this.props;
    getTickets(transFilter, sortWith);
  }

  componentDidUpdate(prevProps) {
    const { transFilter, sortWith, tickets, filterTickets } = this.props;
    if (
      transFilter !== prevProps.transFilter ||
      sortWith !== prevProps.sortWith ||
      tickets !== prevProps.tickets
    ) {
      filterTickets({ transFilter, sortWith, tickets });
    }
  }

  render() {
    const {
      ticketsStatus,
      filteredTickets,
      sortWith: { sortWith },
      handleSortBClick,
    } = this.props;
    return (
      <OutPutWindowWrapper>
        <div>
          <Button
            className="OutPut-button"
            onClick={() => {
              handleSortBClick('price');
            }}
            type={sortWith === 'price' ? 'primary' : ''}
          >
            Дешевый
          </Button>
          <Button
            className="OutPut-button"
            onClick={() => {
              handleSortBClick('speed');
            }}
            type={sortWith === 'speed' ? 'primary' : ''}
          >
            Быстрый
          </Button>
        </div>
        {ticketsStatus === 'failure' && <div>404 not found contact admin</div>}
        {ticketsStatus === 'requested' && (
          <div className="loaderWrapper">
            {' '}
            <Spin className="OutPut-loader" size="small" />{' '}
          </div>
        )}
        {filteredTickets.length > 0 &&
          filteredTickets
            .slice(0, 5)
            .map(ticket => (
              <Ticket
                ticketInfo={ticket}
                key={`${ticket.price}${ticket.carrier}${ticket.segments[0].duration}${ticket.segments[1].duration}`}
                className="OutPut-ticket"
              />
            ))}
      </OutPutWindowWrapper>
    );
  }
}

SearchWindow.propTypes = {
  transFilter: PropTypes.objectOf(PropTypes.bool).isRequired,
  getTickets: PropTypes.func.isRequired,
  sortWith: PropTypes.objectOf(PropTypes.string).isRequired,
  tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
  ticketsStatus: PropTypes.string.isRequired,
  filteredTickets: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSortBClick: PropTypes.func.isRequired,
  filterTickets: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, actionCreators)(SearchWindow);
