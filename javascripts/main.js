words = {};
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
  console.log("test3");
  document.getElementById("genOrders").onclick = function() {
    console.log("test2");
    $("#recipe")[0].innerHTML = gen();
  }
});

console.log(words);

let getRand = (l) => l[Math.floor(Math.random() * l.length)];

function gen() {
  
  words["orders"] = ["Order", "Knights", "Covenant", "Legionnaires", "Paladins"];

  genList = [];

  for (i = 0; i < 100; i++) {
    genList.push("The " + getRand(words["orders"]) + " of the " + (Math.random() * 10 > 9 ? "Most " : "") + getRand(words["adjectives"]) + getRand(words["nouns"]) + "\r\n");
  }

  console.log("test");
  return genList.join("<br/>");
}



