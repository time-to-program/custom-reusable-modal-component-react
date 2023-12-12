import React, { useState } from "react";
import "./App.css";
import Modal from "./components/CustomModal/Modal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <button className="btn" onClick={openModal}>
        Open Modal
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>This is a Modal</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
          libero consectetur dolores, quam aspernatur sapiente cum fugiat
          doloribus odit, est adipisci earum explicabo sit ipsam.
        </p>

        <p>
          Voluptatem sunt ab mollitia eos architecto suscipit nihil maiores
          provident quaerat quibusdam fugiat itaque odit cupiditate accusamus
          fugit asperiores corporis deserunt reprehenderit cum, aperiam quis!
        </p>
      </Modal>
    </div>
  );
};

export default App;
