import {observable, action} from 'mobx';
import SiteInfo from '../Models/SiteInfo';

export default class SiteViewerStore 
{
    @observable spbsitelist = [];
    @observable msksitelist = [];

    constructor(stores){
        this.stores = stores;
        this.load();
    }

    load(){
        var url = 'http://192.168.222.85:5002/servers';
        fetch(url)
        .then( r => r.json() )
        .then( this.gotModel.bind(this) )
        .catch(function(err) {
            console.log('err', err);
        });
    }

    @action 
    gotModel(m) {
		var result = [];
        m.forEach(o => {
			result.push(this.addNewSite(o))
        });
        this.sitelist.replace(result);
    }
    
    
	addNewSite(m)
	{
        //var val = { Asn: m.Asn, Date: m.AddDate, Reasons: m.Reasons };
        var model = SiteInfo.fromJS(this, m);
        return model;
    }
}