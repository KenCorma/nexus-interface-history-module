import {
  showConnections,
  hideConnections,
  updateInput,
} from 'actions/actionCreators';

import Overview from './Overview';
import History from 'Shared/Images/History.svg';

const {
  libraries: {
    React,
    ReactRedux: { connect },
    emotion: { styled },
  },
  components: { GlobalStyles, Panel },
} = NEXUS;

@connect(
  (state) => ({
    isLoggedIn: true,
  }),
  { showConnections, hideConnections, updateInput }
)
class Main extends React.Component {
  render() {
    const { isLoggedIn } = this.props;
    return (
      <Panel title="React Module Example" icon={History}>
        <GlobalStyles />
        {isLoggedIn ? <Overview /> : <div></div>}
      </Panel>
    );
  }
}

export default Main;