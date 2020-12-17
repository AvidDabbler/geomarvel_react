import './App.css';
import './tailwind.output.css';
import { WebMapView } from './components/WebMapView';
import FilterPanel from './components/FilterPanel';


function App() {
  return (
    <div className="Ap h-screen flex flex-row">
      <FilterPanel />
      <WebMapView />
    </div>
  );
}

export default App;
