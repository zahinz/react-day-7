import React from "react";
import Lottie from "react-lottie";
import animationData from "./loading.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

class LoadingAnimation extends React.Component {
  render() {
    return (
      <div>
        <Lottie options={defaultOptions} height={25} width={100} />
      </div>
    );
  }
}

export default LoadingAnimation;
