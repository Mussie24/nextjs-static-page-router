import Link from "next/link"
import Image from "next/image"



export default function Navbar() {
  return (
    <div>
      <nav className="flex flex-wrap items-center justify-between bg-gray-500 px-4 py-3 ">
    <Image
      src="/images/profile.png"
      alt="profile-picture"
      width={100}
      height={100}
      className="h-10 w-10 rounded-full" />
      
      
      
  

    
    <ul className="flex flex-wrap space-x-3 gap-8 text-sm font-medium sm:space-x-4 md:space-x-6 md:text-base">
      <li><Link href="/" className="hover:text-green-300">Home</Link></li>
      <li><Link href="/projekt" className="hover:text-green-300">Projekt</Link></li>
      <li><Link href="/posts/service" className="hover:text-green-300">Services</Link></li>
      <li><Link href="/kontakt" className="hover:text-green-300">Kontakt</Link></li>
    </ul>
  </nav>
    </div>
  )
}
