import { API_URL, BASE_URL } from '../config';

import axios from 'axios';

/* action name creator */
const reducerName = 'cars';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* SELECTORS */
export const getCars = ({ cars }) => cars.data;
export const getRequest = ({ cars }) => cars.request;
export const getSpecs = ({ cars }) => cars.specs;

/* ACTIONS */
export const LOAD_CARS = createActionName('LOAD_CARS');
export const CHANGE_SPECS = createActionName('CHANGE_SPECS');
export const CHANGE_FEATURES = createActionName('CHANGE_FEATURES');
export const START_REQUEST = createActionName('START_REQUEST');
export const END_REQUEST = createActionName('END_REQUEST');
export const ERROR_REQUEST = createActionName('ERROR_REQUEST');
export const RESET_REQUEST = createActionName('RESET_REQUEST');

/* ACTION CREATORS */
export const changeSpecs = (payload) => ({
  payload,
  type: CHANGE_SPECS,
});
export const changeFeatures = (payload) => ({
  payload,
  type: CHANGE_FEATURES,
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
  specs: [
    { category: 'model', pick: '', price: 0 },
    { category: 'color', pick: '', price: 0 },
    { category: 'engine', pick: '', price: 0 },
    { category: 'gearbox', pick: '', price: 0 },
    { category: 'interior', pick: '', price: 0 },
    { category: 'layout', pick: '', price: 0 },
    { category: 'features', pick: [] },
  ],
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
    case CHANGE_SPECS:
      const spec = statePart.specs.find(
        (el) => el.category === action.payload.category
      );
      spec.pick = action.payload.pick;
      if (action.payload.category !== 'features') {
        spec.price = action.payload.price;
      }
      const specsUpdate = statePart.specs.map((el) =>
        el.category === action.payload.category ? spec : el
      );
      return {
        ...statePart,
        specs: specsUpdate,
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
