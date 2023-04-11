import React from "react";

export default function NavbarLink({ href, link }) {
  return (
    <li className="text-[1.5rem] font-bold hover:text-blue-500 transition-all">
      <a href={`#${href}`}>{link}</a>
    </li>
  );
}
