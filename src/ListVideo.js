import { useContext } from "react";
import { VideoContext } from "./VideoContext";
import Video from "./Video";

export default function ListVideo() {
  const db = useContext(VideoContext);
  console.log(db);
  return (
    <div>
      <h1>Total de {db.length} videos</h1>
      {db.map((video) => (
        <Video video={video} />
      ))}
    </div>
  );
}
