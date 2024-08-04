import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Layout/components/Header/Header";
import Mainbody from "@/components/Layout/components/Mainbody/Mainbody";
import { Bar } from "react-chartjs-2";

export default function Home() {
  return (
    <>
     <Header/>

     <Mainbody/>

    </>
  );
}
