import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import Content from "../../Localization/Content";
import { useDispatch, useSelector } from "react-redux";

//Images
import img1 from  "../../assets/images/advantages1.png";
import img2 from  "../../assets/images/advantages2.png";
import img3 from  "../../assets/images/advantages3.png";
import img4 from  "../../assets/images/advantages4.png";
import img5 from  "../../assets/images/advantages5.png";
import img6 from  "../../assets/images/advantages6.png";
import img7 from  "../../assets/images/advantages7.png";
import img8 from  "../../assets/images/advantages8.png";

function Advantages() {
  const [data, setData] = useState([]);

  const {
    count: { lang },
  } = useSelector((state) => state);

  const { advantages: a } = Content[lang];

  return (
    <>
      <section className="advantages" id="advantages">
        <div className="container">
          <h2 className="advantages__heading">{a.heading}</h2>

          <ul className="advantages__list">
            <li className="advantages__item">
              <div className="advantages__item__box">
                <p className="advantages__desc">
                  <strong>{a.item1.title}</strong>
                </p>

                <p className="advantages__desc">{a.item1.body}</p>
              </div>

              <div className="">
                <Image src={img1} alt={a.item1.title} width={320} height={220} />
              </div>
            </li>

            <li className="advantages__item">
              <div className="advantages__item__box">
                <p className="advantages__desc">
                  <strong>{a.item2.title}</strong>
                </p>

                <p className="advantages__desc">{a.item2.body}</p>
              </div>

              <div className="">
                <Image src={img2} alt={a.item2.title} width={320} height={220} />
              </div>
            </li>

            <li className="advantages__item">
              <div className="advantages__item__box">
                <p className="advantages__desc">
                  <strong>{a.item3.title}</strong>
                </p>

                <p className="advantages__desc">{a.item3.body}</p>
              </div>
              <div className="">
                <Image src={img3} alt={a.item3.title} width={320} height={220} />
              </div>
            </li>

            <li className="advantages__item">
              <div className="advantages__item__box">
                <p className="advantages__desc">
                  <strong>{a.item4.title}</strong>
                </p>

                <p className="advantages__desc">{a.item4.body}</p>
              </div>

              <div className="">
                <Image src={img4} alt={a.item4.title} width={320} height={220} />
              </div>
            </li>

            <li className="advantages__item">
              <div className="advantages__item__box">
                <p className="advantages__desc">
                  <strong>{a.item5.title}</strong>
                </p>

                <p className="advantages__desc">{a.item5.body}</p>
              </div>

              <div className="">
                <Image src={img5} alt={a.item5.title} width={320} height={220} />
              </div>
            </li>

            <li className="advantages__item">
              <div className="advantages__item__box">
                <p className="advantages__desc">
                  <strong>{a.item6.title}</strong>
                </p>

                <p className="advantages__desc">{a.item6.body}</p>
              </div>
              <div className="">
                <Image src={img6} alt={a.item6.title} width={320} height={220} />
              </div>
            </li>

            <li className="advantages__item">
              <div className="advantages__item__box">
                <p className="advantages__desc">
                  <strong>{a.item7.title}</strong>
                </p>

                <p className="advantages__desc">{a.item7.body}</p>
              </div>

              <div className="">
                <Image src={img7} alt={a.item7.title} width={320} height={220} />
              </div>
            </li>

            <li className="advantages__item">
              <div className="advantages__item__box">
                <p className="advantages__desc">
                  <strong>{a.item8.title}</strong>
                </p>

                <p className="advantages__desc">{a.item8.body}</p>
              </div>

              <div className="">
                <Image src={img8} alt={a.item8.title} width={320} height={220} />
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Advantages;
