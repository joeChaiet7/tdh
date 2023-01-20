import React, { useRef, useState, useEffect, useContext } from 'react';
import OverflowContext from '../../../context/OverflowContext';
import { v4 as uuidv4 } from 'uuid';
import ReactMarkdown from 'react-markdown';

import { searchConfig } from '../../../utils/searchConfig';

import * as styles from './siteSearch.module.scss';
import './yextOverrides.scss'

const GridSection = ({ results, CardComponent, header }) => {
  if (!CardComponent) {
    return <div>Missing Card Component</div>;
  }

  let filteredResults = results.filter(item => item.entityType !== "ce_blog");

  return (
    <>
      { header.props.label !== 'Blog' && 
        <div className={styles.section}>
          <div className={styles.title}>{header.props.label} <hr/></div>
      
          {/*<div className={styles.container}>
            {filteredResults.map((r) => (
              <React.Fragment key={r.id}>

                { r.entityType === 'ce_promotion' &&
                  <PromotionCard result={r} />
                }

                { (r.entityType === 'ce_insurance' || r.entityType === 'faq') && 
                  <DropdownCard result={r} />
                }

                { r.entityType === 'ce_services' &&
                  <ServicesCard result={r} />
                }

                { r.entityType === 'ce_blog' &&
                  <StandardCard result={r} />
                }

                { r.entityType === 'ce_testimonials' &&
                  <TestimonialCard result={r} />
                }

                { r.entityType === 'ce_businessSolutions' &&
                  <SolutionCard result={r} />
                }

              </React.Fragment>
            ))}
          </div>*/}
        </div>
      }
    </>
  );
};

const TestimonialCard = ({ result }) => {
  let {
    rawData
  } = result;

  return(
    <div className={styles.testimonialCard}>
      <div className={styles.name}>{ rawData.name }</div>
      <div className={styles.service}>{ rawData.services[0]}</div>

      <ReactMarkdown>{rawData.description}</ReactMarkdown>
    </div>
  )
}

const SolutionCard = ({ result }) => {
  let {
    rawData
  } = result;

  return(
    <div className={styles.solutionCard}>
      <div className={styles.image}>
        { rawData.primaryPhoto.image.url &&
          <img src={rawData.primaryPhoto.image.url} alt={rawData.name} />
        }
      </div>

      <div className={styles.content}>
        <div className={styles.title}>Business Solutions</div>
        <ReactMarkdown>{rawData.c_description}</ReactMarkdown>

      </div>
      
      { rawData.c_primaryCTA && 
        <div className={`${styles.cta} ${styles.cardCta}`}>
          { rawData.c_primaryCTA && 
            <a className={styles.primaryCta} href={rawData.c_primaryCTA.link}>{rawData.c_primaryCTA.label}</a>
          }

          { rawData.c_secondaryCTA && 
            <a className={styles.secondaryCta} href={rawData.c_secondaryCTA.link}>{rawData.c_secondaryCTA.label}</a>
          }
        </div>
      }
    </div>
  )
}

const PromotionCard = ({ result }) => {
  let {
    rawData
  } = result;

  return(
    <div className={styles.promotionCard}>
      <ReactMarkdown>{rawData.c_description}</ReactMarkdown>
      
      { rawData.c_primaryCTA && 
        <div className={`${styles.cta} ${styles.cardCta}`}>
          { rawData.c_primaryCTA && 
            <a className={styles.primaryCta} href={rawData.c_primaryCTA.link}>{rawData.c_primaryCTA.label}</a>
          }

          { rawData.c_secondaryCTA && 
            <a className={styles.secondaryCta} href={rawData.c_secondaryCTA.link}>{rawData.c_secondaryCTA.label}</a>
          }
        </div>
      }
    </div>
  )
}

const ServicesCard = ({ result }) => {
  let {
    rawData
  } = result;

  return(
    <div className={styles.servicesCard}> 
      <div className={styles.title}>{rawData.name}</div>
      <div className={styles.inner}>

        <div className={styles.image}>
          { rawData.c_photo.url &&
            <img src={rawData.c_photo.url} alt={rawData.name} />
          }
        </div>

        <div className={styles.content}>
          <ReactMarkdown>{rawData.c_description}</ReactMarkdown>

          { rawData.c_primaryCTA && 
            <div className={`${styles.cta} ${styles.cardCta}`}>
              { rawData.c_primaryCTA && 
                <a className={styles.primaryCta} href={rawData.c_primaryCTA.link}>{rawData.c_primaryCTA.label}</a>
              }

              { rawData.c_secondaryCTA && 
                <a className={styles.secondaryCta} href={rawData.c_secondaryCTA.link}>{rawData.c_secondaryCTA.label}</a>
              }
            </div>
          }
        </div>
      </div>
    </div>
  )
}

