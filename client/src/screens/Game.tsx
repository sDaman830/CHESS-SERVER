import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { ChessBoard } from "../components/ChessBoard";

export const Game = () => {
  const navigate = useNavigate();
  
    return <div className="justfy-center flex">
      <div className="pt-8 max-w-screen-lg w-full">
        <div className="grid grid-cols-6 gap-4 w-full ">
          <div className="col-span-4 w-full bg-red-200">
            <ChessBoard/>
          </div>
          <div className="col-span-2 w-full bg-green-500  ">
          <Button onClick = {()=>{
          navigate("/game")}
        }> 
        play online
        </Button>
          </div>
        </div>
      </div>
      
    </div>
};
  