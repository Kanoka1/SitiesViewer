import {observable} from 'mobx'

export default class SiteInfo {
    store;

    @observable status;
    @observable dataCenter;
    @observable hostName;
    @observable activeSite;
    @observable branchName;
    @observable branchUrl;
    @observable tvMonAddress;
    @observable prtgAddress;
    @observable hosts = [];
    @observable buildVersion;
    @observable serverTypes;

    constructor(store) {
		this.store = store;
	}

	static fromJS(store, site) {
    var ret = new SiteInfo(store);
    if (site.status)
      ret.status = site.status;
		if (site.dataCenter)
      ret.dataCenter = site.dataCenter;
    if (site.hostName)
      ret.hostName = site.hostName;
    if (site.activeSite)
      ret.activeSite = site.activeSite;
    if (site.branchName)
      ret.branchName = site.branchName;
    if (site.branchUrl)
      ret.branchUrl = site.branchUrl;
    if (site.tvMonAddress)
      ret.tvMonAddress = site.tvMonAddress;
    if (site.prtgAddress)
      ret.prtgAddress = site.prtgAddress;
    if (site.buildVersion)
      ret.buildVersion = site.buildVersion;
    if (site.serverTypes)
      ret.serverTypes = site.serverTypes;
    ret.hosts = site.hosts;
		return ret;
	}

	destroy() {
		this.store.firms.remove(this);
    }
    
}