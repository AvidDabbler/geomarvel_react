import './App.css';
import './tailwind.output.css';
import './react-sliding-pane.css';
import { WebMapView } from './components/WebMapView';
import FilterPanel from './components/FilterPanel';
import Slider from './components/Slider';
import TreeURL from './hooks/TreeURL';


function App() {
  const [turl, setTreeURL] = TreeURL('getAll');
  return (
    <div className="Ap h-screen flex flex-row">
      <Slider name='DC Trees: List View'/>
      <FilterPanel 
        className={`p-3 flex px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white md:py-5 md:text-lg md:px-5 ring-2 flex-col`}
        target='map' 
        style={{
          backgroundColor: '#f4fdff',
          position: 'absolute',
          zIndex:3,
          top:360,
          left: 20}}
        setTreeURL={setTreeURL}
      />
      <WebMapView treeURL={turl} />
    </div>
  );
}

export default App;
