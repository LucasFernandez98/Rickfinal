(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{lnxp:function(t,e,s){"use strict";s.r(e),s.d(e,"EpisodesModule",(function(){return b}));var i=s("ofXK"),o=s("tyNb"),n=s("fXoL"),r=s("W1ca");function c(t,e){if(1&t&&(n.Kb(0,"div",1),n.Kb(1,"div",2),n.Kb(2,"h5",3),n.Yb(3),n.Jb(),n.Kb(4,"h6",4),n.Yb(5),n.Jb(),n.Kb(6,"p",5),n.Yb(7),n.Jb(),n.Jb(),n.Jb()),2&t){const t=e.$implicit;n.xb(3),n.Zb(t.name),n.xb(2),n.Zb(t.air_date),n.xb(2),n.ac("Episodio: ",t.episode,"")}}const a=[{path:"",component:(()=>{class t{constructor(t){this.listadoService=t,this.task=[]}ngOnInit(){this.getAllListado("episode")}getAllListado(t){this.listadoService.getAllListado(t).subscribe(t=>{this.task=t.results,console.log(this.task)})}}return t.\u0275fac=function(e){return new(e||t)(n.Hb(r.a))},t.\u0275cmp=n.Bb({type:t,selectors:[["app-episode"]],decls:1,vars:1,consts:[["class","card","style","width: 18rem;",4,"ngFor","ngForOf"],[1,"card",2,"width","18rem"],[1,"card-body"],[1,"card-title"],[1,"card-subtitle","mb-2","text-muted"],[1,"card-text"]],template:function(t,e){1&t&&n.Xb(0,c,8,3,"div",0),2&t&&n.Sb("ngForOf",e.task)},directives:[i.h],styles:[".card[_ngcontent-%COMP%]{display:inline-block;margin:10px;background-color:#d3d3d3;width:auto}"]}),t})()}];let d=(()=>{class t{}return t.\u0275mod=n.Fb({type:t}),t.\u0275inj=n.Eb({factory:function(e){return new(e||t)},imports:[[o.b.forChild(a)],o.b]}),t})(),b=(()=>{class t{}return t.\u0275mod=n.Fb({type:t}),t.\u0275inj=n.Eb({factory:function(e){return new(e||t)},imports:[[i.b,d]]}),t})()}}]);