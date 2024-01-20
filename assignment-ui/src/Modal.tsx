// assignment-ui/src/Modal.js
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "./ui/dialog";
import "./output.css";

const Modal = ({ open, setOpen, children }) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <DialogHeader>{children}</DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
