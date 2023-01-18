import React, { useState, useEffect } from 'react';

import {
  IoSearch
} from 'react-icons/io5';

import * as styles from './searchSection.module.scss';

export default function SearchSection() {
  const [placeholder, setPlaceholder] = useState('');
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [speed, setSpeed] = useState(150);

  const textState = ["isTyping", "isDeleting"];
  const [typing, setTyping] = useState(textState[0])

  const placeholders = [
    "I want to lose weight",
    "Is this bump normal?",
    "I tripped and fell",
    "How does insurance work?",
    "Can I get a prescription?"
  ];

  function sleep(ms){
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    setSpeed(typing === "isTyping" ? 150 : 30);
  }, [typing])

  useEffect(() => {
    let timer;

    if(placeholders){
      let phrase = placeholders[placeholderIndex];

      timer = setTimeout(() => {
        if(typing === 'isTyping' && placeholder !== phrase){
          setPlaceholder(phrase.slice(0, placeholder.length + 1));
        }else if(placeholder === phrase && typing === "isTyping"){
          sleep(1000).then(() => {
            setTyping(textState[1])
          })
        }else if((placeholder === phrase && typing === "isDeleting") || typing === "isDeleting"){
          setPlaceholder(phrase.slice(0, placeholder.length - 1));
          if(placeholder.length <= 2){
            setTyping(textState[0])
            
            if(placeholderIndex >= placeholders.length - 1){
              setPlaceholderIndex(0)
            }else{
              setPlaceholderIndex(prevState => prevState + 1)
            }
          }
        }
      }, speed)

    }
    
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [placeholder, placeholderIndex, typing])

  return (
    <section className={styles.searchSection}> 
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.title}>
            What's on your mind?
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.input}>
            <input
              type="text"
              placeholder={placeholder}
            />

            <button>
              <IoSearch />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
