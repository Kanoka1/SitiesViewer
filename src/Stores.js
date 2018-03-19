import SiteViewerStore from './Stores/SiteViewerStore';

export default class Stores {
    sites;

    constructor(){
        this.sites = new SiteViewerStore(this);
    }
}