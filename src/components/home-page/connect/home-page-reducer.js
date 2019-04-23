const homePageReducer = (state = {}, action) => {
    switch (action.type) {
      case 'GET_HOMEPAGE_INFO':
      return {
        ...state,
          actionCalled: action.actionCalled
      }
      default:
        return state
    }
  }
  
  export default homePageReducer;
  