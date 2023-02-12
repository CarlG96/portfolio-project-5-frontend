import { useEffect, useRef, useState }from 'react';

/*
* Hook used in the NavBar component in order to control
* the logic when it has been reduced to a burger menu in order
* to improve UX on smaller device sizes. 
*/

const useClickOutsideToggle = () => {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)){
        setExpanded(false);
      }
    }
    document.addEventListener('mouseup', handleClickOutside);
    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
    }
  }, [ref]);
  return { expanded, setExpanded, ref };
};

export default useClickOutsideToggle