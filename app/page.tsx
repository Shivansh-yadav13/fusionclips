"use client"
import type { NextPage } from "next";
import { useState } from "react";
import '../styles/global.css'
import Image from "next/image";
import Card from "../components/web/Card";
import Badge from "../components/web/Badge";
import CTAButton from "../components/web/CTAButton";
import axios from "axios";

const Index: NextPage = () => {
  const [email, setEmail] = useState<string>();
  const [waitlist, setWaitlist] = useState<boolean>(false);

  const submitEmail = async (email: string) => {
    try {
      const result = await axios.post(`/api/supabase/preusers`, { email });
      return result.data;
    }
    catch {
      return null;
    }
  }

  const handleFormSubmit = () => {
    console.log(email);
    if (email) {  
      const res = submitEmail(email);
      if (!res) {
        console.log("Not submitted!")
      }
      setEmail("");
      setWaitlist(true);
    } else {
      console.log("Email is undefined")
    }
  }

  return (
    <div className="w-full">
      <div className="w-full lg:px-32 mx-auto">
        <div className="xl:flex justify-around mx-auto text-center">
            <video className="border-4 my-10 mx-auto xl:mx-0" width={288} src="/video_1.mp4" muted autoPlay loop></video>
            <div className="xl:w-3/6 pt-20 text-3xl sm:w-full sm:text-5xl md:text-5xl 2xl:text-7xl">
              <h1 className="xl:text-center font-bold">Boooring Streams to Attention 👀 Grabbing</h1>
              <h1 className="xl:text-center font-bold">Clips Using <span className="text-white text-shadow text-shadow-blur-8 text-shadow-x-1 text-shadow-y-1">Fusion</span> AI🤖</h1>
              <CTAButton text="Get Started" />
              <div className="w-fit mx-auto">
                <a href="https://www.producthunt.com/posts/fusionclips?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-fusionclips" target="_blank">
                  <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=410171&theme=light" alt="FusionClips - Convert&#0032;boring&#0032;streams&#0032;to&#0032;funny&#0032;attention&#0032;grabbing&#0032;clips | Product Hunt" style={{width: "250px", height: "54px;"}} width="250" height="54" />
                </a>
              </div>
            </div>
        </div>
        <div className="flex flex-col items-center">
          <div>
          <Badge text="New" color="pink" />
          </div>
          <div id="features" className="w-full flex justify-center">
            <div className="2xl:w-3/5 lg:w-full">
              <h1 className="mx-auto font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl text-center">
                Tired 😴 of watching your long Streams 📺 to find Content ?
              </h1>
              <p className="text-center mt-5 text-xl sm:text-xl 2xl:text-3xl text-light sm:mx-2">Using AI 🤖 convert your long boooring streams to Funny Attention 👀 Grabbing Clips</p>
              <p className="text-center text-light">Join the Waiting List to get <span>
              <Badge text="FREE" color="green" />
                </span> Access to the Feature</p>
            </div>
          </div>
          <form className="flex">
            {
              waitlist ?
              <div>
                <button 
                onClick={(e) => e.preventDefault()}
                className="bg-black hover:bg-prime_dark hover:scale-110 transition-all text-white font-bold py-2 my-5 px-6 mx-auto text-center"
              >
                Joined
              </button>
              </div>
              :
            <div className="flex w-full max-w-sm items-center space-x-2">
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="focus:outline-none border-2 p-2" />
              <button 
                className="bg-black hover:bg-prime_dark hover:scale-110 transition-all text-white font-bold py-2 my-5 px-6 mx-auto text-center"
                onClick={(e) => {
                  e.preventDefault();
                  handleFormSubmit();
                }}
              >
                Join
              </button>
            </div>
            }
          </form>
        </div>
        <div className="flex justify-center">
          <div className="mt-20 w-1/2 xl:inline-grid xl:grid-cols-2 gap-4 pb-40">
            <Card title="AI Funny Clip Finder" emo="🔎" desc="Using AI find the most Engaging & Funny Clips from your video/live-streams." />
            <Card title="AI Generated Captions" emo="🆎" desc="Auto Generated Captions with the use of Automatic Speech Recognition (ASR) system which supports 98 Languages." />
            <Card title="Emojis Support" emo="😊" desc="Automatic Emojis added in each sentence to glow up the captions." />
            <Card title="Customization" emo="✏️" desc="Edit all Caption or Emojis, change the effect of captions on screen." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
