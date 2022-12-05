let textbox = document.getElementById("textbox");

textbox.addEventListener("input", function () {
  var text = this.value;
//   let char = text.length;
  document.getElementById("char").innerHTML = text.length;


//   to remove space from starting and ending
  text = text.trim();

//   split word when space is found 
  let words = text.split(" ");

//   remove space from between
  let cleanList = words.filter(function (elm) {
    return elm != "";
  });

  document.getElementById("word").innerHTML = cleanList.length;
});
