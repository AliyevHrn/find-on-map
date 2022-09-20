import ItemsList from './components/items-list/items-list';
import Map from './components/map/map';
import './App.scss';

function App() {
  return (
    <div className='flex'>
      <ItemsList/>
      <Map/>
    </div>
  );
}

export default App;
