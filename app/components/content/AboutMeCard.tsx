import { Card, CardBody } from "@nextui-org/react";
import React from "react";
import { Fade } from "react-awesome-reveal";

type Props = {};

const AboutMeCard = (props: Props) => {
  return (
    <Card className="w-5/6 p-2 text-lg tracking-widest bg-transparent border-2 border-gray-300 shadow sm:mx-auto sm:w-1/2 shadow-slate-400 drop-shadow-lg">
      <Fade cascade triggerOnce duration={1700}>
        <CardBody>
          Welcome! I&apos;m Andrew Carrigan, a Software Engineer based in San
          Diego, with a passion for crafting innovative solutions at the
          intersection of technology and creativity.
        </CardBody>
        <CardBody>
          With a strong foundation in TypeScript, Next.js, React, and
          JavaScript, I specialize in architecting intuitive user interfaces and
          scalable backend systems. Each project is a testament to my commitment
          to excellence and my drive to push the boundaries of what&apos;s
          possible.
        </CardBody>
        <CardBody>
          Within these digital halls, you&apos;ll discover a showcase of my work
          spanning a rich tapestry of technologies.
        </CardBody>
        <CardBody>
          From SQL databases and PHP frameworks like Laravel to Python scripting
          and the extensive use of cutting-edge AI services like OpenAI and
          LangChain, my journey in software development is a testament to my
          versatility and dedication.
        </CardBody>
        <CardBody>
          Explore my portfolio to witness the seamless integration of creativity
          and precision in every endeavor. Whether you&apos;re embarking on a
          new venture or seeking to enhance your existing digital footprint,
          I&apos;m here to collaborate and bring your vision to life.
        </CardBody>
      </Fade>
    </Card>
  );
};

export default AboutMeCard;
