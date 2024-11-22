import footwear from "../const.js";


// used to fetch params from url
const Params=new URLSearchParams(window.location.search);

const category=Params.get('category');


function displayProductByCategory(category){
    

    
    // fetching sub categories like shoes,sandel etc based on main category like men,women
    const subCategories=footwear[category];
    const subcategoryList=document.querySelector(".subcategory-list");
    const subcategoryItem=document.querySelector(".category");

    if(subCategories){

       Object.keys(subCategories).forEach(subcat=>{
        console.log(subcat);
       
        // it will copy the div inside html code dynamically
        const item=subcategoryItem.cloneNode(true);

        item.querySelector("a").href=`/html/productInfo/productResult.html?category=${category}&subcategory=${subcat}`;
        item.querySelector("img").src=subCategories[subcat].url;
        console.log(subCategories[subcat].url);
        item.querySelector("span").textContent=subcat;
        subcategoryList.appendChild(item);

         
        })
        //  it removes the structure of html means default divs removed
      subcategoryItem.remove();
    }

}

displayProductByCategory(category);

