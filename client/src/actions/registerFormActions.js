export function validateName(){
  return {
    type: 'VALIDATED_NAME'
  }
}

export function validateEmail(){
  return {
    type: 'VALIDATED_EMAIL'
  }
}

export function validatePassword(){
  return {
    type: 'VALIDATED_PASSWORD'
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
