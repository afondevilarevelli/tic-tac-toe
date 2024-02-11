import Lottie from "lottie-react";
import fireworksAnimation from "../../../assets/fireworks_animation.json";

export default function FireworksAnimation() {
  return (
    <div className="absolute h-screen w-screen">
      <Lottie animationData={fireworksAnimation} loop={true} />
    </div>
  );
}
