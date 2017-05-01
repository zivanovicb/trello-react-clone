const registerFormInitialState = {
  name: false,
  email: false,
  password: false,
  emailVal: '',
  passwordVal: ''
}

const registerFormReducer = (state=registerFormInitialState,action) => {
  switch(action.type){
    case 'VALIDATED_NAME':
      state = Object.assign({},state,{
        name:true
      })
      break;

    case 'VALIDATED_EMAIL':
      state = Object.assign({},state,{
        email:true,
        emailVal: action.val})
      break;
    case 'VALIDATED_PASSWORD':
      state = Object.assign({},state,{
        password:true,
        passwordVal: action.val})
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
