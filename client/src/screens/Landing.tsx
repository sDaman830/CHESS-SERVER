export const Landing = () => (
    <div className="">
      <div className=" mt-2">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
            <div className="flex justify-center">
            <img src = {"/chess-board.jpeg"} className="max-w-96"></img>
            </div>
     
        <div>
        <h1 className="text-4xl font-bold text-white">Play chess Here</h1>
       
        <div className="mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Play
            </button>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
  