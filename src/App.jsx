import { useState } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css';


import './App.css'

function App() {
  let [showContent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      scale: 1.2,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".char", {
      scale: 0.4,
      x: "-50%",
      bottom: "-105%",
      right:"-379",
      // left:29,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  ER
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bmain.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {showContent && (
        <div className='main w-full rotate-[-10deg] scale-[1.7]'>

          <div className='landing w-full h-screen'>

            <div className="navbar absolute top-0 left-0 z-[10] w-full py-5 px-5 ">

              <img width={150} height={150} src="./logo.png" alt="" />

            </div>
            <div className='imagediv relative w-full h-screen overflow-hidden'>

              <img className="absolute sky top-0 left-0 w-full h-full object-cover scale-[1.5] rotate-[-20deg]" src="./sky.png" alt="" />
              <img className="absolute bg top-0 left-0 w-full h-full object-cover scale-[1.8] rotate-[-3deg]" src="./bmain.png" alt="" />
              <div className="text text-[#68521E] flex flex-col gap-3 absolute top-10 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg]">
                <h1 className="text-[5rem] leading-none -ml-20">ELDEN</h1>
                <h1 className="text-[5rem] leading-none ml-10">RING</h1>
                <h1 className="text-[5rem] leading-none -ml-70">Nightreign</h1>
              </div>
              <img className="absolute char -bottom-[105%] right-29 scale-[3] rotate-[-20deg]" src="./mychar.png" alt="" />


            </div>
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-7 px-5 bg-gradient-to-t from-black to-transparent">

              <div className='flex gap-4 items-center'>
                <i className=" text-2xl ri-arrow-down-line m-0"></i>
                <h3>SCROLL DOWN</h3>
              </div>

              <img className="absolute h-[55px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="./ps5.png" alt="" />

            </div>

            <div className="w-full h-screen flex items-center justify-center bg-black overflow-hidden">

              <div className="cntnr flex text-white w-full h-[80%] ">
                <div className="limg relative w-1/2 h-full">
                  <img
                    className="absolute scale-[1.3] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    width={320}
                    height={320}
                    src="./char2.png"
                    alt=""
                  />
                </div>
                <div className="rg w-[40%] py-2">
                  <h1 className="text-6xl">Still Running,</h1>
                  <h1 className="text-4xl">Not Hunting</h1>
                  <p className="mt-10 font-[Tahoma]">
                    Shadow of the Erdtree is the newest expansion to the acclaimed action RPG.
                    It explores a mysterious new land filled with haunting beauty and hidden dangers.
                    Players will face powerful new enemies, bosses, and intricately designed dungeons.
                    The game adds fresh weapons, magic, and gear to enhance customization.
                    Lore continues to deepen, expanding on the world crafted by George R. R. Martin.
                    Multiplayer features are refined, offering richer co-op and PvP experiences.
                    The expansion stays true to Elden Ring’s core of freedom, challenge, and discovery.

                  </p>

                  <button className="bg-[#68521E] px-5 py-5 text-black mt-10 text-2xl rounded-4xl">
                    Download Now
                  </button>
                </div>
              </div>

            </div>
          </div>



        </div>


      )}


    </>
  )
}

export default App
