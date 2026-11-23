const objectText = document.getElementById("obyect");

let meteo=`https://api.open-meteo.com/v1/forecast?latitude=${40.37767}&longitude=${49.89201}` +
      `&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`;


// function PrepareContent(person) {
//     return `
//         <div class='card'>
//             <div class='card-body'>
//                 <h5 class='card-title'>${person.Ad} </h5>
//                 <h5 class='card-title'>${person.Soyad} </h5>
//                 <p class='card-text'>Yaş: ${person.Yas}</p>
//             </div>
//         </div>
//     `;
// }

// let content = PrepareContent(obj);
// console.log(content);

// if (objectText) {
//     objectText.innerHTML = content;
// }
// function GetMovies() {
   
    let obj=fetch(meteo);
    console.log(obj);
//         .then((response) => response.json()) 
//         .then((obj) => { 
//             console.log(obj);
//         })
//         .catch((err) => {
//             console.log("Xəta baş verdi:", err);
//         });
// }
// GetMovies();
