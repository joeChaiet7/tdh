import React, {
  useState,
  useEffect,
  useRef,
  createRef,
  useCallback
} from "react"

import * as styles from "./siteMobileMenuToggle.module.scss"

export default function SiteMobileMenuToggle(props) {
  const [selectedWidth, setSelectedWidth] = useState(0)
  const [containerWidth, setContainerWidth] = useState(0)
  const [buttonRefs, setButtonRefs] = useState([])

  const containerRef = useRef()

  let { 
    toggleItems, 
    activeToggleItem, 
    setActiveToggleItem 
  } = props

  useEffect(() => {
    setButtonRefs(buttonRefs =>
      Array(toggleItems.length)
        .fill()
        .map((_, i) => buttonRefs[i] || createRef())
    )
  }, [toggleItems])

  const handleSetActiveToggleItem = useCallback(
    item => {
      setSelectedWidth(buttonRefs[item.id].current.offsetWidth)
      setActiveToggleItem(item)
    },
    [buttonRefs, setActiveToggleItem]
  )

  
  useEffect(() => {
    //Set the width of the container

    let totalWidth = 0;
    buttonRefs.forEach((button) => {
      if(button.current){
        totalWidth += button.current.clientWidth;
      }
    })

    setContainerWidth(totalWidth);

    //Short delay to allow button to render width properly
    let delay
    if (activeToggleItem && buttonRefs.length === toggleItems.length) {
      delay = setTimeout(() => {
        handleSetActiveToggleItem(activeToggleItem)
      }, 100)
    }

    return () => clearTimeout(delay)
  }, [
    setContainerWidth,
    activeToggleItem,
    handleSetActiveToggleItem,
    toggleItems,
    buttonRefs
  ])

  return (
    <div 
      className={styles.siteMobileMenuToggle} 
      ref={containerRef} 
      style={{ width: containerWidth }}
    >
      {activeToggleItem && toggleItems && toggleItems.map((item, i) => (
        <button
          onClick={() => handleSetActiveToggleItem(item)}
          key={item.id}
          className={`${styles.item} ${
            item.id === activeToggleItem.id ? styles.active : ""
          }`}
          ref={buttonRefs[item.id]}
        >
          {item.icon && item.icon}
          {item.name}
        </button>
      ))}

      { activeToggleItem && (
        <div
          className={styles.button}
          style={{
            width: selectedWidth,
            transform:
              activeToggleItem.id === 0
                ? "translateX(0)"
                : `translateX(${containerWidth - selectedWidth}px)`
          }}
        />
      )}
    </div>
  )
}
