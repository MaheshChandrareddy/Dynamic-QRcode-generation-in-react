import React, { useState } from "react";
import QRCode from "qrcode.react";
import image from "../Assets/images/web-design-2906159__340.jpg";
import styles from "./QRcode.module.css";
const QRcode = () => {
  let [qrCode, setQrCode] = useState("");
  let [state, setState] = useState(false);

  let handleChange = e => {
    setQrCode(e.target.value);
  };

  let handleSubmit = e => {
    e.preventDefault();
    try {
      let x = e.target[0].value;
      x === "" ? alert("give some input to generate QRcode") : setState(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className={styles.MainCon}>
        <article className={styles.SubCon}>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                onChange={handleChange}
                type="text"
                placeholder="enter the text here to generate QRcode"
              />
            </div>
            <button>generate QRcode</button>
          </form>
          <img src={image} alt="" />
          {state && <QRCode className={styles.qrcode} value={`www.${qrCode}.com`} />}
        </article>
      </section>
    </>
  );
};

export default QRcode;
