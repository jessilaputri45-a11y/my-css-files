// ---------------------------
// Ã°Å¸â€œÅ  SLOT GACOR CORE JS
// ---------------------------

// Google Tag Manager Statistics
(function(w,d,s,l,i){
  w[l]=w[l]||[];
  w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
  var f=d.getElementsByTagName(s)[0], j=d.createElement(s),
  dl=l!='dataLayer'?'&l='+l:'';
  j.async=true;
  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
  f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W8KL5Q5');

// Google Tag Manager Marketing / Pinterest
var gtmId='GTM-KGCDGPL6';
(function(w,d,s,l,i){
  w[l]=w[l]||[];
  w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
  var f=d.getElementsByTagName(s)[0], j=d.createElement(s),
  dl=l!='dataLayer'?'&l='+l:'';
  j.async=true;
  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
  f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer',gtmId);

window.addEventListener('load',function(){
  window.dataLayer.push({event:'pinterestReady'});
});

// Analytics normalization
(function(){
  function normalizeAttributeValue(value){
    if(value===undefined||value===null)return undefined;
    var normalizedValue;
    if(Array.isArray(value)){
      normalizedValue=value.map(normalizeAttributeValue).filter(Boolean).join(', ');
    }else{
      normalizedValue=value.toString().toLowerCase().trim().replace(/&amp;/g,'&').replace(/&#39;/g,"'").replace(/\s+/g,' ');
    }
    if(normalizedValue==='')return undefined;
    return normalizedValue;
  }
  
  var pageAttributes={
    app_name:normalizeAttributeValue('Marketplace'),
    app_env:normalizeAttributeValue('production'),
    app_version:normalizeAttributeValue('f7d8b3d494288b34cb00105ee5d230d68b0ccca7'),
    page_type:normalizeAttributeValue('item'),
    page_location:window.location.href,
    page_title:document.title,
    page_referrer:document.referrer,
    user_attributes:{user_id:normalizeAttributeValue('')}
  };

  dataLayer.push(pageAttributes);
  dataLayer.push({event:'analytics_ready',event_attributes:{event_type:'user',custom_timestamp:Date.now()}});
})();