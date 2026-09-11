"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

const Shorten = () => {
  const [url, seturl] = useState("")
  const [shortUrl, setshortUrl] = useState("")
  const [generated, setGenerated] = useState(false)

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shortUrl": shortUrl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {

        console.log(result)
        alert(result.message)
        if (result.success) {
          seturl("")
          setshortUrl("")
          setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`)
        }

      })
      .catch((error) => console.error(error));
  }

  return (
    <div className='h-screen px-4 bg-radial from-pink-200 from-40% to-white'>

      <div className='mx-auto max-w-md bg-purple-100 shadow-xl my-16 p-8 rounded-lg flex flex-col gap-4'>
        <h1 className='font-black text-center text-purple-800 text-2xl'>Generate your Short URLs</h1>
        <div className='flex flex-col gap-2'>
          <input type="text"
            value={url}
            className='px-3 py-1 bg-white border border-purple-300 focus:outline-purple-600 rounded-md hover:scale-x-105 transition-all'
            placeholder="Enter Url:"
            onChange={e => { seturl(e.target.value) }} />
          <input type="text"
            value={shortUrl}
            className='px-3 py-1 bg-white border border-purple-300 focus:outline-purple-600 rounded-md hover:scale-x-105 transition-all'
            placeholder="Enter your prefered short URL text:"
            onChange={e => { setshortUrl(e.target.value) }} />
          <button onClick={generate} className='bg-purple-600 hover:bg-purple-700 text-white shadow-lg my-3 py-1.5 p-3 rounded-lg font-bold hover:scale-x-107 transition-all'>Generate Short Link</button>
        </div>

        {generated && <>
          <span className='font-bold text-lg'>Your link</span>
          <code className='text-purple-700'><Link target="_blank" href={generated}>{generated}
          </Link>
          </code>
        </>
        }

      </div>
    </div>
  )
}

export default Shorten
