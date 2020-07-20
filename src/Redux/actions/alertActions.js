import { v4 as uuidv4 } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';
// import { toast } from 'react-toastify';

export const setAlert = (msg, timeOut = 2500) => (dispatch) => {
  const id = uuidv4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, id },
  });
  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeOut);
};

// export const setAlert = (msg) => (dispatch) => {
//   dispatch({
//     type: SET_ALERT,
//   });
//   toast.error({ msg });
// };
