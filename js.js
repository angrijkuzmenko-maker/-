document.addEventListener('DOMContentLoaded', () => {
    
    const getCatBtn = document.querySelector('#get-cat-btn');
    const catContainer = document.querySelector('#cat-container');

    async function getCat(){
        console.log("Зфпит працює . . .");
            const response = await fetch('https://api.thecatapi.com/v1/images/search');
            const data = await response.json();
            console.log(data);
            const catUrl = data[0].url;
            catContainer.innerHTML = `<img src="${catUrl}" alt="Котик">`;
    }
    getCatBtn.addEventListener("click",getCat);


    
});
