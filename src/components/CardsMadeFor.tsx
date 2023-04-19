import Image from 'next/image';

export function CardsMadeFor() {
  return (
    <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
      <Image src="/album.png" className="w-full" width={120} height={120} alt="Capa do álbum AI Youngboy 2 do cantor NBA YoungBoy"/>
      <strong className="font-semibold">Daily Mix 1</strong>
      <span className="text-sm text-zinc-400">YoungBoy Never Broke Again</span>
    </a>
  )
}