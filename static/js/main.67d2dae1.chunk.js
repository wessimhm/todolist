(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(2),o=a.n(l),c=(a(14),a(6)),m=a(3),s=a(4),i=a(5),u=a(8),d=a(7),f=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={element:"",items:[]},e.onChange=function(t){e.setState(Object(m.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault(),e.setState({element:"",items:[].concat(Object(c.a)(e.state.items),[{element:e.state.element}])})},e.deleteTodo=function(t){console.log(t);var a=e.state.items;a.splice(t),e.setState({items:a})},e.renderTodo=function(){return e.state.items.map((function(t,a){return r.a.createElement("div",{className:"card mb-3",key:a},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",null,t.element),r.a.createElement("i",{className:"fas fa-times",onClick:function(){return e.deleteTodo(a)},style:{cursor:"pointer",float:"right",color:"red"}})))}))},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"card my-3"},r.a.createElement("div",{className:"card-header"}," To-Do-List"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"elemet"},"Chose \xe0 faire"),r.a.createElement("input",{type:"text",className:"form-control form-control-lg",name:"element",onChange:this.onChange,value:this.state.element})),r.a.createElement("button",{className:"btn btn-primary btn-block"},"Ajouter une chose \xe0 faire")))),this.renderTodo())}}]),a}(n.Component);var b=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(f,null))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.67d2dae1.chunk.js.map