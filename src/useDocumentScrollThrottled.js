import React, { useState, useEffect, useRef, useCallback } from "react";
import Container from "react-bootstrap/container";
import Row from "react-bootstrap/Row";
import { animated, useTrail } from 'react-spring';

function useDocumentScrollThrottled() {
      // const prevScrollY = useRef(0);
    // const [goingUp, setGoingUp] = useState(false);
    const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const url = "/school-projects.json";

    const fetchData = useCallback(() => {
      fetch(url)
      .then(res => res.json())
      .then(
          (result) => {
              setItems(result.items);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
              setError(error);
          }
      );   
    }, [url]);
     

  const trail = useTrail(items.length, {
      from: {opacity: 0},
      to: {opacity: 1, transition: '.3s'  }
  })

  useEffect(() => {

    let itemsLoade = false;

    const handleScroll = () => {       
        if(!itemsLoade) {
            itemsLoade = true;
            fetchData();

            console.log(itemsLoade)
        }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);

}, [fetchData]);

return (
  <div></div>
)
}

export default useDocumentScrollThrottled;


// const [, setScrollPosition] = useState(0);
//   let previousScrollTop = 0;

//   function handleDocumentScroll() {
//     const { scrollTop: currentScrollTop } = document.documentElement || document.body;

//     setScrollPosition(previousPosition => {
//       previousScrollTop = previousPosition;
//       return currentScrollTop;
//     });

//     callback({ previousScrollTop, currentScrollTop });
//   }

//   const handleDocumentScrollThrottled = throttle(handleDocumentScroll, 600);

//   useEffect(() => {
//     window.addEventListener('scroll', handleDocumentScrollThrottled);

//     return () =>
//       window.removeEventListener('scroll', handleDocumentScrollThrottled);
//   }, []);