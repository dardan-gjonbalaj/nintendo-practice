import { SRLWrapper } from "simple-react-lightbox";
import lbox from "./lbox.module.scss";

const options = {
  settings: {
    overlayColor: "rgb(25, 136, 124)",
    autoplaySpeed: 1500,
    transitionSpeed: 900,
  },
  buttons: {
    backgroundColor: "#1b5245",
    iconColor: "rgba(126, 172, 139, 0.8)",
  },
  caption: {
    captionColor: "#a6cfa5",
    captionFontFamily: "Raleway, sans-serif",
    captionFontWeight: "300",
    captionTextTransform: "uppercase",
  },
};

const LightBox = () => {
  return (
    <section className={lbox.container}>
      <div className={lbox.wrapper}>
        <SRLWrapper options={options}>
          <div className={lbox["grid-wrapper"]}>
            <a
              className={lbox["first-image"]}
              href="https://picsum.photos/900/300?random=1.jpg"
            >
              <img src="https://picsum.photos/900/300?random=1.jpg" alt="r1" />
            </a>
            <a href="https://picsum.photos/450/300?random=2.jpg">
              <img src="https://picsum.photos/450/300?random=2.jpg" alt="r2" />
            </a>
            <a href="https://picsum.photos/450/300?random=3.jpg">
              <img src="https://picsum.photos/450/300?random=3.jpg" alt="r3" />
            </a>
            <a href="https://picsum.photos/450/300random=4.jpg">
              <img src="https://picsum.photos/450/300?random=4.jpg" alt="r4" />
            </a>
            <a href="https://picsum.photos/450/300?random=5.jpg">
              <img src="https://picsum.photos/450/300?random=5.jpg" alt="r5" />
            </a>
          </div>
        </SRLWrapper>
      </div>
    </section>
  );
};

export default LightBox;
