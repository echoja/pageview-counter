import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      {/* I moved all logic to another file in-case you want to quickly delete and prototype something */}
      <div style={{ padding: "1rem" }}>Hello World</div>
      {/* eslint-disable-next-line qwik/jsx-img */}
      <img
        src={`http://localhost:8787/api/counter.svg?color=white&url=${encodeURIComponent("http://localhost:5173/")}`}
        alt="test svg"
      />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
