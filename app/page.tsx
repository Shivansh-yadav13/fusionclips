"use client"
import type { NextPage } from "next";
import '../styles/global.css'
import { redirect } from "next/navigation";
import Card from "../components/web/Card";
import Link from "next/link";
import Badge from "../components/web/Badge";
import Image from "next/image";
import { useState } from "react";
import Navbar from "../components/web/Navbar";
import Footer from "../components/web/Footer";
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
    <>
      <div className='flex flex-col h-screen justify-between'>
        <div className="w-full">
          <div className="w-full lg:px-32 mx-auto">
            <div className="2xl:flex 2xl:justify-between 2xl:w-2/3 2xl:gap-20 mt-10 mx-auto text-center">
              <video className="hidden 2xl:block" width={288} src="/video_1.mp4" muted autoPlay loop></video>
              <div className="text-start text-7xl font-extrabold mx-5 uppercase">
                <h1>Turn <span className="text-orange-900">Long</span> 😪 Content to <span className="text-purple-500">Engaging 😮</span> Clips</h1>
                {/* <h1 className="">Turn 😪 Long</h1>
              <h1 className="">Live Streams 📺 to Attention 👀 Grabbing</h1>
              <h1 className="">Clips 🎞️ Using</h1>
            <h1 className=""><span className="text-white text-shadow text-shadow-y-1 text-shadow-gray-400">Fusion</span> AI🤖</h1> */}
                <div className="absolute blur-3xl -z-10 -bottom-32 xl:top-52 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply"></div>
                <div className="absolute blur-3xl -z-10 -bottom-52 right-96 xl:top-48 xl:right-96 xl:mr-5 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply"></div>
                <div className="w-fit xl:flex items-center justify-start gap-5">
                  <Link href="#features">
                    <button className="text-xs text-white bg-black p-4 m-2">Get Started</button>
                  </Link>
                  <Link href="https://www.producthunt.com/posts/fusionclips?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-fusionclips" target="_blank">
                    <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=410171&theme=light" alt="FusionClips - Convert&#0032;boring&#0032;streams&#0032;to&#0032;funny&#0032;attention&#0032;grabbing&#0032;clips | Product Hunt" width="250" height="54" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div>
                <Badge text="New" color="pink" />
              </div>
              <div id="features" className="w-full flex justify-center items-center">
                <div className="2xl:w-2/3">
                  <h1 className="font-bold text-5xl text-center">
                    Tired 😴 of watching your long Streams 📺 to find Content ?
                  </h1>
                  <p className="text-center mt-5 text-xl sm:text-xl 2xl:text-3xl text-light sm:mx-2">Using AI 🤖 convert your long boooring streams to Funny Attention 👀 Grabbing Clips</p>
                  <div className="flex justify-center mt-10">
                    <form className="flex" id="#waitlist">
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
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="mt-20 xl:w-2/3 lg:inline-grid lg:grid-cols-2 mx-5 flex flex-col gap-5">
                <Card title="AI Funny Clip Finder" emo="🔎" desc="Using AI find the most Engaging & Funny Clips from your video/live-streams." />
                <Card title="AI Generated Captions" emo="🆎" desc="Auto Generated Captions with the use of Automatic Speech Recognition (ASR) system which supports 98 Languages." />
                <Card title="Emojis Support" emo="😊" desc="Automatic Emojis added in each sentence to glow up the captions." />
                <Card title="Customization" emo="✏️" desc="Edit all Caption or Emojis, change the effect of captions on screen." />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;