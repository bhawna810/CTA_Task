import { 
    FETCH_USERS,
    ADD_USER,
    UPDATE_USER,
    DELETE_USER,
    UPDATE_TASK
 } from "../Action-Types/UserAction-Types";
 

export const fetchAllUsers = (data) => {
    // console.log(" action data value in updateUser" ,data);

    return {
      type: FETCH_USERS,
      payload:{ data},
    };
  };

export const addUser = (data) =>{

    // console.log(" action data value " ,data);

    return {
        type: ADD_USER,
        payload: {data}
    }
}

export const deleteUser = (id) =>{
    return {
        type:  DELETE_USER,
        payload: {id}
    }
}

export const updateUser = (id, updatedData) =>{
    return {
        type:  UPDATE_USER,
        payload: {id , updatedData }
    }
}

export const updateTask = (id, updatedData) =>{
      console.log(" action id value in updatetask" , id);
      console.log(" action data value in updateUser" , updatedData);
    //   console.log(" action selectedUser value in updateUser" , selectedUser);

    return {
        type:  UPDATE_TASK,
        payload: {id , updatedData}
    }
}