import balloons from "../assets/balloons.png"
import babyPan from "../assets/baby-pan.png"
import { Button } from "./ui/button"
import { useCountdown } from "../hooks/useCountdown"
import { TypewriterEffect } from "./ui/typewriter-effect"
import { Spacer } from "./Spacer"
import { CountdownItem } from "./ui/Countdown"
import { Date } from "./ui/Date"
import { Location } from "./ui/Location"
import { words } from "@/data/data"
import { motion } from "motion/react"

export default function Home() {
  const { days, hours, minutes, seconds } = useCountdown("2026-05-30T14:00:00")

  const handleClickLocation = () => {
    window.open("https://maps.app.goo.gl/aEJihAz7jXicqC4j7", "_blank")
  }
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/inoa-thaily/bg.gif')" }}
    >
      <div className="absolute inset-0 bg-violet-200/50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center gap-10 pt-30 md:p-70">
        {/* Balloons Image */}
        <div className="fixed top-0 left-0 z-20 w-full">
          <img
            src={balloons}
            alt="balloons"
            className="h-auto w-full object-contain"
          />
        </div>

        {/* Invitation text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="cormorant-garamond px-10 text-center text-4xl text-violet-900"
        >
          Nos complace invitarte a celebrar este día tan especial para nosotros.
        </motion.div>

        {/* Parents Names */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="allura-regular text-center text-6xl text-violet-900"
        >
          Iveth y Hugo
        </motion.div>

        {/* Pan Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img src={babyPan} alt="baby-pan" className="w-60.50 h-80" />
        </motion.div>

        {/* Countdown */}
        <Spacer className="hidden h-10 md:block md:h-30" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="flex w-full justify-center"
        >
          <CountdownItem
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
          />
        </motion.div>

        {/* Date */}
        <Spacer className="h-30" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <Date />
        </motion.div>
        <Spacer className="h-10" />

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-10"
        >
          <Location />
          <Button className="h-15 w-50 text-2xl" onClick={handleClickLocation}>
            Ubicacion
          </Button>
        </motion.div>

        <Spacer className="h-20" />

        {/* Invitation Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="flex h-15 w-95 items-center justify-center bg-white/30"
        >
          <TypewriterEffect words={words} className="text-violet-900" />
        </motion.div>

        <Spacer className="h-30" />
      </div>
    </div>
  )
}
