
/* GLOBAL VARIABLES */
/* GLOBAL VARIABLES END */

/* ASYNC FUNCTIONS */
const getData = async  () => {
  

  const URL = "https://striveschool-api.herokuapp.com/api/product/"
  
    try {
        const response = await fetch(URL, {
          method: "GET",          
          headers: {            
            "Authorization":
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNjQ0NTgyZWExZDAwMTViYjAzZWEiLCJpYXQiOjE2NDM3OTk2MjIsImV4cCI6MTY0NTAwOTIyMn0.-64K2XQEdJuZl90T0yseyiP61ilY33mW8lOvLq1gTuM",
          },
        });
        const data = await response.json()

        console.log(data)

    } catch (error) {
    
}

    
};





/* ASYNC FUNCTIONS END */

/* OTHER FUNCTIONS */
/* OTHER FUNCTIONS END */

/* EVENT LISTENERS */
/* EVENT LISTENERS END */





window.onload = () => {
    getData();
};