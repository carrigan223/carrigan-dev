"use client";
import axios from "axios";
import Link from "next/link";
import { Josefin_Sans } from "next/font/google";
import { useEffect, useState } from "react";
import MainTitleName from "./components/content/MainTitleName";
import AboutMeCard from "./components/content/AboutMeCard";
import JobTitleSubHeader from "./components/content/JobTitleSubHeader";
const jos = Josefin_Sans({ subsets: ["latin"] });

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  // useEffect(() => {
    // setLoading(true);
    //   axios
    //     .get("/api/python")
    //     .then((response) => {
    //       setData(response.data);
    //       setLoading(false);
    //     })
    //     .catch((error) => {
    //       setError(error);
    //       setLoading(false);
    //     });
  // }, []);
  return (
    <main className="flex flex-col w-full h-full">
      <div className="flex flex-col sm:flex-row">
        <div className="flex items-center justify-center h-full px-6 border-b-2 sm:border-r-2">
          <MainTitleName firstName="Andrew" lastName="Carrigan" />
        </div>
        <div className="flex items-center justify-center w-full border-b-2">
          <JobTitleSubHeader jobTitle="Full Stack Developer" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <AboutMeCard />
        {/* <div className="w-full">Skills</div> */}
      </div>
    </main>
  );
}
