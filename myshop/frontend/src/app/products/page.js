const Products = () => {
    const posts = use(getData());
    return(
        <div className="container mx-auto px-4">
            <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-20">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Product List - MyShop 
        
</h1>
            
        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Buy from the following list of Products</p>
    </div>
    <div class="flex flex-wrap -m-4">
    {posts.products.data.map((item)=>{
            return (
                <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <image class="h-40 rounded w-full object-cover object-center mb-6" 
          src={item.attributes.image.data && item.attributes.image.data.attributes.name} alt="content"/>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">{item.attributes.category}</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{item.attributes.text}</h2>
          <div className="hidden bg-red-800 bg-purple-800 bg-green-800"></div>
          <button class={"border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none " + 'bg-${item.attributes.color}-800' }></button>
          <p class="leading-relaxed text-base">{item.attributes.description}</p>
        </div>
      </div>

            )
        })}
      
     
    </div>
  </div>
</section> 
        </div>
    )
}
import {use} from 'react';
async function getData(){
  let headers = {Authorization: "Bearer 0212b67ae3a4b33c7270c363cd16687a0fd406ef98b5a7f4d3419198615c2ba0219f91076dad79b0fbe92b919a92252ec12c7defcb040254124fb7838976634f112425c3c4c7290040754d6ead23d866b5d8bcd9acf77535748d0cf4d533029cd2a93d302d074e694a289709237c9c32cedf9901744ac129319ac4ef534ac094"}
    let a = await fetch('http://localhost:1337/api/products?populate=*', 
    {headers:headers});
    let products = await a.json();
    console.log(products)
    
    return {products:products};
    
      
       
}
export default Products