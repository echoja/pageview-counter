"use client";

import { PageviewCounter, PageviewIncrease } from "pageview-counter/next-app";

const Page = () => {
  return (
    <div>
      <div>hi ho.. </div>
      <div>
        <PageviewCounter />
      </div>
      <div>
        <PageviewIncrease />
      </div>
    </div>
  );
};

export default Page;
