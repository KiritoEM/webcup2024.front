import DashboardHeader from "../components/headers/DashboardHeader";
import Dashboardlayout from "../components/layouts/Dashboardlayout";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useEffect, useRef, useState } from "react";

const DashboardVideo = (): JSX.Element => {
  const liveRoomRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState<boolean>(false);
  const roomName = "Trimobe-room";

  const liveRoom = async (element: HTMLDivElement | null) => {
    if (element) {
      const appID = parseInt(import.meta.env.VITE_APP_ID);
      const serverSecret = import.meta.env.VITE_SERVER_SECRET;
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
          {show && <div className="live-room" ref={liveRoomRef}></div>}
          <div className="room-container">
            <div className="room-list">
              <h3>Room</h3>

              <div className="list">
                <div className="room">
                  <div className="user">
                    <img src="/avatar.png" alt="" />
                    <p>Relation amoureuse</p>
                  </div>
                  <div className="date">
                    <p>19:54</p>
                  </div>
                </div>
                <div className="room">
                  <div className="user">
                    <img src="/avatar1.png" alt="" />
                    <p>Travail</p>
                  </div>
                  <div className="date">
                    <p>20:00</p>
                  </div>
                </div>
                <div className="room">
                  <div className="user">
                    <img src="/avatar2.png" alt="" />
                    <p>Depression</p>
                  </div>
                  <div className="date">
                    <p>20:50</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="select-room">
              <div className="content">
                <img src="/room.png" alt="" />
                <p>Sélectionner un Room pour continuer</p>
              </div>
            </div>
          </div>
        </div>
      </Dashboardlayout>
    </section>
  );
};

export default DashboardVideo;
