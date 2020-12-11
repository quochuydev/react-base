import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Table } from '../../../components';
import './style.scss';

const useStyles = makeStyles((theme) => ({}));

export default function Setting(): TODO {
  const classes = useStyles();

  const columns: TODO[] = [
    {
      id: 'card_number',
      label: 'Card number',
      minWidth: 170,
      render: function CardColumn(value: TODO) {
        return <p>{value.card_number ? value.card_number.replace(/(.{4})/g, '$1 ') : null}</p>;
      },
    },
    {
      id: 'holder_name',
      label: 'Holder name',
      minWidth: 170,
    },
    {
      id: 'expired',
      label: 'Expired time',
      minWidth: 170,
      render: function ExpiredColumn(value: TODO) {
        return (
          <p>
            {value.month}/{value.year}
          </p>
        );
      },
    },
    {
      id: 'ccv',
      label: 'CCV',
      minWidth: 170,
    },
  ];

  const rows = [
    { id: 1, holder_name: 'Michael Jackson', card_number: '1234123412341234', month: 8, year: 2022, ccv: 123 },
    { id: 2, holder_name: 'Bruce Springsteen', card_number: '1234123412341234', month: 8, year: 2022, ccv: 123 },
  ];

  return (
    <>
      <Table columns={columns} rows={rows} hideFooter={true} />
    </>
  );
}
