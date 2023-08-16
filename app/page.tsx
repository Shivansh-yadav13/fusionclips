"use client"
import type { NextPage } from "next";
import { useState } from "react";
import '../styles/global.css'
import Card from "../components/web/Card";
import Badge from "../components/web/Badge";
import CTAButton from "../components/web/CTAButton";
import axios from "axios";

const Index: NextPage = () => {
  const [email, setEmail] = useState<string>();

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
    } else {
      console.log("Email is undefined")
    }
  }

  return (
    <div className="w-full">
      <div className="w-full px-32 mx-auto">
        <div className="flex justify-around">
            <div className="w-3/6 pt-20">
              <h1 className="text-start font-bold text-7xl">Boooring Streams to Funny Clips 😂</h1>
              <br />
              <h1 className="text-start font-bold text-7xl">Using AI 🤖</h1>
              <CTAButton text="Get Started" />
            </div>
            <video className="border-4 border-prime my-10" width={288} src="/video_1.mp4" muted autoPlay loop ></video>
        </div>
        <div className="flex flex-col items-center">
          <div>
          <Badge text="New" color="pink" />
          </div>
          <div id="features" className="w-full flex justify-center">
            <div className="w-3/5">
              <h1 className="mx-auto font-bold text-7xl text-center">
                Tired 😴 of watching your long Streams 📺 to find <p className="text-prime">Content</p>?
              </h1>
              <p className="text-center mt-5 text-3xl text-light">Using AI 🤖 convert your long boooring streams to Funny Attention 👀 Grabbing Clips</p>
              <p className="text-center text-light">Join the Waiting List to get <span>
              <Badge text="FREE" color="green" />
                </span> Access to the Feature</p>
            </div>
          </div>
          <form className="flex">
            <div className="flex w-full max-w-sm items-center space-x-2">
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="focus:outline-none border-2 border-prime p-2" />
              <button 
                className="bg-prime hover:bg-prime_dark hover:scale-110 transition-all text-white font-bold py-2 my-5 px-6 mx-auto text-center"
                onClick={(e) => {
                  e.preventDefault();
                  handleFormSubmit();
                }}
              >
                Join
              </button>
            </div>
          </form>
        </div>
        <div className="flex justify-center">
          <div className="mt-20 w-1/2 inline-grid grid-cols-2 gap-4 pb-40">
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
