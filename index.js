document.querySelector("#search").addEventListener("focus", function () {
    var body = document.querySelector("body");
    body.style.opacity = "0.5";
    
});


document.querySelector("#search").addEventListener("blur", function () {
    var body = document.querySelector("body");
    body.style.opacity = "1";
    
});


document.querySelector("#search").addEventListener("input", function () {
 console.log(search.value);
    
});


var product = [

    {name: "blue" , image:"https://unsplash.com/photos/a-mountain-covered-in-snow-under-a-night-sky-hZUeDN_dG1g" , title: "lorem ipsum", price:"1500" },
    {name: "pink" , image:"https://unsplash.com/photos/red-strawberry-fruit-with-white-background-xnRg3xDcNnE" , title: "lorem ipsum", price:"1600" },
    {name: "pink" , image:"https://unsplash.com/photos/red-strawberry-fruit-with-white-background-xnRg3xDcNnE" , title: "lorem ipsum", price:"1600" },
    {name: "pink" , image:"https://unsplash.com/photos/red-strawberry-fruit-with-white-background-xnRg3xDcNnE" , title: "lorem ipsum", price:"1600" },

]



let clutter = "";
product.forEach(function (det, index) {
    clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
        <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl">
            <img src="${det.image}" alt="">
        </div>
        <div class="data w-full px-2 py-5">
            <h1 class="font-semibold text-xl leading-none tracking-tight">${det.title}</h1>
            <div class="flex justify-between w-full items-center mt-2">
                <div class="w-1/2">
                    <h4 class="font-semibold mt-2">${det.price}</h4>
                </div>
                <button data-index = ${index} class="w-10 h-10 rounded-full shader text-yellow-400" id="icon">
                    <i class="ri-add-line" id="icon" data-index = ${index}></i>
                </button>
            </div>
        </div>
    </div>`;
});


var carts = [];
document.querySelector(".products").innerHTML = clutter;

function addcart() {
    var icons = document.querySelectorAll("#icon"); // Assuming you have elements with ID "icon"
    icons.forEach(function (icon) {
        icon.addEventListener("click", function (event) {
            var productIndex = event.target.dataset.index;
            var selectedProduct = product[productIndex]; // Assuming 'product' is an array
            carts.push(selectedProduct);
            // console.log("Item added to cart:", carts);
        });
    });
}

addcart();

function showcart() {
    var cartme = document.querySelector(".bag"); 
    cartme.addEventListener("click", function () {
        cartme.forEach(function (pro , index) {

alert("sdasd")

        })
    });
}

// Call the showcart function to set up the event listener
showcart();





// Original function
function welcomeUser(name, callback) {
    func();
  }

  
  function saad(){
    console.log("aad")
  }



  

  // Callback function
  function displayMessage() {
    console.log("Thank you for visiting!");
  }
  
  // Calling the main function with the callback
  welcomeUser("John", displayMessage);
  
