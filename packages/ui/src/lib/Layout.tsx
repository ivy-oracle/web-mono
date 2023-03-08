import React from "react";
import backgroundImage from "../assets/img/background.jpg";
import classNames from "classnames";

export interface LayoutProps {
  title?: string;
  children?: React.ReactNode;
  content?: React.ReactNode;
  contentHeight?: string;
  bannerTitle?: React.ReactNode;
  Header: React.ElementType;
  Footer: React.ElementType;
}

const Layout = ({
  title,
  children,
  content,
  contentHeight = "66px",
  bannerTitle,
  Header,
  Footer,
}: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <Header />
      </header>
      <main className="grow">
        <div
          className="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{
            minHeight: contentHeight,
          }}
        >
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>

          <div className={classNames("container relative mx-auto")}>
            {bannerTitle ? (
              <div className="flex justify-center mt-10 text-center">
                <h1 className="text-white font-semibold text-5xl">
                  {bannerTitle}
                </h1>
              </div>
            ) : (
              content
            )}
          </div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style={{ height: "70px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="relative">
          <div className="m-5 lg:m-10 mb-40">{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
