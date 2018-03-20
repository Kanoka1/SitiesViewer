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

  export default class SitiesViewComponent extends Component {
    constructor() {
      super();
      this.state = {value: 0};
    }

    @observable spb = this.props.route.stores.sites.spbsitelist;
    @observable msk = this.props.route.stores.sites.msksitelist;

    getColor(type){
      if (type == "Search")
        return '#ffc0cb';
      if (type == "Edit")
        return '#8fbc8f';
      if (type == "Forum")
        return '#ffa500';
    }

    handleChange = (event, index, value) => this.setState({value});

    @action
    change()
    {
      var value = this.state.value;
      var result;
      this.spb.forEach(t => {
        if (t.serverTypes.contains(value))
          result.push(value);
      })
      this.spb.replace(result);
    }

    render() {
      return (
        <MuiThemeProvider>
        <div>
          <Toolbar>
            <ToolbarGroup>
              <ToolbarTitle text={"Наши серверочки :3"} />
            </ToolbarGroup>
          </Toolbar>        
        
        <Tabs>
        <Tab label="Питерский ДЦ">

          <Toolbar>
          <ToolbarGroup>
          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
          <MenuItem value={0} primaryText="Тип сервера" />
          <MenuItem value={1} primaryText="Редактирование" />
          <MenuItem value={2} primaryText="Поиск" />
          <MenuItem value={3} primaryText="Форумы" />
          </DropDownMenu>
          </ToolbarGroup>
          </Toolbar>  

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
                <TableRowColumn>{row.hostName}</TableRowColumn>
                <TableRowColumn>{row.activeSite}</TableRowColumn>
                <TableRowColumn>{row.branchName}</TableRowColumn>
                <TableRowColumn>{row.serverTypes.map(t => <span style={{background: this.getColor(t.value), 'margin-right': '5px'}}>{t.value}</span>)}</TableRowColumn>
                <TableRowColumn>{row.prtgAddress}</TableRowColumn>
              </TableRow>
          ))}
          </TableBody>
          </Table>  
        </Tab>
        <Tab label="Московский ДЦ">
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
                <TableRowColumn>{row.hostName}</TableRowColumn>
                <TableRowColumn>{row.activeSite}</TableRowColumn>
                <TableRowColumn>{row.branchName}</TableRowColumn>
                <TableRowColumn>{row.serverTypes.map(t => <span style={{background: this.getColor(t.value), 'margin-right': '5px'}}>{t.value}</span>)}</TableRowColumn>
                <TableRowColumn>{row.prtgAddress}</TableRowColumn>
              </TableRow>
          ))}
          </TableBody>
          </Table>  
        </Tab>
      </Tabs>

        

        </div>
        </MuiThemeProvider>
      );
    }
  }