
import Hero from '../components/Hero';
import Filter from '../components/Filter';
import Advisors from '@/components/Advisors';
import Services from '@/components/home/Services';
import Testimonials from '@/components/home/Testimonials';
import Blogs from '@/components/home/Blogs';
import Videos from '@/components/home/Videos';
import Subscribe from '@/components/home/Subscribe';

export default function Home() {
  return (
    <>
      <Hero />
      <Filter />
      <Services />
      <Advisors />
      <Blogs />
      <Videos />
      <Subscribe />
    </>
  )
}
