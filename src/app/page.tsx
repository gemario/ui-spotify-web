import { CardsGoodAfternoon } from '@/components/CardsGoodAfternoon';
import { CardsMadeFor } from '@/components/CardsMadeFor';
import { Footer } from '@/components/Footer';
import { Sidebar } from '@/components/Sidebar';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <CardsGoodAfternoon />
            <CardsGoodAfternoon />
            <CardsGoodAfternoon />
            <CardsGoodAfternoon />
            <CardsGoodAfternoon />
            <CardsGoodAfternoon />
          </div>

          <h2 className="font-semibold text-2xl mt-10">Made For Jorge Mario Lima</h2>

          <div className="grid grid-cols-8 gap-4 mt-4">
            <CardsMadeFor />
            <CardsMadeFor />
            <CardsMadeFor />
            <CardsMadeFor />
            <CardsMadeFor />
          </div>
        </main>
      </div>
      <Footer />
    </div> 
  )
}
