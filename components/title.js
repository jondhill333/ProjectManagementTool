import styles from "./title.module.scss";

export default function Title() {
  const { inner, wrapper, testDiv } = styles;
  return (
    <>
      <div className={testDiv}>testDiv</div>
      <div className={wrapper}>wrapper</div>
      <div className={inner}>Inner</div>
    </>
  );
}
