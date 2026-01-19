import Image from "next/image";
import Card from "@/components/Card/Card";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-2xl font-bold underline font-sans">Styles et Optimisation</h1>
      <Card />
    </div>
  );
}
