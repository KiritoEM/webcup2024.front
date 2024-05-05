import DashboardHeader from "../components/headers/DashboardHeader";
import Dashboardlayout from "../components/layouts/Dashboardlayout";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useEffect, useRef } from "react";

const DashboardVideo = (): JSX.Element => {
  const liveRoomRef = useRef<HTMLDivElement>(null);
  const roomName = "Trimobe-room";

  const liveRoom = async (element: HTMLDivElement | null) => {
    if (element) {
      const appID = 1693363613;
      const serverSecret = "ce96da9a664a2b944a439e1e05cbc310";
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomName as string,
        Date.now().toString(),
        "johan"
      );

      const zp = ZegoUIKitPrebuilt.create(kitToken);
      zp.joinRoom({
        container: element,
        scenario: {
          mode: ZegoUIKitPrebuilt.VideoConference,
        },
      });
    }
  };

  useEffect(() => {
    liveRoom(liveRoomRef.current);
  }, []);

  return (
    <section className="dashboard__video">
      <Dashboardlayout>
        <div className="video-content">
          <DashboardHeader />
          <div className="live-room" ref={liveRoomRef}></div>
        </div>
      </Dashboardlayout>
    </section>
  );
};

export default DashboardVideo;
