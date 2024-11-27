
import subcategories from "../data/subcategory.js";


// used to fetch params from url
const Params=new URLSearchParams(location.search);

const category=Params.get('category');
console.log(category);

function displayProductByCategory(category){
    // filter subcategories based on categoryId
    const filteredsubcategories=subcategories.filter(subcat=>{
        return subcat.categoryId==parseInt(category);
    });
  

    const subcategoryList=document.querySelector(".subcategory-list");
    const subcategoryItem=document.querySelector(".subcategory");


    if(filteredsubcategories.length>0){
       filteredsubcategories.forEach(subcat=>{  
          //  cloneNode is used to duplicate of subcategoryItem dynamically
           const item=subcategoryItem.cloneNode(true);
           item.querySelector("a").href=`/html/productInfo/productResult.html?subcategory=${subcat.id}`;
           item.querySelector("img").src="/html/src/"+subcat.url;
           item.querySelector("span p").textContent=subcat.name;
  
          subcategoryList.appendChild(item);
           
       })
      }  
    //  it removes the structure of html means default divs removed
    subcategoryItem.remove();
  }



displayProductByCategory(category);

