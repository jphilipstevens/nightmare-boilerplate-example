import "babel-polyfill";
import "../actions";

import Chai from "chai";
import path from "path";
import Nightmare from "nightmare";

import { config } from "electrode-confippet";
import Navigation from "../navigation";

require('mocha-generators').install();
const expect = Chai.expect; // jshint ignore:line

describe("Google Search", function() {
    this.timeout(config.$("testTimeout"));

    it("provide results for searching 'Github'", function* () {

        const nightmare = Nightmare(config.$("nightmareConfig"));

        const inputBox = yield Navigation.searchGoogle("github", nightmare);
        expect(inputBox).to.not.be.true;

        const resultsStats = yield nightmare.getResultStats();
        expect(resultsStats.results).to.not.be.empty

        yield nightmare.end().catch((err) => console.log(err));
    });
});
