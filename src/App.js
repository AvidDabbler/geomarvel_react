import './App.css';
import './tailwind.output.css';
import './react-sliding-pane.css';
import { WebMapView } from './components/WebMapView';
import FilterPanel from './components/FilterPanel';


function App() {
  return (
    <div className="Ap h-screen flex flex-row">
      <FilterPanel target='map' />
      <WebMapView />
    </div>
  );
}

export default App;
