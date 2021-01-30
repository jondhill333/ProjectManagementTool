import Head from "next/head";
import React from "react";
import styles from "./new.module.scss";
import AllActionModal from "../../components/allActionModal/AllActionModal";

export default function New() {
  const {} = styles;

  return (
    <>
      <div> New Task page</div>
      <AllActionModal />
    </>
  );
}
