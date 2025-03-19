class Magic {
    static BASE_URL = "https://api.magicthegathering.io/v1/cards?page=";
    
    
    
    constructor() {
        this.currentPage = 1;
    }




getMagicData(){
    const url = Magic.BASE_URL + this.currentPage;
    
    return fetch(url)
        .then(resp => resp.json())
        .then(data => {
            // console.log(data);
            return data.cards;
        
    })
    .catch(error => console.error("errore", error))

}

nextPage(){
this.currentPage++;
this.getMagicData();
}

previousPage(){
if (this.currentPage > 1) {
    this.currentPage--;
    this.getMagicData();
}
}
}

export default Magic