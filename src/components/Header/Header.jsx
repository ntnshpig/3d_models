import React from "react";
import scss from "./Header.module.scss";

export default function Header() {
  return (
    <header>
      <div className={scss['header-inner']}>
        <div className={scss['logo']}>CHAIR.</div>
        <nav>
          <ul>
            <li>
              <a href='/'>discover</a>
            </li>
            <li>
              <a href='/'>products</a>
            </li>
            <li>
              <a href='/'>solutions</a>
            </li>
            <li>
              <a href='/'>reach</a>
            </li>
            <li className={scss['btn']}>
              <a href='/'>order</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
