/* eslint-disable default-case */

import { 
    FETCH_USERS,
    ADD_USER,
    UPDATE_USER,
    DELETE_USER,
    UPDATE_TASK
 } from "../Action-Types/UserAction-Types";


const intialState = {
    userData : [],
}

export const UserReducer = (state = intialState , action) => {
  
    console.log("Reducer data value "  ,action.payload);

 switch (action.type) {
    case FETCH_USERS:
        return { ...state, userData: action.payload.data };
        
    case ADD_USER:  
        return{ ...state, userData: [...state.userData, action.payload.data]};

    case DELETE_USER:  
        return{ 
            ...state, 
            userData : state.userData.filter((user) => user.id !== action.payload.id),
        };

    case UPDATE_USER:  
        return{ ...state, 
            userData : state.userData.map((user) => 
                user.id === action.payload.id 
                ? {
                     ...user,
                     ...action.payload.updatedData,
                    
                } 
                : user
            ),
        };

    case UPDATE_TASK:  
        return{ ...state, 
            userData : state.userData.map((user) => 
                user.id === action.payload.id 
                ? {
                     ...user,
                     ...action.payload.updatedData,
                    
                } 
                : user
            ),
        };
    
    default:
        return state;
    }
 };


export default UserReducer;