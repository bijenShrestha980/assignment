import { useState } from "react";
import Modal from "../../../assignment-ui/src/Modal";

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Modal open={open} setOpen={setOpen}>
        <h1>hello</h1>
      </Modal>
    </div>
  );
};

export default App;
