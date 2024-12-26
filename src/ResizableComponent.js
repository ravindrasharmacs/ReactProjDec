import React, { useEffect, useRef, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

const ResizableComponent = () => {
  const ref = useRef();
  const [size, setSize] = useState(100); // Initial size

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        console.log('Resized', entry.contentRect);
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const increaseSize = () => {
    // Increase the size of the div when the button is clicked
    setSize((prevSize) => prevSize + 20);
  };

  return (
    <div>
      <div
        ref={ref}
        style={{
          width: '100%',
          height: `${size}px`, // Use the state size for height
          backgroundColor: 'lightblue',
          transition: 'height 0.3s', // Smooth transition
        }}
      >
        Resize me!
      </div>
      <button onClick={increaseSize} style={{ marginTop: '10px' }}>
        Increase Size
      </button>
    </div>
  );
};

export default ResizableComponent;
