//functions that will handle sending requests to the API and dispatching actions to our redux store.

const clearUserAction = () => ({
    type: 'CLEAR_USER'
  });

  
const logoutUser = () => dispatch => {
    dispatch(clearUserAction());
    localStorage.clear();
    sessionStorage.clear();
  };

export default logoutUser;