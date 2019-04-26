import React, { Fragment } from 'react';
import { Modal, Button, InputGroup, FormControl } from 'react-bootstrap';

const ModalComponent = props => {
    const { showModal = false, handleCloseModal, handleInputChange, handleSaveClick} = props;
    return (
        <Fragment>
            <Modal show={showModal} onHide={handleCloseModal} className="post-job-modal">
            <Modal.Header closeButton>
                <Modal.Title>Post a job</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <InputGroup>
                    <InputGroup.Prepend className="mb-3">
                        <InputGroup.Text id="basic-addon1">Job Title</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Enter the job title"
                        aria-label="Job"
                        aria-describedby="basic-addon1"
                        onChange={value => handleInputChange(value,'text')}
                    />
                </InputGroup>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>Job Description</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl as="textarea" aria-label="Job Description" onChange={value => handleInputChange(value,'textArea')} />
                </InputGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                Close
                </Button>
                <Button variant="primary" onClick={handleSaveClick}>
                Save Changes
                </Button>
            </Modal.Footer>
            </Modal>
        </Fragment>

    );
}

export default ModalComponent;
