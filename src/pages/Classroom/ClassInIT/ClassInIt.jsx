import { useState } from "react";
import "./classInit.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
const ClassInIt = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const id = queryParams.get('id');
  const type = queryParams.get('type');
  
  //backEnd
  const classDetails = {
    image: 'https://s35691.pcdn.co/wp-content/uploads/2016/09/iStock_87294393_LARGE.160928.jpg',
    className: 'Math',
    meetLink: 'https://meet.google.com/hmf-yeog-yto',
    meetLinkAvailable: true
  }
  const [addLink, setAddLink] = useState(null);
  function changeUpdateCall() {
    //backend update
    console.log(classDetails);
  }
  function inputKeyPress(event){
    setAddLink(event.target.value);
  }
  function linkUpdate() {
    classDetails.meetLink = addLink;
    classDetails.meetLinkAvailable = true;
    handleClose();
    changeUpdateCall();
    setMeetButton('Join Meet');
  }
  const [meetButton, setMeetButton] = useState(classDetails.meetLinkAvailable ? 'Join Meet' : 'Add Meet Link');
  const [showModalLInkAdd, setShowModalLInkAdd] = useState(false);

  const handleClose = () => {
    setShowModalLInkAdd(false);
  }
  const handleShow = () => {
    setShowModalLInkAdd(true);
  }
  const checkLinkStatus = () => {
    if (classDetails.meetLinkAvailable === true) {
      handleClose();
    }
    else {
      handleShow();
    }
  }
  return (
    // This is Class {id}
      <div className="container-fluid" style={{marginTop:`-30px`}}>
        <div className="mainClassWork">
          <div className="classText">
          <h1><strong>{classDetails.className}</strong></h1>
          </div>
        </div>
        <br></br>

        <div className="container-fluid">
        <div className="row">
            <div className="col-sm-3 d-flex justify-content-center">
              <div className="row m-1">
              <a href={classDetails.meetLinkAvailable ? classDetails.meetLink : "#"} onClick={checkLinkStatus}
                 className="btn btn-success" style={{ width: '100%' }}>{meetButton}</a>
{/* Modal  for adding Link to the button */}
              <Modal show={showModalLInkAdd} onHide={handleClose} backdrop="static"
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered          keyboard={false} >
           <Modal.Header closeButton>
             <Modal.Title>Add Meet</Modal.Title>
           </Modal.Header>
           <Modal.Body>
                  <input type="text" value={addLink} onChange={inputKeyPress} placeholder="Paste Meet Link Here" className="meetLinkPaste"></input>
           </Modal.Body>
           <Modal.Footer>
             <Button variant="secondary" onClick={handleClose}>
               Close
             </Button>
             <Button variant="success" onClick={linkUpdate}>Add Link</Button>
           </Modal.Footer>
      </Modal>
              {/* notification pannel */}
              <div className="container m-3">
                <ul>
                    <li>Notification 1</li>
                    <li>Notification 2</li>
                    <li>Notification 3</li>
                    <li>Notification 4</li>
                </ul>
            </div>
              </div>
            </div>
            {/* messaging part goes here */}
            <div className="col-sm-9" >
              <div className="messageAreaAll">
                <textarea type='text' placeholder='Messages Goes Here' rows='5' className='classMessageArea'></textarea>
                <ul className='meassageAreaBtn'>
                  <li><i className="imgIcon far fa-file-pdf" aria-hidden="true"></i></li>
                  <li><i className="imgIcon far fa-file-image"></i></li>
                  <li><i className="imgIcon far fa-file-video"></i></li>
                  <li style={{float:'right',color:'green'}}><i className="imgIcon fa fa-paper-plane"></i></li>
                </ul>
              </div>
            </div>
        </div>
        </div>

        <br></br>
      </div>
    )
  }
  export default ClassInIt;