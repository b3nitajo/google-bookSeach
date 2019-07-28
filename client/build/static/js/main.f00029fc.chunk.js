(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(57)},48:function(e,t,a){},49:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(21),l=a.n(o),c=a(60),i=a(61),s=a(62),u=a(6),m=a(7),h=a(8),d=a(11),f=a(9),g=a(12);var v=function(e){var t=e.children;return r.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},t)},p=a(4),E=a.n(p),b={getBooks:function(){return E.a.get("/api/books")},getBook:function(e){return E.a.get("/api/books/"+e)},deleteBook:function(e){return E.a.delete("/api/books/"+e)},saveBook:function(e){return E.a.post("/api/books",e)}};a(48);var k=function(e){return r.a.createElement("span",Object.assign({className:"delete-btn"},e,{role:"button",tabIndex:"0"}),"\u2717")};function B(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function w(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function N(e){var t=e.size,a=e.children;return r.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)}a(49);function C(e){var t=e.children;return r.a.createElement("div",{className:"list-overflow-container"},r.a.createElement("ul",{className:"list-group"},t))}function y(e){var t=e.children;return r.a.createElement("li",{className:"list-group-item"},t)}function I(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("input",Object.assign({className:"form-control"},e)))}function j(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",Object.assign({className:"form-control",rows:"20"},e)))}function S(e){return r.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}var O=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={books:[],title:"",author:"",description:"",image:"",link:""},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(u.a)({},n,r))},a.handleFormSubmit=function(e){if(e.preventDefault(),a.state.title&&a.state.author){var t={title:a.state.title,author:a.state.author,description:a.state.description,image:a.state.image,link:a.state.link};b.saveBook(t).then(function(e){return a.loadBooks()}).catch(function(e){return console.log(e)})}},a.loadBooks=function(){b.getBooks().then(function(e){return a.setState({books:e.data})}).catch(function(e){return console.log(e)})},a.deleteBook=function(e){b.deleteBook(e).then(function(e){return a.loadBooks()}).catch(function(e){return console.log(e)}),alert("Book Deleted")},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){var e=this;return r.a.createElement(B,{fluid:!0},r.a.createElement(w,null,r.a.createElement(N,{size:"md-6"},r.a.createElement(v,null,r.a.createElement("h1",null,"Custom Read List Add"),r.a.createElement("h3",null,"(add custom read or ",r.a.createElement("a",{href:"/search"},"search Google Books"),")")),r.a.createElement("form",null,r.a.createElement(I,{value:this.state.title,onChange:this.handleInputChange,name:"title",placeholder:"Title*"}),r.a.createElement(I,{value:this.state.author,onChange:this.handleInputChange,name:"author",placeholder:"Author*"}),r.a.createElement(j,{value:this.state.description,onChange:this.handleInputChange,name:"description",placeholder:"Description"}),r.a.createElement(I,{value:this.state.image,onChange:this.handleInputChange,name:"image",placeholder:"Enter image URL http://bookcover.jpg"}),r.a.createElement(I,{value:this.state.link,onChange:this.handleInputChange,name:"link",placeholder:"http://booklink.com"}),r.a.createElement(S,{onClick:this.handleFormSubmit},"Submit Book"))),r.a.createElement(N,{size:"md-6 sm-12"},r.a.createElement(v,null,r.a.createElement("h1",null,"Reading List")),this.state.books.length?r.a.createElement(C,null,this.state.books.map(function(t){return r.a.createElement(y,{key:t._id},r.a.createElement("strong",null,t.title),r.a.createElement("br",null),"by ",t.author,r.a.createElement("br",null),"Description ",t.description,r.a.createElement("br",null),r.a.createElement("a",{href:t.link,target:"blank"},"Click Here for Book Source"),r.a.createElement("br",null),r.a.createElement("img",{src:t.image,alt:"Book"}),r.a.createElement(k,{onClick:function(){return e.deleteBook(t._id)}}))})):r.a.createElement("h3",null,"No Results to Display"))))}}]),t}(n.Component),x=a(14),D=a.n(x),F=a(22);var L=function(e){return r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"search"},"Search:"),r.a.createElement("input",{onChange:e.handleInputChange,value:e.value,name:"search",type:"text",className:"form-control",placeholder:"Search for a Book",id:"search"}),r.a.createElement("button",{onClick:e.handleFormSubmit,className:"btn btn-primary mt-3"},"Search")))};a(52);function R(e){var t=e.children;return r.a.createElement("div",{className:"list-overflow-container"},r.a.createElement("ul",{className:"list-group"},t))}function z(e){var t=e.children;return r.a.createElement("li",{className:"list-group-item"},t)}var A={search:function(e){return E.a.get("https://www.googleapis.com/books/v1/volumes?q="+e)},save:function(e){return E.a.get("https://www.googleapis.com/books/v1/volumes/"+e)}};a(53);var G=function(e){return r.a.createElement("button",Object.assign({className:"save-btn"},e,{tabIndex:"0"}),"Save")},J=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={googleBooks:{},search:"",title:"",author:"",description:"",image:"",link:""},a.searchBooks=function(e){A.search(e).then(function(e){var t=e.data.items;console.log(t),a.setState({googleBooks:t})}).catch(function(e){return console.log(e)})},a.handleInputChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(u.a)({},t,n))},a.handleFormSubmit=function(e){e.preventDefault(),a.searchBooks(a.state.search)},a.saveBook=function(e){A.save(e).then(function(e){function t(){return(t=Object(F.a)(D.a.mark(function t(){var a,n;return D.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.data;case 2:a=t.sent,n={title:a.volumeInfo.title,author:a.volumeInfo.authors.join(", "),description:a.volumeInfo.description,image:a.volumeInfo.imageLinks.thumbnail,link:a.volumeInfo.previewLink},console.log(e),console.log(a),console.log(n),b.saveBook(n);case 8:case"end":return t.stop()}},t)}))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}).catch(function(e){return console.log(e)})},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.searchBooks("art")}},{key:"render",value:function(){var e=this;return r.a.createElement(B,{fluid:!0},r.a.createElement(w,null,r.a.createElement(N,{size:"md-6"},r.a.createElement(v,null,r.a.createElement("h1",null,"Search Google Books")),r.a.createElement(L,{search:this.state.search,handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange})),r.a.createElement(N,{size:"md-6 sm-12"},r.a.createElement(v,null,r.a.createElement("h1",null,"Search Results"),r.a.createElement("h3",null,"(Select Save to add Book details to ",r.a.createElement("a",{href:"/save"},"Reading List"),")")),this.state.googleBooks.length?r.a.createElement(R,null,this.state.googleBooks.map(function(t){return r.a.createElement(z,{key:t.id},r.a.createElement("strong",null,t.volumeInfo.title,r.a.createElement("br",null)),"by ",t.volumeInfo.authors,r.a.createElement("br",null),r.a.createElement("strong",null,"Description: ",r.a.createElement("nbsp",null)),t.volumeInfo.description,r.a.createElement("br",null),r.a.createElement("img",{src:t.volumeInfo.imageLinks.thumbnail,alt:"book"}),r.a.createElement("br",null),r.a.createElement("a",{href:t.volumeInfo.previewLink,target:"blank"},"View Book Details"),r.a.createElement(G,{onClick:function(){return e.saveBook(t.id)}}))})):r.a.createElement("h3",null,"No Results to Display"))))}}]),t}(n.Component);var M=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},r.a.createElement("a",{className:"navbar-brand",href:"/"}),r.a.createElement("a",{className:"navbar-brand",href:"/search"},"Search"),r.a.createElement("a",{className:"navbar-brand",href:"/save"},"Save")))};var T=function(){return r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement(M,null),r.a.createElement(i.a,null,r.a.createElement(s.a,{exact:!0,path:"/",component:J}),r.a.createElement(s.a,{exact:!0,path:"/search",component:J}),r.a.createElement(s.a,{path:"/save",component:O}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.f00029fc.chunk.js.map