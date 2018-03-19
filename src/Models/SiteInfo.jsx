import {observable} from 'mobx'

export default class SiteInfo {
    store;

    @observable Status;
    @observable DataCenter;
    @observable HostName;
    @observable ActiveSite;
    @observable BranchName;
    @observable BranchUrl;
    @observable TvMonAddress;
    @observable PrtgAddress;
    @observable Hosts;
    @observable BuildVersion;
    @observable ServerTypes;

    constructor(store) {
		this.store = store;
	}

	static fromJS(store, site) {
		var ret = new SiteInfo(store);
		if (site.DataCenter)
			ret.DataCenter = site.DataCenter;
		return ret;
	}

	destroy() {
		this.store.firms.remove(this);
    }
    
}