import Nightmare from "nightmare";

Nightmare.action("getResultStats", function(done) {
  this.evaluate_now(() => {
    const results = document.querySelector("#resultStats").textContent;
    return { results };
  }, done)
});
