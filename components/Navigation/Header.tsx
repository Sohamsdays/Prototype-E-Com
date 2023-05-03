"use client";
//import { headers } from "next/headers";
import NavDesktop from "./Nav.Desktop";
//import NavMobile from "./nav.mobile";

export default function Header() {
  const UA =
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36";
  const UAM =
    "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1";
  //console.log(request);

  //const header = headers();
  //console.log(header.get("user-agent"));
  //const userAgent = header.get("user-agent");
  // if (userAgent === UAM) {
  //   return (
  //     <header>
  //       <NavMobile />
  //     </header>
  //   );
  // } else
  return (
    <header>
      <NavDesktop />
    </header>
  );
}
