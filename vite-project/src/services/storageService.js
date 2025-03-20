class storageService {
    constructor() {

    }


    save(magic) {
        const starredMagicString = localStorage.getItem('starred');

        let starredMagics = [];
        if (starredMagicString) {
            starredMagics = JSON.parse(starredMagicString);
        }

        
        let isDuplicate = false;
        for (let i = 0; i < starredMagics.length; i++) {
            if (JSON.stringify(starredMagics[i]) === JSON.stringify(magic)) {
                isDuplicate = true;
                break;
            }
        }

        if (isDuplicate) {
            console.log('La carta è già tra i preferiti.');
        } else {
            starredMagics.push(magic);
            localStorage.setItem('starred', JSON.stringify(starredMagics));
        }
    }
    
    getStarredMagic() {
        const starredMagicString = localStorage.getItem('starred')

        if (starredMagicString) {

            const starredMagics = JSON.parse(starredMagicString);
            return starredMagics;

        } else {
            const starredMagics = [];
            return starredMagics;
        }
    }

}

export default storageService;



