function toggleClass() {
  var button = document.getElementById("hs-button");
  var hs = document.getElementById("hs");
  var clg = document.getElementById("clg");
  if (hs.style.display === "none") {
    button.innerHTML = "College";
    hs.style.display = "initial";
    clg.style.display = "none";
  } else {
    button.innerHTML = "High School";
    hs.style.display = "none";
    clg.style.display = "initial";
  }
}
