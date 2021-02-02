import "../styles/globalStyles.scss";
import { AppProps } from "next/app";
import { ProjectProvider } from "../util/ProjectContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProjectProvider>
      <Component {...pageProps} />
    </ProjectProvider>
  );
}
