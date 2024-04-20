

export class GameManager() {
    private games: Game[];
    private pendingUser: WebSocket;
    private users: WebSocket;

    constructor() {
        this.games = [];

    }

    addUser(socket: WebSocket){
     
        this.users.push(socket);
        this.addHandler(socket);


    }

    removeUser(socket: WebSocket){
        this.users = this.usrs.filter(user => user !== socket);


    }

    private handleMessage() {

          
    WebSocket.on('message', (data) => {
        const message = JSON.parse(data.toString());
        if(message.type === "init_game"){
            if(this.pendingUser){

            }
            else{
                this.pendingUser = socket;
            }
                 
        }


   })
       
    }

}