import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import "./CreatePopup.css";
import axios from 'axios';
import {Edit} from "@material-ui/icons";

export default ({title,desc,status,storyPoint,priority,id,getTasks}) => {
     const [Title,setTitle]=useState(title);
     const [Desc,setDesc]=useState(desc);
     const [Status,setStatus]=useState(status);
     const [Priority,setPriority]=useState(priority);
     const [StoryPoint,setStoryPoint]=useState(storyPoint);

    
     //console.log("huih");
     const handleClick =async (e)=>{
      
      await axios.put("https://kanban-board-react.herokuapp.com/api/update/tasks",{Title:Title,Desc:Desc,Status:Status,Priority:Priority,StoryPoint:StoryPoint,id:id},(res,data)=>{
            res.send(data);
        });
      //  console.log(resData);
      getTasks();
     };
  
  return(
    <Popup
     trigger={<Edit style={{color:"gray"}} />}
     modal
     nested
     >
     {close => (
       
       <div className="modal">
         <button className="close" onClick={close}>
           &times;
         </button>
         
         <div className="content">
                <h2>Edit Ticket</h2>
                <label style={{color:"gray"}} >Title</label>
               <input className='Title' type="text" name="Title" value={Title} onChange={e=>{ setTitle(e.target.value);} } />
             <div className='Container'>
                 <div className='left'>
                     <span>Description</span>
                     <div className='leftInner'>
                         <input type="text"  name="Desc" value={Desc} onChange={e=>{ setDesc(e.target.value);} }/>
                     </div>
                 </div>
                 
                 <div className='right'>
                     
                     <span>Status</span> <br/>
                     
                     <select name="Status"  onChange={e=>{ setStatus(e.target.value);} }>
                         <option>select</option>
                         <option value="NotCompleted">Not Started</option>
                         <option value="InProgress">In Progress</option>
                         <option value="completed">Completed</option>
                     </select><br/>
                     <span>Priority</span><br/>
                     <select name="Priority"  onChange={e=>{ setPriority(e.target.value);} }>
                         <option>select</option>
                         <option value="P1">P1</option>
                         <option value="P2">P2</option>
                         <option value="P3">P3</option>
                         <option value="P4">P4</option>
                     </select> <br/>
                     <span>Story point</span><br/>
                     <input type="number" name="point" value={StoryPoint} onChange={e=>{ setStoryPoint(e.target.value);} } />
 
                 </div>
             </div>
         </div>
         <div className="actions">
           
           <button
             className="button"
             onClick={() => {
               console.log('modal closed ');
               close();
             }}
           >
             cancel
           </button>
           <button className='kanbanButton' onClick={()=>{
                handleClick();
                close();
           }} >Save</button>
         </div>
       </div>
     )}
   </Popup>

     );
    
};
