class HomePageComponent {
    constructor(Magic, storageService) {
        this.Magic = Magic 
        
        this.storageService = storageService;
    }

    async start(){
        const nextBtn = document.getElementById('next-btn');
        nextBtn.addEventListener('click', () => this.nextPressed())

        const prevBtn = document.getElementById('prev-btn');
        prevBtn.addEventListener('click', () => this.previousPressed())

        this.data = await this.Magic.getMagicData();
        this.render(this.data)
    }
   
    render(data) {
        
        
        const cardContainer = document.getElementById("main-container");
        cardContainer.innerText = ''
        for   (let i = 0; i < data.length; i++) {
            const magic =  data [i];
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


            const saveBtn = document.createElement('button');

            saveBtn.addEventListener('click', (event) => this.saveMagic(event, i)) 

            const node1 = document.createTextNode('salva');

            saveBtn.appendChild(node1);

            magicLink.appendChild(saveBtn);
        }
    }


    async nextPressed(){
        this.Magic.nextPage();
        this.data = await this.Magic.getMagicData();
        this.render(this.data)
    }

    async previousPressed(){
        this.Magic.previousPage();
        this.data = await this.Magic.getMagicData();
        this.render(this.data)
    }

    saveMagic(event, index){
        event.preventDefault();
        const selectedMagic = this.data[index]
        this.storageService.save(selectedMagic);
    }



}

export default HomePageComponent;