import videoIntro from "../assets/loading.mp4"

type Props = {
  onFinish: () => void
}

export default function LoadingScreen({ onFinish }: Props) {
  return (
    <div className="fixed inset-0 z-50 bg-black">
      <video
        autoPlay
        muted
        playsInline
        onEnded={onFinish}
        className="h-full w-full object-cover"
      >
        <source src={videoIntro} type="video/mp4" />
      </video>
    </div>
  )
}
