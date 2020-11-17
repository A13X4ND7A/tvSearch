
const form = document.querySelector('#searchForm');
// const baseURL = "http://api.tvmaze.com/singlesearch/shows?q=";
form.addEventListener('click', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = {params: {q:searchTerm}}
    const res = await axios.get(
      `http://api.tvmaze.com/search/shows?q=`, config
    );
    makeImages(res.data)
    form.elements.query.value = '';
})

const makeImages = (shows) => {
    for(let result of shows) {
        const image = document.createElement("IMG");
        if (result.show.image){
        image.src = result.show.image.medium;
        document.body.append(image);
        }
        
    }
}
