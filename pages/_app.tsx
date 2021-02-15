import "../styles/globalStyles.scss";
import { AppProps } from "next/app";
import { ProjectProvider } from "../utils/ProjectContext";
import { ProjectCountProvider } from "../utils/ProjectCountContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProjectProvider>
      <ProjectCountProvider>
        <Component {...pageProps} />
      </ProjectCountProvider>
    </ProjectProvider>
  );
}
