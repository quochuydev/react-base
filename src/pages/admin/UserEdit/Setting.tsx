import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useParams } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { Grid, Button } from '@material-ui/core';

import { userActions } from '../../../actions';

let photo = 'https://petstoresaigon.com/wp-content/uploads/2019/03/P-8.jpg';

interface Props {}

function Setting(props: Props) {
  return <div>123321</div>;
}

const mapStateToProps = (state: TODO) => ({
  user: state.userReducer.user,
});

function mapDispatchToProps(dispatch: TODO) {
  return {
    userActions: bindActionCreators(userActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Setting);
