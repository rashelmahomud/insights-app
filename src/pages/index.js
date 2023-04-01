import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Formate from '@/components/layout/format';
import Glarry from '@/components/home/glarry';
import Section1 from '@/components/home/section1';
import Section2 from '@/components/home/section2';
import Section3 from '@/components/home/section3';
import Service from '@/components/home/service';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Formate>
      <Section1 />
      <Service />

      <Section2 />
      <Section3 />

    </Formate>
  )
}
