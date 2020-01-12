import React from 'react';
import { Card } from 'antd';
import { format } from 'date-fns';
import PropTypes from 'prop-types';

export default class Ticket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getArravialDate = (dateStart, duration) => {
    const arivalDateMilisec = Date.parse(dateStart) + duration * 60000;
    const arrivalHours = format(new Date(arivalDateMilisec), 'HH');
    const arrivalMinutes = format(new Date(arivalDateMilisec), 'mm');
    const startHours = format(new Date(Date.parse(dateStart)), 'HH');
    const startMinutes = format(new Date(Date.parse(dateStart)), 'mm');
    return `${startHours}:${startMinutes} - ${arrivalHours}:${arrivalMinutes}`;
  };

  getTimeInSky = duration => {
    const minutes = duration % 60;
    const hours = (duration - minutes) / 60;
    return `${hours}ч ${minutes}м`;
  };

  getTransactionsString = stops => {
    if (stops.length === 0) {
      return 'БЕЗ ПЕРЕСАДОК';
    }
    if (stops.length === 1) {
      return '1 ПЕРЕСАДКА';
    }
    if (stops.length === 2) {
      return '2 ПЕРЕСАДКИ';
    }
    if (stops.length === 3) {
      return '3 ПЕРЕСАДКИ';
    }
    return 'mistake';
  };

  getTrasactionsABR = stops => {
    return stops.length > 0 && stops.join(', ');
  };

  render() {
    const {
      ticketInfo: { price, segments },
    } = this.props;
    const formatPrice = price.toLocaleString('ru', {
      useGrouping: true,
    });
    const wayForward = segments[0];
    const wayBack = segments[1];

    return (
      <div className="mainTicketWrapper">
        <Card
          title={`${formatPrice} Р`}
          extra={<img alt="s7Logo" src="./S7%20Logo.png" />}
          style={{ width: 500 }}
        >
          <div className="ticketWrapper">
            <span className="greyText">{`${wayForward.origin}-${wayForward.destination}`}</span>

            <span className="greyText centred">В ПУТИ</span>

            <span className="greyText">{this.getTransactionsString(wayForward.stops)}</span>

            <span className="blackText">
              {this.getArravialDate(wayForward.date, wayForward.duration)}
            </span>

            <span className="blackText centred">{this.getTimeInSky(wayForward.duration)}</span>

            <span className="blackText">{this.getTrasactionsABR(wayForward.stops)}</span>

            <span className="greyText">{`${wayBack.origin}-${wayBack.destination}`}</span>

            <span className="greyText centred">В ПУТИ</span>

            <span className="greyText">{this.getTransactionsString(wayBack.stops)}</span>

            <span className="blackText">
              {this.getArravialDate(wayBack.date, wayBack.duration)}
            </span>

            <span className="blackText centred">{this.getTimeInSky(wayBack.duration)}</span>

            <span className="blackText">{this.getTrasactionsABR(wayBack.stops)}</span>
          </div>
        </Card>
      </div>
    );
  }
}
//
Ticket.propTypes = {
  ticketInfo: PropTypes.shape({
    price: PropTypes.number.isRequired,
    carrier: PropTypes.string.isRequired,
    segments: PropTypes.array.isRequired,
  }).isRequired,
};
