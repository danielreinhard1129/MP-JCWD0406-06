
import React, { Suspense } from "react";
import Homepage from "./home/page";
import Loading from "@/components/Loading";


export default function Home() {
  return (
    <div className="overflow-hidden">
      <Suspense fallback={<Loading />}>
        <Homepage />
      </Suspense>
    </div>
  );
}
