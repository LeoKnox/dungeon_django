import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

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
            </Fragment>
        );
    }
}

export default SingleRoomModal;