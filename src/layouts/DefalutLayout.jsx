import React, { Suspense } from "react";
import { FallingLines } from "react-loader-spinner";
import { Outlet } from "react-router-dom";

export default function DefalutLayout() {
  return (
    <Suspense
      fallback={
        <FallingLines
          color="#4fa94d"
          width="100"
          visible={true}
          ariaLabel="falling-circles-loading"
        />
      }
    >
      <Outlet />
    </Suspense>
  );
}
