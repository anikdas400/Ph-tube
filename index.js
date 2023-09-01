const handleCategory = async () => {
  const res = await fetch(" https://openapi.programming-hero.com/api/videos/categories");
  const data = await res.json();
  console.log(data.data)

  const tabContainer = document.getElementById('tab-container')
  const showId = data.data;
  showId.forEach(category => {
    const div = document.createElement('div')
    div.innerHTML = `
        <a onclick ="handleLoadItem('${category.category_id}')" class="tab tab-active">${category.category}</a>
        `
    console.log(category)
    tabContainer.appendChild(div)

  });
}

const handleLoadItem = async (categoryId) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
  const data = await res.json();
  console.log(data.data)

  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML = '';
  const cardData = data.data
  cardData.forEach(items => {
    console.log(items)
    const div = document.createElement('div')
    div.innerHTML = `
        <div class="card card-compact h-80 w-auto bg-base-100 shadow-xl">
          <figure><img class="w-80 h-40 rounded-xl mt-3 " src=${items.thumbnail} alt="ph-tube" /></figure>
          <div class="card-body">

          <div class="flex">
          <div class="avatar-online">
            <div class="">
              <img class="w-12 h-12 rounded-full" src=${items.authors[0].profile_picture} alt="">
            </div>
          </div>
          <div class ="ml-3">
            <h3 class ="font-bold text-xl">${items.title}</h3>
            <h2 class ="font-medium mt-2 mb-2">${items.authors[0].profile_name} ${items.authors[0]?.verified ? "<img class ='w-5 h-5 ml-2 inline rounded-full' src='./image/verified.png' alt=''></img>" : ""} </h2>
            <p>${items.others.views} views</p>
            

          </div>

        </div>
          
        </div>
        `
    cardContainer.appendChild(div)
  })

}
const handleBlog = () => {

//   const blogContainer = document.getElementById('blog-container')
//   const ol = document.createElement('ol')
//   ol.innerHTML = `
//   <li>dgdgdxgvdgvds</li>
// `
if(onclick="handleBlog()"){
  window.location.href = 'blog.html'
}
blogContainer.appendChild(ol)
  

}



handleCategory()