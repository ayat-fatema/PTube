const handleCategory = async()=>{
    const respose = await fetch
    ('https://openapi.programming-hero.com/api/videos/categories')
    const data = await respose.json();
    // console.log(data)
    const categoryContainer = document.getElementById('category-container');
    data.data.forEach((category)=>{
        // console.log(category)
        const div = document.createElement('div');
        div.innerHTML = `
        <a onclick = "handleData('${category.category_id }')"
         class="tab btn">${category.category}</a> 
    
        
        `
        categoryContainer.appendChild(div)
    })
} 


const handleData = async (categoryId)=> {
    const respose = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
    const data = await respose.json();
    // console.log(data.data)
console.log(categoryId)
    const dataContainer = document.getElementById('data-container');
    dataContainer.innerHTML = ""
    data.data.forEach((info)=>{
        console.log(info)
        const div = document.createElement('div')
        div.innerHTML = `

        <div class="card  bg-base-100 shadow-xl">
        <figure><img class="w-64 h-40" src=${info.thumbnail}  alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">
            <figure><img class = "w-16 h-14 rounded-full" src= ${info.authors[0].profile_picture} /></figure>
            <div class="">${info.title}</div>
          </h2>
          
          <div class="card-actions justify-center pt-3">
            <div class="">${info.authors[0].profile_name}</div> 
            <div class="">Verify Mark</div>
          </div>
         </div>
         <p class="text-center pb-9">${info.others?.views}</p>
          </div>

        `
        dataContainer.appendChild(div)
    })
    
       
       
       
       
    

}



handleData("1001")
handleCategory()