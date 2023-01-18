import React from 'react';

import { OverflowProvider } from './src/providers/OverflowProvider';
import { ModalProvider } from './src/providers/ModalProvider';

export const wrapRootElement = ({ element }) => (
  <ModalProvider>
    <OverflowProvider>
      {element}
    </OverflowProvider>
  </ModalProvider>
)

const devHeadComponents = [
  <script 
    key="dev-head-0"
    type="text/javascript"
    src="//go1.teladochealth.com/js/forms2/js/forms2.min.js"
    defer={true}
    async={true}
  />,
  <script type="text/javascript"
    key="dev-head-1"
    dangerouslySetInnerHTML={{
      __html:`
        (function(window, document, dataLayerName, id) {
        function stgCreateCookie(a,b,c){var d="";if(c){var e=new Date;e.setTime(e.getTime()+24*c*60*60*1e3),d="; expires="+e.toUTCString()}document.cookie=a+"="+b+d+"; path=/"}
        var isStgDebug=(window.location.href.match("stg_debug")||document.cookie.match("stg_debug"))&&!window.location.href.match("stg_disable_debug");stgCreateCookie("stg_debug",isStgDebug?1:"",isStgDebug?14:-1);
        var qP=[];dataLayerName!=="dataLayer"&&qP.push("data_layer_name="+dataLayerName),isStgDebug&&qP.push("stg_debug");var qPString=qP.length>0?("?"+qP.join("&")):"";
        document.write('<script src="//teladoc-private.piwik.pro/containers/'+id+'.sync.js' + qPString + '"></' + 'script>');
        })(window, document, 'dataLayer', 'bea0e774-1797-4c8a-81c2-0918c4bb0f04');
      `
    }}
  />
]

const devPreBodyComponents = [
  <script type="text/javascript"
    key="dev-pre-body-0"
    dangerouslySetInnerHTML={{
      __html:`
        (function(window, document, dataLayerName, id) {
        window[dataLayerName]=window[dataLayerName]||[],window[dataLayerName].push({start:(new Date).getTime(),event:"stg.start"});var scripts=document.getElementsByTagName('script')[0],tags=document.createElement('script');
        function stgCreateCookie(a,b,c){var d="";if(c){var e=new Date;e.setTime(e.getTime()+24*c*60*60*1e3),d="; expires="+e.toUTCString()}document.cookie=a+"="+b+d+"; path=/"}
        var isStgDebug=(window.location.href.match("stg_debug")||document.cookie.match("stg_debug"))&&!window.location.href.match("stg_disable_debug");stgCreateCookie("stg_debug",isStgDebug?1:"",isStgDebug?14:-1);
        var qP=[];dataLayerName!=="dataLayer"&&qP.push("data_layer_name="+dataLayerName),isStgDebug&&qP.push("stg_debug");var qPString=qP.length>0?("?"+qP.join("&")):"";
        tags.async=!0,tags.src="//teladoc-private.piwik.pro/containers/"+id+".js"+qPString,scripts.parentNode.insertBefore(tags,scripts);
        !function(a,n,i){a[n]=a[n]||{};for(var c=0;c<i.length;c++)!function(i){a[n][i]=a[n][i]||{},a[n][i].api=a[n][i].api||function(){var a=[].slice.call(arguments,0);"string"==typeof a[0]&&window[dataLayerName].push({event:n+"."+i+":"+a[0],parameters:[].slice.call(arguments,1)})}}(i[c])}(window,"ppms",["tm","cm"]);
        })(window, document, 'dataLayer', 'bea0e774-1797-4c8a-81c2-0918c4bb0f04');
      `
    }} 
  />,
  <noscript
    key="dev-pre-body-1"
    dangerouslySetInnerHTML={{
      __html: `
        <iframe src="//teladoc-private.piwik.pro/containers/bea0e774-1797-4c8a-81c2-0918c4bb0f04/noscript.html" height="0" width="0" style="display:none;visibility:hidden"></iframe>
      `
    }}
  />
]

