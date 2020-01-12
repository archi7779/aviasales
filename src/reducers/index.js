import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as _ from 'lodash';
import * as actions from '../actions';
import { filterAndSort, onlySort } from './functionsToUse';

const transplantationFilter = handleActions(
  {
    [actions.handleRadio](state, { payload }) {
      return { ...state, [payload]: !state[payload] };
    },
  },
  {
    all: true,
    0: false,
    1: false,
    2: false,
    3: false,
  }
);

const tickets = handleActions(
  {
    // eslint-disable-next-line no-shadow
    [actions.saveTicketsToState](state, { payload: { tickets } }) {
      return [...state, ...tickets];
    },
  },
  []
);

const sortWith = handleActions(
  {
    [actions.handleSortBClick](state, { payload }) {
      return state.sortWith === payload ? state : { sortWith: payload };
    },
  },
  { sortWith: 'price' }
);

const filteredTickets = handleActions(
  {
    [actions.filterTickets](
      state,
      {
        payload: {
          transFilter,
          // eslint-disable-next-line no-shadow
          sortWith: { sortWith },
          // eslint-disable-next-line no-shadow
          tickets,
        },
      }
    ) {
      // переводим фильтры в нужный тип
      const activeFilters = _.omitBy(transFilter, value => !value);
      const activeFiltersAsArray = Object.keys(activeFilters);
      // тут фильтр all = true -> сразу сортируем ||  Если ни 1 фильтр не выбран.
      if (activeFiltersAsArray.includes('all') || activeFiltersAsArray.length === 0) {
        return onlySort(tickets, sortWith);
      }
      // тут фильтруем и потом сортируем
      return filterAndSort(tickets, activeFiltersAsArray, sortWith);
    },
  },
  []
);

const ticketsStatus = handleActions(
  {
    [actions.getTicketsStateRequest]() {
      return 'requested';
    },
    [actions.getTicketsStateSuccess]() {
      return 'success';
    },
    [actions.getTicketsFailure]() {
      return 'failure';
    },
  },
  'none'
);
export default combineReducers({
  transplantationFilter,
  ticketsStatus,
  tickets,
  filteredTickets,
  sortWith,
});
