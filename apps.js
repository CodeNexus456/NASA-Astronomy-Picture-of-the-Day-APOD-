let url = "https://api.nasa.gov/planetary/apod?api_key=wEuWVYSb3yU1E6ZGaywP9Uhpdob9ekNJp0BNTUdS";

async function getPhoto() {
  try {
    let responce = await axios.get(url);
  console.log(responce.data);

  document.querySelector("h2").innerText = responce.data.copyright;
  document.querySelector(".para1").innerText = responce.data.title;
  document.querySelector(".para2").innerText = responce.data.explanation;
  document.querySelector(".images").innerHTML = `<img src="${responce.data.hdurl}" alt="${responce.data.title}" width="250">`;
  document.querySelector(".para3").innerText = "Date - " + responce.data.date;

  } catch (error) {
    console.log(error);
  }
}
getPhoto();