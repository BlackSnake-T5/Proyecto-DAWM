let filtrar = () => {
    let search_bar = document.getElementById("search-recipes");
    search_bar.addEventListener('keyup',() => {
        let keyword = search_bar.value.toUpperCase();
        let cards = document.querySelectorAll('.card');
        console.log(cards);
        cards.forEach(card => {
            let recipe_name = card.querySelector('.recipeName').innerHTML.toUpperCase();
            let author = card.querySelector('.card-text').innerHTML.toUpperCase();
            if(recipe_name.indexOf(keyword) < 0 && author.indexOf(keyword) < 0){
                card.style.display = 'none';
            }else{
                card.style.display = 'flex';
            }
        });
    });
    
    

}

filtrar();