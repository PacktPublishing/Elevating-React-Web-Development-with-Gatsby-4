import React from "react";
import openSocket from "socket.io-client";
import Layout from "../components/layout/Layout";

export default function SocketDemo() {
  const [socket, setSocket] = React.useState(null);
  const [value, setValue] = React.useState("");
  const [serverMessages, setServerMessages] = React.useState([]);
  React.useEffect(() => {
    const newSocket = openSocket("http://localhost:3000");
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);
  React.useEffect(() => {
    if (socket) {
      socket.on("message", (message) => {
        setServerMessages((currentMessages) => [...currentMessages, message]);
      });
    }
  }, [socket, setServerMessages]);
  const sendMessage = () => {
    socket && socket.emit("message", value);
  };
  return (
    <Layout>
      <div className="max-w-5xl mx-auto py-16 lg:py-24 flex flex-col prose space-y-2 ">
        <h1>Message The Server</h1>
        <label htmlFor="message">Your Message:</label>
        <input
          id="message"
          className="border-blue-700 border-2"
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={sendMessage} className="btn">
          Send message
        </button>
        <p>Server Messages:</p>
        <ul>
          {serverMessages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
