import './App.css';
import Search from './components/Search'
import SearchContainer from './containers/SearchContainer';
import {connect} from 'react-redux'


function App() {
  return (
    <div className="App">
      
      <SearchContainer />

    </div>
  );
}

export default connect()(App);

