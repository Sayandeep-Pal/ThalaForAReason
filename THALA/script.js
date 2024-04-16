let checkBtn = document.querySelector(".check-btn");
let container = document.querySelector(".container");
let thalaContainer = document.querySelector(".thala-container");
let noThalaContainer = document.querySelector(".no-thala-container");
let searchBtn1 = document.querySelector(".search-btn1");
let searchBtn2 = document.querySelector(".search-btn2");
let song1 = document.querySelector("#song1");
let song2 = document.querySelector("#song2");
let reason1 = document.querySelector(".reason1");
let reason2 = document.querySelector(".reason2");
let input = document.querySelector(".input");
let heading = document.querySelector(".heading");


function result(){
    let ele = document.querySelector(".container input").value;
    let sum = 0;
        if (ele ===""){
          alert("Input can't be empty!");
        }
        else if (
          isNaN(ele) === false &&
          ele !== "Continent" &&
          ele !== "CONTINENT" &&
          ele !== "continent" &&
          ele !== "7" &&
          ele !== "183" &&
          ele !== "week" &&
          ele !== "WEEK" &&
          ele !== "Week" &&
          ele !== "MSD" &&
          ele !== "msd" &&
          ele !== "Mahendra Singh Dhoni" &&
          ele !== "MAHENDRA SINGH DHONI" &&
          ele !== "mahendra singh dhoni" &&
          ele !== "Dhoni" &&
          ele !== "dhoni" &&
          ele !== "MAHI" &&
          ele !== "Mahi" &&
          ele !== "mahi" &&
          ele !== "Thala" &&
          ele !== "thala" &&
          ele !== "THALA" &&
          ele !== "CHAKRAS" &&
          ele !== "Chakras" &&
          ele !== "chakras" &&    // 1234567
          ele !== "Rainbow" &&
          ele !== "RAINBOW" &&
          ele !== "rainbow" &&
          ele !== "July" &&
          ele !== "JULY" &&
          ele !== "july"
        ) {
          for (i in ele) {
            let element = Number(ele[i]);
            sum = sum + element;
          }
          console.log(sum);

          if (sum === 7) {
            container.classList.add("hide");
            thalaContainer.classList.remove("hide");
            reason1.innerText = `${ele} = 7`;
            noThalaContainer.classList.add("hide");
            song1.play();
          } else {
            container.classList.add("hide");
            noThalaContainer.classList.remove("hide");
            reason2.innerText = `${ele} = ${sum}`;
            thalaContainer.classList.add("hide");
            song2.play();
            heading.innerText = "";
          }
        } else if (ele === "7") {
          container.classList.add("hide");
          thalaContainer.classList.remove("hide");
          noThalaContainer.classList.add("hide");
          song1.play();
        } else if (ele === "183") {
          container.classList.add("hide");
          heading.innerText = "";
          thalaContainer.classList.remove("hide");
          heading.innerText = `183 is the hightest run of MSD in ODI`;
          noThalaContainer.classList.add("hide");
          song1.play();
        } else if (ele === "week" || ele === "WEEK" || ele === "Week") {
          container.classList.add("hide");
          heading.innerText = "";
          thalaContainer.classList.remove("hide");
          heading.innerText = "A Week has 7 days";
          noThalaContainer.classList.add("hide");
          song1.play();
        } else if (
          ele === "MSD" ||
          ele === "msd" ||
          ele === "Mahendra Singh Dhoni" ||
          ele === "MAHENDRA SINGH DHONI" ||
          ele === "mahendra singh dhoni" ||
          ele === "Dhoni" ||
          ele === "dhoni" ||
          ele === "MAHI" ||
          ele === "Mahi" ||
          ele === "mahi" ||
          ele === "Thala" ||
          ele === "thala" ||
          ele === "THALA"
        ) {
          container.classList.add("hide");
          heading.innerText = "";
          thalaContainer.classList.remove("hide");
          heading.innerText = "Naam hi kafi hain";
          noThalaContainer.classList.add("hide");
          song1.play();
        } else if (
          ele === "CHAKRAS" ||
          ele === "Chakras" ||
          ele === "chakras"
        ) {
          container.classList.add("hide");
          heading.innerText = "";
          thalaContainer.classList.remove("hide");
          heading.innerText = "There are 7 Chakras";
          noThalaContainer.classList.add("hide");
          song1.play();
        } else if (
          ele === "Rainbow" ||
          ele === "RAINBOW" ||
          ele === "rainbow"
        ) {
          container.classList.add("hide");
          heading.innerText = "";
          thalaContainer.classList.remove("hide");
          heading.innerText = "Rainbow has 7 colors";
          noThalaContainer.classList.add("hide");
          song1.play();
        } else if (ele === "July" || ele === "JULY" || ele === "july") {
          container.classList.add("hide");
          heading.innerText = "";
          thalaContainer.classList.remove("hide");
          heading.innerText = "July is the 7th month of the year";
          noThalaContainer.classList.add("hide");
          song1.play();
        } else if (
          ele === "Continent" ||
          ele === "CONTINENT" ||
          ele === "continent"
        ) {
          container.classList.add("hide");
          heading.innerText = "";
          thalaContainer.classList.remove("hide");
          heading.innerText = "There are 7 Continents";
          noThalaContainer.classList.add("hide");
          song1.play();
        } else if (
          ele.length === 7 &&
          ele !== "Continent" &&
          ele !== "CONTINENT" &&
          ele !== "continent" &&
          ele !== "7" &&
          ele !== "183" &&
          ele !== "week" &&
          ele !== "WEEK" &&
          ele !== "Week" &&
          ele !== "MSD" &&
          ele !== "msd" &&
          ele !== "Mahendra Singh Dhoni" &&
          ele !== "MAHENDRA SINGH DHONI" &&
          ele !== "mahendra singh dhoni" &&
          ele !== "Dhoni" &&
          ele !== "dhoni" &&
          ele !== "MAHI" &&
          ele !== "Mahi" &&
          ele !== "mahi" &&
          ele !== "Thala" &&
          ele !== "thala" &&
          ele !== "THALA" &&
          ele !== "CHAKRAS" &&
          ele !== "Chakras" &&
          ele !== "chakras" &&
          ele !== "Rainbow" &&
          ele !== "RAINBOW" &&
          ele !== "rainbow" &&
          ele !== "July" &&
          ele !== "JULY" &&
          ele !== "july"
        ) {
          container.classList.add("hide");
          heading.innerText = "";
          thalaContainer.classList.remove("hide");
          heading.innerText = `${ele} = ${ele.length}`;
          noThalaContainer.classList.add("hide");
          song1.play();
        } else {
          container.classList.add("hide");
          heading.innerText = "";
          thalaContainer.classList.add("hide");
          noThalaContainer.classList.remove("hide");
          reason2.innerText = `${ele} = ${ele.length}`;
          song2.play();
        }
}

function endResult1(){
    container.classList.remove("hide");
    thalaContainer.classList.add("hide");
    song1.pause();
    song1.currentTime = 0;
    document.querySelector(".container input").value = "";
    heading.innerText = "";
}
function endResult2(){
    container.classList.remove("hide");
    noThalaContainer.classList.add("hide");
    song2.pause();
    song2.currentTime = 0;
    document.querySelector(".container input").value = "";
    heading.innerText="";
}

checkBtn.addEventListener("click", result);
searchBtn1.addEventListener("click", endResult1);
searchBtn2.addEventListener("click", endResult2);