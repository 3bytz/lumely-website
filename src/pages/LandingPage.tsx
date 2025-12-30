import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Instagram, Twitter } from "lucide-react";
import FooterLogo from "../assets/images/logo/Lumely logo 3.svg";
import featureFireBall from "../assets/images/features/fireball.png";
import LogoFlame from "../assets/images/logo/logoFlame.png";
import StreakBG from "../assets/images/StreakChamp.png";
import StreakBlueBG from "../assets/images/streakBlueBG.png";
import StreakVSGroup from "../assets/images/streakGroup.png";
import LumeFlameAvatarSvg from "../assets/images/LumeFlameAvatar.svg";
// import bulletCircle from "../assets/images/Check-Circle.svg";
import Xainab from "../assets/images/lumeChamp/Xainab.png";
import ibrahim from "../assets/images/lumeChamp/ibrahim.png";
import chimdi from "../assets/images/lumeChamp/chimdi.png";
import LumeChmapBg from "../assets/images/lumeChamp/champBg.png";
import howItWorksBg from "../assets/images/howitworks/transparentBg.png";

import phoneMockup from "../assets/images/howitworks/iPhone14.png";
import HeroImage from "../assets/images/hero/HeroImage.png";
import HeroShadow from "../assets/images/hero/whiteShadow.png";
import HeroFlame from "../assets/images/hero/lumelyFlame.png";

import featureImage1 from "../assets/images/features/image1.png";
import featureImage2 from "../assets/images/features/image2.png";
import featureImage3 from "../assets/images/features/image3.png";
import featureImage4 from "../assets/images/features/image4.png";
import featureImage5 from "../assets/images/features/image5.png";

import { Menu, X } from "lucide-react";
// import emailjs from "@emailjs/browser";
import GoalTrackingCard from "../components/GoalTrackingCard";
// import { EMAILJS_CONFIG } from "../config/emailjs";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";


