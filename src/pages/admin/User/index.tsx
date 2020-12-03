import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { Layout, Table } from '../../../components';

interface Data {
  id: number;
  name: string;
  date: string;
}

interface Column {
  id: 'id' | 'name' | 'date';
  label: string;
  minWidth?: number;
  align?: 'right';
  render?: (value: Data) => any;
}

function createData(id: number, name: string, date: string): Data {
  return { id, name, date };
}

export default function User() {
  const columns: Column[] = [
    {
      id: 'id',
      label: 'id',
      minWidth: 170,
      render: (value: Data) => (
        <Link to={`/admin/users/${value.id}`}>{value.name}</Link>
      ),
    },
    {
      id: 'name',
      label: 'name',
      minWidth: 170,
      // align: 'right',
      render: (value: Data) => (
        <Button onClick={() => console.log(123)}>{value.name}</Button>
      ),
    },
    {
      id: 'date',
      label: 'date',
      minWidth: 170,
    },
  ];

  const rows = [
    createData(1, 'Michael Jackson', '16 Mar, 2019'),
    createData(2, 'Bruce Springsteen', '15 Mar, 2019'),
  ];

  return (
    <Layout>
      <Table columns={columns} rows={rows} />
    </Layout>
  );
}
