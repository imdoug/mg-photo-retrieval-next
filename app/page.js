import styles from './page.module.css'
import { QRCodeSVG } from 'qrcode.react';
import Image from 'next/image';
import Client from './components/client';

import doodlebtm from "../public/assets/DOODLES2.png";
import doodletop from "../public/assets/DOODLES.png";
import logo from "../public/assets/burnBook.png";


export default async function Home() {
    let json;
    const response = await fetch(
      `https://api2.eventfinity.co/api/v1/public/events/${
        process.env.NEXT_PUBLIC_EVENT_ID
      }/photostreams/${process.env.NEXT_PUBLIC_PHOTO_STREAM_ID}/photos`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_READ_ONLY_TOKEN}`,
        },
        cache: 'no-store',
      }
    );

    if (!response.ok) {
      console.error(`Error: ${response.status}`);
      return;
    }
    json = await response.json();
    //console.log(json.data[0].photo_url)

    let  base_url = "https://mg-photo-retrieval-next.vercel.app";
  return (
    <main className={styles.main}>
        <div className="page-body">
        <Image className="bg-logo" src={logo} alt='logo' />
        <Image className="bg-top" src={doodletop} width={850} height={711} alt='doodle top' priority />
        <Image className="bg-bottom" src={doodlebtm} width={1100} height={624} alt='doodle bottom'/>
        <Client data={json}/>
        </div>
    </main>
  )
}

