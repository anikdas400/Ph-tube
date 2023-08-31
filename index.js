const handleCategory = async () => {
    const res = await fetch(" https://openapi.programming-hero.com/api/videos/categories");
    const data = await res.json();
    console.log(data.data)

    const tabContainer = document.getElementById('tab-container')
    const showId = data.data;
    showId.forEach(category => {
        const div = document.createElement('div')
        div.innerHTML = `
        <a class="tab tab-active">${category.category}</a>
        `
        console.log(category)
        tabContainer.appendChild(div)
        
    });
}

handleCategory()