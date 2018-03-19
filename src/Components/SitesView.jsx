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

  export default class SitesView extends Component {
    render() {
      return (
        <MuiThemeProvider>
        <div>
        <br/>
        ДОСКАААА!!!
        
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

        </div>
        </MuiThemeProvider>
      );
    }
  }