import "./header.scss";
import Button from "../button/button";
import imageLogo from "../../../public/images/byte-bank-logo.svg";

export default function WelcomeHeader() {
  return (
    <header className="welcome-header bg-black text-white px-10 py-8 flex items-center">
      <a href="/welcome-page" className="mr-10">
        <img src={imageLogo} alt="ByteBank Logo" />
      </a>
      <nav className="w-full">
        <ul className="flex gap-6">
          <li><a href="#" className="">Sobre</a></li>
          <li><a href="#" className="">Serviços</a></li>
        </ul>
      </nav>
      <div className="flex gap-6">
        <Button
          backgroundColor="background-color"
          textColor="$tertiary-color"
          width="auto"
          text="Abrir minha conta"></Button>
        <Button
          backgroundColor="background-color"
          textColor="text-white"
          width="auto"
          text="Já tenho conta"></Button>
      </div>
    </header >
  );
}