const DropdownCard = ({ result }) => {
  const [showAnswer, setShowAnswer] = useState("");
  const headingRef = useRef();

  function handleSlideToggle(){
    if(showAnswer !== "show" && showAnswer !== "hide"){
      setShowAnswer("show")
    }else if(showAnswer === "hide"){
      setShowAnswer("show")
    }else{
      setShowAnswer("hide")
    }
  }
  
  let {
    rawData
  } = result;

  return(
    <div 
      className={`${styles.dropdownCard}`}
      style={{
        "--maxHeight": `${showAnswer === "show" ? 2000 : headingRef.current && headingRef.current.getBoundingClientRect().height + 32}px`
      }}
    >
      <button
        onClick={() => handleSlideToggle()}
        className={`${styles.button} ${showAnswer === "show" ? styles.active : ""}`}
        type="button"
      >
        <div 
          className={styles.title}
          ref={headingRef}
        >
          { rawData.question }
        </div>

        <svg 
          className={`${styles.icon}`} 
          viewBox="0 0 100 100" 
          width="20" 
          height="20"
        >
          <rect className={styles.horizontal} y="45" width="100" height="15" rx="10px" ry="10px" strokeLinejoin="round"></rect>
          <rect className={styles.vertical} y="0" x="45" width="15" height="100" rx="10px" ry="10px" strokeLinejoin="round"></rect>
        </svg>
      </button>

      <div className={styles.content}>
        { rawData.answer &&
          <ReactMarkdown>{rawData.answer}</ReactMarkdown>
        }

        { rawData.c_primaryCTA && 
          <div className={`${styles.cta} ${styles.cardCta}`}>
            { rawData.c_primaryCTA && 
              <a className={styles.primaryCta} href={rawData.c_primaryCTA.link}>{rawData.c_primaryCTA.label}</a>
            }

            { rawData.c_secondaryCTA && 
              <a className={styles.secondaryCta} href={rawData.c_secondaryCTA.link}>{rawData.c_secondaryCTA.label}</a>
            }
          </div>
        }
      </div>
     
    </div>
  )
}

export default function SiteSearch({ setShowResults }) {
  const [results, setResults] = useState();
  const [searcher, setSearcher] = useState();
  const [sessionId, setSessionId] = useState();

  const { setSiteOverflow } = useContext(OverflowContext);

  const resultsRef = useRef();
  const searchBarRef = useRef();

  /*const verticalConfigMap = {
    promotion: {
      label: "",
      SectionComponent: GridSection,
      CardComponent: StandardCard
    },
    insurance: {
      label: "Insurance",
      SectionComponent: GridSection,
      CardComponent: StandardCard
    },
    services: {
      label: "Services",
      SectionComponent: GridSection,
      CardComponent: StandardCard
    },
    blog: {
      label: "Blog",
      SectionComponent: GridSection,
      CardComponent: StandardCard
    },
    faqs: {
      label: "FAQs",
      SectionComponent: GridSection,
      CardComponent: StandardCard
    },
    testimonials: {
      label: "Testimonials",
      SectionComponent: GridSection,
      CardComponent: StandardCard
    },
    business_solutions: {
      label: "Business Solutions",
      SectionComponent: GridSection,
      CardComponent: StandardCard
    }
  }

  useEffect(() => {
    if(results && results.length > 0){
      setShowResults(true);
      setSiteOverflow("hidden")
    }else{
      setShowResults(false);
      setSiteOverflow("unset")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [results])

  useEffect(() => {
    //Yext
    setSearcher(provideHeadless(searchConfig));
  }, [])

  useEffect(() => {
    if(searcher) {
      searcher.setSessionTrackingEnabled(true);
      //searcher.setVertical('services');
      setSessionId(window.sessionStorage.getItem('sessionId'));
      if(!sessionId){
        setSessionId(uuidv4());
        window.sessionStorage.setItem('sessionId', sessionId);
      }
  
      searcher.setSessionId(sessionId);
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searcher]);
  
  const handleSearch = () => {
    searcher.executeUniversalQuery()
    .then(data => {
      if(data.verticalResults.length > 1) {
        setResults(data.verticalResults);
      }
    });
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if(resultsRef.current && !resultsRef.current.contains(e.target)){
        setResults([]);
      }
    }

    document.addEventListener('click', handleClickOutside, true);

    return () => document.removeEventListener('click', handleClickOutside, true)
  }, [])

  /*const searchActions = useSearchActions();

  useEffect(() => {
    searchActions.setVertical('services');
  }, [])*/

  return (
    <div className={styles.siteSearch}>
      <div ref={searchBarRef} id="searchBarContainer">
        {/* searcher &&
          <SearchHeadlessProvider searcher={searcher}>
            <SearchBar 
              customCssClasses={{ 
                searchBarContainer: "SearchBar",
                inputElement: "SearchBar__input",
                verticalLink: "SearchBar__item"
              }}
              onSearch={handleSearch}
              placeholder="How can we help you?"
            />
            
            { results && results.length > 0 && 
              <div ref={resultsRef} className={styles.results} id="resultsContainer">
                <UniversalResults verticalConfigMap={verticalConfigMap} />
                {/*<VerticalResults CardComponent={StandardCard}/>
              </div>
            }
          </SearchHeadlessProvider>
        */}
      </div>
    </div>
  )
}
