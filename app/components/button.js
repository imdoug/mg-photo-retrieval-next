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
    <div className="buttonBox">
      <button className="sharebtn"  onClick={() => saveFile()}>Share</button>
    </div>
  )
}