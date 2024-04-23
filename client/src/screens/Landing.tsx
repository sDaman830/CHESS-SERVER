import { useNavigate } from "react-router-dom"
import { Button } from "../components/Button";

export const Landing = () => {
 const navigate = useNavigate();
  return <div className="flex justify-center">
    <div className="">
      <div className=" pt-8 max-w-screen-md">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
            <div className="flex justify-center">
            <img src = {"/chess-board.jpeg"} className="max-w-96"></img>
            </div>
     
        <div className="pt-16" >
          <div className="flex justify-center">
        <h1 className="text-4xl font-bold text-white">Play chess Here</h1>
        </div>
        <Button onClick = {()=>{
          navigate("/game")}
        }> 
        play 
        </Button>
        </div>
        </div>
        </div>
      </div>
    </div>
}
  