'use client'
 
import { saveAs } from "file-saver";
 
export default function Button({currentUser}) {

  const saveFile = () => {
    saveAs(
    `${currentUser.shareable_photo_url}`,
      "MeanGirlsMusical2024.png"
    );
  };
 
  return (
    <div>
      <button onClick={() => saveFile()}>Share</button>
    </div>
  )
}