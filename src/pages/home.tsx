"use client";
import React from "react";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { FaAngleLeft } from "react-icons/fa";
import ThinkingFace from "./svgs/ThinkingFace.svg";
import StarStruck from "./svgs/StarStruck.svg";
import styles from "./css.module.css";

export default function HomePage() {
  const [numberAnswer, setNumberAnswer] = React.useState(1);
  const [changing, setChanging] = React.useState(false);

  const answer1 = process.env.NEXT_PUBLIC_ANSWER_1;
  const answer2 = process.env.NEXT_PUBLIC_ANSWER_2;
  const answer3 = process.env.NEXT_PUBLIC_ANSWER_3;
  const answer4 = process.env.NEXT_PUBLIC_ANSWER_4;
  const answer5 = process.env.NEXT_PUBLIC_ANSWER_5;
  const affiliateLink = process.env.NEXT_PUBLIC_LINK_AFFILIATE;
  const colorPrimary = process.env.NEXT_PUBLIC_COLOR_PRIMARY;
  const colorSecondary = process.env.NEXT_PUBLIC_COLOR_SECONDARY;

  const change = async (item: number) => {
    setNumberAnswer(item);
  };

  const handleChange = async (item: number) => {
    setChanging(true);
    await change(item);
    setTimeout(() => {
      setChanging(false);
    }, 100);
  };

  const calculatePercentage = () => {
    var percentage = numberAnswer * 20;
    return percentage;
  };

  const renderAnswer = () => {
    if (numberAnswer === 2) {
      if (changing) {
        return <div />;
      } else {
        return (
          <>
            <div className={styles.contentAnswer}>
              <div className="sm:container sm:mx-auto px-4 animate-fade animate-once animate-duration-[600ms] animate-delay-[270ms]">
                <div className={styles.answerIconText}>
                  <Image
                    priority
                    width={40}
                    height={40}
                    src={ThinkingFace}
                    alt="Answer?"
                  />
                  <h1>{answer2}</h1>
                </div>
                <div className={styles.buttons}>
                  <Button theme="red" onClick={() => handleChange(3)}>
                    No
                  </Button>
                  <Button theme="green" onClick={() => handleChange(3)}>
                    Yes
                  </Button>
                </div>
              </div>
            </div>
            <div
              style={{ background: colorSecondary }}
              className={`${styles.containerBordered} animate-flip-up animate-once animate-duration-500 animate-delay-50`}
            />
          </>
        );
      }
    } else if (numberAnswer === 3) {
      if (changing) {
        return <div />;
      } else {
        return (
          <>
            <div className={styles.contentAnswer}>
              <div className="sm:container sm:mx-auto px-4 animate-fade animate-once animate-duration-[600ms] animate-delay-[270ms]">
                <div className={styles.answerIconText}>
                  <Image
                    priority
                    width={40}
                    height={40}
                    src={ThinkingFace}
                    alt="Answer?"
                  />
                  <h1>{answer3}</h1>
                </div>
                <div className={styles.buttons}>
                  <Button theme="red" onClick={() => handleChange(4)}>
                    No
                  </Button>
                  <Button theme="green" onClick={() => handleChange(4)}>
                    Yes
                  </Button>
                </div>
              </div>
            </div>
            <div
              style={{ background: colorSecondary }}
              className={`${styles.containerBordered} animate-flip-up animate-once animate-duration-500 animate-delay-50`}
            />
          </>
        );
      }
    } else if (numberAnswer === 4) {
      if (changing) {
        return <div />;
      } else {
        return (
          <>
            <div className={styles.contentAnswer}>
              <div className="sm:container sm:mx-auto px-4 animate-fade animate-once animate-duration-[600ms] animate-delay-[270ms]">
                <div className={styles.answerIconText}>
                  <Image
                    priority
                    width={40}
                    height={40}
                    src={ThinkingFace}
                    alt="Answer?"
                  />
                  <h1>{answer4}</h1>
                </div>
                <div className={styles.buttons}>
                  <Button theme="red" onClick={() => handleChange(5)}>
                    No
                  </Button>
                  <Button theme="green" onClick={() => handleChange(5)}>
                    Yes
                  </Button>
                </div>
              </div>
            </div>
            <div
              style={{ background: colorSecondary }}
              className={`${styles.containerBordered} animate-flip-up animate-once animate-duration-500 animate-delay-50`}
            />
          </>
        );
      }
    } else if (numberAnswer === 5) {
      if (changing) {
        return <div />;
      } else {
        return (
          <>
            <div className={styles.contentAnswer}>
              <div className="sm:container sm:mx-auto px-4 animate-fade animate-once animate-duration-[600ms] animate-delay-[270ms]">
                <div className={styles.answerIconText}>
                  <Image
                    priority
                    width={40}
                    height={40}
                    src={StarStruck}
                    alt="YESS"
                  />
                  <h1>{answer5}</h1>
                </div>
                <div
                  className={styles.buttons}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Button theme="green" href={affiliateLink} lastBt>
                    Yes, I want to discover!
                  </Button>
                </div>
              </div>
            </div>
            <div
              style={{ background: colorSecondary }}
              className={`${styles.containerBordered} animate-flip-up animate-once animate-duration-500 animate-delay-50`}
            />
          </>
        );
      }
    } else {
      return (
        <>
          <div className={styles.contentAnswer}>
            <div className="sm:container sm:mx-auto px-4 animate-fade animate-once animate-duration-[600ms] animate-delay-[620ms]">
              <div className={styles.answerIconText}>
                <Image
                  priority
                  width={40}
                  height={40}
                  src={ThinkingFace}
                  alt="Answer?"
                />
                <h1>{answer1}</h1>
              </div>
              <div className={styles.buttons}>
                <Button theme="red" onClick={() => handleChange(2)}>
                  No
                </Button>
                <Button theme="green" onClick={() => handleChange(2)}>
                  Yes
                </Button>
              </div>
            </div>
          </div>
          <div
            style={{ background: colorSecondary }}
            className={`${styles.containerBordered} animate-flip-up animate-once animate-duration-500 animate-delay-300`}
          />
        </>
      );
    }
  };

  return (
    <div className={styles.layout} style={{ background: colorPrimary }}>
      <div className={styles.wrapperPercentage}>
        <div className={styles.contentPercentage}>
          <button
            className={styles.iconBack}
            onClick={() => handleChange(numberAnswer - 1)}
            disabled={numberAnswer === 1 ? true : false}
          >
            <FaAngleLeft size={24} />
          </button>
          <p>{`${numberAnswer} / 5`}</p>
          <Progress color="#28a745" value={calculatePercentage()} />
        </div>
      </div>
      {renderAnswer()}
    </div>
  );
}
