import React, { Suspense } from "react";

const LandingComponentV2 = React.lazy(
  () => import("@/components/landing/landing")
);

const Landing = () => {
  return (
    <div>
      <Suspense
        fallback={
          <div>
            <img src="/carousel-3.avif" alt="" />
          </div>
        }
      >
        <LandingComponentV2 />
      </Suspense>
    </div>
  );
};

export default Landing;
