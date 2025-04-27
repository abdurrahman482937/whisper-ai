import { SettingsIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <header className="w-full fixed p-5 text-white flex justify-between items-center">
        <Image
          src="https://i.imgur.com/MCHWJZS.png"
          alt="logo"
          height={50}
          width={50}
          className="object-contain"
        />
        <SettingsIcon
          size={40}
          className="p-2 m-2 rounded-full cursor-pointer bg-purple-600 transition-transform duration-300 ease-in-out hover:text-white"
        />
      </header>
      <form>
        <div className=""></div>

        <input type="file" name="fileUpload" id="fileUpload" />
        <button type="submit" hidden />

        <div className=""></div>
      </form>
    </div>
  );
}
