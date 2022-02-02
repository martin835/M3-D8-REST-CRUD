/* GLOBAL VARIABLES */
/* GLOBAL VARIABLES END */

/* ASYNC FUNCTIONS */
const postData = async  (event) => {
  event.preventDefault();

  const URL = "https://striveschool-api.herokuapp.com/api/product/"

  const myEvent = {
    name: document.getElementById("nameValue").value,
    description: document.getElementById("descriptionValue").value,
    brand: document.getElementById("brandValue").value,
    imageUrl: document.getElementById("imgUrlValue").value,
    price: document.getElementById("priceValue").value,
  };

  console.log(myEvent);
    try {
        const response = await fetch(URL, {
          method: "POST",
          body: JSON.stringify(myEvent),
          headers: {
            "Content-Type": "application/json",
            "Authorization":
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNjQ0NTgyZWExZDAwMTViYjAzZWEiLCJpYXQiOjE2NDM3OTk2MjIsImV4cCI6MTY0NTAwOTIyMn0.-64K2XQEdJuZl90T0yseyiP61ilY33mW8lOvLq1gTuM",
          },
        });
    } catch (error) {
    
}

    
};





/* ASYNC FUNCTIONS END */

/* OTHER FUNCTIONS */
/* OTHER FUNCTIONS END */

/* EVENT LISTENERS */
/* EVENT LISTENERS END */





window.onload = () => {};
