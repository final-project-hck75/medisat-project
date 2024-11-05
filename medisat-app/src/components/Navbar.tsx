const logo = require("@/app/assets/MEDISAT.png");
import { handleLogout } from "@/app/patients/actions";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <div className="flex flex-wrap justify-between items-center my-5">
      {/* <Sidebar/> */}
      <Image src={logo} alt="MEDISAT Logo" width={150} height={50} />
      <form action={handleLogout}>
        <Button variant={"auth"}>Logout</Button>
      </form>
    </div>
  );
}
