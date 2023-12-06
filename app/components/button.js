'use client'

 
export default function Button({currentUser}) {

  const shareData = {
    title: "MeanGirls 2024",
    text: "You’re so fetch! Share your photo and be sure to watch Mean Girls, only in theatres January 12! #MeanGirls",
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