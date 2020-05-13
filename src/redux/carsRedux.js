import { API_URL, BASE_URL } from '../config';

import axios from 'axios';

/* action name creator */
const reducerName = 'cars';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* SELECTORS */
export const getCars = ({ cars }) => cars.data;
export const getRequest = ({ cars }) => cars.request;
export const getSpecs = ({ cars }) => cars.carSpecs;

/* ACTIONS */

export const LOAD_CARS = createActionName('LOAD_CARS');
export const CHANGE_COLOR = createActionName('CHANGE_COLOR');
export const CHANGE_MODEL = createActionName('CHANGE_MODEL');
export const CHANGE_ENGINE = createActionName('CHANGE_ENGINE');
export const CHANGE_GEARBOX = createActionName('CHANGE_GEARBOX');
export const START_REQUEST = createActionName('START_REQUEST');
export const END_REQUEST = createActionName('END_REQUEST');
export const ERROR_REQUEST = createActionName('ERROR_REQUEST');
export const RESET_REQUEST = createActionName('RESET_REQUEST');

/* ACTION CREATORS */

export const changeModel = (payload) => ({
  payload,
  type: CHANGE_MODEL,
});
export const changeColor = (payload) => ({
  payload,
  type: CHANGE_COLOR,
});
export const changeEngine = (payload) => ({
  payload,
  type: CHANGE_ENGINE,
});
export const changeGearbox = (payload) => ({
  payload,
  type: CHANGE_GEARBOX,
});
export const loadCars = (payload) => ({ payload, type: LOAD_CARS });
export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = (error) => ({ error, type: ERROR_REQUEST });
export const resetRequest = () => ({ type: RESET_REQUEST });

/* INITIAL STATE */

const initialState = {
  data: [],
  request: {
    pending: false,
    error: null,
    success: null,
  },
  model: { pick: '', price: 0 },
  color: { pick: '', price: 0 },
  engine: { pick: '', price: 0 },
  gearbox: { pick: '', price: 0 },
};

/* REDUCER */

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case LOAD_CARS: {
      return {
        ...statePart,
        data: action.payload,
      };
    }
    case CHANGE_MODEL:
      return {
        ...statePart,
        model: { pick: action.payload.pick, price: action.payload.price },
      };
    case CHANGE_COLOR:
      return {
        ...statePart,
        color: { pick: action.payload.pick, price: action.payload.price },
      };
    case CHANGE_ENGINE:
      return {
        ...statePart,
        color: { pick: action.payload.pick, price: action.payload.price },
      };
    case CHANGE_GEARBOX:
      return {
        ...statePart,
        color: { pick: action.payload.pick, price: action.payload.price },
      };
    case START_REQUEST: {
      return {
        ...statePart,
        request: {
          pending: true,
          error: null,
          success: null,
        },
      };
    }
    case END_REQUEST: {
      return {
        ...statePart,
        request: {
          pending: false,
          error: null,
          success: true,
        },
      };
    }
    case ERROR_REQUEST: {
      return {
        ...statePart,
        request: {
          pending: false,
          error: action.error,
          success: false,
        },
      };
    }
    case RESET_REQUEST:
      return {
        ...statePart,
        request: { pending: false, error: null, success: null },
      };
    default:
      return statePart;
  }
}

/* THUNKS */

export const loadCarsRequest = () => {
  return async (dispatch) => {
    dispatch(startRequest());
    try {
      const res = await axios.get(`${BASE_URL}${API_URL}/car`);
      dispatch(loadCars(res.data));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};
