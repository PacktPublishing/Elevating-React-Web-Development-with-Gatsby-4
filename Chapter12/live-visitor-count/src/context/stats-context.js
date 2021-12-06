import React, { useState, useContext } from "react";
import openSocket from "socket.io-client";
const StatsContext = React.createContext();

export const StatsProvider = ({ ...props }) => {
  const [socket, setSocket] = React.useState(null);
  const [liveVisitorCount, setLiveVisitorCount] = useState(0);
  React.useEffect(() => {
    const newSocket = openSocket("http://localhost:3000");
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);
  React.useEffect(() => {
    if (socket) {
      socket.on("count", (count) => {
        console.log(count);
        setLiveVisitorCount(count);
      });
    }
  }, [socket, setLiveVisitorCount]);
  return (
    <StatsContext.Provider
      value={{
        liveVisitorCount,
        connected: socket && socket.connected,
      }}
      {...props}
    />
  );
};
export const useStats = () => useContext(StatsContext);
