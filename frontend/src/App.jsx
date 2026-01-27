import Sidebar from './components/Sidebar'
import HeaderTabs from './components/HeaderTabs'
import PakageTabs from './components/PackageTabs'
import SearchFilters from './components/SearchFilters'
import RouteInfo from './components/RouteInfo'
import FareSummary from './components/FareSummary'
import FlightList from './components/FlightList'

import './App.css'

function App() {
  return (
    <div className='app'>
      <Sidebar />
        <div className='main'>
          <HeaderTabs />
          <PakageTabs />
          <SearchFilters />
          <RouteInfo />
          <FareSummary />
          <FlightList />
        </div>
    </div>
  )
}

export default App
