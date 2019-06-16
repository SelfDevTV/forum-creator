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
import { loadUser, logoutUser, loginUser } from 'containers/App/actions';
import reducer from 'containers/App/reducer';
import saga from 'containers/App/saga';
import Navbar from './Navbar';

const mapDispatchToProps = (dispatch) => ({
  loadUser: () => dispatch(loadUser()),
  logout: () => dispatch(logoutUser()),
  login: () => dispatch(loginUser())
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
