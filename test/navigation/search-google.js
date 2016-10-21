import { config } from "electrode-confippet";

const searchGoogle = (searchTerm, nightmare) => {

  return nightmare
    .goto(config.$("url"))
    .wait(() => document.querySelector("#hplogo"))
    .exists("#lst-ib")
    .type("input[id='lst-ib']", searchTerm)
    .click("#sblsbb > button")
    .wait(() => document.querySelector("#nav > tbody > tr > td:nth-child(5) > a > span"));
};

export default searchGoogle;
