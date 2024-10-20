import Image from "next/image";

import RegistrationForm from "@/components/RegistrationForm";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex gap-8 row-start-2 justify-center items-center sm:items-start">
        <Image src="/car.png" alt="Imagén de carros" width={500} height={200} />
        <RegistrationForm />
      </main>
    </div>
  );
}
