import { useRef, useState } from "react";

const Text = () => {
  console.log("Text");
  const [debouncedValue, setDebouncedValue] = useState("");
  const [throttledValue, setThrottledValue] = useState("");
  const debCount = useRef(0);
  const thrCount = useRef(0);

  const myDebounce = (fn, delay) => {
    let timeoutId;
    return function (...args) {
      debCount.current++;
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  const myThrottle = (fn, delay) => {
    let timer;
    return function (...args) {
      thrCount.current++;
      if (!timer) {
        timer = setTimeout(() => {
          fn(...args);
          timer = null;
        }, delay);
      }
    };
  };

  //   const debouncedFunc = myDebounce(setDebouncedValue, 500);

  const handleValue1Change = (e) => {
    setDebouncedValue(e.target.value);
    // debouncedFunc(e.target.value);
  };

  const handleValue2Change = (e) => {
    setThrottledValue(e.target.value);
  };

  const changeDebouncedValue = myDebounce(handleValue1Change, 500);
  const changeThrottledValue = myThrottle(handleValue2Change, 1000);

  return (
    <div>
      <input onChange={changeDebouncedValue} />
      <div>Deb:{debouncedValue}</div>
      <div>DebCount:{debCount.current}</div>
      <input onChange={changeThrottledValue} />
      <div>Th:{throttledValue}</div>
      <div>ThCount:{thrCount.current}</div>
    </div>
  );
};

export default Text;
