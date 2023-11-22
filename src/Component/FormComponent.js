import { Form } from "react-bootstrap";

const FormComponent = ({ username , setusername}) =>{
    
    return(
     <div>
         <Form>
               {
                 username.id !== undefined && 
                 <Form.Group className="mb-3">
                   <Form.Label>ID</Form.Label>
                   <Form.Control
                     type="number"
                     placeholder="id"
                     name="id"
                     value={username.id}
                     onChange={(e) => setusername({ ...username, id: e.target.value })}
                     required
                   />
                 </Form.Group>       
                }
                 <Form.Group className="mb-3">
                   <Form.Label>Name</Form.Label>
                   <Form.Control
                     type="text"
                     placeholder="name"
                     name="name"
                     value={username.name}
                     onChange={(e) => setusername({ ...username, name: e.target.value })}
                     required
                   />
                 </Form.Group>
                 <Form.Group className="mb-3">
                   <Form.Label>Email</Form.Label>
                   <Form.Control
                     type="email"
                     placeholder="email"
                     name="email"
                     value={username.email}
                     onChange={(e) => setusername({ ...username, email: e.target.value })}
                   />
                 </Form.Group>
                 <Form.Group className="mb-3">
                   <Form.Label>Designation</Form.Label>
                   <Form.Control
                     as="select"
                     name="designation"
                     value={username.designation}
                     onChange={(e) =>
                       setusername({
                         ...username,
                         designation: e.target.value,
                       })
                     }
                   >
                     <option value="Software Engineer">Software Engineer</option>
                     <option value="Sr. Software Engineer">Sr. Software Engineer</option>
                     <option value="Tech Lead">Tech Lead</option>
                     <option value="Product Manager">Product Manager</option>
                   </Form.Control>
                 </Form.Group>
         
                 <Form.Group className="mb-3">
                   <Form.Label>Status</Form.Label>
                   <Form.Control
                     as="select"
                     name="status"
                     value={username.status} // Convert boolean to string
                     onChange={(e) =>
                       setusername({
                         ...username,
                         status: e.target.value,
                       })
                     }
                   >
                     <option value="valid">Active</option>
                     <option value="invalid">Inactive</option>
                   </Form.Control>
                   </Form.Group>
               </Form>
 
      </div>
    );
 };

 export default FormComponent;