import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import Content from "../../Localization/Content";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";

//Images
import Logo from "../../assets/images/MAXLOFT.svg";
import instagram from "../../assets/images/Instagram.svg";

function Modal({ elModal }) {
  const [data, setData] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email, comment, checkbox } = e.target.elements;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      //   username: username.value.trim(),
      //   password: password.value.trim().toLowerCase(),
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("", requestOptions)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log("error", error));
  };

  const {
    count: { lang },
  } = useSelector((state) => state);

  const { model: m } = Content[lang];

  if (data) {
    if (data.status == 200) {
      alert.success(m.successMsg);
      elModal.current.style.display = "none";
    } else {
      alert.error(m.errMsg);
    }
  }

  return (
    <>
      <div
        className="modal"
        ref={elModal}
        // onClick={() => (elModal.current.style.display = "none")}
      >
        <div className="modal__left-box">
          <div className="modal__logo__box">
            <Link href={"/"}>
              <a>
                <Image src={Logo} alt="Logo" width={280} height={98} />
              </a>
            </Link>
          </div>

          <p className="modal__text modal__text--color">{m.address}</p>
        </div>
        <div className="model__right-box">
          <button
            className="modal__close"
            onClick={() => (elModal.current.style.display = "none")}
          >
            X
          </button>

          <h2 className="model__right__heading">
            <span className="model__right__heading-color">
              {m.heading_begin}
            </span>
            <br />
            {m.heading_end}
          </h2>

          <form className="form" onSubmit={handleSubmit}>
            <div className="input-box">
              <input
                className="modal__input"
                type="text"
                name="name"
                placeholder={m.placeholders.name}
                required
              />
            </div>

            <div className="input-box">
              <input
                className="modal__input"
                type="number"
                name="phone"
                placeholder={m.placeholders.phone}
                required
              />
            </div>

            <div className="input-box">
              <input
                className="modal__input"
                type="email"
                name="email"
                required
                placeholder={m.placeholders.email}
              />
            </div>

            <textarea
              className="modal__input"
              rows="3"
              cols="23"
              name="comment"
              required
              placeholder={m.placeholders.comment}
            ></textarea>

            <div className="checkbox-box">
              <input
                className="modal_checkbox"
                type="checkbox"
                name="checkbox"
                required
                placeholder=""
              />
              <span className="modal_checkbox-text">
                {m.placeholders.checkbox}
              </span>
            </div>

            <button className="modal__btn">{m.submit}</button>
          </form>

          <div className="model__link-box">
            <a
              className="model__link"
              href="https://www.instagram.com/"
              target={"_blank"}
            >
              <Image
                src={instagram}
                alt="instagram icon"
                width={36}
                height={36}
              />
              <span className="">iloftkz</span>
            </a>
          </div>

          <p className="modal__text">
            email: iloftkz2021@gmail.com | тел: +7 (707) 889-98-50 WhatsApp: +7
            (707) 889-98-50
          </p>
        </div>
      </div>
    </>
  );
}

export default Modal;
