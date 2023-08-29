"use client"; // This is a client component 👈🏽
import { Button } from "@mantine/core";


export default function Home() {

  return (
   

      <div className="flex xs:flex-col xl:px-[6%] lg:flex-row items-center justify-between gap-8 h-full w-full ">
        <div className="xl:w-[40%] home-page">
          <h1 className="text-heading xs:font-extrabold lg:font-bold">
            Find the <span className="text-highlight ">perfect meme</span> for every <span className="text-highlight ">situation</span> !
          </h1>

          <p className="text-regular20 mt-5 text-gray-400">
            MemeMania let you download high quality memes suited
            for all king of purposes. You can find the perfect meme for
            your video and even contribute to enrich this library.
          </p>
          <Button className="mt-4 !rounded-xl" size="lg" variant='filled'>Get Started - It's Free</Button>
        </div>
        {/* <img className="h-[320px] object-cover" alt="" src="/videoMain.png" /> */}
        <video src="/women_catMeme.mp4" autoPlay loop muted className="w-full rounded-2xl h-[380px] max-w-[500px] object-cover" />
      </div>


  )
}