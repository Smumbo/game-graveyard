import Image from "next/image";
import nextConfig from "../next.config.mjs";
const basePath = nextConfig.basePath;

export default function Home() {
  return (
    <>
      <h1>The Game Graveyard</h1>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div></div>
      </main>
    </>
  );
}
