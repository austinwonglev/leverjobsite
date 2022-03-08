//variable declaration
var key = config.MY_API_KEY;

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementsByClassName("header");

// Get the offset position of the navbar
var sticky = header[0].offsetTop;

console.log(sticky);

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header[0].classList.add("sticky");
  } else {
    header[0].classList.remove("sticky");
  }
}

// $(document).ready(function(){
//     $.ajax({
//         url: "https://apim.workato.com/austinw0/leverjobsite-v1/get-postings",
//         type: "GET",
//         username: '',
//         password: '',
//         success: function(result){
//             console.log(result);
//         },
//         error:function(error){
//             console.log(`Error`)
//         }
//     })
// })

$(document).ready(function(){
  $.ajax({
      url: "https://apim.workato.com/austinw0/leverjobsite-v1/get-postings",
      type: "GET",
      username: '',
      password: '',
      headers: { 'API-TOKEN': '3c3d5be1cbffe118c51595488e62d460973d119fad5c4eed1ceffe66e77e5591' },
      success: function(result){
          console.log(result);
      },
      error:function(error){
          console.log(`Error`)
      }
  })
})

