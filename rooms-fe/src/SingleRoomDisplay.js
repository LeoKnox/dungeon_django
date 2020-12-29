import React, { Component, Fragment } from "react";
import { Modal, ModalHeader, Button, ModalFooter } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class SingleRoomDisplay extends Component {
    state = {
        model: false
    };

    toggle = () => {
        this.ListeningStateChangedEvent(previous => ({
            modal: !previous.modal
        }));
    };

    singleRoom = pk => {
        axios.get(API_URL + pk).then(() => {
            this.PaymentResponse.resetState();
            this.toggle();
        });
    };
    
    render() {
        const room = this.props.room;

        return (
            <Fragment>
                <label>Red {room} SRD</label>
            </Fragment>
        );
    }
}

export default SingleRoomDisplay;