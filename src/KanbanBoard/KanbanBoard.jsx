import CreatePopup from '../Component/CreatePopup';
import TaskBoard from '../Component/TaskBoard';
import './KanbanBoard.css';
import axios from "axios";
import {  useState } from 'react';
//import { CallMerge } from '@material-ui/icons';

export default function KanbanBoard(){

  const [Tasks,setTasks]=useState([]);

   const getTasks=async (err)=>{
       try{
            const res=await axios.get("https://kanban-board-react.herokuapp.com/api/getTasks");
            console.log(res);
            setTasks(res.data);
            const FilteredNotCompleted=await  axios.get("https://kanban-board-react.herokuapp.com/api/getTasks/NotCompleted");
            const FilteredInprogress= await axios.get("https://kanban-board-react.herokuapp.com/api/getTasks/InProgress");
            const FilteredCompleted= await axios.get("https://kanban-board-react.herokuapp.com/api/getTasks/completed");
           
            setNotCompletedCount(FilteredNotCompleted.data);
            setInProgressCount(FilteredInprogress.data);
            setCompletedCount(FilteredCompleted.data);            
       }catch(err){
          console.log(err);
       }
   }

   const [NotCompletedCount,setNotCompletedCount]=useState([]);
   const [InProgressCount,setInProgressCount]=useState([]);
   const [CompletedCount,setCompletedCount]=useState([]);
   
   Tasks.length===0 && getTasks();
   
   

     
     
  return (
    <div className='KanbanBoard'>
       <div>
          <h2 className='KanbanTitle'>Kanban Board</h2>
          <span>Buzz Aldrin's tasks</span>
        </div>  
       <CreatePopup getTasks={getTasks} /> 
       <div className='kanbanBoardContainer'> 
            
            <div >
                 <p>Not Started <span>({NotCompletedCount.length})</span></p>
                <div className='KanbanNotStarted'>
                       { Tasks.map((task)=>( 
                           task.status==='NotCompleted' && <TaskBoard  title={task.title} getTasks={getTasks} desc={task.desc} key={task._id} id={task._id} status={task.status} priority={task.priority} storyPoint={task.storypoint} />    
                       ))
                        }
                        
                       
                </div>
            </div>
            <div >
                 <p>In Progress <span>({InProgressCount.length})</span></p>
                <div className='kanbanInProgress'>
                       { Tasks.map((task)=>(
                         task.status==='InProgress' &&  <TaskBoard key={task._id} title={task.title} desc={task.desc} id={task._id}  priority={task.priority} storyPoint={task.storypoint} />
                            
                          ))
                       }
                </div>
            </div>
            <div >
                  <p>Completed <span>({CompletedCount.length})</span></p>
                  <div className='kanbanCompleted'>
                       { Tasks.map((task)=>(
                         task.status==='completed' &&  <TaskBoard  key={task._id} title={task.title} id={task._id}  desc={task.desc} priority={task.priority} storyPoint={task.storypoint} />
                            
                          ))
                       }
                  </div>
            </div>
       </div>
    </div>
  )
}
