import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Formate from '@/components/layout/format';
import Glarry from '@/components/home/glarry';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Formate>

      <Glarry />
      
    </Formate>
  )
}
