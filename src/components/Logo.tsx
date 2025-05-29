import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href='/'>
      <Image src="/supreme-logo.svg" alt='Supreme Logo' width={150} height={40} />
    </Link>
  )
}

export default Logo