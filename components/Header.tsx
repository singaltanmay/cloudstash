import { UserButton, SignedOut, SignInButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='flex items-center justify-between'>
      <Link href="/" className='flex items-center space-x-2'>
        <div className="bg-[#0160FE] w.fit">
          <Image src="https://www.shareicon.net/download/512x512/2015/09/25/646008_cloud_512x512.png" alt="logo" height={50} width={50} />
        </div>
        <h1 className='font-bold text-xl'>CloudStash</h1>
      </Link>
      <div className='px-5 flex space-x-2 items-center'>
        <UserButton afterSignOutUrl='/' />
        <SignedOut>
          <SignInButton afterSignInUrl='/dashboard' mode='modal'/>
        </SignedOut>
      </div>
    </header>
  )
}

export default Header