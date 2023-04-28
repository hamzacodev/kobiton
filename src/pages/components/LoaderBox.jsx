import React, { useState, useEffect } from "react";
import lottie from "lottie-web";
import loaderDots from "../../assets/loaderDots.json";

const LoaderBox = () => {
  const [animation, setAnimation] = useState(null);

  useEffect(() => {
    lottie.loadAnimation(
      {
        container: document.getElementById("loading"),
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: loaderDots,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      },
      function (anim) {
        setAnimation(anim);
        anim.setSpeed(1);
        anim.setSubframe(false);
        anim.setCurrentRawFrameValue(0);
      }
    );
  }, []);

  return (
    <div className="bg-white h-[428px] w-[1294px] flex items-center justify-center border border-gray-200 rounded-lg">
      <div id="loading" className="w-16 h-16 mx-auto" />
    </div>
  );
};

export default LoaderBox;
