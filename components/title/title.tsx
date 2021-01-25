// import { Movie } from "../types/test";
import styles from "./title.module.scss";
import * as React from "react";

type Movie = {
  released: string;
  year: number;
  cast: string[];
};

export default function Title(movie: Movie) {
  // export default function Title() {
  const { inner, wrapper, testDiv } = styles;
  return <div className={testDiv}>testDiv</div>;
}
