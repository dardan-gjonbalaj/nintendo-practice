//import { SRLWrapper } from "simple-react-lightbox";
import "./body.scss";

const Body = () => {
  return (
    <div className={"body-container"}>
      <div className={"hero-container"}>
        <img
          className={"hero-image"}
          src="https://assets.nintendo.com/image/upload/c_pad,f_auto,h_613,q_auto,w_1089/ncom/en_US/games/switch/s/stardew-valley-switch/hero?v=2021061600"
          alt=""
        />
      </div>
      <div className={"game-details"}>
        <div className={"game-details-wrapper"}>
          <div className={"game-platform"}>
            <span>Nintendo Switch</span>
          </div>
          <div className={"basic-info"}>
            <h1>Stardew Valley</h1>
            <h2>Available Now</h2>
          </div>
          <div className={"purchase-container"}>
            <div className={"msrp"}>$14.99</div>
            <button className={"purchase-button"}>
              <span>Buy Digital</span>
            </button>
            <h2>Available for up to 75 points</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
