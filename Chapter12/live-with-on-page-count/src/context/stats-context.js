import React, { useState, useContext, useRef } from "react";
import openSocket from "socket.io-client";
const StatsContext = React.createContext();

export const StatsProvider = ({ location, ...props }) => {
  const [socket, setSocket] = useState(null);
  const [liveVisitorCount, setLiveVisitorCount] = useState(0);
  const [pageVisitorCount, setPageVisitorCount] = useState(0);
  const previousLocation = useRef(null);
  React.useEffect(() => {
    const newSocket = openSocket("http://localhost:3000");
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);
  React.useEffect(() => {
    if (socket) {
      socket.on("count", (count) => {
        setLiveVisitorCount(count);
      });
      socket.on("page-count", (count) => {
        setPageVisitorCount(count);
      });
    }
  }, [socket, setLiveVisitorCount, setPageVisitorCount]);
  React.useEffect(() => {
    if (socket && previousLocation.current !== location.pathname) {
      socket.emit("page-update", {
        currentPage: location.pathname,
        previousPage: previousLocation.current,
      });
      previousLocation.current = location.pathname;
    }
  }, [location, socket]);
  return (
    <StatsContext.Provider
      value={{
        liveVisitorCount,
        pageVisitorCount,
        connected: socket && socket.connected,
      }}
      {...props}
    />
  );
};
export const useStats = () => useContext(StatsContext);
