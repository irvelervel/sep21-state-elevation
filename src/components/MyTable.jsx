import { Component } from 'react'
import { ListGroup } from 'react-bootstrap'

class MyTable extends Component {

    // state = {
    //     selected: null <-- now the state is not stored here anymore, but in App
    // }

    render() {
        return (
            <>
                <ListGroup>
                    <ListGroup.Item className="pointer" onClick={(e) => this.props.setSelected(e.target.innerText)}>
                        Browny
                    </ListGroup.Item>
                    <ListGroup.Item className="pointer" onClick={(e) => this.props.setSelected(e.target.innerText)}>
                        Whitey
                    </ListGroup.Item>
                    <ListGroup.Item className="pointer" onClick={(e) => this.props.setSelected(e.target.innerText)}>
                        Blacky
                    </ListGroup.Item>
                    <ListGroup.Item className="pointer" onClick={(e) => this.props.setSelected(e.target.innerText)}>
                        Wolf
                    </ListGroup.Item>
                </ListGroup>
                <p className="mt-3">Local state is {this.props.selected || 'null'}</p>
            </>
        )
    }
}

export default MyTable

// AS A FUNCTION
// const MyTable = ({ selected, changeSelected }) => {
//     return (
//         <>
//             <ListGroup>
//                 <ListGroup.Item className="pointer" onClick={(e) => changeSelected(e.target.innerText)}>
//                     Browny
//                 </ListGroup.Item>
//                 <ListGroup.Item className="pointer" onClick={(e) => changeSelected(e.target.innerText)}>
//                     Whitey
//                 </ListGroup.Item>
//                 <ListGroup.Item className="pointer" onClick={(e) => changeSelected(e.target.innerText)}>
//                     Blacky
//                 </ListGroup.Item>
//                 <ListGroup.Item className="pointer" onClick={(e) => changeSelected(e.target.innerText)}>
//                     Wolf
//                 </ListGroup.Item>
//             </ListGroup>
//             <p className="mt-3">Local state is {selected || 'null'}</p>
//         </>
//     )
// }

// export default MyTable