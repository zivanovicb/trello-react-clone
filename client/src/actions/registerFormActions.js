export function validateName(){
  return {
    type: 'VALIDATED_NAME'
  }
}

export function validateEmail(val){
  return {
    type: 'VALIDATED_EMAIL',
    val
  }
}

export function validatePassword(val){
  return {
    type: 'VALIDATED_PASSWORD',
    val
  }
}
export function unvalidateName(){
  return {
    type: 'INVALID_NAME'
  }
}

export function unvalidateEmail(){
  return {
    type: 'INVALID_EMAIL'
  }
}

export function unvalidatePassword(){
  return {
    type: 'INVALID_PASSWORD'
  }
}
