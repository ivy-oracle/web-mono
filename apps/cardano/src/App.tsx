import { Layout, Navbar } from "@ivyoracle/ui";
import { FaHome } from "react-icons/fa";

const Header = () => (
  <Navbar
    transparent={true}
    menuItems={[
      {
        path: "/",
        label: "Home",
        Icon: FaHome,
      },
    ]}
  ></Navbar>
);

const Footer = () => <div>Footer</div>;

const App = () => {
  return (
    <div>
      <Layout Header={Header} Footer={Footer}>
        Cardano
      </Layout>
    </div>
  );
};

export default App;
