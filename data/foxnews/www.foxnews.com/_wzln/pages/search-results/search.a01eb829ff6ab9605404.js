webpackJsonp([9],{"6wyM":function(e,t,n){"use strict";var s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"wrapper",attrs:{id:"wrapper"}},[t("region-header"),t("div",{staticClass:"page-content"},[this._m(0),t("region-post-content-renderer",{attrs:{layout:[]}})],1),t("region-footer")],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("main",{staticClass:"main-content"},[t("section",{staticClass:"search-results"},[t("header",{staticClass:"heading"},[t("h1",{staticClass:"title"},[this._v("Search")])]),t("div",{staticClass:"content ng-cloak"},[t("div",{attrs:{"ng-controller":"searchApp.search.searchController",id:"search-container"}},[t("div",{staticClass:"num-found",attrs:{"ng-model":"numFound"}},[t("span",{attrs:{"ng-bind":"numFound"}}),this._v(" results found for\n            ")]),t("form",{attrs:{"ng-submit":"newQuerySearch()"}},[t("input",{attrs:{type:"text","ng-model":"searchText",searchTextsize:"30"}})]),t("div",{attrs:{"advanced-search-directive":"","ng-controller":"searchApp.search.advancedSearchController"}}),t("div",{staticClass:"no-results ng-scope ng-pristine ng-valid",attrs:{"ng-model":"numFound","ng-if":"numFound === '0'"}},[t("p",[this._v("Please try the following:")]),t("ul",[t("li",[this._v("Check your spelling")]),t("li",[this._v("Try more general words")]),t("li",[this._v("Try using acronyms or using different keywords")]),t("li",[this._v("Try using fewer words. Your search might be too specific.")])])]),t("div",{staticClass:"search-directive",attrs:{"ng-repeat":"article in articles","ng-class":"article.adContent ? 'ad-content-item' : ''","search-directive":""}})]),t("div",{attrs:{"ng-controller":"searchApp.search.paginationController",id:"pagination-container","ng-class":"totalPagItems > 0 ? '' : 'hidden'","pagination-directive":""}})])])])}]};t.a=s},YNX5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={layout:"search-page",head:function(){return{meta:[{name:"dc.title",content:"Search | Fox News"},{name:"description",content:"Search for Articles and Videos on Fox News"},{name:"dc.description",content:"Search for Articles and Videos on Fox News"},{name:"dcterms.abstract",content:"Search for Articles and Videos on Fox News"},{name:"dc.publisher",content:"Fox News"},{name:"dc.creator",content:""},{name:"dc.date",content:""},{name:"dcterms.created",scheme:"dcterms.ISO8601",content:"2017-09-20 10:11:31 EDT"},{name:"dcterms.modified",scheme:"dcterms.ISO8601",content:"2017-09-20 10:11:31 EDT"},{name:"dc.source",content:"Fox News"},{name:"dc.identifier",scheme:"dcterms.URI",content:"23dcca8f-a148-411e-aba5-7fc9acd1e896"},{name:"dc.subject",content:""},{name:"keywords",content:""},{name:"prism.aggregationType",content:"page"},{name:"prism.genre",content:"searchPage"},{name:"dc.type",scheme:"dcterms.DCMIType",content:"Collection"},{name:"prism.channel",content:"fnc"},{name:"prism.section",content:"search-results"},{name:"prism.subsection1",content:""},{name:"prism.subsection2",content:""},{name:"prism.subsection3",content:""},{name:"prism.subsection4",content:""},{name:"twitter:site",content:"@foxnews"},{name:"dc.format",scheme:"dcterms.IMT",content:"text/html"},{name:"dc.language",scheme:"dcterms.RFC4646",content:"en-US"},{name:"pagetype",content:"search"},{name:"robots",content:"noarchive, noodp "},{property:"og:title",content:"Search | Fox News"},{property:"og:description",content:"Search for Articles and Videos on Fox News."},{property:"og:type",content:"article"},{property:"og:image",content:"https://"+this.$envVars.qa+"global.fncstatic.com/static/orion/styles/img/fox-news/og/og-fox-news.png"},{property:"og:url",content:"https://www.foxnews.com/person/personalities"},{property:"og:site_name",content:"Fox News"},{property:"fb:pages",content:"15704546335"},{property:"fb:app_id",content:"113186182048399"},{"http-equiv":"content-type",content:"text/html; charset=UTF-8"},{"http-equiv":"content-language",content:"en"},{"http-equiv":"x-dns-prefetch-control",content:"on"}]}}}},j5uT:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("YNX5"),r=n.n(s);for(var o in s)"default"!==o&&function(e){n.d(t,e,function(){return s[e]})}(o);var c=n("6wyM"),a=n("VU/8")(r.a,c.a,!1,null,null,null);t.default=a.exports}});