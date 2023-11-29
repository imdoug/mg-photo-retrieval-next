"use client"
import {useState, useEffect} from 'react'
// import { useRouter } from 'next/navigation'
import { QRCodeSVG } from 'qrcode.react';
import Image from 'next/image';


const Client = ({data}) => {
    // const router = useRouter()

    const [json,setJson] = useState(false)
    const  base_url = "https://mg-photo-retrieval-next.vercel.app";

    const fetchData = async () =>{
      const response = await fetch(
        `https://api2.eventfinity.co/api/v1/public/events/${
          process.env.NEXT_PUBLIC_EVENT_ID
        }/photostreams/${process.env.NEXT_PUBLIC_PHOTO_STREAM_ID}/photos`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_READ_ONLY_TOKEN}`,
          },
          next:{
            revalidate: 5,
          }
        }
      );
  
      if (!response.ok) {
        console.error(`Error: ${response.status}`);
        return;
      }
      const j = await response.json();
      setJson(j.data.slice(0, 4))
     // console.log('fetched')
      
    }

    useEffect(() => {
        setInterval(() => {
          fetchData()
            // router.refresh()
        }, 10000);
    }, [])
    

  return (
    <>
        <div className="last-container">
              <div className="row-container">
                 <Image
                  className="attendee-photo"
                  alt='user photo'
                  src={json ? json[0].photo_url : data.data[0].photo_url}
                  // src={data.data[0].photo_url}
                width={170} height={227}/> 
                <QRCodeSVG value={`${base_url}/photos/0`} size={162} />
              </div>
             <div className="row-container">
                <Image
                  className="attendee-photo"
                  alt='user photo 2'
                  src={json ? json[1].photo_url : data.data[1].photo_url}
                  // src={data.data[1].photo_url}
                  width={170} height={227}
                />
                <QRCodeSVG value={`${base_url}/photos/1`} size={162}  />
              </div>
              <div className="row-container">
                <Image
                  className="attendee-photo"
                  alt='user photo 3'
                  src={json ? json[2].photo_url : data.data[2].photo_url}
                  // src={data.data[2].photo_url}
                  width={170} height={227}
                />
                <QRCodeSVG value={`${base_url}/photos/2`} size={162}  />
              </div>
              <div className="row-container">
                <Image
                  className="attendee-photo"
                  alt='user photo 4'
                  src={json ? json[3].photo_url : data.data[3].photo_url}
                  // src={data.data[3].photo_url}
                  width={170} height={227}
                />
                <QRCodeSVG value={`${base_url}/photos/3`} size={162}  />
              </div>
          <p className="scan-message">
            SCAN THE QR CODE WITH YOUR DEVICE TO RETRIEVE PHOTO
          </p>
      </div>
    </>
  )
}

export default Client