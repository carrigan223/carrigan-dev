import React from "react";

type Props = {
  firstName: string;
  lastName: string;
};

const MainTitleName = ({ firstName, lastName }: Props) => {
  return (
    <div className="flex flex-col w-max">
      <h1
        style={{
          textShadow: "10px 18px 2px #39cbcb5e",
        }}
      >
        {firstName}
      </h1>
      <h1
        className="ml-12"
        style={{
          textShadow: "10px 18px 2px #39cbcb5e",
        }}
      >
        {lastName}
      </h1>
    </div>
  );
};

export default MainTitleName;
