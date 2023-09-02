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
  // empty
  const emptyCotainer = document.getElementById('empty-cotainer')
  dataContainer.innerHTML = ""


if(data.data.length === 0){
  emptyCotainer.innerHTML = ""
  const div = document.createElement('div');
  div.innerHTML =`
  <h2> opps no data found
  `
  emptyCotainer.appendChild(div)
}



else{
  data.data.forEach((info )=>{
      console.log(info)
      const div = document.createElement('div')





      div.innerHTML = `

      <div class="card w-64 h-[350px] bg-base-100 shadow-xl">
      <figure><img src="${info.thumbnail}.MATH" alt="Shoes" /></figure>


       <div class=" relative bottom-7 left-48 w-fit p-2 ">
          <p class="text-white bg-black">
          ${info.others.posted_date }</p>
       </div>

      <div class="card-body P-0 m-0 ">
      <div class="flex gap-5">
          <!-- img -->
        <div>
          <img class="w-12 h-11 rounded-full " src="${info.authors[0].profile_picture}" alt="">
      </div>
      <!-- details -->
        <div>
       <h2 class="text-base font-bold">${info.title}</h2>

     <div class="flex gap-5 py-2.5 font-normal text-sm">

       <h3 class="font-normal text-sm text-slate-500">${info.authors[0].profile_name}</h3>
       <h3>mark</h3>

       </div>
       <h4 class="font-normal text-sm text-slate-500">${info.others?.views}</h4>
        </div>

     </div>
      </div>



    </div>

      `
      dataContainer.appendChild(div)
  })
  
}
     
const timeCount = (hrmin) => {
  // console.log(seconds)
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  if (hours > 0) {
      return `${hours} hour${hours > 1 ? 's' : ''} : ${minutes} minute${minutes > 1 ? 's' : ''}`;
  } else {
      return `${minutes} minute${minutes > 1 ? 's' : ''}`;
  }

}

     
  

}

handleData('1000')
handleCategory()