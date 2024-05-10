import Image from "next/image";
import nextConfig from "@/next.config.mjs";
import Header from "@/components/Header";

const basePath = nextConfig.basePath;

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-between p-24">
        <div></div>
      </main>
    </>
  );
}
