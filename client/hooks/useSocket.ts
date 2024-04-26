import { useEffect, useState } from "react";
const WS_URl = "ws://localhost:8000/ws";
export const useSocker = () => {
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket(WS_URl);
    ws.onopen = () => {
      console.log("connected");
      setSocket(ws);
    };

    ws.onclose = () => {
      console.log("disconnected");
      setSocket(null);
    };
    return () => {
      ws.close();
    };
  }, []);

  return socket;
};
