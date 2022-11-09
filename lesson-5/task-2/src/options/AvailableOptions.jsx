import { connect } from 'react-redux';
import Options from './Options';
import { availableOptionsSelector } from './options.selectors';
import { tooggleOption } from './options.actions';

const mapState = state => ({
  options: availableOptionsSelector(state),
});
const mapDispatch = {
  moveOption: tooggleOption,
};
export default connect(mapState, mapDispatch)(Options);
