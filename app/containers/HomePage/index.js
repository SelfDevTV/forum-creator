import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectForums,
  makeSelectLoading,
  makeSelectError,
  makeSelectCurrentUser
} from 'containers/App/selectors';
import { loadForums } from '../App/actions';

import saga from './saga';
import HomePage from './HomePage';

const mapDispatchToProps = (dispatch) => ({
  loadForums: () => dispatch(loadForums())
});

const mapStateToProps = createStructuredSelector({
  forums: makeSelectForums(),
  user: makeSelectCurrentUser(),
  loading: makeSelectLoading(),
  error: makeSelectError()
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withSaga,
  withConnect
)(HomePage);
export { mapDispatchToProps };
