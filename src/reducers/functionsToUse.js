const sort = (filteredTickets, sortWith) => {
  if (sortWith === 'speed') {
    const filteredAndSortedTickets = filteredTickets.sort((first, second) => {
      const timeForward = first.segments[0].duration + first.segments[1].duration;
      const timeBack = second.segments[0].duration + second.segments[0].duration;
      return timeForward - timeBack;
    });
    return [...filteredAndSortedTickets];
  }
  const filteredAndSortedTickets = filteredTickets.sort(
    (first, second) => first.price - second.price
  );
  return [...filteredAndSortedTickets];
};

export const filterAndSort = (tickets, filters, sortWith) => {
  const filteredTickets = tickets.filter(ticket => {
    const tempFiltered = ticket.segments.map(flight => {
      const numOfTransplantations = flight.stops.length;
      return filters.includes(numOfTransplantations.toString());
    });
    return tempFiltered[0] === true && tempFiltered[1] === true;
  });
  return sort(filteredTickets, sortWith);
};

export const onlySort = (tickets, sortWith) => {
  return sort(tickets, sortWith);
};
