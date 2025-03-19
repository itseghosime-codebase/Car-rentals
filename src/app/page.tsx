'use client'
import AvaCar from "@/components/AvaCar";
import Banner from "@/components/Banner";
import GridSection from "@/components/GridSection";
import Howitworks from "@/components/Howitworks";
import Suv from './../assets/cars/SuvPic.png';
import Lambo from './../assets/cars/lambo.png';
import Hyundai from './../assets/cars/one.png';
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";
import Sonic from './../assets/cars/Chevy-Sonic-LT.png'
import Ford from './../assets/cars/Ford-Fusion.png';
import Mitsubishi from './../assets/cars/Mitsubishi.png';
import Sentra from './../assets/cars/Nissan-Sentra.png';
import Versa from './../assets/cars/Nissan-Versa-Note.png';


export default function Home() {
  return (
    <main>
      <Banner />
      <Carousel />
      <Howitworks />
      <AvaCar cars={AvailableCars.slice(0, 6)} home={true} />
      {
        BottomSection.map((items, id) =>
        (
          <GridSection
            key={id}
            description={items.description}
            heading={items.heading}
            image={items.image}
            reverse={items.reverse}
          />
        ))
      }
      <Footer />
    </main>
  );
}


const BottomSection = [
  {
    reverse: false,
    image: Suv,
    heading: 'Maintenance',
    description: 'We provide a high- Quality maintenance check on each vehicle before and after every rental. We check tire, oil and other maintenance that is needed.'
  },
  {
    reverse: true,
    image: Lambo,
    heading: 'Vehicle Reservation',
    description: 'Easily reserve the car of your choice. Browse through a selection of vehicles, find the perfect vehicle for you. Book your car with a quick call. You can also verify any additional information you require.'
  }
]

export const AvailableCars = [
  {
    img: Mitsubishi,
    carType: 'Mitsubishi Mirage',
    carDescription: '$60 Daily / $360 Weekly'
  },
  {
    img: Versa,
    carType: 'Nissan Versa Note',
    carDescription: '$60 Daily / $360 Weekly'
  },
  {
    img: Sentra,
    carType: 'Nissan Sentra',
    carDescription: '$60 Daily / $360 Weekly'
  },
  {
    img: Ford,
    carType: 'Ford Fusion',
    carDescription: '$60 Daily / $360 Weekly'
  },
  {
    img: Sonic,
    carType: 'Chevy Sonic LT',
    carDescription: '$60 Daily / $360 Weekly'
  },
  {
    img: Hyundai,
    carType: 'Hyundai Elantra',
    carDescription: '$60 Daily / $360 Weekly'
  }
]