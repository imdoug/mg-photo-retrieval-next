'use client'

 
export default function Button({currentUser}) {

  const shareData = {
    title: "Mean Girls Musical 2024",
    text: "This event is so fetch! #meangirlsmusical2024",
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