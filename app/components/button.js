'use client'

 
export default function Button({currentUser}) {

  const shareData = {
    title: "MeanGirls 2024",
    text: "That's so Fetch! #MeanGirls",
    url: `${currentUser.photo.original.url}`

  }
  const share = () =>{
    navigator.share(shareData)
  }
 
  return (
    <div className="buttonBox">
      <button className="sharebtn"  onClick={share}>Share</button>
    </div>
  )
}