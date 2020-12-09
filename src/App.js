import React, {useState} from 'react';
import Title from './components/Title';
import Uploadform from './components/Uploadform';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';


export default function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <Title/>
      <Uploadform></Uploadform>
      <ImageGrid setSelectedImg={setSelectedImg}></ImageGrid>
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}></Modal>}
    </div>
  );
}
