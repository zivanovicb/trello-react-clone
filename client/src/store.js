import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';


// const boardReducer = (state={
//   slides,
//   currentSlide: 0,
//   lastValues: []
// }, action) => {
//   switch(action.type){
//     case 'CHANGE_BOARD':
//       if(state.currentSlide == slides.length-1){
//         state = {
//           ...state,
//           currentSlide: 0
//         }
//       }else{
//         state = {
//           ...state,
//           currentSlide: state.currentSlide + 1
//         }
//       }
//
//       break;
//     default:
//       return state;
//   }
//   return state;
// }
const logger = createLogger()

const registerFormInitialState = {
  name: false,
  email: false,
  password: false
}

const registerFormReducer = (state=registerFormInitialState,action) => {
  switch(action.type){
    case 'VALIDATED_NAME':
      state = {
        ...state,
        name: true
      }
      break;

    case 'VALIDATED_EMAIL':
      state = {
        ...state,
        email: true
      }
      break;
    case 'VALIDATED_PASSWORD':
      state = {
        ...state,
        password: true
      }
      break;
    case 'INVALID_NAME':
      state = {
        ...state,
        name: false
      }
      break;
    case 'INVALID_EMAIL':
      state = {
        ...state,
        email: false
      }
      break;
    case 'INVALID_PASSWORD':
      state = {
        ...state,
        password: false
      }
      break;
    default:
      return state
  }
  return state;
}
const store = createStore(registerFormReducer,applyMiddleware(logger));

export default store;
