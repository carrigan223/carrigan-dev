import { Card, CardBody } from "@nextui-org/react";
import React from "react";

type Props = {};

const AboutMeCard = (props: Props) => {
  return (
    <Card className="p-2 mx-2 bg-black border-2 border-gray-300 shadow sm:mx-auto sm:w-1/2 shadow-slate-400 drop-shadow-lg rounded-xl">
      <CardBody>
        Welcome! I&apos;m Andrew Carrigan, a Software Engineer based in San
        Diego, with a passion for crafting innovative solutions at the
        intersection of technology and creativity. With a strong foundation in
        TypeScript, Next.js, React, and JavaScript, I specialize in architecting
        intuitive user interfaces and scalable backend systems. Each project is
        a testament to my commitment to excellence and my drive to push the
        boundaries of what&apos;s possible. Within these digital halls,
        you&apos;ll discover a showcase of my work spanning a rich tapestry of
        technologies.
      </CardBody>
      <CardBody>
        From SQL databases and PHP frameworks like Laravel to Python scripting
        and the extensive use of cutting-edge AI services like OpenAI and
        LangChain, my journey in software development is a testament to my
        versatility and dedication. Explore my portfolio to witness the seamless
        integration of creativity and precision in every endeavor. Whether
        you&apos;re embarking on a new venture or seeking to enhance your
        existing digital footprint, I&apos;m here to collaborate and bring your
        vision to life.
      </CardBody>
    </Card>
  );
};

export default AboutMeCard;
