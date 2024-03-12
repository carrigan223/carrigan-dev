import React, { use, useEffect, useState } from "react";
import { AttentionSeeker, Fade } from "react-awesome-reveal";
import { text } from "stream/consumers";

type Props = {
  firstName: string;
  lastName: string;
};

const MainTitleName = ({ firstName, lastName }: Props) => {
  const [textShadow, setTextShadow] = useState("none");
  useEffect(() => {
    setTimeout(() => {
      setTextShadow("10px 16px 3px #39cbcb5e");
    }, 1300);
  }, []);
  return (
    <div className="flex flex-col w-max">
      <AttentionSeeker effect="tada" triggerOnce delay={1300}>
        <Fade direction="left" triggerOnce duration={1200}>
          <h1
            style={{
              textShadow: textShadow,
            }}
          >
            {firstName}
          </h1>
        </Fade>
        <Fade direction="right" triggerOnce duration={1200}>
          <h1
            className="ml-12"
            style={{
              textShadow: textShadow,
            }}
          >
            {lastName}
          </h1>
        </Fade>
      </AttentionSeeker>
    </div>
  );
};

export default MainTitleName;
