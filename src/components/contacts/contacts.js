import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import Content from "../../Localization/Content";
import { useDispatch, useSelector } from "react-redux";

//Images

import facebook from "../../assets/images/Facebook.svg";
import instagram from "../../assets/images/Instagram.svg";
import telegram from "../../assets/images/Telegram.svg";

function Contacts() {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  useEffect(() => {
    if (window.innerWidth < 375) {
      setHeight(150);
      setWidth(200);
    } else if (window.innerWidth < 535) {
      setHeight(200);
      setWidth(300);
    } else if (window.innerWidth < 740) {
      setHeight(400);
      setWidth(500);
    } else if (window.innerWidth < 850) {
      setHeight(700);
      setWidth(300);
    } else {
      setHeight(465);
      setWidth(845);
    }
  }, []);

  console.log(width);

  const {
    count: { lang },
  } = useSelector((state) => state);

  const { contacts: c } = Content[lang];

  return (
    <section className="contacts" id="contacts">
      <div className="container">
        <h2 className="contacts__heading">{c.heading}</h2>
        <div className="contacts__box">
          <ul className="contacts__list">
            <li className="contacts__item">
              <p className="contacts__text">
                <strong>{c.address_title}</strong>
              </p>
              <p className="contacts__text contacts__text--padding">
                {c.address}
              </p>
            </li>
            <li className="contacts__item">
              <p className="contacts__text">
                <strong>{c.phone}</strong>
              </p>
              <Link href={"tel:+77078899850"}>
                <a>
                  <p className="contacts__text contacts__text--padding">
                    +7 (707) 889-98-50
                  </p>
                </a>
              </Link>
            </li>

            <li className="contacts__item">
              <span>
                <Link href={"https://www.instagram.com/"}>
                  <a target={"_blank"}>
                    <Image
                      src={instagram}
                      alt="instagram icon"
                      width={36}
                      height={36}
                    />
                  </a>
                </Link>
              </span>
              <span>
                <Link href={"https://www.facebook.com/"}>
                  <a target={"_blank"}>
                    <Image
                      src={facebook}
                      alt="facebook icon"
                      width={28}
                      height={32}
                    />
                  </a>
                </Link>
              </span>
              <span>
                <Link href={"https://web.telegram.org"}>
                  <a target={"_blank"}>
                    <Image
                      src={telegram}
                      alt="telegram icon"
                      width={28}
                      height={32}
                    />
                  </a>
                </Link>
              </span>
            </li>
          </ul>

          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.817105944754!2d69.30188451536266!3d41.37805817926507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef33b3863c51f%3A0xdef8a3dfda9b95e1!2s62%2C%20Tashkent%20100180%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1646030385647!5m2!1sen!2s"
              width={width}
              height={height}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