function LandingPage() {
  // const [activeTab, setActiveTab] = useState("solo");
  const [isOpen, setIsOpen] = useState(false);

  // const [formData, setFormData] = useState({
  //   email: "",
  // });

  // const [status, setStatus] = useState<
  //   "idle" | "sending" | "success" | "error"
  // >("idle");

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setStatus("sending");

  //   try {
  //     await emailjs.send(
  //       EMAILJS_CONFIG.SERVICE_ID,
  //       EMAILJS_CONFIG.TEMPLATE_ID,
  //       {
  //         to_email: EMAILJS_CONFIG.TO_EMAIL,
  //         from_email: formData.email,
  //       },
  //       EMAILJS_CONFIG.PUBLIC_KEY
  //     );

  //     await emailjs.send(
  //       EMAILJS_CONFIG.SERVICE_ID,
  //       EMAILJS_CONFIG.USER_TEMPLATE_ID,
  //       {
  //         to_email: formData.email,
  //         from_email: EMAILJS_CONFIG.TO_EMAIL,
  //         logo_url: EMAILJS_CONFIG.LOGO_URL,
  //         subject: "Welcome to Lumely Waitlist! 🎉",
  //         twitter_url: "https://twitter.com/",
  //         instagram_url: "https://instagram.com/",
  //         support_email: "info@lumely.io",
  //       },
  //       EMAILJS_CONFIG.PUBLIC_KEY
  //     );

  //     setStatus("success");
  //     setFormData({ email: "" });
  //   } catch (error) {
  //     console.error("Failed to send email:", error);
  //     setStatus("error");
  //   }
  // };

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* <CountdownTimer /> */}
        {/* Navigation */}
        <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
          {/* Logo Section */}
          <div>
            <img src={FooterLogo} alt="Logo missing" className="w-[120px]" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-12 items-center justify-between bg-white rounded border border-[#EBF3FF] px-6 py-2">
            <div className="flex space-x-12 items-center w-[513px] p-3 gap-2 bg-[#f9fbff] rounded border border-[#EBF3FF]">
              <a
                href="#how-it-works"
                className="hover:opacity-80 text-[16px] font-fredoka text-[#007BFF]"
              >
                How it works
              </a>
              <a
                href="#features"
                className="hover:opacity-80 text-[16px] font-fredoka text-[#007BFF]"
              >
                Features
              </a>
              <a
                href="#leaderboard"
                className="hover:opacity-80 text-[16px] font-fredoka text-[#007BFF]"
              >
                Leaderboard
              </a>
              {/* <a
                href="#pricing"
                className="hover:opacity-80 text-[16px] font-fredoka text-[#007BFF]"
              >
                Pricing
              </a> */}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="absolute top-16 left-0 w-full bg-[#18237d] border-t text-white px-4 py-4 border-[#EBF3FF] shadow-md md:hidden  z-10">
              <div className="flex flex-col space-y-4 py-4 items-center">
                <a
                  href="#how-it-works"
                  className="text-[16px] font-fredoka text-[white] hover:opacity-80"
                >
                  How it works
                </a>
                <a
                  href="#features"
                  className="text-[16px] font-fredoka text-[white] hover:opacity-80"
                >
                  Features
                </a>
                <a
                  href="#leaderboard"
                  className="text-[16px] font-fredoka text-[white] hover:opacity-80"
                >
                  Leaderboard
                </a>
                {/* <a
                  href="#pricing"
                  className="text-[16px] font-fredoka text-[white] hover:opacity-80"
                >
                  Pricing
                </a> */}
              </div>
            </div>
          )}

          {/* CTA Button */}
          <button className="text-white text-center h-[68px] text-[18px] font-bold font-[Fredoka] text-shadow-[0px_2px_10px_#B0C] stroke-[1px] stroke-[#8C0099] px-12 py-3 bg-[url('/src/assets/images/howitworks/startWiningbutton2.png')] bg-contain bg-center bg-no-repeat hover:opacity-90 hidden md:block">
            <span className="invisible">Start Winning</span>
          </button>
        </nav>

        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-16 relative">
          {/* Hero Content */}
          <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
            {/* Title */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#007BFF] font-fredokaOne relative leading-tight"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="relative">
                Crush Your
                <img
                  src="https://s3-alpha-sig.figma.com/img/fa0a/1e4a/99a3c80b591f7d8549293cca23481b1f?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rdKj4G5CHCgxnkSecs1O1TqyxmNPEWYMK0sWW2AWyKgWbHM7umDJXZCiHpDqyAggjnYoNf79N6ZANMZcCuMacFJR~EurVs9XfTmkweGG85hns-frOCCJrmDFogGdPaeSI0G6rn9xGtettfrewWYd95q~k3fs54Qe9OH-2dcHm4vNd8ZLt6Tr9M57OQT6eJ5cdQGRysaxquGd0Lpk3fmOelWPElFJQdcfvbX6zx6tFtAGgXSfvjLmvpgq4CU93WX~QDbLuwcwDGZnDNXymouySfG0lm8u1NJWbGKuI4OZVVRJJ73rxLbBmlwyw8sFP3vMb-mpfE6ODgX9Z2LdjYfmQg__"
                  alt=""
                  className="absolute -top-6 sm:-top-8 right-[-30px] sm:right-[-40px] w-10 sm:w-14 rotate-12 md:-right-64"
                />
              </span>
              <span className="text-[#002053] font-light"> Goals.</span>
              <br />
              Build Winning
              <span className="text-[#002053] font-light"> Habits.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              className="text-lg sm:text-xl text-[#444] mt-3 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              Lumely is your secret weapon for success. Build better habits,
              stay consistent, and challenge yourself with real rewards.
            </motion.p>

            {/* Input and Button */}
            {/* <motion.div
              className="flex flex-col sm:flex-col items-center gap-4 mt-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              <form
                className="flex flex-col sm:flex-row items-center gap-4 "
                onSubmit={handleSubmit}
              >
                <div className="relative w-full sm:w-96">
                  <input
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    type="email"
                    placeholder="Email here"
                    className="px-8 py-5 w-full text-[#0057E2] bg-white rounded-full focus:outline-none focus:ring-0 shadow-none border-2 border-transparent bg-clip-padding relative z-10"
                  />
                  <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#68A2FF] via-transparent to-transparent"></div>
                </div>

                <button
                  type="submit"
                  className="px-8 sm:px-12 py-3 sm:py-4 text-white font-bold bg-[url('/src/assets/images/hero/WaitListbutton.png')] bg-contain bg-center bg-no-repeat"
                >
                  {status === "sending" ? "Sending..." : " Join waiting list"}
                </button>
              </form>
              {status === "success" && (
                <p className="text-green-600 text-center">
                  Subscription sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-center">
                  Failed to send subscription. Please try again.
                </p>
              )}
            </motion.div> */}

            {/* Hero Images */}
            <motion.div
              className="w-full flex flex-col justify-center items-center relative mt-10 sm:mt-16"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <img
                src={HeroImage}
                className="max-w-full h-auto"
                alt="Hero Image"
              />
              <img
                src={HeroShadow}
                className="absolute bottom-0 max-w-full"
                alt="Shadow"
              />

              {/* Floating Elements */}
              <motion.img
                src={HeroFlame}
                className="absolute left-6 sm:left-16 bottom-10 sm:bottom-20"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
                alt="Flame"
              />
              {/* <motion.img
                src="https://s3-alpha-sig.figma.com/img/ad10/08a6/055d41b8dd78b6e696cd11aed4d3ff3f?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FSWmBGDo-tB7EPdNamx2rd16brjBXJi-xh0XlAry--EKwpvvPzCjN9FoBUptEQUR7SHdW0dcRnTPnXLiAxzrXrGX53m8frSRbTNZ4F9qZ9cujvpSx77CrcqDnbHw7ekt~7H2g1OwBaqhkSiiasbwzd0mqMEZ8p-63M4-9KdMgw29t0EBKLk6Rh1sIHZkEAkBrLp~9OZTATNI8xh3pYpM3oCtX-Newta2lRNJgkZlGADEYxBOvDtC872agrHFmz9iGgoY1Tsxyc68P4qMYHfB~LhlhxbQHDoXAXREMQTU35k3eAHZxZEwYGM6pP~CzGousOkbXZE00-KO8s~TUY4mSQ__"
                className="absolute top-[-20px] sm:top-[-40px] right-6 sm:right-12 w-10 sm:w-14 md:left-48 md:top-[-280px]"
                animate={{ rotate: [0, 10, 0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                alt="Floating Element"
              /> */}
            </motion.div>
          </div>
        </section>

        {/* App Download Section */}
        <section className="py-16 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-4">
            <motion.div 
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-[#007BFF] mb-6 font-fredoka"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Get the App Now!
              </motion.h2>
              
              <motion.p 
                className="text-lg text-[#444] mb-10 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Start building winning habits today. Download Lumely on your device and begin your journey to success.
              </motion.p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.a
                  href="https://drive.google.com/uc?export=download&id=1TCdx-wNEzAyOtEklLM1yZ7qaHDp3i6-e"
                  download={true}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-[#007BFF] text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.789 19.092L15.5 18.208 6.604 9.312 15.5.416l-1.102-2.23-12 12a1.5 1.5 0 0 0 0 2.122l12 12z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-xl font-bold">Google Play</div>
                  </div>
                </motion.a>
                
                <motion.a
                  href="https://apps.apple.com/us/app/lumely/id6753071708"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-black text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 12.04C17.05 8.02 19.69 5.58 19.82 5.47C18.25 3.3 15.91 3.2 15.13 3.2C13.39 3.2 11.73 4.25 10.74 4.25C9.71 4.25 8.23 3.24 6.73 3.27C4.82 3.3 3.1 4.33 2.22 6.03C0.25 9.58 1.58 15.06 3.5 17.94C4.42 19.24 5.5 20.7 6.86 20.64C8.19 20.58 8.73 19.75 10.36 19.75C11.97 19.75 12.48 20.64 13.88 20.61C15.32 20.58 16.26 19.27 17.14 17.97C18.17 16.5 18.58 15.07 18.6 15C18.57 14.98 17.05 14.09 17.05 12.04ZM14.83 2.5C15.49 1.65 15.97 0.5 15.83 -0.67C14.83 -0.63 13.63 0.03 12.94 0.88C12.33 1.63 11.75 2.82 11.9 3.97C12.99 4.05 14.14 3.38 14.83 2.5Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">DOWNLOAD ON THE</div>
                    <div className="text-xl font-bold">App Store</div>
                  </div>
                </motion.a>
              </div>
              
              {/* Animated decorative elements */}
              <motion.div
                className="absolute -z-10 opacity-10"
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  rotate: {
                    repeat: Infinity,
                    duration: 20,
                    ease: "linear"
                  },
                  scale: {
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut"
                  }
                }}
              >
                <svg width="300" height="300" viewBox="0 0 100 100">
                  <path
                    fill="none"
                    stroke="#007BFF"
                    strokeWidth="0.5"
                    d="M50,5 A45,45 0 1,1 50,95 A45,45 0 1,1 50,5"
                  />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* How it Works */}
        <section id="how-it-works" className="bg-[#FF8C00] py-20 relative">
          <img src={howItWorksBg} alt="Bg" className="absolute top-0 left-0" />
          <div className="container mx-auto px-4 md:px-4 relative z-10">
            <motion.h2
              className="text-3xl md:text-4xl text-white font-fredoka font-semibold leading-none tracking-tight text-center mb-4 md:pl-72"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              How it works
            </motion.h2>
            <motion.p
              className="mb-12 text-[#FFE8CC] text-center font-[Fredoka] text-lg md:text-xl font-normal leading-none md:pl-80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              How Lumely Works in 5 Simple Steps:
            </motion.p>
            <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-24 ">
              <motion.div
                className="md:w-4/12 h-[700px] md:h-auto rounded-[3rem] overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <img src={phoneMockup} alt="App image mockup" />
              </motion.div>
              <div className="md:w-5/12 space-y-12 md:space-y-20 relative before:absolute before:left-0 before:top-6 before:w-0.5 before:h-[calc(100%-2rem)] before:bg-[#FFD9AA] stroke-[#FFD9AA] stroke-2">
                {[
                  {
                    title: "Set Your Goal",
                    items: [
                      "Create a goal",
                      "Choose the habits you want to master",
                      "Create a To-Do",
                    ],
                  },
                  {
                    title: "Get AI-Powered Guidance",
                    items: [
                      "Get smart habit suggestions",
                      "Personalized reminders",
                      "Progress insights from Lumely's AI coach",
                    ],
                  },
                  {
                    title: "Make It Stick",
                    items: [
                      "Build streaks",
                      "Stay consistent",
                      "Reinforce habits with engaging micro-tasks",
                    ],
                  },
                  {
                    title: "Challenge Yourself",
                    items: [
                      "Join leaderboards",
                      "Compete with friends",
                      "Push yourself to the next level",
                    ],
                  },
                  {
                    title: "Celebrate Your Wins!",
                    items: [
                      "Earn rewards",
                      "Unlock achievements",
                      "Show off your progress!",
                    ],
                  },
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-6 text-white pl-8"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 * index }}
                  >
                    <div className="w-6 h-6 flex-shrink-0 rounded-full bg-[#FFD9AA] mt-4 -ml-11"></div>
                    <div>
                      <h3 className="text-xl mb-2 text-white font-[Fredoka] text-[24px] font-bold leading-none">
                        {step.title}
                      </h3>
                      <ul className="space-y-1 text-sm opacity-90">
                        {step.items.map((item, i) => (
                          <li
                            key={i}
                            className="text-[#FFE8CC] font-[Fredoka] text-[16px] font-normal leading-none list-disc list-inside marker:text-white"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              <p className="text-white mb-4 text-[24px] font-medium leading-normal font-[Fredoka]">
                Be a winner, you're born a winner
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className=" text-white text-center h-[175px] text-[18px] font-bold leading-normal font-[Fredoka] text-shadow-[0px_2px_10px_#B0C] stroke-[1px] stroke-[#8C0099] px-12 py-3  hover:opacity-90  bg-[url('/src/assets/images/howitworks/startWiningbutton2.png')] bg-contain bg-center bg-no-repeat "
              >
                <span className="invisible">Start Winning</span>
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="bg-[#1A237E] py-20 relative">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-white mb-4 font-fredoka text-[28px] sm:text-[32px] md:text-[36px] font-semibold tracking-[-0.72px] text-center"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              What You Can Do with Lumely
            </motion.h2>
            <motion.p
              className="text-white/80 mb-12 max-w-2xl mx-auto text-[#DBE9FF] font-fredoka text-[18px] sm:text-[22px] md:text-[24px] font-medium text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Set Goals & Resolutions. Get daily habits to achieve them. Stay
              consistent with Lumely. Actually achieve them, and Repeat.
            </motion.p>

            <img
              src={featureFireBall}
              alt="Background avatar"
              className="absolute right-0 top-0 w-[80px] sm:w-[120px] md:w-[150px]"
            />

            <motion.div
              className="flex flex-col justify-center items-center sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative bg-[url('/src/assets/images/features/bgCloud.png')] bg-cover bg-center md:py-28 h-auto"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
              }}
            >
              {[
                {
                  title: "Goal Tracking",
                  description: "Set personal goals and track your wins",
                  image: featureImage1,
                  style:
                    " sm:left-[10%] sm:top-[-20%] lg:left-[6%] translate-x-[-30%]",
                },
                {
                  title: "Compete & Connect",
                  description:
                    "Join the Lumely League, challenge friends, and earn bragging rights",
                  image: featureImage2,
                  style: " sm:left-1/2 md:left-1/3 lg:left-0",
                },
                {
                  title: "Streak Power",
                  description:
                    "Keep your streak alive and move up the leaderboard",
                  image: featureImage3,
                  style: "sm:top-[200px] sm:right-0",
                },
                {
                  title: "To-Do Feature",
                  description:
                    "Not just habits! Add daily tasks and mark them done",
                  image: featureImage4,
                  style: "md:left-[20%] lg:left-[10%] translate-x-[-30%]",
                },
                {
                  title: "Lume AI",
                  description: "Smart reminders and tips tailored for you",
                  image: featureImage5,
                  style: "md:left-[20%] md:top-[30%] translate-x-[-60%]",
                },
              ].map((feature, index) => (
                <GoalTrackingCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  cardImage={feature.image}
                  style={feature.style}
                  className="border border-gray-200"
                />
              ))}
            </motion.div>

            <img
              src={featureFireBall}
              alt="Background avatar"
              className="absolute right-0 bottom-6 w-[80px] sm:w-[120px] md:w-[150px]"
            />

            <div className="text-center mt-20 sm:mt-44">
              <p className="mb-6 text-[#DBE9FF] font-fredoka text-[24px] sm:text-[28px] md:text-[30px] font-medium">
                Don't be all mouth, without action
              </p>
              <button className="text-white h-[60px] sm:h-[68px] text-[16px] sm:text-[18px] font-bold leading-normal font-fredoka px-6 sm:px-12 py-2 sm:py-3 hover:opacity-90 bg-[url('/src/assets/images/howitworks/startWiningbutton2.png')] bg-contain bg-center bg-no-repeat w-full sm:w-auto">
                <span className="invisible">Start Winning</span>
              </button>
            </div>
          </div>
        </section>

        {/* Champions Section */}
        <section
          id="leaderboard"
          className="py-20 bg-gradient-to-br from-purple-50 to-white relative"
        >
          <img
            src={LumeChmapBg}
            alt="chmap bg"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-normal tracking-tight text-[#8335BB] mb-6 font-fredoka"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Lume Champion
            </motion.h2>

            <motion.p
              className="text-[#350757] text-base md:text-lg lg:text-xl font-light leading-normal mb-8 md:mb-16 font-fredoka"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Your habits, your progress, your victories!
              <br />
              Compete, track, and rise to the{" "}
              <span className="text-[#350757] font-semibold">top</span>.
            </motion.p>

            {/* Leaderboard Display */}
            <div className="flex flex-wrap justify-center md:justify-around items-center gap-4 md:gap-8 mt-16 md:mt-32 mb-12 py-8 md:py-12">
              {/* Second Place */}
              <motion.div
                className="w-36 md:w-44 lg:w-64 relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <img src={Xainab} alt="Second Place" className="w-full" />
              </motion.div>

              {/* First Place (Larger and centered) */}
              <motion.div
                className="w-40 md:w-52 lg:w-72 relative -translate-y-12 md:-translate-y-24 z-10"
                initial={{ scale: 1.3 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                  delay: 0.8,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <img src={ibrahim} alt="First Place" className="w-full" />
              </motion.div>

              {/* Third Place */}
              <motion.div
                className="w-36 md:w-44 lg:w-64 relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <img src={chimdi} alt="Third Place" className="w-full" />
              </motion.div>
            </div>

            <motion.p
              className="text-[#23043A] text-center text-base md:text-lg lg:text-xl font-light leading-normal mb-6 md:mb-8 max-w-2xl mx-auto font-fredoka"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Complete your daily tasks to stand a chance to win our
              <span className="font-bold"> monthly Lume Raffle Draw</span> and
              claim the
              <span className="font-bold"> Streak Master</span> title by winning
              six times in a year.
            </motion.p>
            <motion.button
              className=" text-white text-center text-[18px] font-bold leading-normal font-fredoka text-shadow-[0px_2px_10px_#B0C] stroke-[1px] stroke-[#8C0099] px-12 py-3  hover:opacity-90  bg-[url('/src/assets/images/buttons/JointheChallenge.png')] bg-contain bg-center bg-no-repeat"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Join the Challenge
            </motion.button>
          </div>
        </section>

        {/* Streak Challenge */}
        <motion.section
          className="py-16 sm:py-20 bg-white relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Background Image */}
          <img
            src={StreakBG}
            alt="streak bg"
            className="absolute right-0 w-1/2 sm:w-auto h-full object-cover"
          />

          <div className="container mx-auto px-4 sm:px-12 flex flex-col items-center text-center relative z-10">
            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight mb-4 font-fredoka"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-[#2478FF] sm:text-3xl font-bold">
                Ongoing Battle:
              </span>
              <br />
              <span className="text-[#0052AA] sm:text-3xl font-bold">The</span>
              <span className="text-[#0052AA] sm:text-3xl font-light">
                Ultimate
              </span>
              <span className="text-[#0052AA] sm:text-3xl font-bold">
                Streak Challenge!
              </span>
            </motion.h2>

            <motion.p
              className="text-[#002955] text-base sm:text-lg md:text-xl font-light leading-normal max-w-3xl mx-auto mb-8 sm:mb-12 font-fredoka"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Five friends. One challenge. Stay on track, complete your daily
              tasks, and outlast your rivals. The friend with the longest streak
              wins cash rewards and ultimate bragging rights!
            </motion.p>

            {/* Image Wrapper */}
            <div className="relative w-full sm:w-[400px] md:w-[500px] h-[400px] sm:h-[500px] flex justify-center items-center">
              {/* Background */}
              <img
                src={StreakBlueBG}
                alt="background"
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
              />

              {/* Main Image */}
              <img
                src={StreakVSGroup}
                alt="challenge participants"
                className="absolute top-0 left-0 w-full h-full object-contain z-10"
              />

              {/* Floating Avatar */}
              <img
                src={LumeFlameAvatarSvg}
                alt="flame avatar"
                className="w-16 sm:w-24 absolute bottom-4 sm:bottom-8 -right-12 sm:right-0"
              />
            </div>
          </div>
        </motion.section>

        {/* Pricing plan */}
        {/* <div className="flex flex-col items-center py-6 sm:py-10" id="pricing">
          <motion.h2
            className="text-[#FF8C00] text-2xl sm:text-3xl md:text-4xl font-semibold font-fredoka"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            PRICING
          </motion.h2>

          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#331C00] font-fredoka"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Choose Your Path!
          </motion.h1>

          <motion.div
            className="flex bg-[#AA5D00] rounded-full p-1 mt-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className={`px-6 sm:px-12 md:px-24 py-3 text-sm sm:text-lg font-semibold rounded-full transition-all duration-300 font-fredoka ${
                activeTab === "solo"
                  ? "bg-orange-300 text-[#FFE8CC]"
                  : "text-[#FFE8CC]"
              }`}
              onClick={() => setActiveTab("solo")}
            >
              Solo Plan
            </button>
            <button
              className={`px-6 sm:px-12 py-3 text-sm sm:text-lg font-semibold rounded-full transition-all duration-300 font-fredoka ${
                activeTab === "battle" ? "bg-orange-300" : "text-[#FFE8CC]"
              }`}
              onClick={() => setActiveTab("battle")}
            >
              Battle Plan (For 5 Friends)
            </button>
          </motion.div>

        
          {activeTab === "solo" && (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 md:gap-20 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
             
              <motion.div
                className="bg-orange-400 p-6 rounded-xl shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md text-black font-fredoka"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  ₦3,000
                </h3>
                <p className="text-sm">Per Month</p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center">
                    <img
                      src={bulletCircle}
                      alt="check"
                      className="w-4 h-4 mr-2"
                    />
                    Habit tracking & progress insights
                  </li>
                  <li className="flex items-center">
                    <img
                      src={bulletCircle}
                      alt="check"
                      className="w-4 h-4 mr-2"
                    />
                    AI-powered motivation & reminders
                  </li>
                  <li className="flex items-center">
                    <img
                      src={bulletCircle}
                      alt="check"
                      className="w-4 h-4 mr-2"
                    />{" "}
                    Streak rewards & milestone celebrations
                  </li>
                  <li className="flex items-center">
                    <img
                      src={bulletCircle}
                      alt="check"
                      className="w-4 h-4 mr-2"
                    />{" "}
                    Access to exclusive community challenges
                  </li>
                  <li className="flex items-center">
                    <img
                      src={bulletCircle}
                      alt="check"
                      className="w-4 h-4 mr-2"
                    />{" "}
                    Stand a chance to win in the Lume Raffle Draw
                  </li>
                </ul>
                <button className="mt-4 w-full bg-gradient-to-r from-orange-500 to-purple-500 py-2 rounded-lg font-semibold text-white">
                  Subscribe
                </button>
              </motion.div>

            
              <motion.div
                className="bg-blue-600 p-6 rounded-xl shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-lg text-white relative font-fredoka"
                whileHover={{ scale: 1.05 }}
              >
                <span className="absolute top-2 right-2 bg-white text-blue-600 text-xs px-2 py-1 rounded-lg">
                  Get 2-month free
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  ₦30,000
                </h3>
                <p className="text-sm">Per Year</p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center">
                    <img
                      src={bulletCircle}
                      alt="check"
                      className="w-4 h-4 mr-2"
                    />
                    Habit tracking & progress insights
                  </li>
                  <li className="flex items-center">
                    <img
                      src={bulletCircle}
                      alt="check"
                      className="w-4 h-4 mr-2"
                    />
                    AI-powered motivation & reminders
                  </li>
                  <li className="flex items-center">
                    <img
                      src={bulletCircle}
                      alt="check"
                      className="w-4 h-4 mr-2"
                    />{" "}
                    Streak rewards & milestone celebrations
                  </li>
                  <li className="flex items-center">
                    <img
                      src={bulletCircle}
                      alt="check"
                      className="w-4 h-4 mr-2"
                    />{" "}
                    Access to exclusive community challenges
                  </li>
                  <li className="flex items-center">
                    <img
                      src={bulletCircle}
                      alt="check"
                      className="w-4 h-4 mr-2"
                    />{" "}
                    Stand a chance to win in the Lume Raffle Draw
                  </li>
                </ul>
                <button className="mt-4 w-full bg-gradient-to-r from-orange-500 to-purple-500 py-2 rounded-lg font-semibold">
                  Subscribe
                </button>
              </motion.div>
            </motion.div>
          )}
        
          {activeTab !== "solo" && (
            <motion.div
              className="flex flex-col md:flex-row gap-20 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
            
              <motion.div
                className="bg-orange-400 p-6 rounded-xl shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md text-black font-fredoka"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-2xl font-bold text-white text-start text-[36px] leading-normal tracking-[-0.72px]">
                  ₦10,000
                </h3>
                <p className="text-sm">Per Month</p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center">
                    <img
                      src={bulletCircle}
                      alt="check"
                      className="w-4 h-4 mr-2"
                    />{" "}
                    Challenge your friends – Track habits together & stay
                    accountable
                  </li>
                  <li className="flex items-center">
                    <img
                      src={bulletCircle}
                      alt="check"
                      className="w-4 h-4 mr-2"
                    />{" "}
                    Leaderboard rankings – Climb the board & stay motivated
                  </li>
                  <li className="flex items-center">
                    <img
                      src={bulletCircle}
                      alt="check"
                      className="w-4 h-4 mr-2"
                    />{" "}
                    Exclusive rewards – Win streak bonuses & unlock achievements
                  </li>
                  <li className="flex items-center">
                    <img
                      src={bulletCircle}
                      alt="check"
                      className="w-4 h-4 mr-2"
                    />{" "}
                    Access to exclusive community challenges
                  </li>
                  <li className="flex items-center">
                    <img
                      src={bulletCircle}
                      alt="check"
                      className="w-4 h-4 mr-2"
                    />{" "}
                    Join the Monthly Lume Raffle Draw – Just complete your daily
                    tasks!
                  </li>
                </ul>
                <button className="mt-4 w-full bg-gradient-to-r from-orange-500 to-purple-500 py-2 font-fredoka rounded-lg font-semibold text-white">
                  Subscribe
                </button>
              </motion.div>

             
              <motion.div
                className="bg-blue-600 p-6 rounded-xl shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md text-white relative font-fredoka"
                whileHover={{ scale: 1.05 }}
              >
                <span className="absolute top-2 right-2 bg-white text-blue-600 text-xs px-2 py-1 rounded-lg">
                  Get 2-month free
                </span>
                <h3 className="text-2xl font-bold text-white text-start text-[36px] leading-normal tracking-[-0.72px]">
                  ₦100,000
                </h3>
                <p className="text-sm">Per Year</p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center">
                    <img
                      src={bulletCircle}
                      alt="check"
                      className="w-4 h-4 mr-2"
                    />{" "}
                    Challenge your friends – Track habits together & stay
                    accountable
                  </li>
                  <li className="flex items-center">
                    <img
                      src={bulletCircle}
                      alt="check"
                      className="w-4 h-4 mr-2"
                    />{" "}
                    Leaderboard rankings – Climb the board & stay motivated
                  </li>
                  <li className="flex items-center">
                    <img
                      src={bulletCircle}
                      alt="check"
                      className="w-4 h-4 mr-2"
                    />{" "}
                    Exclusive rewards – Win streak bonuses & unlock achievements
                  </li>
                  <li className="flex items-center">
                    <img
                      src={bulletCircle}
                      alt="check"
                      className="w-4 h-4 mr-2"
                    />{" "}
                    Access to exclusive community challenges
                  </li>
                  <li className="flex items-center">
                    <img
                      src={bulletCircle}
                      alt="check"
                      className="w-4 h-4 mr-2"
                    />{" "}
                    Join the Monthly Lume Raffle Draw – Just complete your daily
                    tasks!
                  </li>
                </ul>
                <button className="mt-4 w-full bg-gradient-to-r from-orange-500 to-purple-500 py-2 rounded-lg font-semibold font-fredoka">
                  Subscribe
                </button>
              </motion.div>
            </motion.div>
          )}
        </div> */}

        {/* Footer */}
        <motion.footer
          className="bg-white py-12 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4 flex flex-col gap-12 relative">
            {/* Contact Section */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-xl md:text-[128px] font-fredoka font-medium text-[#0057E2] underline decoration-solid underline-offset-4 md:tracking-[-2.56px]">
                info@lumely.io
              </div>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              className="flex space-x-4 md:space-x-6 justify-start md:mt-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {[Mail, Instagram, Twitter].map((Icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 md:w-[61px] md:h-[59px] flex justify-center items-center p-3 cursor-pointer rounded-[4px] border border-[#EEE] bg-white shadow-sm"
                >
                  <Icon className="w-full h-full text-[#0041A9]" />
                </motion.div>
              ))}
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="text-lg md:text-[16px] font-fredoka font-normal text-[#0041A9]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Quick Links
            </motion.div>

             <motion.div
            className="flex flex-wrap justify-start items-center gap-4 md:gap-6 py-3 px-4 bg-[#DBE9FFAD] rounded-[2px] border border-[rgba(219, 233, 255, 0.68)] w-full md:w-5/12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {[
              { name: "Home", link: "/" },
              { name: "How it works", link: "#how-it-works" },
              { name: "Features", link: "#features" },
              { name: "Leaderboard", link: "#leaderboard" },
              // { name: "Pricing", link: "#pricing" },
              { name: "Support", link: "/support" },
              { name: "Privacy Policy", link: "/privacy" },
              { name: "Terms of Service", link: "/terms" },
            ].map((link, index) => (
              link.link.startsWith('/') ? (
                <Link
                  key={index}
                  to={link.link}
                  className="text-[#498FFF] text-sm md:text-[16px] font-bold hover:text-[#0057E2] transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={index}
                  href={link.link}
                  className="text-[#498FFF] text-sm md:text-[16px] font-bold hover:text-[#0057E2] transition-colors duration-300"
                >
                  {link.name}
                </a>
              )
            ))}
          </motion.div>

            {/* Footer Logo */}
            <motion.div
              className="flex justify-start my-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <img
                src={FooterLogo}
                alt="lumely"
                className="w-24 md:w-[160px] lg:w-[200px]"
              />
            </motion.div>
          </div>

          {/* LogoFlame Positioned Responsively */}
          <motion.div
            className="absolute right-4 bottom-4 md:right-0 md:bottom-6 lg:bottom-1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <img
              src={LogoFlame}
              alt="lumely"
              className="w-[80px] md:w-[160px] lg:w-[200px]"
            />
          </motion.div>
        </motion.footer>
      </div>
    </Layout>
  );
}

export default LandingPage;