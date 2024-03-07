"use client";
import axios from "axios";
import Link from "next/link";
import { Josefin_Sans } from "next/font/google";
import { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
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
    <main className="flex flex-col items-center justify-center w-full h-full">
      <Card
        style={{
          background:
            "linear-gradient(150deg, #0a0a0a 80%, rgb(44, 255, 255)120%)",
        }}
        className="flex items-center justify-center w-1/2 h-full py-4 border-2 rounded-lg shadow-md shadow-slate-400"
      >
        <CardHeader className="flex items-center justify-center w-3/4 text-2xl text-black bg-white rounded shadow-md shadow-white">
          <p className={jos.className}>
            Please be patient, this is a work in progress.
          </p>
        </CardHeader>
        <CardBody className="flex items-center justify-center w-full h-full hpy-2">
          <div className="border rounded-lg shadow-md shadow-white w-max">
            <Image
              src="/constuctionemoji.jpeg"
              alt="construction emoji"
              width={"full"}
              className="rounded-lg"
              // height={300}
            />
          </div>
        </CardBody>
      </Card>
    </main>
  );
}
