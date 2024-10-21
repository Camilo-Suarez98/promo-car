import RegistrationForm from "@/components/RegistrationForm";
import MainText from "@/components/MainText";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center lg:flex-row lg:gap-7">
      <MainText />
      <RegistrationForm />
    </div>
  );
}
