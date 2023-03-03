import React from "react";
import Container from "./container";

export default function Cta() {
  return (
    <Container>
      <div style={{ backgroundColor: 'cyan', }} className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto  bg-indigo-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Ready to try our services?
          </h2>
          <p className="mt-2 font-medium  text-opacity-90 lg:text-xl">
            Don't let your visitors see a poor landing.
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            // href="https://github.com/web3templates"
            target="_blank"
            rel="noopener"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-indigo-600 bg-white rounded-md px-7 lg:px-10 lg:py-5 ">
            Contact us Now
          </a>
        </div>
      </div>
    </Container>
  );
}
