import './TaskBoard.css'
import {KeyboardArrowUp,Edit} from "@material-ui/icons";
import EditTaskPopup from './EditTaskPopup';



export default function TaskBoard({title,desc,status,storyPoint,priority,id,getTasks}) {
  console.log(id);

  return (

    <div className='TaskBoard'>
       <div  style={{}}>
           <p style={{float:"right",cursor:"pointer"}}><EditTaskPopup title={title} getTasks={getTasks} desc={desc} priority={priority} id={id} storyPoint={storyPoint} status={status} style={{color:"lightgray"}} /></p> 
           <p  className='Title'>{title} </p> 
           
       </div>
       <span className='Desc'>{desc}</span>
       <div className='bottomContainer'>
            <KeyboardArrowUp style={{marginLeft:"70%",color:`${(priority==='P1'||priority==='P2')?"red":"green"}`} } /><span>{priority}</span>
            <button className='button'>{storyPoint}</button>
       </div>
    
    </div>
  )
}
