import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AuthActions } from '../../actions/index';

function LoadSite(props: TODO): TODO {
  const { authActions } = props;

  React.useEffect(() => {
    authActions.usingUser({ id: '1' });
  }, []);

  return props.children;
}

const mapStateToProps = (state: TODO) => ({
  user: state.auth.user,
});

function mapDispatchToProps(dispatch: TODO) {
  return {
    authActions: bindActionCreators(AuthActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadSite);
