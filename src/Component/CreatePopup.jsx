import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import "./CreatePopup.css";
import axios from 'axios';


export default ({getTasks}) => {
  
     const [Title,setTitle]=useState("");
     const [Desc,setDesc]=useState("");
     const [Status,setStatus]=useState("");
     const [Priority,setPriority]=useState("");
     const [StoryPoint,setStoryPoint]=useState("");

     const handleClick =async (e)=>{
        const resData=await axios.post("https://kanban-board-react.herokuapp.com/api/tasks",{Title:Title,Desc:Desc,Status:Status,Priority:Priority,StoryPoint:StoryPoint},(res,data)=>{

        });
        console.log(resData);
        getTasks();
     };
  
  return(
    <Popup
     trigger={<button className='kanbanButton'>Create</button>}
     modal
     nested
     >
     {close => (
       
       <div className="modal">
         <button className="close" onClick={close}>
           &times;
         </button>
         
         <div className="content">
               <input className='Title' required type="text" name="Title" value={Title} onChange={e=>{ setTitle(e.target.value);} } />
             <div className='Container'>
                 <div className='left'>
                     <span>Description</span>
                     <div className='leftInner'>
                         <input type="text" required  name="Desc" value={Desc} onChange={e=>{ setDesc(e.target.value);} }/>
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
                     <select name="Priority"  required onChange={e=>{ setPriority(e.target.value);} }>
                         <option>select</option>
                         <option value="P1">P1</option>
                         <option value="P2">P2</option>
                         <option value="P3">P3</option>
                         <option value="P4">P4</option>
                     </select> <br/>
                     <span>Story point</span><br/>
                     <input type="number" required name="point" value={StoryPoint} onChange={e=>{ setStoryPoint(e.target.value);} } />
 
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
           <button className='kanbanButton' type='submit' onClick={()=>{
               handleClick();
               close();
           }}>Save</button>
         </div>
       </div>
     )}
   </Popup>

     );
    
};
