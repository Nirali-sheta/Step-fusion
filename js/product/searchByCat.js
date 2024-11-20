
// it will redirect based on selected category

function redirectToSearchResult(category){
    window.location.href=`/html/productInfo/productResult.html?category=${category}`;
}

document.getElementById("men").addEventListener("click",function(){
    redirectToSearchResult("men");
});

document.getElementById("women").addEventListener("click",function(){
    redirectToSearchResult("women");
});
document.getElementById("kids").addEventListener("click",function(){
    redirectToSearchResult("kids");
});