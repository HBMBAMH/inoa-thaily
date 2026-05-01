import { useRef, useState } from "react"
import { motion } from "motion/react"
import LoadingScreen from "./components/LoadingScreen"
import Home from "./components/Home"
import loadingMusic from "./assets/loading.mp3"
import inoaPicture from "./assets/inoa.png"
import { Button } from "./components/ui/button"
import { FloatingBackground } from "./components/FloatingBackground"

function App() {
  const audioRef = useRef<HTMLAudioElement>(null)

  const [started, setStarted] = useState(false)
  const [loading, setLoading] = useState(false)

  const startExperience = async () => {
    const audio = audioRef.current

    if (!audio) return

    try {
      audio.volume = 1
      await audio.play()

      setStarted(true)
      setLoading(true)
    } catch (error) {
      console.log(error)
      setStarted(true)
      setLoading(true)
    }
  }

  return (
    <>
      <audio ref={audioRef} loop preload="auto">
        <source src={loadingMusic} type="audio/mpeg" />
      </audio>
      {!started && (
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center gap-10 overflow-hidden bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-violet-200 via-pink-100/50 to-violet-100">
          <FloatingBackground />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="allura-regular relative z-10 text-6xl text-violet-900/60"
          >
            Baby Shower
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="relative z-10 flex h-80 w-80 animate-circle items-center justify-center rounded-full bg-violet-200/80 shadow-[0_0_40px_rgba(139,92,246,0.3)] backdrop-blur-sm"
          >
            <img
              src={inoaPicture}
              alt="baby-pan"
              className="h-79 w-79 rounded-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
            className="relative z-10 flex h-14 w-90 items-center justify-center bg-violet-200/90 drop-shadow-xl backdrop-blur-sm"
            style={{
              clipPath:
                "polygon(0% 0%, 100% 0%, calc(100% - 30px) 50%, 100% 100%, 0% 100%, 30px 50%)",
            }}
          >
            <div className="cormorant-garamond text-4xl text-violet-900">
              Inoa Thaily
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.4 }}
            className="relative z-10"
          >
            <Button
              onClick={startExperience}
              className="cormorant-garamond h-10 w-40 text-2xl"
            >
              Abrir
            </Button>
          </motion.div>
        </div>
      )}
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      {started && !loading && <Home />}
    </>
  )
}

export default App
