class StarredPageComponent {


    constructor( storageService) {

        this.storageService = storageService;
    }

    async start(){

        this.data = await this.storageService.getStarredMagicData();
        this.render(this.data)
    }

    render(data) {
        
        
        const cardContainer = document.getElementById("main-container");
        cardContainer.innerText = ''
        for (const magic of data) {
            const imgContainer = document.createElement("div");
            imgContainer.className = "img-container"; 
    
            const magicLink = document.createElement("a");
            const img = document.createElement('img');
    
            if (magic.imageUrl === undefined) {
                img.src = "assets/notFound.gif";
                
            } else {
                img.src = magic.imageUrl;
            }
            
            imgContainer.appendChild(img);
            magicLink.appendChild(imgContainer);
    
            const textContainer = document.createElement("div");
            textContainer.className = "txt-container"; 
            const node = document.createTextNode("Name: " + magic.name);
            node.className = "name";
            textContainer.appendChild(node);
            const type = document.createTextNode("Type: " + magic.type);
            type.className = "type";
            textContainer.appendChild(type);
            const rarity = document.createTextNode("Rarity: " + magic.rarity);
            textContainer.appendChild(rarity);
            rarity.className = "rarity";
            imgContainer.appendChild(textContainer);
    
            cardContainer.appendChild(magicLink);
        }
    }


}

export default StarredPageComponent;