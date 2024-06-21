"use client"
import React, { useState, useEffect, lazy, Suspense } from 'react';
import Link from 'next/link';
import Loader from '../../../components/Loader';


const Spline = lazy(() => import('@splinetool/react-spline'));

const Home = () => {
  const [isLgScreen, setIsLgScreen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [splineLoaded, setSplineLoaded] = useState(false);
  const [isDivVisible, setIsDivVisible] = useState(true);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsLgScreen(window.innerWidth >= 1024);
    };

    if (typeof window !== "undefined") {
      updateScreenSize();
      window.addEventListener('resize', updateScreenSize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener('resize', updateScreenSize);
      }
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 4000); 

    return () => clearTimeout(timeout);
  }, []);

  const handleSplineLoad = () => {
    setSplineLoaded(true);
  };

  const handleDivClick = () => {
    setIsDivVisible(false);
  };

  return (
    <>
      {loading ? (
        <div className='absolute top-1/2 left-[40%]'><Loader /></div>
      ) : (
        isLgScreen ? (
          <div id="spline" className="">
            <Suspense fallback={<Loader />}>
              <Spline
                scene="https://prod.spline.design/z58LVgZSZqf3kozX/scene.splinecode" 
                onLoad={handleSplineLoad}
                onClick={handleDivClick}
              />
            </Suspense>
            {isDivVisible && (
            <div  className='fixed left-[35%] top-[90%] text-[2rem] pr-16 opacity-70 font-bold'>Press the Elements to observe </div>
            )}
          </div>
            
          
        ) : (
          <>
            <nav className="fixed px-4 mt-4 mx-4 border border-white/50 rounded-2xl w-[90%] h-8 flex bg-black/80 justify-between z-10 ">
              <div className="font-extrabold mt-1">D</div>
              <div className="flex text-[0.5rem] justify-center items-center gap-8">
                <div className="hover:underline"><a id="link" href="#about">About</a></div>
                <div className="hover:underline"><a id="link" href="#projects">Projects</a></div>
                <div className="hover:underline"><a id="link" href="#contact">Contact</a></div>
              </div>
            </nav>
            <div className="p-4">
              <h1 id="about"
                className="font-extrabold my-8 mt-12 text-transparent text-5xl bg-clip-text bg-gradient-to-r from-[#8FAEE0] to-[#F0B2BD]"
              >
                Dream. Design. Develop
              </h1>
              <div className="my-8"><img className="rounded-3xl " src="/images/memoji.png" /></div>
              <div className="my-4"><p className="text-[0.8rem] leading-loose text-white/70">Hey there! I am <b className="text-white">Dimple</b>, a tech nerd who gets more excited about a perfectly centered div than a perfectly centered social life. When I am not <b className="text-white">debugging</b> my social skills , you can find me blasting music like a rogue compiler with a <b className="text-white">caffeine</b> dependency – all while sipping on some milk in the <b className="text-white">dark mode</b>  glow that protects my retinas from the horrors of light mode (because light mode is the work of illuminati anyway). Lets <b className="text-white">build</b> something that breaks the internet...<b className="text-white">together!</b><br></br><b className="text-white">Spoiler alert!</b> This portfolio does a total wardrobe change on desktop. (^^) </p></div>
              <div className="my-4"><h2 className="font-bold opacity-80 text-lg">How I would Define myself...literally</h2> <img className="rounded-xl my-4" src="/images/embed.png"></img></div>
              <div>
                <h2 className="font-bold opacity-80 my-4 text-lg">Tech I have Played with</h2>
                <div className="grid grid-cols-7 my-4 mb-8">
                  <img width="48" height="48" src="https://img.icons8.com/fluency/48/typescript--v2.png" alt="typescript--v2" />
                  <img width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1" />
                  <img width="48" height="48" src="https://img.icons8.com/color/48/python--v1.png" alt="python--v1" />
                  <img width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1" />
                  <img width="48" height="48" src="https://img.icons8.com/fluency/48/css3.png" alt="css3" />
                  <img width="48" height="48" src="https://img.icons8.com/color/48/tailwind_css.png" alt="tailwind_css" />
                  <img width="48" height="48" src="https://img.icons8.com/color/48/react-native.png" alt="react-native" />
                  <div className="bg-white"><img width="50" height="50" src="https://img.icons8.com/ios/50/000000/flask.png" alt="flask" /></div>
                  <img width="48" height="48" src="https://img.icons8.com/color/48/nodejs.png" alt="nodejs" />
                  <img width="48" height="48" src="https://img.icons8.com/color/48/000000/express-js.png" alt="express-js" />
                  <div className="bg-white"><img className="rotate-180" width="48" height="48" src="https://img.icons8.com/material-sharp/48/000000/give-way--v2.png" alt="give-way--v2" /></div>
                  <img width="48" height="48" src="https://img.icons8.com/color/48/git.png" alt="git" />
                  <div className="bg-white"><img width="60" height="60" src="https://img.icons8.com/ios-glyphs/60/github.png" alt="github" /></div>
                  <img width="48" height="48" src="https://img.icons8.com/color/48/mongo-db.png" alt="mongo-db" />
                  <img width="48" height="48" src="https://img.icons8.com/color/48/prisma-orm.png" alt="prisma-orm" />
                  <img width="48" height="48" src="https://img.icons8.com/color/48/amazon-web-services.png" alt="amazon-web-services" />
                  <img width="48" height="48" src="https://img.icons8.com/color/48/firebase.png" alt="firebase" />
                  <img width="48" height="48" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/external-digital-ocean-a-cloud-infrastructure-with-data-centers-worldwide-logo-shadow-tal-revivo.png" alt="external-digital-ocean-a-cloud-infrastructure-with-data-centers-worldwide-logo-shadow-tal-revivo" />
                  <img width="48" height="48" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png" alt="external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo" />
                  <img width="48" height="48" src="https://img.icons8.com/color/48/numpy.png" alt="numpy" />
                  <img width="48" height="48" src="https://img.icons8.com/color/48/pandas.png" alt="pandas" />
                  <img width="48" height="48" src="https://img.icons8.com/color/48/figma--v1.png" alt="figma--v1" />
                </div>
              </div>
              <h1 id="projects"
                className="font-extrabold text-3xl text-transparent text-xl bg-clip-text bg-gradient-to-r from-[#D6FAE4] to-[#6590D5]"
              >
                Built.
                Played.
                Shared.
              </h1>
              <h2 className="my-4 opacity-70 text-[0.7rem]">Here is some cool stuff I have built!</h2>

              <div className="grid grid-cols-2 my-4">
                <div><Link href="https://captioncraft.dimple.me/"><img className="scale-[70%]" src="/images/folder.png" /></Link> <h6 className="flex items-center justify-center pr-[2rem] align-center mx-2 text-[0.7rem]">CaptionCraft</h6></div>
                <div><Link href="https://github.com/GitHoobar/cc"><img className="scale-[70%]" src="/images/folder.png" /></Link> <h6 className="flex items-center justify-center pr-[2rem] align-center mx-2 text-[0.7rem]">CaptionCraft v2</h6></div>
                <div><Link href="https://nsutai.vercel.app/"><img className="scale-[70%]" src="/images/folder.png" /></Link> <h6 className="flex items-center justify-center pr-[2rem] align-center mx-2 text-[0.7rem]">Nsut.ai</h6></div>
                <div><Link href="https://limo-git.github.io/dubidubidu/"><img className="scale-[70%]" src="/images/folder.png" /></Link> <h6 className="flex items-center justify-center pr-[2rem] align-center mx-2 text-[0.7rem]">chipichipi runner</h6></div>
                <div><Link href="https://github.com/limo-git/doc.io"><img className="scale-[70%]" src="/images/folder.png" /></Link> <h6 className="flex items-center justify-center pr-[2rem] align-center mx-2 text-[0.7rem]">Doc.io</h6></div>
              </div>

              <h1 id="contact"
                className="font-extrabold mb-4 mt-8 text-3xl text-transparent text-xl bg-clip-text bg-gradient-to-r from-[#F4D79D] to-[#f0b2bd]"
              >
                Connect. Create. Community.
              </h1>
              <h2 className="my-4 opacity-70 text-[0.7rem]">check me out on my socials!</h2>
              <div className="flex justify-center items-center">
                <Link href="https://www.linkedin.com/in/dimple-yadav-149344202/"><img className="scale-[55%]" src="/images/linkedin.png" /></Link>
                <Link href="https://github.com/limo-git"><img className="scale-50" src="/images/github.png" /></Link>
                <Link href="mailto:dimple.yadav.ug23@nsut.ac.in"><img className="scale-50" src="/images/mail.png" /></Link>
              </div>
              <div className="relative left-[38%] my-4 group w-20 cursor-pointer">
                <div
                  className="absolute -inset-1 h-1- bg-gradient-to-r from-[#F4D79D] to-[#f0b2bd] rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200">
                </div>
                <div
                  className="relative bg-black/90 px-2 rounded-2xl leading-none flex items-center justify-center ">
                  <div>
                    <button className="text-white/70 font-bold h-8 text-[0.5rem]"><a href="/images/resume.pdf" download="resume.pdf">Download Resume</a></button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      )}
    </>
  );
};

export default Home;
