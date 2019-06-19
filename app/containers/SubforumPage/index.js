import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectPosts,
  makeSelectSub,
  makeSelectError,
  makeSelectLoading
} from './selectors';
import { startFetchingSub } from './actions';

import reducer from './reducer';
import saga from './saga';
import SubforumPage from './SubforumPage';

const mapDispatchToProps = (dispatch) => ({
  loadSub: (subId) => dispatch(startFetchingSub(subId))
});

const mapStateToProps = createStructuredSelector({
  sub: makeSelectSub(),
  posts: makeSelectPosts(),
  loading: makeSelectLoading(),
  error: makeSelectError()
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'sub', reducer });
const withSaga = injectSaga({ key: 'sub', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(SubforumPage);
