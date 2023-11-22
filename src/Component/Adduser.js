import React, { useState } from 'react'
import Model from './Model';
import FormComponent  from './FormComponent'
import { addUser } from '../Redux/Action/UserAction';
import { connect } from "react-redux";


const initialUser = {
  name : '',
  email: '',
  designation : 'software Engineer',
  status : 'invalid',
  task: ''
}

const Adduser = ({userData , addUser}) => {
  const [showAddModel, setshowAddModel] = useState(false);
  const [username , setusername] = useState(initialUser);
  
  // console.log("userData" , userData);
  // console.log("username 1" , username);

  function addUserFunction(){

    //  console.log("username 2" , username);

     fetch("http://localhost:3000/user" , {
      method: 'POST',
      headers : { "Content-Type": "application/json"},
      body :  JSON.stringify({
        name : username.name,
        email: username.email,
        designation : username.designation,
        status : username.status,
        task : ' '
      })
     })
     .then(res => res.json())
     .then(data => {

      // console.log(" data " , data);
      addUser(data);
      setshowAddModel(false);
      setusername(initialUser);
     })
     .catch(e => console.log(e));
  }
  
  function handleAdd(){
    setshowAddModel(true);
  }

  function handleClose(){
    setshowAddModel(false);
  }
  // function validemail(){

  // }

  return (
    <div>
        <button type="button" class="btn btn-primary">All users {userData.length}</button>
        <button 
           type="button" 
           class="btn btn-primary" 
           onClick={handleAdd}
        >
            AddUser
        </button>

        {
            showAddModel && 
            <Model
              show = {showAddModel}
              setShow = {setshowAddModel}
              Action1 = {handleClose}
              Action2 = {addUserFunction}
              title = { " Add new user"}
              content = { <FormComponent username = {username} setusername = {setusername} />}
              button1 = { "cancel"} 
              button2 = { "Add" }
            />
        }
    </div>
  )
}




const mapStateToProps = (state) => {
  return {
    userData: state.user.userData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (data) => dispatch(addUser(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Adduser);

