(this.webpackJsonpscrumguide=this.webpackJsonpscrumguide||[]).push([[0],{29:function(e,a,r){},30:function(e,a,r){"use strict";r.r(a);r(1);var s=r(10),t=r.n(s),i=r(16),c=r(4),n=r(9),o=r(0),d=function(e){var a=e.history,r=e.image,s=e.title,t=e.description,i=e.route;return Object(o.jsxs)("div",{className:"card card-main",onClick:function(){a.push(i)},children:[Object(o.jsx)("div",{className:"card-image-container",children:Object(o.jsx)("img",{className:"card-img-top",src:r,alt:r})}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("h5",{className:"card-title center",children:s}),Object(o.jsx)("hr",{}),Object(o.jsx)("p",{className:"card-text",children:t})]})]})},l=function(e){var a=e.history;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"jumbotron jumbotron-primary",children:[Object(o.jsx)("h2",{className:"display-5",children:"Scrum"}),Object(o.jsx)("p",{className:"lead",children:"Marco de trabajo liviano cuyo prop\xf3sito es desarrollar, mantener y entregar productos complejos."}),Object(o.jsxs)("p",{children:[" ",Object(o.jsx)("strong",{children:"Valores: "}),"Compromiso, Coraje, Foco, Apertura, Respeto "]}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsxs)("div",{className:"col-lg-6",children:[Object(o.jsxs)("div",{className:"text-center",children:[Object(o.jsxs)("strong",{children:[" ",Object(o.jsx)("i",{className:"fa fa-list","aria-hidden":"true"})," Usos"]}),Object(o.jsx)("hr",{})]}),Object(o.jsxs)("ol",{children:[Object(o.jsx)("li",{children:"Identificar mercados viables."}),Object(o.jsx)("li",{children:"Desarrollar productos."}),Object(o.jsx)("li",{children:"Liberar productos y mejorarlos tantas veces como se pueda en un d\xeda."}),Object(o.jsx)("li",{children:"Desarrollar y mantener ambientes en la nube."}),Object(o.jsx)("li",{children:"Mantener y renovar productos."})]})]}),Object(o.jsxs)("div",{className:"col-lg-6",children:[Object(o.jsxs)("div",{className:"text-center",children:[Object(o.jsxs)("strong",{children:[" ",Object(o.jsx)("i",{className:"fa fa-list","aria-hidden":"true"})," Principios"]}),Object(o.jsx)("hr",{})]}),Object(o.jsxs)("ol",{children:[Object(o.jsxs)("li",{children:[" ",Object(o.jsx)("strong",{children:"Transparencia: "}),"Todos los miembros del equipo tienen un entendimiento en com\xfan. "]}),Object(o.jsxs)("li",{children:[" ",Object(o.jsx)("strong",{children:"Inspecci\xf3n: "}),"Constante inspecci\xf3n a los artefactos. "]}),Object(o.jsxs)("li",{children:[" ",Object(o.jsx)("strong",{children:"Adaptaci\xf3n: "}),"Si como producto de la inspecci\xf3n se descrubre que existen desv\xedos en los valores aceptados se debe hacer correciones sobre el proceso para obtener siempre un producto aceptable. "]})]})]})]})]}),Object(o.jsx)("hr",{}),Object(o.jsxs)("div",{className:"card-deck",children:[Object(o.jsx)(d,{title:"Equipo",route:"/team",history:a,image:"assets/img/team.png",description:"Grupo de profesionales sin jerarqu\xedas ni sub-equipos. Buscan un objetivo en com\xfan."}),Object(o.jsx)(d,{title:"Eventos",image:"assets/img/clock.png",route:"/events",history:a,description:"Oportunidad para inspeccionar y adaptar los artefactos de Scrum."}),Object(o.jsx)(d,{title:"Artefactos",image:"assets/img/document.png",route:"/artifacts",history:a,description:"Representan valor o trabajo y permiten garantizar la transparencia."})]})]})},j=function(e){var a=e.history;return Object(o.jsx)("div",{className:"text-left mb-2",children:Object(o.jsx)("button",{className:"btn btn-danger btn-sm",onClick:function(){return a.goBack()},children:Object(o.jsx)("i",{className:"fa fa-arrow-circle-o-left","aria-hidden":"true",children:" Volver"})})})},u=function(e){var a=e.name,r=e.description,s=e.functions;return Object(o.jsxs)("div",{className:"card card-secondary mb-3",children:[Object(o.jsx)("div",{className:"card-header",children:a}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("p",{children:r}),Object(o.jsx)("hr",{}),Object(o.jsx)("div",{className:"text-center",children:Object(o.jsxs)("strong",{children:[" ",Object(o.jsx)("i",{className:"fa fa-check","aria-hidden":"true"})," Funciones"]})}),Object(o.jsx)("ul",{children:s.map((function(e){return Object(o.jsx)("li",{children:e},e.substring(0,10))}))})]})]})},m=function(e){var a=e.title,r=e.description,s=e.extra,t=e.icon,i=e.extraicon,c="fa ".concat(t),n="fa ".concat(i);return Object(o.jsxs)("div",{className:"mb-2",children:[Object(o.jsxs)("div",{className:"center",children:[Object(o.jsx)("h2",{children:a}),Object(o.jsx)("hr",{})]}),Object(o.jsxs)("div",{className:"mr-5 ml-5",children:[Object(o.jsxs)("p",{className:"text-secondary",children:[Object(o.jsx)("i",{className:c,"aria-hidden":"true"})," ",r]}),s&&Object(o.jsxs)("p",{className:"text-secondary",children:[Object(o.jsx)("i",{className:n,"aria-hidden":"true"})," ",s]})]})]})},p=function(e){var a=e.history;return Object(o.jsxs)(n.FadeTransform,{in:!0,transformProps:{enterTransform:"translateX(0px)"},children:[Object(o.jsx)(j,{history:a}),Object(o.jsx)(m,{title:"Equipo Scrum",description:"Grupo de profesionales auto organizados y multidisciplinarios.",icon:"fa-users",extra:"Su misi\xf3n es la entrega iterativa e incremental del producto, esto con el objetivo de obtener el m\xe1ximo feedback posible y que al final de cada Sprint haya una versi\xf3n potencialmente funcional.",extraicon:"fa-lightbulb-o"}),Object(o.jsxs)("div",{className:"card-deck",children:[Object(o.jsx)(u,{name:"Product Owner",description:"Es una \xfanica persona cuyo objetivo principal es maximizar el valor de lo que el equipo de desarrollo entrega.",functions:["\xdanico responsable de gestionar el Product Backlog (puede delegar funciones sobre este, pero sigue siendo el responsable).","Expresar claramentes historias de usuario, criterios de aceptaci\xf3n, etc."]}),Object(o.jsx)(u,{name:"Development Team",description:"Equipo auto organizado y multifuncional de no menos de 3 personas. No existen jerarqu\xedas ni subequipos aunque haya algunos miembros especializados.",functions:["Entregar un producto funcional al final de cada iteraci\xf3n (Sprint).","Organizarse para cumplir con el Sprint Goal."]}),Object(o.jsx)(u,{name:"Scrum Master",description:"Una persona encargada de ayudar a las relaciones entre el equipo de desarrollo y externos.",functions:["Con el Producto Owner: Asegurar que el Producto Owner tenga en claro c\xf3mo ordenar de manera correcta las historias de usuario.","Con el equipo de desarrollo: Asegurar que el equipo entienda los objetivos, el alcance, el dominio del proyecto, eliminar impedimentos, facilitar eventos.","Con el resto de la organizaci\xf3n: Ayudar a la adaptaci\xf3n de Scrum, motivar cambios, colaborar con otros Scrum Master."]})]})]})},b=function(e){var a=e.name,r=e.duration,s=e.participants,t=e.description,i=e.inputs,c=e.outputs;return Object(o.jsx)("div",{className:"col",children:Object(o.jsxs)("div",{className:"card card-secondary mb-5",style:{height:"100%"},children:[Object(o.jsx)("div",{className:"card-header",children:a}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("p",{children:t}),Object(o.jsx)("table",{className:"table",children:Object(o.jsxs)("tbody",{children:[Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:Object(o.jsxs)("strong",{children:[Object(o.jsx)("i",{className:"fa fa-clock-o","aria-hidden":"true"})," Duraci\xf3n: "]})}),Object(o.jsx)("td",{children:r})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:Object(o.jsxs)("strong",{children:[Object(o.jsx)("i",{className:"fa fa-users","aria-hidden":"true"})," Participantes: "]})}),Object(o.jsx)("td",{children:s})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:Object(o.jsxs)("strong",{children:[Object(o.jsx)("i",{className:"fa fa-keyboard-o","aria-hidden":"true"})," Entradas: "]})}),Object(o.jsx)("td",{children:i})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:Object(o.jsxs)("strong",{children:[Object(o.jsx)("i",{className:"fa fa-outdent","aria-hidden":"true"})," Salidas: "]})}),Object(o.jsx)("td",{children:c})]})]})})]})]})})},x=function(e){var a=e.history;return Object(o.jsxs)(n.FadeTransform,{in:!0,transformProps:{enterTransform:"translateX(0px)"},children:[Object(o.jsx)(j,{history:a}),Object(o.jsx)(m,{title:"Eventos Scrum",description:"Son bloques de tiempo (time-box), lo que implica que tienen un l\xedmite. Pueden durar menos del tiempo establecido.",icon:"fa-clock-o",extra:"Si falta alguno en el proceso, se carece de transparencia.",extraicon:"fa-exclamation"}),Object(o.jsxs)("div",{className:"jumbotron jumbotron-secondary",children:[Object(o.jsx)("h2",{className:"display-5",children:"Sprint"}),Object(o.jsx)("p",{className:"lead",children:"Es el coraz\xf3n de Scrum, que representa una iteraci\xf3n cuya duraci\xf3n m\xe1xima es de un mes. Se entrega un producto utilizable y potencialmente desplegable."}),Object(o.jsxs)("p",{children:[" ",Object(o.jsx)("i",{className:"fa fa-play-circle","aria-hidden":"true"})," Cada Sprint empieza inmediatamente despu\xe9s a la finalizaci\xf3n del anterior. "]}),Object(o.jsxs)("p",{children:[" ",Object(o.jsx)("i",{className:"fa fa-check","aria-hidden":"true"})," Todo Sprint tiene un Sprint Goal, el cual es una meta establecida a cumplir en cada iteraci\xf3n. "]}),Object(o.jsxs)("p",{children:[" ",Object(o.jsx)("i",{className:"fa fa-exclamation","aria-hidden":"true"})," Un Sprint solo puede cancelarse si el Sprint Goal queda obsoleto y solo el Product Owner puede darlo por terminado. "]})]}),Object(o.jsxs)("div",{className:"row row-cols-1 row-cols-md-2 g-4",children:[Object(o.jsx)(b,{name:"1er Evento: Sprint Planning",description:"Un evento que permite responder al final del mismo: \xbfQu\xe9 se va entregar como incremento? \xbfC\xf3mo se va llegar a ese objetivo?",duration:"M\xe1ximo de 8 horas para Sprints de 1 mes de duraci\xf3n (la mitad para un sprint de 2 semanas).",participants:"Todo el equipo Scrum",inputs:"Lista del producto, \xfaltimo incremento, capacidad proyectada del equipo de desarrollo para el Sprint, rendimiento pasado del mismo.",outputs:"-"}),Object(o.jsx)(b,{name:"2do Evento: Daily Scrum",description:"Un evento destinado para el equipo de desarrollo, ya que ellos establecen el formato del mismo. Permite responder: \xbfQu\xe9 se hizo ayer? \xbfQu\xe9 se har\xe1 hoy? \xbfHay alg\xfan impedimento?. Es una inspecci\xf3n del avance contra el objetivo.",duration:"M\xe1ximo de 15 minutos, a diario, en la misma hora y mismo lugar.",participants:"El equipo de desarrollo. Si participan externos el Scrum Master debe asegurarse que no los interrumpan.",inputs:"-",outputs:"-"}),Object(o.jsx)(b,{name:"3er Evento: Sprint Review",description:"Permite inspeccionar lo que se hizo durante el Sprint, y responder y comunicar: \xbfQu\xe9 problemas aparecieron y c\xf3mo se resolvieron? \xbfEstado del Backlog? \xbfSe necesita ajusta el Product Backlog para los siguientes Sprints?.",duration:"M\xe1ximo de 4 horas para Sprints de 1 mes.",participants:"Todo el equipo Scrum y partes interesadas clave, invitadas por el Product Owner.",inputs:"-",outputs:"-"}),Object(o.jsx)(b,{name:"4to Evento: Sprint Retrospective",description:"Permite determinar el plan de mejora para el siguiente Sprint.  El Scrum Master est\xe1 a cargo de este evento.",duration:"3 horas m\xe1ximo para Sprints de un mes",participants:"El Equipo de Scrum",inputs:"-",outputs:"Plan para la mejora ya sea cambiando o ajustando alg\xfan proceso (Action Item) o ajustando la definici\xf3n de DONE."})]})]})},h=function(e){var a=e.name,r=e.points,s=e.extra;return Object(o.jsxs)("div",{className:"card card-secondary mb-3",children:[Object(o.jsx)("div",{className:"card-header",children:a}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("strong",{children:"Descripci\xf3n:"}),Object(o.jsx)("ul",{children:r.map((function(e){return Object(o.jsx)("li",{children:e},e.substring(0,10))}))}),s&&Object(o.jsx)("p",{className:"text-secondary",children:s})]})]})},O=function(e){var a=e.history;return Object(o.jsxs)(n.FadeTransform,{in:!0,transformProps:{enterTransform:"translateX(0px)"},children:[Object(o.jsx)(j,{history:a}),Object(o.jsx)(m,{title:"Artefactos Scrum",description:"Representan trabajo o valor que proporciona transparencia necesaria para la inspecci\xf3n y adaptaci\xf3n.",icon:"fa-file-text"}),Object(o.jsxs)("div",{className:"card-deck",children:[Object(o.jsx)(h,{name:"1. Product Backlog",points:["Lista de requisitos funcionales y no funcionales a implementarse.","Es din\xe1mico, puede cambiar por la naturaleza de Scrum basada en el empirismo.","Los items deben incluir descripci\xf3n, orden, estimaci\xf3n y valor.","Debe especificar qu\xe9 pruebas se requiere para demostrar completitud de cada historia para ser considerada como terminada."],extra:"El refinamiento del Product Backlog implica a\xf1adir detalles, estimaciones y orden a las historias de usuario. El equipo Scrum decide cu\xe1ndo hacer el refinamiento, pero el Product Owner puede modificar los items del Product Backlog en cualquier momento."}),Object(o.jsx)(h,{name:"2. Sprint Backlog",points:["Subconjunto del Product Backlog para ser implementado en el Sprint actual para lograr el objetivo del mismo.","Siempre debe existir una tarea de alta prioridad.","Los elementos pueden ser eliminados del Sprint Backlog en cualquier momento o actualizado el mismo."],extra:"Solo el equipo de desarrollo es el due\xf1o de la lista de pendientes (Sprint Backlog)."}),Object(o.jsx)(h,{name:"3. El incremento",points:["Es la suma de todos los elementos de la Lista de Producto completados durante un Sprint y el valor de los incrementos de todos los Sprints anteriores.","Al final del Sprint el incremento debe ser utilizable, es decir debe cumplir con la definici\xf3n de DONE.","Es totalmente inspeccionable."],extra:"A pesar de estar terminado, el Product Owner puede decidir si liberarlo o no."})]})]})},f=function(){return Object(o.jsx)("footer",{className:"bg-light text-center text-lg-start",children:Object(o.jsxs)("div",{className:"text-center p-3",children:["C\xe9sar Balc\xe1zar, 2021, contenido basado totalmente en la gu\xeda oficial de Scrum ",Object(o.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://scrumguides.org/docs/scrumguide/v2017/2017-Scrum-Guide-Spanish-SouthAmerican.pdf",children:"La gu\xeda de Srum"})]})})},g=function(){return Object(o.jsx)(i.a,{children:Object(o.jsxs)(n.FadeTransform,{in:!0,transformProps:{enterTransform:"translateX(0px)"},children:[Object(o.jsx)("div",{className:"container mt-5 mb-5",children:Object(o.jsxs)(c.c,{children:[Object(o.jsx)(c.a,{exact:!0,path:"/",component:l}),Object(o.jsx)(c.a,{exact:!0,path:"/team",component:p}),Object(o.jsx)(c.a,{exact:!0,path:"/events",component:x}),Object(o.jsx)(c.a,{exact:!0,path:"/artifacts",component:O})]})}),Object(o.jsx)(f,{})]})})},v=function(){return Object(o.jsx)(g,{})};r(29);t.a.render(Object(o.jsx)(v,{}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.84b9e95e.chunk.js.map