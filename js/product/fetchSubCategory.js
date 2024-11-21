import footwear from "../const.js";


// used to fetch params from url
const Params=new URLSearchParams(window.location.search);

const category=Params.get('category');


function displayProductByCategory(category){
    

    
    // fetching sub categories like shoes,sandel etc based on main category like men,women
    const subCategories=footwear[category];
    console.log(subCategories);
    const subCategoryContainer=document.getElementById("container");
    if(subCategories){

       Object.keys(subCategories).forEach(subcat=>{
        console.log(subcat);

         const subCategoryLink = document.createElement("a");
         subCategoryLink.href = `/html/productInfo/productResult.html?category=${category}&subcategory=${subcat}`;
         subCategoryLink.textContent=subcat;
         subCategoryLink.style.display="block";
         subCategoryContainer.appendChild(subCategoryLink);
       })
    }

}

displayProductByCategory(category);

