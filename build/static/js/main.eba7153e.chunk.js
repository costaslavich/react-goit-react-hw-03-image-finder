(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports={overlay:"Modal_overlay__2TWDB",modal:"Modal_modal__2kp50"}},11:function(e,t,a){e.exports={gallery:"Gallery_gallery__JQRhh",button:"Gallery_button__2KSAs",gallery_item:"Gallery_gallery_item__eaZuM",fullscreen_button:"Gallery_fullscreen_button__46eQE"}},12:function(e,t,a){e.exports={app:"styles_app__f2Ltl",button:"styles_button__lOkjd"}},2:function(e,t,a){e.exports={photo_card:"PhotoCard_photo_card__3JFY1",stats:"PhotoCard_stats__ujLnQ",stats_item:"PhotoCard_stats_item__3rTvV",fullscreen_button:"PhotoCard_fullscreen_button__3-2xc",gallery_item:"PhotoCard_gallery_item__1pazb"}},24:function(e,t,a){e.exports={search_form:"SearchForm_search_form__3aFAg"}},26:function(e,t,a){e.exports=a(57)},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),l=a(13),s=a(3),i=a(4),u=a(6),m=a(5),p=a(7),d=a(23),h=a.n(d),f=a(10),g=a.n(f),_=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).backdropRef=Object(n.createRef)(),a.handleKeyPress=function(e){"Escape"===e.code&&a.props.onClose()},a.handleBackDropClick=function(e){var t=a.backdropRef.current;t&&e.target!==t||a.props.onClose()},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){var e=this.props.largeImage;return r.a.createElement("div",{className:g.a.overlay,ref:this.backdropRef,onClickCapture:this.handleBackDropClick,role:"img",onKeyDownCapture:this.handleKeyPress},r.a.createElement("div",{className:g.a.modal},r.a.createElement("img",{src:e,alt:"random-img"})))}}]),t}(n.Component);_.defaultProps={largeImage:""};var b=a(24),y=a.n(b),v=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={query:""},a.handleChange=function(e){a.setState({query:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.props.onSubmit(a.state.query),a.setState({query:""})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.query;return r.a.createElement("form",{className:y.a.search_form,onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",autoComplete:"off",placeholder:"Search images...",onChange:this.handleChange,value:e}))}}]),t}(n.Component),E=function(e){var t=e.text;return r.a.createElement("h1",null," WHOOPS, something went wrong !!! ",t)},k=a(2),w=a.n(k),N=function(e){var t=e.webformatURL,a=e.likes,n=e.views,o=e.comments,c=e.downloads,l=e.openModal;return r.a.createElement("div",{className:w.a.photo_card},r.a.createElement("img",{src:t,alt:"random-img"}),r.a.createElement("div",{className:w.a.stats},r.a.createElement("p",{className:w.a.stats_item},r.a.createElement("i",{className:"material-icons"},"thumb_up"),a),r.a.createElement("p",{className:w.a.stats_item},r.a.createElement("i",{className:"material-icons"},"visibility"),n),r.a.createElement("p",{className:w.a.stats_item},r.a.createElement("i",{className:"material-icons"},"comment"),o),r.a.createElement("p",{className:w.a.stats_item},r.a.createElement("i",{className:"material-icons"},"cloud_download"),c)),r.a.createElement("button",{type:"button",className:w.a.fullscreen_button,onClick:l},r.a.createElement("i",{className:"material-icons"},"zoom_out_map")))};N.defaultProps={comments:129};var O=N,C=a(11),S=a.n(C),j=function(e){var t=e.pictures,a=e.openModal;return r.a.createElement("div",null,r.a.createElement("ul",{className:S.a.gallery},t.map(function(e){return r.a.createElement("li",{key:e.id,className:S.a.gallery_item},r.a.createElement(O,Object.assign({},e,{openModal:function(){return a(e.largeImageURL)}})))})))},L=a(25),M=a.n(L),P=function(e,t){return M.a.get("".concat("https://pixabay.com/api/?image_type=photo&orientation=horizontal&per_page=12&key=12576439-4d1f98aea9d85243038051cc1&q="+e,"&page=").concat(t))},R=a(12),x=a.n(R),I=function(e){return e.map(function(e){return{id:e.id,webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,likes:e.likes,views:e.views,downloads:e.downloads}})},U=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={pictures:[],query:"",pageNumber:1,isLoading:!1,error:!1,isModalOpen:!1,largeImageURL:null},a.onSearchForm=function(e){a.setState({query:e,pictures:[]},function(){a.fetchPicture(e)})},a.fetchPicture=function(e){a.setState({isLoading:!0}),P(e,1).then(function(e){var t=e.data;a.setState(function(e){return{pictures:t.hits,pageNumber:e.pageNumber+1}})}).catch(function(e){return a.setState({error:e})}).finally(function(){return a.setState({isLoading:!1})})},a.handleClickMorePicture=function(){var e=a.state,t=e.query,n=e.pageNumber;P(t,n).then(function(e){var n=e.data;a.setState(function(e){return{query:t,pictures:[].concat(Object(l.a)(e.pictures),Object(l.a)(I(n.hits))),pageNumber:e.pageNumber+1}})}).catch(function(e){return a.setState({error:e})})},a.openModal=function(e){a.setState({isModalOpen:!0,largeImageURL:e})},a.closeModal=function(){a.setState({isModalOpen:!1})},a.handleChangeImg=function(e){a.setState({largeImageURL:e})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.fetchPicture({query:"",pageNumber:1})}},{key:"componentDidUpdate",value:function(e){var t=this.state.pictures;e.pictures!==t&&window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.pictures,n=e.isModalOpen,o=e.isLoading,c=e.largeImageURL;return r.a.createElement("div",{className:x.a.app},r.a.createElement(v,{onSubmit:this.onSearchForm}),o&&r.a.createElement(h.a,{height:762,throttle:250,debounce:!1,offsetVertical:300},r.a.createElement("img",{src:"http://apod.nasa.gov/apod/image/1502/ToadSky_Lane_1080_annotated.jpg",alt:"Lazy Load Example"})),a.length>0&&r.a.createElement(j,{pictures:a,openModal:this.openModal}),a.length>0&&r.a.createElement("button",{type:"button",className:x.a.button,onClick:this.handleClickMorePicture},"Load more"),n&&r.a.createElement(_,{onClose:this.closeModal,largeImage:c}),t&&r.a.createElement(E,{text:t.message}))}}]),t}(n.Component);c.a.render(r.a.createElement(U,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.eba7153e.chunk.js.map