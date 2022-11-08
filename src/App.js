import SideMenu from './components/SideMenu'
import InfoCard from './components/InfoCard'
import LeftSide from './components/LeftSide'

function App() {
  return (
    <div className='h-screen w-full overflow-hidden flex justify-center box-border'>
      <SideMenu/>
      <InfoCard/>
      <LeftSide/>
    </div>
  );
}

export default App;
