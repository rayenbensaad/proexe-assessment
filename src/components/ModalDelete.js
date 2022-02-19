import React, { useState, useEffect, useMemo, useRef } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTable } from "react-table";
import { removeUser } from "../redux/actions/users";
import { closeModal } from "../redux/actions/modal";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";

const ModalDelete = (props) => {
  const { users } = useSelector((state) => state.user);
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  useEffect((props) => {
    // dispatch(listUsers());
  }, []);




  return (
      <Modal
      centered
    isOpen={isOpen}
  >
    <ModalHeader toggle={function noRefCheck(){}}>
      Delete
    </ModalHeader>
    <ModalBody>
      Do you really want to delete this user ?
    </ModalBody>
    <ModalFooter>
      <Button
        color="danger"
        onClick={()=> {dispatch(removeUser(props.id));dispatch(closeModal());}}
      >
        Yes
      </Button>
      {' '}
      <Button onClick={()=> {dispatch(closeModal());}}>
        Cancel
      </Button>
    </ModalFooter>
  </Modal>
  );
};

export default ModalDelete;
