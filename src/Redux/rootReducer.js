//contains code for reducer function.
import moment from 'moment';

const initialState = {
  isAuthenticated: false,
  dateT: "",
  activity : []
};

const Reducer = (state = initialState, { type, payload }) => {
  let dt = moment(new Date()).toDate()
  let date = dt.getDate();
  let month = dt.getMonth()+1
  let year = dt.getFullYear();

  switch (type) {
    case "ADD_USER":
      const username = localStorage.getItem("username");
      if (!username) {
        return { ...state, isAuthenticated: false };
      } else {
        return { ...state, isAuthenticated: true };
      }
    case "CLEAR_USER":
      sessionStorage.clear();
      localStorage.clear();
      return { 
        ...state, 
        isAuthenticated: false 
      };

    case "INCREMENT_DATE":
      date = dt.getDate()+1;
      console.log("from reducer increment",date+"-"+month+"-"+year)
      return { ...state,
         dateT: date+"-"+month+"-"+year
        };

    case "DECREMENT_DATE":
      
      date = dt.getDate()-1;
      console.log("from reducer decreent",date+"-"+month+"-"+year)
      return { 
        ...state,
        dateT: date+"-"+month+"-"+year
      };

    case "CURRENT_DATE":
      return { 
        ...state, 
        dateT: date+"-"+month+"-"+year
      };

    case "GET_ACTIVITY":
        return { 
          ...state, 
          activity: payload
        }
    default:
      return state;
  }
};
export default Reducer;
