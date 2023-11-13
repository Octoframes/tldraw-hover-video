import { AssetRecordType, Tldraw } from "@tldraw/tldraw";
import "@tldraw/tldraw/tldraw.css";
import { useCallback } from 'react';

export default function App() {
  const handleMount = useCallback((app) => {
    const assetId = AssetRecordType.createId();
    const videoAsset = {
      id: assetId,
      typeName: "asset",
      type: "video",
      props: {
        w: 640, // Set the width of the video
        h: 360, // Set the height of the video
        name: "bunny.mp4",
        isAnimated: true,
        mimeType: "video/mp4",
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      },
      meta: {},
    };

    app.createAssets([videoAsset]);
    app.createShapes([
      {
        type: "video",
        x: 100,
        y: 100,
        props: {
          w: 640,
          h: 360,
          assetId,
        },
      },
    ]);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "1000px",
        height: "1000px",
      }}
    >
      <Tldraw onMount={handleMount} />
    </div>
  );
}
