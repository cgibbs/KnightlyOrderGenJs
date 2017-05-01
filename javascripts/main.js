let words = {};
$(document).ready(function() {
  ["adjectives", "nouns"].forEach(function(i) {
    $.ajax("javascripts/Words/" + i + ".txt", {
      type:    "GET",
      success: function(text) {
        // `text` is the file text
        words[i] = text.split("\n");
      },
      error:   function() {
        // An error occurred
        console.log("something died");
      }
    });
  });
});

console.log(words);

let getRand = (l) => l[Math.floor(Math.random() * l.length)];

function gen() {
  
  words["orders"] = ["Order", "Knights", "Covenant", "Legionnaires", "Paladins"];

  genList = [];

  for (i = 0; i < 100; i++) {
    genList.push(getRand(words["orders"] + words["adjectives"] + words["nouns"]));
  }

  return genList.join("\n");
}

$("#genOrders").onClick(function() {
  $("#recipe")[0].innerHTML = gen();
});
