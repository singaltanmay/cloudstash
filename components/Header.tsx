import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='flex items-center justify-between'>
      <Link href="/">
        <Image src="https://www.shareicon.net/download/512x512/2015/09/25/646008_cloud_512x512.png" alt="logo" height={50} width={50}/>
        <h1 className='font-bold text-xl'>CloudStash</h1>
      </Link>
    </header>
  )
}

export default Header