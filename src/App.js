// import logo from './logo.svg';
import './App.css';
import Header from './Header.js'
import Sidebar from './Sidebar.js'
import Feed from './Feed.js'
import Widgets from './Widgets.js'
import Login from './Login.js'
import { useStateValue } from './StateProvider'

function App() {
  const [{ user },dispatch] = useStateValue();
  return (
    // BEM naming convention.
    <div className="App">
      {!user ? 
      (<Login/>)
      : (<>
        <Header/>
        <div className="appBody">
          <Sidebar/>
          <Feed/>
          <Widgets/> 
        </div>
      </>)}
      
      
        {/* Feed */}
        {/* Widgets */}
    </div>
  );
}

export default App;
