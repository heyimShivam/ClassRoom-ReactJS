import React, {useCallback} from 'react'
import { useState } from "react";
import "./classInit.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropzone from 'react-dropzone'

const ClassInIt = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const id = queryParams.get('id');
  const type = queryParams.get('type');
  const [attachFileModal, setAttachFileModal] = useState(false);
  const attachFileModalOpen = () => setAttachFileModal(true);
  const attachFileModalClose = () => {
    setAttachFileModal(false);
    setTimeout(
      setFileUploadText('Drag and drop your files, or click to select files'), 1000);
  };
  const [fileUploadText, setFileUploadText] = useState('Drag and drop your files, or click to select files');
  const acceptedFiles = (acceptedFiles) => {
    console.log(acceptedFiles);
    setFileUploadText("Uploaded no of files : " + acceptedFiles.length);
  };

  //backEnd
  const classDetails = {
    image: 'https://s35691.pcdn.co/wp-content/uploads/2016/09/iStock_87294393_LARGE.160928.jpg',
    className: 'Math',
    meetLink: 'https://meet.google.com/hmf-yeog-yto',
    meetLinkAvailable: true
  }
  const [addLink, setAddLink] = useState(null);
 
  const onFileChange = () => {

  }
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
  const handleOnDrop = (files, rejectedFiles) => {
    console.log(files);
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
                <li style={{ float: 'right' }}>
                  <Button style={{ borderRadius: "20%", width: '25px', padding: '6px', paddingRight: '28px' }} variant="outline-dark">
                    <i className="imgIcon fa fa-paper-plane"></i>
                  </Button></li>
                <li style={{ float: 'right' }}>
                  <Button onClick={attachFileModalOpen} variant="outline-dark" style={{ borderRadius: "20%", width: '25px', padding: '6px', paddingRight: '28px' }}>
                    <i className="imgIcon fa fa-paperclip "></i>
                  </Button>
                </li>
              </ul>
              </div>
            </div>
        </div>
        </div>

      <br></br>

{/* modal for uploading file open here*/}
      <Modal show={attachFileModal} onHide={attachFileModalClose} backdrop="static" keyboard={false}
              size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                  <Modal.Title>Upload File</Modal.Title>
                </Modal.Header>
                <Modal.Body>

            <div className="row d-flex justify-content-center" style={{border:'2px dotted orange', borderRadius:'10px',margin:'0', height:'20vh', width:'100%'}}>
              <div className="col d-flex justify-content-center"  >
            <Dropzone style={{width:'100%'}} onDrop={acceptedFiles}>
                  {({getRootProps, getInputProps}) => (
                    <section>
                      <div {...getRootProps()}>
                        <input {...getInputProps()} />
                      <p style={{ marginTop: '45px', color: '#333' }}>{fileUploadText}</p>
                      </div>
                    </section>
                  )}
                </Dropzone>
          </div>
            </div>

                </Modal.Body>
                  <Modal.Footer>
                      
                 <Button onClick={attachFileModalClose}>Close</Button>
                 <Button onClick={attachFileModalClose} variant="primary">Upload</Button>
                </Modal.Footer>
      </Modal>
{/* modal for uploading  file over*/}
      </div>
    )
  }
  export default ClassInIt;