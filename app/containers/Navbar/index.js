import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectCurrentUser
} from 'containers/App/selectors';
import { loadUser } from 'containers/App/actions';
import reducer from 'containers/App/reducer';
import Navbar from './Navbar';
import saga from './saga';

// TODO: add signup here
const mapDispatchToProps = (dispatch) => ({
  loadUser: () => dispatch(loadUser())
});

const mapStateToProps = createStructuredSelector({
  username: makeSelectCurrentUser(),
  loading: makeSelectLoading(),
  error: makeSelectError()
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'signup', reducer });
const withSaga = injectSaga({ key: 'signup', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(Navbar);
