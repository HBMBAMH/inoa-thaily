import locationPin from "../../assets/pinLocation.png"

export function Location() {
  return (
    <div className="flex flex-col items-center gap-2 text-2xl text-violet-900">
      <div>
        <img
          src={locationPin}
          alt="location pin"
          className="h-40 w-40 text-white"
        />
      </div>
    </div>
  )
}
