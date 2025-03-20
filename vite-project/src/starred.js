
import StarredPageComponent from "../components/starred-page-component.js";
import StorageService from "./services/storageService.js";

const storageS = new StorageService()

const starredPageC = new StarredPageComponent(storageS);

starredPageC.start()