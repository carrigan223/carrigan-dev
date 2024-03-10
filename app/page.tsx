"use client";
import axios from "axios";
import Link from "next/link";
import { Josefin_Sans } from "next/font/google";
import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Textarea,
  Button,
} from "@nextui-org/react";
const jos = Josefin_Sans({ subsets: ["latin"] });

export default function Home() {
  const [test, setTest] = useState("no data");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/python")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  return (
    <main className="flex flex-col w-full h-full">
      {" "}
      <div className="w-full h-16 bg-black border-b-2">
        {/* <Button>Home</Button> */}
      </div>
      <div className="flex">
        <div className="flex flex-col w-max">
          <h1
            style={{
              textShadow: "18px 20px 4px #39cbcb5e",
            }}
          >
            Andrew
          </h1>
          <h1
            className="ml-12"
            style={{
              textShadow: "18px 20px 4px #39cbcb5e",
            }}
          >
            Carrigan
          </h1>
        </div>
        <div className="flex flex-col px-6 mt-2 mb-4">
          <h2 className="underline">Full</h2>
          <h2 className="ml-6 underline">Stack</h2>
          <h2 className="mb-2 ml-12 underline">Developer</h2>
        </div>
      </div>
      <div>
        <Card className="w-1/2 p-4 mx-auto bg-black border-2 border-gray-300 shadow shadow-slate-400 drop-shadow-lg rounded-xl">
          <CardBody>
            Welcome! I&apos;m Andrew Carrigan, a Software Engineer based in San
            Diego, with a passion for crafting innovative solutions at the
            intersection of technology and creativity. With a strong foundation
            in TypeScript, Next.js, React, and JavaScript, I specialize in
            architecting intuitive user interfaces and scalable backend systems.
            Each project is a testament to my commitment to excellence and my
            drive to push the boundaries of what&apos;s possible. Within these
            digital halls, you&apos;ll discover a showcase of my work spanning a
            rich tapestry of technologies.
          </CardBody>
          <CardBody>
            From SQL databases and PHP frameworks like Laravel to Python
            scripting and the extensive use of cutting-edge AI services like
            OpenAI and LangChain, my journey in software development is a
            testament to my versatility and dedication. Explore my portfolio to
            witness the seamless integration of creativity and precision in
            every endeavor. Whether you&apos;re embarking on a new venture or
            seeking to enhance your existing digital footprint, I&apos;m here to
            collaborate and bring your vision to life.
          </CardBody>
        </Card>
      </div>
    </main>
  );
}
