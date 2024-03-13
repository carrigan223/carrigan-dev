import React from "react";
import { AttentionSeeker, Fade } from "react-awesome-reveal";

type Props = { jobTitle: string };

const JobTitleSubHeader = ({ jobTitle }: Props) => {
  const jobTitleArray = jobTitle.split(" ");
  const titleToDisplay = jobTitleArray.splice(3, jobTitleArray.length - 3);

  return (
    <div className="flex flex-col items-center px-6 ">
      {jobTitleArray.map((word, index) => {
        const classNameString = "underline ";
        return (
          <Fade direction="right" key={index} triggerOnce>
            {/* <AttentionSeeker effect="tada"> */}
            <h2 className={classNameString}>{word}</h2>
            {/* </AttentionSeeker> */}
          </Fade>
        );
      })}
    </div>
  );
};

export default JobTitleSubHeader;
