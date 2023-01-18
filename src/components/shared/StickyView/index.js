import React, { useRef, useEffect, useContext } from 'react';
import ScrollContext from '../../../context/ScrollContext';

import * as styles from "./stickyView.module.scss";

export default function StickyView(props) {
  //const [proportion, setProportion] = useState(null);

  const { scrollingElement } = useContext(ScrollContext);

  const { height, item, setActiveItem, children } = props;
  const elRef = useRef();

  /*function onScroll(container){
    const containerRect = container.getBoundingClientRect();
    const selfRect = elRef.current.getBoundingClientRect();
    const offTop = containerRect.y - selfRect.y;

    if(containerRect.height < selfRect.height){
      const viewHeight = selfRect.height - containerRect.height;
      setProportion(offTop / viewHeight);
    }else {
      const viewHeight = containerRect.height;
      const result = offTop < 0 ? offTop / viewHeight : offTop / viewHeight + 1;
      setProportion(result);
    }
  }


  useEffect(() => {
    if(scrollingElement && scrollingElement.current){
      window.addEventListener("scroll", (e) => {
        onScroll(scrollingElement.current);
      });
      onScroll(scrollingElement.current);
    }

    return () => scrollingElement?.current.removeEventListener("scroll" , onScroll)
  }, [scrollingElement])
*/
  useEffect(() => {
    if(elRef && elRef.current){   
      window.addEventListener("scroll", (e) => {
        //const stickyEl = elRef.current.getBoundingClientRect();
        //const offTop = stickyEl.top;
        //const heightOffset = stickyEl.height * 0.408;
        
        //setProportion((offTop * -1) / (stickyEl.height - heightOffset))
      });
    }
    return () => window.removeEventListener("scroll" , (e) => {})
  }, [elRef, scrollingElement])

  useEffect(() => {
    let currentRef = elRef.current;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          setActiveItem(item);
          //setProportion(entry.intersectionRatio);
        }
      });
    })

    observer.observe(currentRef);

    return () => observer.unobserve(currentRef);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div 
      className={styles.stickyView}
      ref={elRef}
      style={{ height }}
      id={`sticky-${item.id}`}
    >
      <div 
        className={styles.sticky}
        style={{ height: "100vh" }}
      >
        { children }
      </div>
    </div>
  )
}
