import { motion } from "motion/react"
import { useEffect, useState } from "react"

export function FloatingBackground() {
  const [orbs, setOrbs] = useState<any[]>([])

  useEffect(() => {
    const colors = [
      "bg-white shadow-white",
      "bg-violet-300 shadow-violet-300",
      "bg-pink-300 shadow-pink-300",
    ]

    // Generate floating orbs only once when the component mounts
    const newOrbs = Array.from({ length: 35 }).map((_, i) => ({
      id: i,
      size: Math.random() * 70 + 20, // 20px to 90px
      x: Math.random() * 100, // 0 to 100vw
      y: Math.random() * 100, // 0 to 100vh
      duration: Math.random() * 10 + 15, // 15s to 25s
      delay: Math.random() * 5,
      moveY: -(Math.random() * 150 + 50), // Move up between 50px and 200px
      moveX: Math.random() * 80 - 40, // Move horizontally between -40px and 40px
      colorClass: colors[i % colors.length], // Assign a color
    }))
    setOrbs(newOrbs)
  }, [])

  if (orbs.length === 0) return null

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Animated Orbs */}
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className={`absolute rounded-full blur-[1px] shadow-[0_0_20px_var(--tw-shadow-color)] ${orb.colorClass}`}
          style={{
            width: orb.size,
            height: orb.size,
            left: `${orb.x}%`,
            top: `${orb.y}%`,
          }}
          animate={{
            y: [0, orb.moveY, 0],
            x: [0, orb.moveX, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}
    </div>
  )
}
