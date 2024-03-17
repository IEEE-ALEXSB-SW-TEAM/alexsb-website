import './App.css';

import Routers from './Routers.js'

function App() {
  const slides = [
    { url: "http://localhost:3000/images/image-1.jpg", title: "beach" },
    { url: "http://localhost:3000/images/image-2.jpg", title: "boat" },
    { url: "http://localhost:3000/images/image-3.jpg", title: "forest" },
    { url: "http://localhost:3000/images/image-4.jpg", title: "city" },
    { url: "http://localhost:3000/images/image-5.jpg", title: "italy" },
  ];
  return (
    <div className="App">
      <Routers />
    </div>
  );
}

export default App;
