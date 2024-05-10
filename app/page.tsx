import Image from "next/image";
import nextConfig from "@/next.config.mjs";
import Header from "@/components/Header";
import GameList from "@/components/GameList";

const basePath = nextConfig.basePath;

export default function Home() {
  return (
    <>
      <Header />
      <GameList />
    </>
  );
}
