import './App.css'
import MyTable from './components/MyTable'
import { Col, Container, Row } from 'react-bootstrap'
import MyAlert from './components/MyAlert'
import { useState } from 'react'

function App() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <Col>
              <MyTable selected={selected} setSelected={setSelected} />
            </Col>
            <Col className="my-auto">
              <MyAlert selected={selected} />
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  )
}

export default App

// AS A CLASS
// class App extends Component {
//   state = {
//     selected: null,
//   }

//   changeSelected = (newPiggy) => this.setState({ selected: newPiggy })

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <Container>
//             <Row>
//               <Col>
//                 <MyTable selected={this.state.selected} changeSelected={this.changeSelected} />
//               </Col>
//               <Col className="my-auto">
//                 <MyAlert selected={this.state.selected} />
//               </Col>
//             </Row>
//           </Container>
//         </header>
//       </div>
//     )
//   }
// }

// export default App
