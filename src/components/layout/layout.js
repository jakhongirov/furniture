import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import Content from "../../Localization/Content";
import { useDispatch, useSelector } from "react-redux";

import Order from "../order/order";

//Images
import Logo from "../../assets/images/MAXLOFT.svg";
import hamburgerOpen from "../../assets/images/hamburger1.svg";
import hamburgerClose from "../../assets/images/hamburger2.svg";

function Layout({ children, elModal }) {
  const [Humopen, setHumOpen] = useState(false);

  const langValue = useRef();
  const dispatch = useDispatch();
  const {
    count: { lang },
  } = useSelector((state) => state);

  const { header, footer } = Content[lang];

  function getLang() {
    dispatch({ type: window.localStorage.getItem("lang") || "ru" });
  }

  langValue.current = getLang;

  useEffect(() => {
    langValue.current();
  }, []);

  return (
    <>
      <header className="header" id="header">
        <div className="container">
          <div className="header__desktop-box">
            <div className="header__box-top">
              <div className="header__logo__box">
                <Link href={"/"}>
                  <a>
                    <Image src={Logo} alt="Logo" width={240} height={80} />
                  </a>
                </Link>
              </div>

              <div className="header__btn-box">
                <button
                  className="header__btn"
                  onClick={() => {
                    elModal.current.style.display = "flex";
                  }}
                >
                  {header.submit}
                </button>
              </div>
            </div>

            <div className="header__box-bottom">
              <nav className="header__nav">
                <ul className="header__nav__list">
                  <li className="header__nav__item">
                    <Link href={"/#company"}>
                      <a className="header__nav__link">{header.company}</a>
                    </Link>
                  </li>
                  <li className="header__nav__item">
                    <Link href={"/#catalog"}>
                      <a className="header__nav__link">{header.catalog}</a>
                    </Link>
                  </li>
                  <li className="header__nav__item">
                    <Link href={"/#advantages"}>
                      <a className="header__nav__link">{header.advantages}</a>
                    </Link>
                  </li>
                  <li className="header__nav__item">
                    <Link href={"/#contacts"}>
                      <a className="header__nav__link">{header.contacts}</a>
                    </Link>
                  </li>

                  <li className="header__nav__item">
                    <select
                      className="header__nav__select"
                      onChange={(e) => dispatch({ type: e.target.value })}
                    >
                      <option value="ru">RU</option>
                      <option value="en">EN</option>
                      <option value="uz">UZ</option>
                    </select>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="header__mobile-box">
            <div className="header__mobile__logo-box">
              <Link href={"/"}>
                <a>
                  <Image src={Logo} alt="Logo" width={180} height={60} />
                </a>
              </Link>

              <div className="header__btn-box">
                <button
                  className="header__btn"
                  onClick={() => {
                    elModal.current.style.display = "flex";
                  }}
                >
                  {header.submit}
                </button>
              </div>
            </div>

            <button
              className={!Humopen ? "hamburger__btn" : "hamburger__btn--none"}
              onClick={() => setHumOpen(true)}
            >
              <Image
                src={hamburgerOpen}
                alt="hamburger open icon"
                width={36}
                height={36}
              />
            </button>

            <button
              className={Humopen ? "hamburger__btn" : "hamburger__btn--none"}
              onClick={() => setHumOpen(false)}
            >
              <Image
                src={hamburgerClose}
                alt="hamburger open icon"
                width={36}
                height={36}
              />
            </button>
          </div>

          <nav
            className={
              Humopen ? "header__mobile__nav" : "header__mobile__nav--none"
            }
          >
            <ul className="header__mobile__nav__list">
              <li className="header__mobile__nav__item">
                <select
                  className="header__mobile__nav__select"
                  onChange={(e) => {
                    dispatch({ type: e.target.value }), setHumOpen(false);
                  }}
                >
                  <option value="ru" onClick={() => setHumOpen(false)}>RU</option>
                  <option value="en" onClick={() => setHumOpen(false)}>EN</option>
                  <option value="uz" onClick={() => setHumOpen(false)}>UZ</option>
                </select>
              </li>
              <li className="header__mobile__nav__item">
                <Link href={"/#company"}>
                  <a
                    className="header__nav__link"
                    onClick={() => setHumOpen(false)}
                  >
                    {header.company}
                  </a>
                </Link>
              </li>
              <li className="header__mobile__nav__item">
                <Link href={"/#catalog"}>
                  <a
                    className="header__nav__link"
                    onClick={() => setHumOpen(false)}
                  >
                    {header.catalog}
                  </a>
                </Link>
              </li>
              <li className="header__mobile__nav__item">
                <Link href={"/#advantages"}>
                  <a
                    className="header__nav__link"
                    onClick={() => setHumOpen(false)}
                  >
                    {header.advantages}
                  </a>
                </Link>
              </li>
              <li className="header__mobile__nav__item">
                <Link href={"/#contacts"}>
                  <a
                    className="header__nav__link"
                    onClick={() => setHumOpen(false)}
                  >
                    {header.contacts}
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <Order elModal={elModal} />
      </header>

      <main className="main">{children}</main>

      <footer className="footer">
        <div className="container">
          <div className="footer__logo__box">
            <Link href={"/"}>
              <a>
                <Image src={Logo} alt="Logo" width={240} height={80} />
              </a>
            </Link>
          </div>

          <nav className="footer__nav">
            <ul className="footer__nav__list">
              <li className="footer__nav__item">
                <Link href={"/#company"}>
                  <a className="">{footer.company}</a>
                </Link>
              </li>

              <li className="footer__nav__item">
                <Link href={"/#catalog"}>
                  <a className="">{footer.catalog}</a>
                </Link>
              </li>

              <li className="footer__nav__item">
                <Link href={"/#advantages"}>
                  <a className="">{footer.advantages}</a>
                </Link>
              </li>

              <li className="footer__nav__item">
                <Link href={"/#contacts"}>
                  <a className="">{footer.contacts}</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
}

export default Layout;
