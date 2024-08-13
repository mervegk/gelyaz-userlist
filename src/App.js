import { useState } from 'react';
import './App.css';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';

function App() {

  const [activeUserId, setActiveUserId] = useState(null)

  return (
    <div className="App">
      <section><UserList setActiveUserId={setActiveUserId} /></section>
      <section>
        {
          activeUserId && <UserDetail activeUserId={activeUserId} />
        }
      </section>
    </div>
  );
}

export default App;
