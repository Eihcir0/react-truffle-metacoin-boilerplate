import React, { Component } from 'react'

import Main from './Main.jsx'
import SideBar from './SideBar.jsx'
import MetaCoin from './MetaCoin.jsx'

class App extends Component {

  render() {
      return (
        <div>
          <Main/>
          <SideBar/>
          <MetaCoin/>
        </div>
      )
    }

}

export default App
