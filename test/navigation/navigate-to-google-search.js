import { config } from "electrode-confippet";

const navigateToGoogleSearch = (nightmare) => {

  return nightmare
    .goto(config.$("url"))
    .wait(() => document.querySelector("#hplogo"))
    .exists("#lst-ib");
};

export default navigateToGoogleSearch;
