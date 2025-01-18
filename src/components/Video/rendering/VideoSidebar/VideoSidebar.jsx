import React from "react";
import { useShare } from "../../utils/useShare";
import {
  volumeMuteOutline,
  volumeHighOutline,
  copyOutline,
  readerOutline,
} from "ionicons/icons";
import { IonIcon } from "@ionic/react";

function VideoSidebar({ muted, handleMuteUnmute, openReportModal }) {
  const { copied, handleShare } = useShare();

  return (
    <div className="absolute right-0 flex flex-col mr-1 text-white top-1/2">
      {muted ? (
        <IonIcon
          onClick={handleMuteUnmute}
          icon={volumeHighOutline}
          className="w-6 h-6 p-2 mb-1 bg-black bg-opacity-50 rounded-full cursor-pointer hover:bg-opacity-70 z-2"
        />
      ) : (
        <IonIcon
          onClick={handleMuteUnmute}
          icon={volumeMuteOutline}
          className="w-6 h-6 p-2 mb-1 bg-black bg-opacity-50 rounded-full cursor-pointer hover:bg-opacity-70 z-2"
        />
      )}

      <IonIcon
        onClick={openReportModal}
        icon={readerOutline}
        className="w-6 h-6 p-2 mb-1 bg-black bg-opacity-50 rounded-full cursor-pointer text-align hover:bg-opacity-70 z-2"
      />
      <IonIcon
        onClick={handleShare}
        icon={copyOutline}
        className="w-6 h-6 p-2 mb-1 bg-black bg-opacity-50 rounded-full cursor-pointer text-align hover:bg-opacity-70 z-2"
      />

      {copied && (
        <div className="absolute p-2 text-sm bg-blue-600 rounded-md shadow-md bottom-12 right-2 z-1">
          Link copied!
        </div>
      )}
    </div>
  );
}

export default VideoSidebar;
