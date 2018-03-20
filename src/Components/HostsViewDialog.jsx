import {observer} from 'mobx-react';
import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {CopyToClipboard} from 'react-copy-to-clipboard';

@observer
export default class HostsViewDialog extends Component {
    handleClose = () => {
        window.location = '/';
      };

    buildHosts(){
        var data;
        if (this.props.params.city === "spb")
            data = this.props.route.store.sites.spbsitelist;
        if (this.props.params.city === "msk")
            data = this.props.route.store.sites.msksitelist;
        
        var props2 = this.props.params.hosts;
        var data2 =  data.map(function(x){
            if (x.hostName === props2){
               return x.hosts; 
            }
        })[0];

        
        return data2? data2:[];
    }

    fromhoststostring(data2){
        var text = '';
        if (data2)
            for(var i=0; i<data2.length; i++){
                   text+=data2[i];
                   text+="\n"; 
            }
            return text;
    }

    render(){
        const actions = [
            <CopyToClipboard text={this.fromhoststostring(this.buildHosts())}>
                <FlatButton
                label="Скопировать в буфер"
                primary={true}
                keyboardFocused={true}
                />
            </CopyToClipboard>,
            <FlatButton
              label="Закрыть"
              primary={true}
              keyboardFocused={true}
              onClick={this.handleClose}
            />
          ];

        return(
            <div>
            <Dialog
              title={'Hosts'}
              actions={actions}
              modal={false}
              open={true}
              onRequestClose={this.handleClose}
              autoScrollBodyContent={true}
            >
                {this.buildHosts().map((item, index) => (
                    <div key={index}>
                        {item}
                    </div>    
                ))}
            </Dialog>
            </div>
        );
    }
}