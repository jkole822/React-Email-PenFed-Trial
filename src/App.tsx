// React
import { createContext, FC } from "react";

// Components
import { Header } from "./components/organisms/Header";
import { ContentBlockOne } from "./components/organisms/ContentBlockOne";
import { ContentBlockTwo } from "./components/organisms/ContentBlockTwo";
import { ContentBlockThree } from "./components/organisms/ContentBlockThree";
import { ContentBlockFour } from "./components/organisms/ContentBlockFour";
import { ContentBlockFive } from "./components/organisms/ContentBlockFive";
import { DividerOne } from "./components/organisms/DividerOne";
import { DividerTwo } from "./components/organisms/DividerTwo";
import { Footer } from "./components/organisms/Footer";
import { Table } from "./components/atoms/Table";
import { ThinDivider } from "./components/organisms/ThinDivider";

// Types
import { AppProps } from "./types";

export const CommentContext = createContext(false);

const App: FC<AppProps> = ({ setComments }) => {
  const { Provider: CommentProvider } = CommentContext;

  return (
    <CommentProvider value={setComments}>
      <Table>
        <Header />
        <ContentBlockOne />
        <DividerOne />
        <ContentBlockTwo />
        <ThinDivider />
        <ContentBlockThree />
        <ThinDivider />
        <ContentBlockFour />
        <ContentBlockFive />
        <DividerTwo />
        <Footer />
      </Table>
    </CommentProvider>
  );
};

export default App;