const prodHeadComponents = [
  <script 
    key="prod-head-0"
    type="text/javascript"
    src="//go1.teladochealth.com/js/forms2/js/forms2.min.js"
    defer={true}
    async={true}
  />,
  <script type="text/javascript"
    key="prod-head-1"
    dangerouslySetInnerHTML={{
      __html:`
        (function(window, document, dataLayerName, id) {
        function stgCreateCookie(a,b,c){var d="";if(c){var e=new Date;e.setTime(e.getTime()+24*c*60*60*1e3),d="; expires="+e.toUTCString()}document.cookie=a+"="+b+d+"; path=/"}
        var isStgDebug=(window.location.href.match("stg_debug")||document.cookie.match("stg_debug"))&&!window.location.href.match("stg_disable_debug");stgCreateCookie("stg_debug",isStgDebug?1:"",isStgDebug?14:-1);
        var qP=[];dataLayerName!=="dataLayer"&&qP.push("data_layer_name="+dataLayerName),isStgDebug&&qP.push("stg_debug");var qPString=qP.length>0?("?"+qP.join("&")):"";
        document.write('<script src="//teladoc-private.piwik.pro/containers/'+id+'.sync.js' + qPString + '"></' + 'script>');
        })(window, document, 'dataLayer', 'f89f85b1-7a6b-482b-9cc0-c163652586bb');
      `
    }}
  />
]

const prodPreBodyComponents = [
  <script type="text/javascript" 
    key="prod-pre-body-0"
    dangerouslySetInnerHTML={{
      __html:`
      (function(window, document, dataLayerName, id) {
        window[dataLayerName]=window[dataLayerName]||[],window[dataLayerName].push({start:(new Date).getTime(),event:"stg.start"});var scripts=document.getElementsByTagName('script')[0],tags=document.createElement('script');
        function stgCreateCookie(a,b,c){var d="";if(c){var e=new Date;e.setTime(e.getTime()+24*c*60*60*1e3),d="; expires="+e.toUTCString()}document.cookie=a+"="+b+d+"; path=/"}
        var isStgDebug=(window.location.href.match("stg_debug")||document.cookie.match("stg_debug"))&&!window.location.href.match("stg_disable_debug");stgCreateCookie("stg_debug",isStgDebug?1:"",isStgDebug?14:-1);
        var qP=[];dataLayerName!=="dataLayer"&&qP.push("data_layer_name="+dataLayerName),isStgDebug&&qP.push("stg_debug");var qPString=qP.length>0?("?"+qP.join("&")):"";
        tags.async=!0,tags.src="//teladoc-private.piwik.pro/containers/"+id+".js"+qPString,scripts.parentNode.insertBefore(tags,scripts);
        !function(a,n,i){a[n]=a[n]||{};for(var c=0;c<i.length;c++)!function(i){a[n][i]=a[n][i]||{},a[n][i].api=a[n][i].api||function(){var a=[].slice.call(arguments,0);"string"==typeof a[0]&&window[dataLayerName].push({event:n+"."+i+":"+a[0],parameters:[].slice.call(arguments,1)})}}(i[c])}(window,"ppms",["tm","cm"]);
        })(window, document, 'dataLayer', 'f89f85b1-7a6b-482b-9cc0-c163652586bb');
      `
    }}
  />,
  <noscript 
    key="prod-pre-body-1"
    dangerouslySetInnerHTML={{
      __html:`
        <iframe src="//teladoc-private.piwik.pro/containers/f89f85b1-7a6b-482b-9cc0-c163652586bb/noscript.html" height="0" width="0" style="display:none;visibility:hidden"></iframe>
      `
    }}
  />
]

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents, setPreBodyComponents }) => {
  setHtmlAttributes({ lang: `en` });
  setHeadComponents(process.env.NODE_ENV === "development" ? devHeadComponents : prodHeadComponents);
  setPreBodyComponents(process.env.NODE_ENV === "development" ? devPreBodyComponents : prodPreBodyComponents)
}
