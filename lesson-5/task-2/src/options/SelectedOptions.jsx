import { connect } from 'react-redux';
import Options from './Options';
import { selectedOptionsSelector } from './options.selectors';
import { tooggleOption } from './options.actions';

const mapState = state => ({
  options: selectedOptionsSelector(state),
});
const mapDispatch = {
  moveOption: tooggleOption,
};
export default connect(mapState, mapDispatch)(Options);
