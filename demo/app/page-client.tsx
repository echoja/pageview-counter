"use client";

import ReactIconPicker from "pageview-counter";

const Page = () => {
  return (
    <div>
      hi ho.. <ReactIconPicker icons={[]} onSelect={() => console.log("HO!")} />
    </div>
  );
};

export default Page;
