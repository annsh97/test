import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Landing from "./Landing.js";
import * as React from "react";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <div>
      <Landing />
    </div>
  );
}
