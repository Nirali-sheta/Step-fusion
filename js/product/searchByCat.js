import categories from "../data/category.js";
// it will redirect based on selected category

function redirectToSearchResult(category){
    location.href=`/html/productInfo/subCategoryResult.html?category=${category}`;
}

categories.forEach(category=>{
    const categoryElement=document.getElementById(category.name);
    if(categoryElement){
        categoryElement.addEventListener("click",function(){
            redirectToSearchResult(category.id);
     });
    }
})
