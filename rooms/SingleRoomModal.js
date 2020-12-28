import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import SingleRoomDisplay from "./SingleRoomDisplay"

class SingleRoomModal extends Component {
    state = {
        modal: false
    };

    toggle = () => {
        this.setState(previous => ({
            modal: !previous.modal
        }));
    };

    render() {
        const create = this.props.create;

        var title = "Your Room";

        var button = (
            <Button
                color="info"
                className="float-right"
                onClick={this.toggle}
                style={{ minWidth: "100px" }}
            >
                Room
            </Button>
        )

        return (
            <Fragment>
                {button}

                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

                    <ModalBody>
                        <SingleRoomDisplay
                            resetState={this.props.resetState}
                            toggle={this.toggle}
                            room={this.props.room}
                        />
                    </ModalBody>
                </Modal>
            </Fragment>
        );
    }
}

export default SingleRoomModal;