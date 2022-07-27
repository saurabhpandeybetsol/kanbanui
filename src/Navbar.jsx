import {Dehaze} from "@material-ui/icons";

export default function Navbar() {
  return (
    <div style={{height:"50px",backgroundColor:"black",display:"flex",position:"sticky",top:0}}>
        <span> <Dehaze style={{color:"white",marginTop:"10px"}}/> </span>
        <p style={{color:"white",marginLeft:"42%",marginTop:"10px"}}>2022 training Project</p>
    </div>
  )
}
