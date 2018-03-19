//import {observable} from 'mobx'


export default class SiteInfo {
    store;

    DataCenter;
    HostName;
    ActiveSite;
    BranchName;
    TvMonAddress;
    PrtgAddress;
    Hosts;
    BuildVersion;
    ServerType;
    Status;

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