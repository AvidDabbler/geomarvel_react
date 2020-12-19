import './App.css';
import './tailwind.output.css';
import './react-sliding-pane.css';
import { WebMapView } from './components/WebMapView';
import FilterPanel from './components/FilterPanel';
import Slider from './components/Slider';


function App() {
  return (
    <div className="Ap h-screen flex flex-row">
      <Slider name='DC Trees: List View'/>
      <FilterPanel target='map' style={{
                backgroundColor: '#f4fdff',
                position: 'absolute',
                zIndex:3,
                top:360,
                left: 20
            }} />
      <WebMapView />
    </div>
  );
}

export default App;
