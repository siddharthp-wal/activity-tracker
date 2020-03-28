//contains code for reducer function.
const initialState ={
  isAuthenticated:false,
}

const Reducer =(state=initialState,{ type , payload }) =>{

  switch(type){
      case 'ADD_USER':
          return { isAuthenticated : true };
      case 'CLEAR_USER':
          return { isAuthenticated : false };
      default :
          return state;
  }
};
export default Reducer;

























//functions that will handle sending requests to the API and dispatching actions to our redux store.

const clearUserAction = () => ({
    type: 'CLEAR_USER'
  });

  
// const logoutUser = () => dispatch => {
//     dispatch(clearUserAction());
//     localStorage.clear();
//     sessionStorage.clear();
//   };

// export default logoutUser;