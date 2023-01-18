import React from 'react'

const favicon = "https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/logos/favicon.ico";

export default function Seo(props, { children }) {
  let {
    title,
    description,
    canonical,
    alternate,
    alternate_lang,
    robots
  } = props;

  return (
    <>
      <link rel="icon" href={favicon} />
      <title>{title}</title>
      { description && <meta name="description" content={description} /> }
      { robots && <meta name="robots" content={robots} /> }
      { canonical && <link rel="canonical" href={canonical} /> }
      { alternate && <link rel="alternate" href={alternate} hrefLang={alternate_lang} /> }
      {children}
    </>
  ) 
}
