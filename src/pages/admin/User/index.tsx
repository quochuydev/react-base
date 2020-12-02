import React from 'react';
import { Link } from 'react-router-dom';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Layout from '../../../components/Layout';

function createData(id: number, name: string, date: string) {
  return { id, name, date };
}

const rows = [
  createData(1, 'Michael Jackson', '16 Mar, 2019'),
  createData(2, 'Bruce Springsteen', '15 Mar, 2019'),
];

export default function Orders() {
  return (
    <Layout>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Created at</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <Link to={`/admin/users/${row.id}`}>{row.name}</Link>
              </TableCell>
              <TableCell>{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Layout>
  );
}
