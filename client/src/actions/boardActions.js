export function changeBoard(){
  return function(dispatch){
    setTimeout(() => {
      dispatch({
        type: 'CHANGE_BOARD'
      })
    },4000)
  }
}
