import "babel-polyfill";
import "../actions";

import Chai from "chai";
import path from "path";
import Nightmare from "nightmare";

import Config from "../../config";
import Navigation from "../navigation";

require('mocha-generators').install();
const expect = Chai.expect; // jshint ignore:line

describe("Google Search Home Page", function() {
    this.timeout(Config.testTimeout);

    it("Should show the search bar", function* () {

        const nightmare = Nightmare(Config.nightmareConfig);

        const inputBar = yield Navigation.navigateToGoogleSearch(nightmare);

        expect(inputBar).to.be.true;

        yield nightmare.end().catch((err) => console.log(err));
    });
});
