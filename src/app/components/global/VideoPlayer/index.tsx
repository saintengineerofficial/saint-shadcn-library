import React, { forwardRef } from "react";

type VideoProps = React.VideoHTMLAttributes<HTMLVideoElement>

const VideoPlayer = forwardRef<HTMLVideoElement, VideoProps>(({ ...rest }, ref) => {
  return (
    <React.Fragment>
      <style>
        {`
          video::-webkit-media-controls-start-playback-button {
            display: none !important;
          }
          video::-webkit-media-controls {
            display: none !important;
          }
        `}
      </style>
      <video
        ref={ref}
        autoPlay
        loop
        muted
        preload="auto"
        poster="data:image/gif;base64,R0lGODlhAQABAAAAACw=" // 透明
        playsInline
        {...rest}
      />
    </React.Fragment>
  );
});

VideoPlayer.displayName = "VideoPlayer";

export default VideoPlayer;
