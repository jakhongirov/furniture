import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import Content from "../../Localization/Content";
import { useDispatch, useSelector } from "react-redux";

function Order({elModal}) {
  const {
    count: { lang },
  } = useSelector((state) => state);

  const { order: o } = Content[lang];

  return (
    <>
      <section className="order" id="order">
        <div className="container">
          <div className="order__box">
            <h1 className="order__heading">{o.heading}</h1>
            <p className="order__desc">{o.desc}</p>

            <div className="order__btn-box">
              <button
                className="order__btn"
                onClick={() => {
                  elModal.current.style.display = "flex";
                }}
              >
                {o.submit}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Order;
