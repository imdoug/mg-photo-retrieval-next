import React from 'react'
import Image from 'next/image';
import Button from '@/app/components/button';

export default  async function Photo ({ params }) {
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
      let currentUser = json.data[`${params.id}`]

  return (
    <>
    <div className="id">
        <p className="phototext">Share your photo!</p>
        <Image className="photoshare" src={currentUser.photo_url} alt='current user photo' width={300} height={370}/>
        <Button currentUser={currentUser}/>
        <p className="tags">@meangirls #meangirlsmusicalmovie # 2024</p>
        <p className="copyr">COPYRIGHT LOREM IPSUM</p>
      </div>
    </>
  )
}
