/**
 * ctrip - ctrip hotel
 * @version v0.0.1
 * @link http://www.dcloud.io
 * @license MIT
 */
!function(e,t,n){var i=function(t){return"."+e.className(t)},l=e.IndexedList=e.Class.extend({init:function(e,t){var n=this;if(n.options=t||{},n.box=e,!n.box)throw"实例 IndexedList 时需要指定 element";n.createDom(),n.findElements(),n.caleLayout(),n.bindEvent()},createDom:function(){var e=this;e.el=e.el||{},e.el.styleForSearch=n.createElement("style"),(n.head||n.body).appendChild(e.el.styleForSearch)},findElements:function(){var e=this;e.el=e.el||{},e.el.search=e.box.querySelector(i("indexed-list-search")),e.el.searchInput=e.box.querySelector(i("indexed-list-search-input")),e.el.searchClear=e.box.querySelector(i("indexed-list-search")+" "+i("icon-clear")),e.el.bar=e.box.querySelector(i("indexed-list-bar")),e.el.barItems=[].slice.call(e.box.querySelectorAll(i("indexed-list-bar")+" a")),e.el.inner=e.box.querySelector(i("indexed-list-inner")),e.el.items=[].slice.call(e.box.querySelectorAll(i("indexed-list-item"))),e.el.liArray=[].slice.call(e.box.querySelectorAll(i("indexed-list-inner")+" li")),e.el.alert=e.box.querySelector(i("indexed-list-alert"))},caleLayout:function(){var e=this,t=e.box.offsetHeight-e.el.search.offsetHeight+"px";e.el.bar.style.height=t,e.el.inner.style.height=t;var n=(e.el.bar.offsetHeight-40)/e.el.barItems.length+"px";e.el.barItems.forEach(function(e){e.style.height=n,e.style.lineHeight=n})},scrollTo:function(e){var t=this,n=t.el.inner.querySelector('[data-group="'+e+'"]');!n||t.hiddenGroups&&t.hiddenGroups.indexOf(n)>-1||(t.el.inner.scrollTop=n.offsetTop)},bindBarEvent:function(){var e=this,t=null,i=function(i){t&&(t.classList.remove("active"),t=null),e.el.bar.classList.add("active");var l=i.changedTouches?i.changedTouches[0]:i;if(t=n.elementFromPoint(l.pageX,l.pageY)){var r=t.innerText;r&&1==r.length&&(t.classList.add("active"),e.el.alert.innerText=r,e.el.alert.classList.add("active"),e.scrollTo(r))}i.preventDefault()},l=function(n){e.el.alert.classList.remove("active"),e.el.bar.classList.remove("active"),t&&(t.classList.remove("active"),t=null)};e.el.bar.addEventListener("touchmove",function(e){i(e)},!1),e.el.bar.addEventListener("touchstart",function(e){i(e)},!1),n.body.addEventListener("touchend",function(e){l(e)},!1),n.body.addEventListener("touchcancel",function(e){l(e)},!1)},search:function(t){var n=this;t=(t||"").toLowerCase();var l=[],r=-1,a=0,s=n.el.liArray,o=s.length;n.hiddenGroups=[];var c=function(e,t){a>=e-r-(t?0:1)&&(l.push(i("indexed-list-inner li")+":nth-child("+(r+1)+")"),n.hiddenGroups.push(s[r])),r=e,a=0};s.forEach(function(n){var r=s.indexOf(n);if(n.classList.contains(e.className("indexed-list-group")))c(r,!1);else{var d=(n.innerText||"").toLowerCase(),h=(n.getAttribute("data-value")||"").toLowerCase(),u=(n.getAttribute("data-tags")||"").toLowerCase();t&&d.indexOf(t)<0&&h.indexOf(t)<0&&u.indexOf(t)<0&&(l.push(i("indexed-list-inner li")+":nth-child("+(r+1)+")"),a++),r>=o-1&&c(r,!0)}}),l.length>=o?n.el.inner.classList.add("empty"):l.length>0?(n.el.inner.classList.remove("empty"),n.el.styleForSearch.innerText=l.join(", ")+"{display:none;}"):(n.el.inner.classList.remove("empty"),n.el.styleForSearch.innerText="")},bindSearchEvent:function(){var t=this;t.el.searchInput.addEventListener("input",function(){var e=this.value;t.search(e)},!1),e(t.el.search).on("tap",i("icon-clear"),function(){t.search("")},!1)},bindEvent:function(){var e=this;e.bindBarEvent(),e.bindSearchEvent()}});e.fn.indexedList=function(e){return this.each(function(t,n){n.indexedList||(n.indexedList=new l(n,e))}),this[0]?this[0].indexedList:null}}(mui,window,document);