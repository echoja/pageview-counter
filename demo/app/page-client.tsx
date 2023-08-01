"use client";

import ReactIconPicker from "pageview-counter";
import { PageviewCounter, PageviewIncrease } from "pageview-counter/next-app";

const Page = () => {
  return (
    <div>
      <div>
        hi ho..{" "}
        <ReactIconPicker icons={[]} onSelect={() => console.log("HO!")} />
      </div>
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
