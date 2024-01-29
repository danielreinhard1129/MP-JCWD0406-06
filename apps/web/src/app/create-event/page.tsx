import NextTopLoader from "nextjs-toploader";
import React from "react";
import CardCreateEvent from "./components/CardCreateEvent";

const page = () => {
  return (
    <main className=" w-full ">
      <NextTopLoader color="#ffffff" showSpinner={false} />
      {/* <CardCreateEvent /> */}

      <CardCreateEvent />
    </main>
  );
};

export default page;
