import Image from "next/image"
import Link from "next/link"

export default function DiscordBtn() {
  return (
    <Link target="_blank" href="https://discord.gg/w7x4HquBdK" className="flex items-center border border-discord rounded-xl p-2">
      <Image src="/discord.svg" className="mx-2 items-start" alt="discord-logo" width={30} height={30} />
      <div className="text-start">
        <p className="text-xs text-discord">Join Our Community</p>
        <h1 className="text-discord font-bold text-lg">Fusion Clips</h1>  
      </div>
      <Image src="/rightbtn.png" className="mx-2" width={20} height={20} alt="arrow" />
    </Link>
  )
}