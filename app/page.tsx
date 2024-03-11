"use client";
import axios from "axios";
import Link from "next/link";
import { Josefin_Sans } from "next/font/google";
import { useEffect, useState } from "react";
import MainTitleName from "./components/content/MainTitleName";
import AboutMeCard from "./components/content/AboutMeCard";
const jos = Josefin_Sans({ subsets: ["latin"] });

export default function Home() {
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
      <div className="px-4 sm:flex">
        <MainTitleName firstName="Andrew" lastName="Carrigan" />
        <div className="flex flex-col px-6 mt-2 mb-4">
          <h2 className="underline">Full</h2>
          <h2 className="ml-6 underline">Stack</h2>
          <h2 className="mb-2 ml-12 underline">Developer</h2>
        </div>
      </div>
      <div>
        <AboutMeCard />
      </div>
    </main>
  );
}
