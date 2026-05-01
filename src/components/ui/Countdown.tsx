export function CountdownItem({
  days,
  hours,
  minutes,
  seconds,
}: {
  days: number
  hours: number
  minutes: number
  seconds: number
}) {
  return (
    <div className="cormorant-garamond flex gap-4 text-3xl text-violet-900">
      <div className="flex h-20 w-20 flex-col items-center justify-center rounded-2xl bg-white/30">
        <div className="text-4xl">{days}</div>
        <div className="text-2xl">Dias</div>
      </div>
      <div className="flex h-20 w-20 flex-col items-center justify-center rounded-2xl bg-white/30">
        <div className="text-4xl">{hours}</div>
        <div className="text-2xl">Horas</div>
      </div>
      <div className="flex h-20 w-20 flex-col items-center justify-center rounded-2xl bg-white/30">
        <div className="text-4xl">{minutes}</div>
        <div className="text-2xl">Min</div>
      </div>
      <div className="flex h-20 w-20 flex-col items-center justify-center rounded-2xl bg-white/30">
        <div className="text-4xl">{seconds}</div>
        <div className="text-2xl">Seg</div>
      </div>
    </div>
  )
}
