(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{tsj7:function(t,s,i){"use strict";i.r(s),i.d(s,"LocationsModule",(function(){return d}));var n=i("ofXK"),o=i("tyNb"),e=i("fXoL"),c=i("W1ca");function r(t,s){if(1&t&&(e.Kb(0,"div",1),e.Kb(1,"div",2),e.Kb(2,"h5",3),e.Yb(3),e.Jb(),e.Kb(4,"h6",4),e.Yb(5),e.Jb(),e.Kb(6,"p",5),e.Yb(7),e.Jb(),e.Jb(),e.Jb()),2&t){const t=s.$implicit;e.xb(3),e.Zb(t.name),e.xb(2),e.Zb(t.dimension),e.xb(2),e.ac("Tipo: ",t.type,"")}}const a=[{path:"",component:(()=>{class t{constructor(t){this.listadoService=t,this.updateTask=null,this.task=[]}ngOnInit(){this.getAllListado("location")}getAllListado(t){this.listadoService.getAllListado(t).subscribe(t=>{this.task=t.results,console.log(this.task)})}toggleUpdateTask(t){this.updateTask=t}}return t.\u0275fac=function(s){return new(s||t)(e.Hb(c.a))},t.\u0275cmp=e.Bb({type:t,selectors:[["app-location"]],decls:4,vars:1,consts:[["class","card","style","width: 18rem;",4,"ngFor","ngForOf"],[1,"card",2,"width","18rem"],[1,"card-body"],[1,"card-title"],[1,"card-subtitle","mb-2","text-muted"],[1,"card-text"]],template:function(t,s){1&t&&(e.Xb(0,r,8,3,"div",0),e.Ib(1,"div"),e.Ib(2,"br"),e.Ib(3,"br")),2&t&&e.Sb("ngForOf",s.task)},directives:[n.h],styles:[".card[_ngcontent-%COMP%]{display:inline-block;margin:10px;background-color:#d3d3d3;width:auto}"]}),t})()}];let b=(()=>{class t{}return t.\u0275mod=e.Fb({type:t}),t.\u0275inj=e.Eb({factory:function(s){return new(s||t)},imports:[[o.b.forChild(a)],o.b]}),t})(),d=(()=>{class t{}return t.\u0275mod=e.Fb({type:t}),t.\u0275inj=e.Eb({factory:function(s){return new(s||t)},imports:[[n.b,b]]}),t})()}}]);