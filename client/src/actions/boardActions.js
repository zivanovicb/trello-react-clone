const changeBoard = () => {
  console.log('wtf')
  return dispatch => {
    console.log('wtf1')
    setTimeout(() => {
      dispatch({
        type: 'CHANGE_BOARD'
      })
    },200)
  }
}

const boardActions = {
  changeBoard
}
export default boardActions
