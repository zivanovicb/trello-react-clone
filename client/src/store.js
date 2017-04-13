import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';


import Boarding from './home/components/boarding.jpg';
import Marketing from './home/components/marketing.jpg';
import Sales from './home/components/sales.jpg';

const slides = [
  {
    text: 'The Marketing Team moves blog content through the editorial calendar all the way from "Writing" to "Published".',
    img: Marketing
  },
  {
    text: 'Onboarding new employees is easy for the People Team since they share orientation details directly on a Trello board.',
    img: Boarding
  },
  {
    text: 'The Sales Team updates the status of leads directly in the sales pipeline for all to see.',
    img: Sales
  }
]

const boardReducer = (state={
  slides,
  currentSlide: 0,
  lastValues: []
}, action) => {
  switch(action.type){
    case 'CHANGE_BOARD':
      state = {
        ...state,
        currentSlide: state.currentSlide + 1
        // lastValues: [...state.lastValues,action.payload]
      }
      break;
    default:
      return state;
  }
  return state;
}
const logger = createLogger()

const store = createStore(boardReducer,applyMiddleware(logger,ReduxThunk));
store.subscribe(() => {
  console.log('Store has been updated!', store.getState())
})
export default store;
