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
              href="https://assets.nintendo.com/image/upload/f_auto,q_auto,w_585/ncom/en_US/games/switch/s/stardew-valley-switch/screenshot-gallery/screenshot01?v=2021062816"
            >
              <img
                src="https://assets.nintendo.com/image/upload/f_auto,q_auto,w_585/ncom/en_US/games/switch/s/stardew-valley-switch/screenshot-gallery/screenshot01?v=2021062816"
                alt="r1"
              />
            </a>
            <a href="https://assets.nintendo.com/image/upload/f_auto,q_auto,w_283/ncom/en_US/games/switch/s/stardew-valley-switch/screenshot-gallery/screenshot02?v=2021062816">
              <img
                src="https://assets.nintendo.com/image/upload/f_auto,q_auto,w_283/ncom/en_US/games/switch/s/stardew-valley-switch/screenshot-gallery/screenshot02?v=2021062816"
                alt="r2"
              />
            </a>
            <a href="https://assets.nintendo.com/image/upload/f_auto,q_auto,w_283/ncom/en_US/games/switch/s/stardew-valley-switch/screenshot-gallery/screenshot03?v=2021062816">
              <img
                src="https://assets.nintendo.com/image/upload/f_auto,q_auto,w_283/ncom/en_US/games/switch/s/stardew-valley-switch/screenshot-gallery/screenshot03?v=2021062816"
                alt="r3"
              />
            </a>
            <a href="https://assets.nintendo.com/image/upload/f_auto,q_auto,w_283/ncom/en_US/games/switch/s/stardew-valley-switch/screenshot-gallery/screenshot04?v=2021062816">
              <img
                src="https://assets.nintendo.com/image/upload/f_auto,q_auto,w_283/ncom/en_US/games/switch/s/stardew-valley-switch/screenshot-gallery/screenshot04?v=2021062816"
                alt="r4"
              />
            </a>
            <a href="https://assets.nintendo.com/image/upload/f_auto,q_auto,w_283/ncom/en_US/games/switch/s/stardew-valley-switch/screenshot-gallery/screenshot05?v=2021062816">
              <img
                src="https://assets.nintendo.com/image/upload/f_auto,q_auto,w_283/ncom/en_US/games/switch/s/stardew-valley-switch/screenshot-gallery/screenshot05?v=2021062816"
                alt="r5"
              />
            </a>
          </div>
        </SRLWrapper>
      </div>
    </section>
  );
};

export default LightBox;
