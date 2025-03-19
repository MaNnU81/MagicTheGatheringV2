import Magic from "./services/magicServ.js";
import HomePageComponent from "../components/home-page-component.js";
import StorageService from "./services/storageService.js";


const pService = new Magic();
const storageS = new StorageService()
const homePageC = new HomePageComponent(pService, storageS);

homePageC.start()

// pService.getMagicData().then(data => render(data));

// function next( ){
//     pService.nextPages();
//     pService.getMagicData().then(data => render(data));
// }
// window.next = next;

// function previous( ){
//     pService.previousPages();
//     pService.getMagicData().then(data => render(data));
// }
// window.previous = previous;

