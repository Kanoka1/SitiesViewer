import {observer} from 'mobx-react';
import React, {Component} from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';
import {Link} from 'react-router';

export default @observer class SitesTableComponent extends Component {
    render() {
        return (
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
        )
    }
}