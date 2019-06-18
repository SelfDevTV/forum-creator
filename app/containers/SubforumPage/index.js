import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { withRouter } from 'react-router-dom';
import {
  makeSelectPosts,
  makeSelectError,
  makeSelectLoading
} from './selectors';
import { startFetchingPosts } from './actions';

import reducer from './reducer';
import saga from './saga';
import SubforumPage from './SubforumPage';

const mapDispatchToProps = (dispatch) => ({
  loadPosts: (subId) => dispatch(startFetchingPosts(subId))
});

const mapStateToProps = createStructuredSelector({
  posts: makeSelectPosts(),
  loading: makeSelectLoading(),
  error: makeSelectError()
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'posts', reducer });
const withSaga = injectSaga({ key: 'posts', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(SubforumPage);
