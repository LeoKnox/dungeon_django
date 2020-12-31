import React, { Component, Fragment } from "react";
import { Modal, ModalHeader, Button, ModalFooter } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";
import RoomList from "./RoomList";

class SingleRoomDisplay extends Component {
    state = {
        model: false,
        room: []
    };

    toggle = () => {
        this.ListeningStateChangedEvent(previous => ({
            modal: !previous.modal
        }));
    };

    singleRoom = pk => {
        axios.get(API_URL + pk).then(this.setState({room: data}));
    };
    
    render() {

        return (
            <Fragment>
                <label>Red {room.name} SRD</label>
            </Fragment>
        );
    }
}

export default SingleRoomDisplay;