import { Layout } from "antd";

import Main from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return <Layout>
    <Navbar/>
    <Main/>
  </Layout>;
};

export default App;