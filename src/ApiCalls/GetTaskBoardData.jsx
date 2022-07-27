import axios from "axios";

const TaskData=()=>{
    const Data=await axios.get("/api/getTasks");

};

export default {TaskData,Data}  ;
