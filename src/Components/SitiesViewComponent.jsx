//import {observer} from 'mobx-react';
//import moment from 'moment';

import React, {Component} from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';
  import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
  import {Tabs, Tab} from 'material-ui/Tabs';
  import {ToolbarTitle, ToolbarGroup, Toolbar} from 'material-ui';
  import DropDownMenu from 'material-ui/DropDownMenu';
  import MenuItem from 'material-ui/MenuItem';
  import {observable, action} from 'mobx'
  import {Link} from 'react-router';
  import {observer} from 'mobx-react';

  export default @observer class SitiesViewComponent extends Component {
    constructor() {
      super();
      this.state = {value: 0};
    }

    @observable spbMaster = this.props.route.stores.sites.spbsitelistMaster;
    @observable mskMaster = this.props.route.stores.sites.msksitelistMaster;

    @observable msk = this.props.route.stores.sites.msksitelist;
    @observable spb = this.props.route.stores.sites.spbsitelist;

    getColor(type){
      if (type == "Search")
        return '#ffc0cb';
      if (type == "Edit")
        return '#8fbc8f';
      if (type == "Forum")
        return '#ffa500';
    }

    handleChange = (event, index, value) =>  this.change(this, value);
    //this.change(this, value);
    //this.setState({value});

    change(comp, value)
    {
      this.setState({value});
      var result = [];
      this.spbMaster.forEach(t => {
          t.serverTypes.forEach(function(y)
          {
              if (y.key === value || value === 0){
                result.push(t);
                return;
              }
          })
      })
      this.spb.replace(result);
    }

    handleChangeM = (event, index, value) =>  this.changeM(this, value);
    //this.changeM(this, value);
    //this.setState({value});

    changeM(comp, value)
    {
      this.setState({value});
      var result = [];
      this.mskMaster.forEach(t => {
          t.serverTypes.forEach(y =>{
              if (y.key === value || value === 0){
                result.push(t);
                return;
              }
          })
      })
      this.msk.replace(result);
    }    
    
    render() {
      return (
        <MuiThemeProvider>
        <div>
          <Toolbar>
            <ToolbarGroup>
              <ToolbarTitle text={"Сервера ати веб"} />
            </ToolbarGroup>
          </Toolbar>        

        <Tabs>
        <Tab label="Питерский ДЦ">

          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
          <MenuItem value={0} primaryText="Тип сервера" />
          <MenuItem value={2} primaryText="Редактирование" />
          <MenuItem value={1} primaryText="Поиск" />
          <MenuItem value={4} primaryText="Форумы" />
          </DropDownMenu>

          <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Host</TableHeaderColumn>
              <TableHeaderColumn>Active site</TableHeaderColumn>
              <TableHeaderColumn>Branch</TableHeaderColumn>
              <TableHeaderColumn>Type</TableHeaderColumn>
              <TableHeaderColumn>Other</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.spb.map((row, index) => (
              <TableRow key={index}>
                <TableRowColumn><Link to={`/hostview/${row.hostName}/spb`}>{row.hostName}</Link></TableRowColumn>
                <TableRowColumn>{row.activeSite}</TableRowColumn>
                <TableRowColumn>
                  <Link target="_blank" to={row.branchUrl}>{row.branchName}</Link>  
                  <br/>
                  {`build version: ${row.buildVersion}`}
                </TableRowColumn>
                <TableRowColumn>{row.serverTypes.map(t => <span style={{background: this.getColor(t.value), marginRight: '5px'}}>{t.value}</span>)}</TableRowColumn>
                <TableRowColumn>
                  <Link target="_blank" to={row.prtgAddress}>PRTG</Link>
                  <br/>
                  <Link target="_blank" to={row.tvMonAddress}>TV-MONITOR</Link>
                </TableRowColumn>
              </TableRow>
          ))}
          </TableBody>
          </Table>  
        </Tab>
        <Tab label="Московский ДЦ">
        
          <DropDownMenu value={this.state.value} onChange={this.handleChangeM}>
          <MenuItem value={0} primaryText="Тип сервера" />
          <MenuItem value={2} primaryText="Редактирование" />
          <MenuItem value={1} primaryText="Поиск" />
          <MenuItem value={4} primaryText="Форумы" />
          </DropDownMenu>

          <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Host</TableHeaderColumn>
              <TableHeaderColumn>Active site</TableHeaderColumn>
              <TableHeaderColumn>Branch</TableHeaderColumn>
              <TableHeaderColumn>Type</TableHeaderColumn>
              <TableHeaderColumn>Other</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
          {this.msk.map((row, index) => (
            <TableRow key={index}>
              <TableRowColumn><Link to={`/hostview/${row.hostName}/spb`}>{row.hostName}</Link></TableRowColumn>
              <TableRowColumn>{row.activeSite}</TableRowColumn>
              <TableRowColumn>
                <Link target="_blank" to={row.branchUrl}>{row.branchName}</Link>  
                <br/>
                {`build version: ${row.buildVersion}`}
              </TableRowColumn>
              <TableRowColumn>{row.serverTypes.map(t => <span style={{background: this.getColor(t.value), marginRight: '5px'}}>{t.value}</span>)}</TableRowColumn>
              <TableRowColumn>
                <Link target="_blank" to={row.prtgAddress}>PRTG</Link>
                <br/>
                <Link target="_blank" to={row.tvMonAddress}>TV-MONITOR</Link>
              </TableRowColumn>
            </TableRow>
        ))}
        </TableBody>
          </Table>  
        </Tab>
      </Tabs>

        
      {this.props.inner}
        </div>
        </MuiThemeProvider>
      );
    }
  }