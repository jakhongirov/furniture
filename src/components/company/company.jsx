import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import Content from "../../Localization/Content";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

//Images
import img from "../../assets/images/company-img.png";

function Company() {
  const {
    count: { lang },
  } = useSelector((state) => state);

  const { company: c } = Content[lang];

  return (
    <>
      <section className="company" id="company">
        <div className="container">
          <h2 className="company__heading">{c.heading}</h2>

          <div className="company__box">
            <div className="company__box-left">
              <p className="company__desc">{c.desc}</p>
              <p className="company__desc">{c.list_name}</p>
              <ul className="company__list">
                <li className="company__item">
                  <span className="company__span">•</span>
                  <p className="company__desc">{c.item1}</p>
                </li>

                <li className="company__item">
                  <span className="company__span">•</span>
                  <p className="company__desc">{c.item2}</p>
                </li>

                <li className="company__item">
                  <span className="company__span">•</span>
                  <p className="company__desc">{c.item3}</p>
                </li>
              </ul>
            </div>

            <div className="company__box-right">
              <Image src={img} alt="badroom photo" width={488} height={405} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Company;
