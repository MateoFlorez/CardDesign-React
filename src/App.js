import SideMenu from './components/SideMenu'
import InfoCard from './components/InfoCard'
import LeftSide from './components/LeftSide'
import OrangeBox from './components/OrangeBox'

function App() {
  return (
    <div className='h-screen w-full overflow-hidden flex justify-center box-border bg-zinc-300'>
      <OrangeBox/>
      <SideMenu/>
      <InfoCard/>
      <LeftSide/>
    </div>
  );
}

export default App;
