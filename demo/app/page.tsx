import Page from "./page-client";

export default async function Home() {
  const result = await fetch(process.env.API_ENDPOINT + "/api/pageview");
  const j = await result.text();
  console.log("j", j);

  return (
    <main>
      <Page />
    </main>
  );
}
