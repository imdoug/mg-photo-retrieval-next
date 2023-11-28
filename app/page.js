import styles from './page.module.css'
import { QRCodeSVG } from 'qrcode.react';
import Image from 'next/image';

import doodlebtm from "../public/assets/DOODLES2.png";
import doodletop from "../public/assets/DOODLES.png";
import logo from "../public/assets/781_Mean_Girls_LA.png";


export default async function Home( { props }) {
    const response = await fetch(
      `https://api2.eventfinity.co/api/v1/public/events/${
        process.env.NEXT_PUBLIC_EVENT_ID
      }/photostreams/${process.env.NEXT_PUBLIC_PHOTO_STREAM_ID}/photos`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_READ_ONLY_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      console.error(`Error: ${response.status}`);
      return;
    }
    let json = await response.json();
    //console.log(json.data[0].photo_url)

    let  base_url = "www.google.com";
  return (
    <main className={styles.main}>
      <div className="page-body">
        <Image className="bg-logo" src={logo} width={525} height={336} alt='logo'/>
        <Image className="bg-top" src={doodletop} width={850} height={711} alt='doodle top'/>
        <Image className="bg-bottom" src={doodlebtm} width={1000} height={624} alt='doodle bottom'/>
        <div className="last-container">
            <>
              <div className="row-container">
                 <Image
                  className="attendee-photo"
                  alt='user photo'
                  src={json.data[0].photo_url}
                width={220} height={227}/> 
                <QRCodeSVG value={`${base_url}/photos/0`} />
              </div>
               <div className="row-container">
                <Image
                  className="attendee-photo"
                  alt='user photo 2'
                  src={json.data[1].photo_url}
                  width={220} height={227}
                />
                <QRCodeSVG value={`${base_url}/photos/1`} />
              </div>
              <div className="row-container">
                <Image
                  className="attendee-photo"
                  alt='user photo 3'
                  src={json.data[2].photo_url}
                  width={220} height={227}
                />
                <QRCodeSVG value={`${base_url}/photos/2`} />
              </div>
              <div className="row-container">
                <Image
                  className="attendee-photo"
                  alt='user photo 4'
                  src={json.data[3].photo_url}
                  width={220} height={227}
                />
                <QRCodeSVG value={`${base_url}/photos/3`} />
              </div> 
            </>
          <p className="scan-message">
            SCAN THE QR CODE WITH YOUR DEVICE TO RETRIEVE PHOTO
          </p>
        </div>
      </div>
    </main>
  )
}

