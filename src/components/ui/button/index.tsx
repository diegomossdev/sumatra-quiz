import React from "react";
import Image from "next/image";
import styles from "./button.module.css";
import ThumbsUp from "./svgs/ThumbsUp.svg";
import CrossMark from "./svgs/CrossMark.svg";
import Rocket from "./svgs/Rocket.svg";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  theme?: "default" | "red" | "green";
  lastBt?: boolean;
  href?: string;
};

export const Button = ({
  children,
  onClick,
  theme = "default",
  href = "",
  lastBt,
}: ButtonProps) => {
  const renderIcon = () => {
    if (theme === "green") {
      return (
        <Image priority width={30} height={30} src={ThumbsUp} alt="YES!!!" />
      );
    } else if (theme === "red") {
      return (
        <Image priority width={30} height={30} src={CrossMark} alt="NO!!!" />
      );
    } else {
      return;
    }
  };

  if (href) {
    return (
      <a href={href} className={`${styles.button} ${styles[theme]}`}>
        {lastBt ? (
          <Image
            priority
            width={40}
            height={40}
            src={Rocket}
            alt="BUY NOW!!!"
          />
        ) : null}
        <span>{children}</span>
      </a>
    );
  } else {
    return (
      <button onClick={onClick} className={`${styles.button} ${styles[theme]}`}>
        {renderIcon()} <span>{children}</span>
      </button>
    );
  }
};
