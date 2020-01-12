import { createAction } from 'redux-actions';
import axios from 'axios';

export const handleRadio = createAction('HANDLE_RADIO_BUTTON');

export const getTicketsStateRequest = createAction('GET_TICKETS_IN_REQUEST');
export const getTicketsStateSuccess = createAction('GET_TICKETS_SUCCESS');
export const getTicketsFailure = createAction('GET_TICKETS_FAILURE');

export const filterTickets = createAction('FILTER_TICKETS_IN_STATE');
export const saveTicketsToState = createAction('SAVE_TICKETS_TO_STATE');

export const getTickets = () => async dispatch => {
  dispatch(getTicketsStateRequest());
  const firstRes = await axios.get('https://front-test.beta.aviasales.ru/search');
  const { searchId } = firstRes.data;
  const receeiveTickets = async () => {
    try {
      const secondRes = await axios.get(
        `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`
      );
      dispatch(saveTicketsToState(secondRes.data));
      if (!secondRes.data.stop) {
        await receeiveTickets();
      } else {
        dispatch(getTicketsStateSuccess());
      }
    } catch (error) {
      // тут видимо можно замутить обработку на коды ответа, чтобы если что не получился бесконечный цикл, при отключенном сервере
      if (error.response.status === 404) {
        dispatch(getTicketsFailure());
        return;
      }
      await receeiveTickets();
    }
  };
  await receeiveTickets();
};

export const handleSortBClick = createAction('SORT_BUTTON_CLICKED');
