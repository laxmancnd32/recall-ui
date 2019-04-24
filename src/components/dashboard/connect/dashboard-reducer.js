const homePageReducer = (state = {}, action) => {
    switch (action.type) {
      case 'GET_DASHBOARD_INFO':
      return {
        ...state,
          actionCalled: action.actionCalled
      }
      default:
        return state
    }
  }
  
  export default homePageReducer;
  