const registerFormInitialState = {
  name: false,
  email: false,
  password: false
}

const registerFormReducer = (state=registerFormInitialState,action) => {
  switch(action.type){
    case 'VALIDATED_NAME':
      state = Object.assign({},state,{name:true})
      break;

    case 'VALIDATED_EMAIL':
      state = Object.assign({},state,{email:true})
      break;
    case 'VALIDATED_PASSWORD':
      state = Object.assign({},state,{password:true})
      break;
    case 'INVALID_NAME':
      state = Object.assign({},state,{name:false})
      break;
    case 'INVALID_EMAIL':
      state = Object.assign({},state,{email:false})
      break;
    case 'INVALID_PASSWORD':
      state = Object.assign({},state,{password:false})
      break;
    default:
      return state
  }
  return state;
}

export default registerFormReducer;
