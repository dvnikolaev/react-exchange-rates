import { useEffect, useRef } from 'react';

export const useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    const localHandler = e => {
     if (domNode.current && !domNode.current.contains(e.target)) {
        handler();
      }
    }


    document.addEventListener("mousedown", localHandler);

    return () => {
      document.removeEventListener("mousedown", localHandler)
    }
  },[]);

  return domNode;
}