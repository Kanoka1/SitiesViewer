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
  import FontIcon from 'material-ui/FontIcon';
  import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
  import {ToolbarTitle, ToolbarGroup, Toolbar} from 'material-ui';

  function handleActive(tab) {
    alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
  }

  export default class SitiesViewComponent extends Component {
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

          </TableBody>
          </Table>  
        </Tab>
        <Tab label="Московский ДЦ">

        </Tab>
      </Tabs>

        

        </div>
        </MuiThemeProvider>
      );
    }
  }