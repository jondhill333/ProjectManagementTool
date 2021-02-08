import "../styles/globalStyles.scss";
import { AppProps } from "next/app";
import { ProjectProvider } from "../util/ProjectContext";
import { ProjectCountProvider } from "../util/ProjectCountContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProjectProvider>
      <ProjectCountProvider>
        <Component {...pageProps} />
      </ProjectCountProvider>
    </ProjectProvider>
  );
}
