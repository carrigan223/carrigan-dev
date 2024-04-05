import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
  github_link?: string | null;
};

const ProjectCard = ({
  title,
  description,
  image,
  link,
  github_link,
}: ProjectCardProps) => {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="m-4 border-2 rounded shadow-md  shadow-accent/50 sm:h-full"
    >
      <Image
        alt="Woman listing to music"
        src={image}
        style={{
          objectFit: "cover",
          width: "full",
          height: "full",
        }}
      />

      <CardFooter
        style={{
          borderRadius: "1rem",
        }}
        className="flex-col justify-between bg-mainBg/60  border-1  overflow-hidden py-1 absolute before:rounded-xl  bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10"
      >
        <p
          style={{
            textShadow: "4px 4px 1px rgba(57, 203, 203, 0.71)",
          }}
          className="text-lg font-bold text-white/90"
        >
          {title}
        </p>

        <p className="text-center text-tiny text-white/90">{description}</p>
        <Button
          className="px-2 py-1 my-2 text-white rounded shadow-md text-tiny bg-mainBg/80 hover:shadow-accent"
          variant="flat"
          color="default"
          radius="lg"
          size="sm"
        >
          <a href={link} target="_blank" rel="noopener noreferrer">
            Visit
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
