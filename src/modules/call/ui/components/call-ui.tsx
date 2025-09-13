import { useState } from "react";
import { useCall, StreamTheme } from "@stream-io/video-react-sdk";

import { CallLobby } from "./call-lobby";
import { CallEnded } from "./call-ended";
import { CallActive } from "./call-active";

type Props = {
  meetingName: string;
};

type ShowStates = "CALL" | "LOBBY" | "ENDED";

export const CallUI = ({ meetingName }: Props) => {
  const [show, setShow] = useState<ShowStates>("LOBBY");

  const call = useCall();

  const handleJoin = async () => {
    if (!call) return;

    await call.join();

    setShow("CALL");
  };

  const handleLeave = () => {
    if (!call) return;

    call.endCall();

    setShow("ENDED");
  };

  return (
    <StreamTheme className="h-full">
      {show === "ENDED" && <CallEnded />}
      {show === "LOBBY" && <CallLobby onJoin={handleJoin} />}
      {show === "CALL" && (
        <CallActive onLeave={handleLeave} meetingName={meetingName} />
      )}
    </StreamTheme>
  );
};
