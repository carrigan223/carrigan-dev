"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

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
    <main className="flex flex-col items-center justify-between">
      <Card className="py-4 border-2 rounded-lg shadow-md shadow-slate-400">
        <CardHeader className="flex-col items-start px-4 pt-2 pb-0">
          <p>Please be patient, this is a work in progress.</p>
        </CardHeader>
        <CardBody className="w-1/2 py-2 overflow-visible">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="https://source.unsplash.com/random"
            width={"full"}
          />
        </CardBody>
      </Card>
    </main>
  );
}
