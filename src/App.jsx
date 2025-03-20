
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TableComponent from './Table';
import { Container } from 'react-bootstrap';
import Popup from './PopUpModel';
import { useState } from 'react';

function App() {
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = (rowData) => {
    if(rowData) {
      setTempData(rowData)
    }else{
      setTempData({
        Name:null,
        EmailId:null,
        Qualification:null,
        Location:null,
        PhoneNo:null,
      })
    }
    setShow(true);
  };

  const [tempData,setTempData] = useState({})
  const [change, setChange] =useState(false);

  return (
    <Container fluid className="p-4">
      <Popup show={show} boxClose={handleClose} fieldData={tempData} setFieldData={setTempData} 
              replace={change} setReplace={setChange}/>
      <TableComponent boxShow={handleShow} rep={change} setRep={setChange}
              />
    </Container>
  )
}

export default App
