var list = document.querySelector("#json-list");

async function getAlphabets() {
  let url = "../json/data.json";
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
    list.innerHTML = "Data error";
  }
}
async function renderAlphabets() {
  let name_list = await getAlphabets();

  let html = "";

  name_list.map((letter) => {
    let htmlSegment = `<li>${letter.name}</li>`;
    //let htmlSegment = "<li>" + letter.name + "</li>";
    html += htmlSegment;
  });

  list.innerHTML = html;
}

renderAlphabets();
