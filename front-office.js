
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
        loadProducts(data)

    } catch (error) {
    console.log(error)
    }
    
};



/* ASYNC FUNCTIONS END */

/* OTHER FUNCTIONS */

const loadProducts = (arr) => {
    const productsContainer = document.getElementById("productsContainer");
    productsContainer.innerHTML = "";
    arr.forEach(element => {
        let newCol = document.createElement("div")
        newCol.classList.add("col")
        
        newCol.innerHTML = `
                               <div class="card mt-4" style="width: 18rem;">
                                <img src=${element.imageUrl} class="card-img-top img-fluid">
                                <div class="card-body">
                                    <h5 class="card-title">${element.name}</h5>
                                    <p class="card-text">${element.description}</p>
                                    <p><span class="badge badge-primary">${element.price}€</span></p>
                                </div>
                                </div> 
                            
        `;
        productsContainer.appendChild(newCol);
    });

}

/* OTHER FUNCTIONS END */

/* EVENT LISTENERS */
/* EVENT LISTENERS END */





window.onload = () => {
    getData();
};