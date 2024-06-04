import React from "react";
import { useLottie } from "lottie-react";


export default function ThemeLottiePlayer( props ) {
  const options = {
    animationData:  props.animationData,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return <>{View}</>;
}