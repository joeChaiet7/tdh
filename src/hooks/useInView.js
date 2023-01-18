import { useEffect, useState, useRef } from 'react';

export default function useInView(ref){
  const [isInView, setIsInView] = useState(false);
  const observerRef = useRef();

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting)
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.65
    }
  )}, [])

  useEffect(() => {
    observerRef.current.observe(ref.current);

    return () => observerRef.current.disconnect();
  }, [ref])

  return isInView;
}

