import { Button, Layout, Navbar } from "@ivyoracle/ui";
import "./App.css";

const Header = () => (
  <Navbar
    transparent={true}
    menuItems={[
      {
        path: "/",
        label: "Example",
        Icon: () => <div>A</div>,
      },
    ]}
  ></Navbar>
);

const Footer = () => <div>Footer</div>;

const App = () => {
  return (
    <div>
      <Layout Header={Header} Footer={Footer}>
        <Button onClick={() => console.log("hello world")} loading={true}>
          Hello World
        </Button>
      </Layout>
    </div>
  );
};

export default App;
