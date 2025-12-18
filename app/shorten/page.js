"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setGenerated] = useState("")

    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
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
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
                seturl("")
                setshorturl("")
                console.log(result)
                alert(result.message)
            })
            .catch((error) => console.error(error));
    }

    return (
        <div className='mx-auto max-w-lg bg-cyan-200 my-16 p-12 rounded-lg flex flex-col gap-6'>
            <h1 className='font-bold text-2xl'>Generate shorten URLs</h1>
            <div className="flex flex-col gap-3">
                <input
                    type="text"
                    value={url}
                    className='p-4 bg-white rounded-lg focus:outline-cyan-700'
                    placeholder='Enter your URL'
                    onChange={e => { seturl(e.target.value) }} />

                <input
                    type="text"
                    value={shorturl}
                    className='p-4 bg-white rounded-lg focus:outline-cyan-700'
                    placeholder='Enter your preferred short URL text'
                    onChange={e => { setshorturl(e.target.value) }} />
                <button onClick={generate} className='bg-slate-600 shadow-lg p-3 py-2 rounded-lg font-bold cursor-pointer text-white'>Generate</button>
            </div>
            {generated && <>
                <span className='font-bold'>Your Link </span><code><Link target="_blank" href={generated}>{generated}</Link></code>
            </>
            }
        </div>
    )
}

export default Shorten
