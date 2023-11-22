import React, { useEffect, useState } from 'react'
import Adduser from './Adduser'
import FormComponent from './FormComponent';
import { fetchAllUsers , deleteUser, updateUser, updateTask} from '../Redux/Action/UserAction'
import { connect } from "react-redux";
import Model from './Model';


const UserList = ({userData, fetchAllUsers, deleteUser, updateUser, updateTask }) => {
   const [showDeleteModel , setshowDeleteModel] = useState(false)
   const [showEditModel , setshowEditModel] = useState(false);
   const [showTickModel , setshowTickModel] =  useState(false);
   const [showCrossModel, setshowCrossModel] = useState(false);
   const [forDifferentButton, setforDifferentButton] = useState(false);
   const [selectedUser , setselectedUser] = useState(null);
  

 useEffect(() =>{
  getAllUser();
  // console.log("userdata 2" , userData);
 }, []);
 
 async function getAllUser(){
  await fetch("http://localhost:3000/user")
        .then(res => res.json())
        .then((data) => { 
          // console.log(data);
          fetchAllUsers(data) })
        .catch((error) => console.log(error));
}

//  console.log("userdata 1" , userData);

 function handleClickDelete(userInfo){
    setshowDeleteModel(true);
    setselectedUser(userInfo);
 }

 function handleClickEdit(userInfo){
  setshowEditModel(true);
  setselectedUser(userInfo);
}

function handleClicktick(userInfo){
  setshowTickModel(true);
  setselectedUser(userInfo);
}

function handleClickCross(userInfo){
  setshowCrossModel(true);
  setselectedUser(userInfo);
}

function handleClose(){
  setshowCrossModel(false);
  setshowTickModel(false);
  setshowEditModel(false);
  setshowDeleteModel(false);
}


function tickfunction(){
  fetch(`http://localhost:3000/user/${selectedUser.id}` , {
    method: 'PUT',
    headers : {
      "Content-Type" : "application/json"
    },
    body : JSON.stringify({
      name : selectedUser.name,
      email: selectedUser.email,
      designation : selectedUser.designation,
      status : selectedUser.status,
      task : 'APPROVED'
    }) 
  })
  .then(res => res.json())
    .then((data) => {
      console.log(selectedUser);
      updateTask(selectedUser.id ,data);
      setshowTickModel(false);
    })
    .catch(e => console.log(e))
}

function crossfunctionButton1(){
  fetch(`http://localhost:3000/user/${selectedUser.id}` , {
    method: 'PUT',
    headers : {
      "Content-Type" : "application/json"
    },
    body : JSON.stringify({
      name : selectedUser.name,
      email: selectedUser.email,
      designation : selectedUser.designation,
      status : selectedUser.status,
      task : 'Ressigned'
    }) 
  })
  .then(res => res.json())
    .then((data) => {
      console.log(selectedUser);
      updateTask(selectedUser.id ,data);
      setshowCrossModel(false);
    })
    .catch(e => console.log(e))
}
function crossfunctionButton2(){
  
  fetch(`http://localhost:3000/user/${selectedUser.id}` , {
    method: 'PUT',
    headers : {
      "Content-Type" : "application/json"
    },
    body : JSON.stringify({
      name : selectedUser.name,
      email: selectedUser.email,
      designation : selectedUser.designation,
      status : selectedUser.status,
      task : "Removed"
    }) 
  })
  .then(res => res.json())
    .then((data) => {
      console.log(selectedUser);
      updateTask(selectedUser.id ,data);
      setshowCrossModel(false);
    })
    .catch(e => console.log(e))
}


function editUserAction(){
  fetch(`http://localhost:3000/user/${selectedUser.id}` , {
    method : 'PUT',
    headers : {
      "Content-Type": "application/json",
    }, 
    body: JSON.stringify({
      name : selectedUser.name,
      email: selectedUser.email,
      designation : selectedUser.designation,
      status : selectedUser.status
    })
  })
  .then(res => res.json())
    .then((data) => {
      updateUser(selectedUser.id ,data);
      setshowEditModel(false);
    })
    .catch(e => console.log(e))
}

 function deleteUserAction(){
    fetch(`http://localhost:3000/user/${selectedUser.id}`,{
       method : 'DELETE',
       headers : {
          "Content-Type": "application/json",
       }
    })
    .then((res) => {
      if(res.ok === true)
      {
        deleteUser(selectedUser.id);
      }
      setshowDeleteModel(false);
    })
    .catch(e => console.log(e));
 }


  return (
    <div className=''>
       <div>
          <Adduser/>
       </div>
       <div>
       <table class="table">
    <thead class="thead-dark">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">NAME</th>
      <th scope="col">EMAIL</th>
      <th scope="col">DESIGNATION</th>
      <th scope="col">STATUS</th>
      <th scope="col">TASK</th>
      <th scope="col">BUTTON</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    { 
       userData.map((data) => (
         <tr key = {data.id}>
           <th scope="row">{data.id}</th>
           <td>{data.name}</td>
           <td>{data.email}</td>
           <td> {data.designation} </td>
           <td> {data.status} </td>
           <td> {data.task}  </td>
           <td><button onClick={() => handleClicktick(data)} >Tick</button></td>
           <td><button onClick={() => handleClickCross(data)} >Cross</button></td>
           <td><button onClick={() => handleClickEdit(data)} >edit</button></td>
           <td><button onClick={() => handleClickDelete(data)}>delete</button></td>
         </tr>
       ))
    }
   
    </tbody>
  </table>
    </div>
    {
        showDeleteModel && 
        <Model
          show = {showDeleteModel}
          setShow = {setshowDeleteModel}
          Action1 = {handleClose}
          Action2 = {deleteUserAction}
          title = { " DELETE USER"}
          content = { " Are You Sure you want to Delete This User? " }
          button1 = { "cancel"} 
          button2 = { "DELETE" }
          // confirmAction ={ username.name !== " " }
        />
     }
     {
        showEditModel && 
        <Model
          show = {showEditModel}
          setShow = {setshowEditModel}
          Action1 = {handleClose}
          Action2 = {editUserAction}
          title = { " Edit USER]"}
          content = {  <FormComponent username = {selectedUser} setusername = {setselectedUser}/> }
          button1 = { "cancel"} 
          button2 = { " UPDATE " }
          // confirmAction ={ username.name !== " " }
        />
     }
     {
        showTickModel && 
        <Model
          show = {showTickModel}
          setShow = {setshowTickModel}
          Action1 = {handleClose}
          Action2 = {tickfunction}
          title = { " APPROVED USER"}
          content = { " Are You Sure you want to APPROVED This User? " }
          button1 = { "Cancel"} 
          button2 = { "APPROVED" }

          // confirmAction ={ username.name !== " " }
        />
     }
      {
        showCrossModel && 
        <Model
          show = {showCrossModel}
          setShow = {setshowCrossModel}
          Action1 = {crossfunctionButton1}
          Action2 = {crossfunctionButton2}
          title = { " REMOVE USER"}
          content = { " Are You Sure This User is REMOVED? " }
          button1 = { "NO"} 
          button2 = { "YES" }
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
    fetchAllUsers: (data) => dispatch(fetchAllUsers(data)),
    deleteUser : (id) => dispatch(deleteUser(id)),
    updateUser : (id, data) =>dispatch(updateUser(id, data)),
    updateTask : (id, data) =>dispatch(updateTask(id, data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);