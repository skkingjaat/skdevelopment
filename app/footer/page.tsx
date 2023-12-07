import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <footer>
        <div className="developer flex flex-wrap justify-between items-center gap-4">
            <div className="logo"></div>
            <div className="social-links flex items-center gap-2">
                <li><Link href=""></Link></li>
                <li><Link href=""></Link></li>
                <li><Link href=""></Link></li>
                <li><Link href=""></Link></li>
                <li><Link href=""></Link></li>
            </div>
        </div>
    </footer>
  )
}

export default page