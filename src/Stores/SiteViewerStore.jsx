import {observable, action} from 'mobx';
import SiteInfo from '../Models/SiteInfo';

import Json from '../test.json';

export default class SiteViewerStore 
{
    @observable spbsitelistMaster = [];
    @observable msksitelistMaster = [];
    @observable spbsitelist = [];
    @observable msksitelist = [];

    constructor(stores){
        this.stores = stores;
        //this.load();
    }

    load(){
        var url = 'http://192.168.222.85:5002/servers';
        fetch(url)
        .then( r => r ? r.json() : "" )
        .then( this.gotModel.bind(this) )
        .catch(function(err) {
            console.log('err', err);
        });

        var data = [
            {
                "status": 0,
                "dataCenter": 0,
                "hostName": "spb-srv-5.ati.dom",
                "activeSite": "Unknown",
                "branchName": "mar19-v1",
                "branchUrl": "http://stash:7990/projects/AW/repos/ati.web/compare/commits?targetBranch=refs%2Fheads%2Fmaster&sourceBranch=refs%2Fheads%2Fmar19-v1",
                "tvMonAddress": "http://tvmon.ri.domain/nagios/cgi-bin/status.cgi?host=spb-srv-5",
                "prtgAddress": "http://prtg:8080/device.htm?id=5759&tabid=1",
                "hosts": "127.0.0.1 test-pc",
                "buildVersion": "319.1419",
                "serverTypes": [
                    {
                        "key": 1,
                        "value": "Search"
                    }
                ]
            },
            {
                "status": 0,
                "dataCenter": 1,
                "hostName": "spb-srv-31.ati.dom",
                "activeSite": "Unknown",
                "branchName": "mar19-v1",
                "branchUrl": "http://stash:7990/projects/AW/repos/ati.web/compare/commits?targetBranch=refs%2Fheads%2Fmaster&sourceBranch=refs%2Fheads%2Fmar19-v1",
                "tvMonAddress": "http://tvmon.ri.domain/nagios/cgi-bin/status.cgi?host=spb-srv-31",
                "prtgAddress": "http://prtg:8080/device.htm?id=6905&tabid=1",
                "hosts": "127.0.0.1 test-pc",
                "buildVersion": "319.1419",
                "serverTypes": [
                    {
                        "key": 4,
                        "value": "Forum"
                    },
                    {
                        "key": 2,
                        "value": "Edit"
                    }
                ]
            }
        ];
        //this.gotModel(data);
    }

    @action 
    gotModel(m) {
        var spbresult = [];
        var mskresult = [];
        m.forEach(o => {
            if (o.dataCenter === 1)
                spbresult.push(this.addNewSite(o))
            else
                mskresult.push(this.addNewSite(o))
        });
        this.spbsitelist.replace(spbresult);
        this.msksitelist.replace(mskresult);
        this.spbsitelistMaster.replace(spbresult);
        this.msksitelistMaster.replace(mskresult);
    }
    
    
	addNewSite(m)
	{
        var model = SiteInfo.fromJS(this, m);
        return model;
    }
}