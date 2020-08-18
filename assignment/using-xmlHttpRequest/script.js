var xmlhttp = new XMLHttpRequest();
var url = "../json/data.json";

xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(this.responseText);
    renderList(data);
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function renderList(data) {
  var result = "";
  var i;
  for (i = 0; i < data.length; i++) {
    result += "<li>" + data[i].name + "</li>";
  }
  document.getElementById("json-list").innerHTML = result;
}
