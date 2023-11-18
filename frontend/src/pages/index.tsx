import * as React from "react";
import { socket } from "../socket";

const IndexPage: React.FC = () => {
  const [animalText, setAnimalText] = React.useState<string>("");
  const [isConnected, setIsConnected] = React.useState(socket.disconnected);
  function buttonClick() {
    setIsConnected(!isConnected);
    if (isConnected) {
      socket.connect();
    } else {
      socket.disconnect();
      setAnimalText("");
    }
  }

  React.useEffect(() => {
    function socketEvent(value: string) {
      setAnimalText(value);
    }

    socket.on("message", socketEvent);

    return () => {
      socket.off("message", socketEvent);
    };
  }, [animalText]);

  return (
    <div className="flex-col-center buttonArea">
      <button className="defaultButton" onClick={buttonClick}>
        {isConnected ? "Connect" : "Disconnect"}
      </button>
      <p>{animalText}</p>
    </div>
  );
};

export default IndexPage;
