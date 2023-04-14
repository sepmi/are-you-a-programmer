import { useState } from "react";
import "./App.css";
import Input from "./components/Input/Input";
import Modal from "./components/modal/Modal";
import classes from "./components/modal/Modal.module.css";
import Scan from "./components/Scan/Scan";

function App(props) {
  const [inputName, setInputName] = useState();
  const [scanner, setScanner] = useState(false);

  const nameInputHandler = (name) => {
    setScanner(true);

    setTimeout(() => {
      setInputName(name);
      setScanner(false);
    }, 500);
  };

  return (
    <div className="App">
      <header className="App-header">
        {scanner && <Scan />}

        {inputName && (
          <Modal>
            <span className={classes.name}>{inputName}</span>
            {`   you're `}
            <span className={classes.second}>not</span>
            {` a programmer`}
          </Modal>
        )}
        {!scanner && !inputName && <Input onName={nameInputHandler} />}
      </header>
    </div>
  );
}

export default App;
