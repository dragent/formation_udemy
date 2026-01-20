import Image from "next/image";
import Card from "@/components/Card/Card";
import mountain from "../../public/images/mountain-1080.jpg"


export default function Home() {
  return (
    <main className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold underline font-sans">Styles et Optimisation</h1>
      <Card />
      <Image src={mountain} alt="mountain" sizes="
      (max-width: 500px) 500px,
      (max-width: 800px) 800px,
      1080px" /> 
    </main>
  );
}
