(this["webpackJsonpfinal-project-starter"]=this["webpackJsonpfinal-project-starter"]||[]).push([[0],{22:function(e,t,s){},23:function(e,t,s){},25:function(e,t,s){},30:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),r=s(16),n=s.n(r),i=(s(22),s(23),s(24),s(25),s(8)),d=s(6),l=s(31),j=s(37),u=s(34),b=s(32),o=s(35),m=s(36),O=s(0);function h(e){var t=e.currID,s=e.currentSem,a=e.currYear,r=e.semList,n=e.setSemList,h=e.lastID,C=e.idSet,x=e.semPer,f=e.setSemCount,S=e.classList,I=Object(c.useState)("CISC"),y=Object(d.a)(I,2),N=y[0],g=y[1],k=Object(c.useState)("ClassName"),v=Object(d.a)(k,2),D=v[0],p=v[1],F=Object(c.useState)(6),L=Object(d.a)(F,2),w=L[0],P=L[1],A=Object(c.useState)(0),J=Object(d.a)(A,2),E=J[0],M=J[1],Y=Object(c.useState)(""),B=Object(d.a)(Y,2),T=B[0],U=B[1],z=Object(c.useState)(""),H=Object(d.a)(z,2),W=H[0],X=H[1],q=Object(c.useState)(0),G=Object(d.a)(q,2),K=G[0],Q=G[1];function R(){var e=Object(i.a)(S);""!==T&&(e[E-1].courseID=T),""!==W&&(e[E-1].name=W),0!==K&&(e[E-1].credits=K),S=e,M(0),U(""),X(""),Q(0)}var V=0;return Object(O.jsx)(l.a,{children:Object(O.jsxs)(u.a,{className:"text-center m-3",children:[Object(O.jsx)(b.a,{children:Object(O.jsx)("p",{className:"text-center",style:{fontSize:17},children:Object(O.jsx)("u",{children:Object(O.jsxs)("strong",{children:["Year ",a," Semester ",s]})})})}),Object(O.jsxs)("table",{children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Class ID"}),Object(O.jsx)("th",{children:"Class Name"}),Object(O.jsx)("th",{children:"Credits"})]})}),S.map((function(e){return V++,E==V?Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:Object(O.jsx)(o.a,{className:"sbj-id",children:Object(O.jsx)(m.a,{placeholder:e.courseID,"aria-label":"ID","aria-describedby":"basic-addon1","data-testid":"input-group",onChange:function(e){return U(e.target.value)}})})}),Object(O.jsx)("td",{children:Object(O.jsx)(o.a,{className:"sbj-name",children:Object(O.jsx)(m.a,{placeholder:e.name,"aria-label":"Name","aria-describedby":"basic-addon1","data-testid":"input-group",onChange:function(e){return X(e.target.value)}})})}),Object(O.jsx)("td",{children:Object(O.jsx)(o.a,{className:"sbj-credits",children:Object(O.jsx)(m.a,{placeholder:e.credits.toString(),"aria-label":"Credits","aria-describedby":"basic-addon1","data-testid":"input-group",onChange:function(e){return Q(parseInt(e.target.value,10))}})})}),Object(O.jsx)("td",{children:Object(O.jsx)(j.a,{"data-testid":"submit-button",onClick:R,children:"Submit"})})]},e.key):Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.courseID}),Object(O.jsx)("td",{children:e.name}),Object(O.jsx)("td",{children:e.credits}),Object(O.jsx)(j.a,{className:"m-1","data-testid":"edit-course-button",onClick:function(){return t=S.findIndex((function(t){return t.key===e.key}))+1,void M(t);var t},children:"Edit"}),Object(O.jsx)(j.a,{className:"btn btn-small-delete rounded-circle m-1","data-testid":"delete-course-button",onClick:function(){return function(e){var s=Object(i.a)(r),c=s.findIndex((function(e){return e.id===t}));s[c].classes=S.filter((function(t){return t.key!==e})),n(s)}(e.key)},children:"X"})]},e.key)}))]}),Object(O.jsxs)(l.a,{children:[Object(O.jsx)(b.a,{children:Object(O.jsx)(j.a,{className:"m-2","data-testid":"add-course-button",onClick:function(){var e=w+1;P(e),g(N),p(D);var s={courseID:N,name:D,credits:3,key:e},c=[].concat(Object(i.a)(S),[s]);S=Object(i.a)(c);var a=Object(i.a)(r),d=a.findIndex((function(e){return e.id===t}));a[d].classes=S,n(a)},children:"Add Course"})}),Object(O.jsx)(b.a,{children:Object(O.jsx)(j.a,{className:"m-2","data-testid":"clear-courses-button",onClick:function(){P(0),S=[];var e=Object(i.a)(r),s=e.findIndex((function(e){return e.id===t}));e[s].classes=S,n(e)},children:"Clear Courses"})}),Object(O.jsx)(b.a,{children:Object(O.jsx)(j.a,{className:"btn btn-delete m-2","data-testid":"delete-this-semester-button",onClick:function(){C(h+1);for(var e,s=r.filter((function(e){return e.id!==t})),c=0;s[c];c++)(e=s[c]).semesterNum=c%x+1,e.year=Math.trunc(c/x)+1;f(s.length-1),n(s)},children:"Delete Semester"})})]})]})})}function C(){var e=Object(c.useState)(0),t=Object(d.a)(e,2),s=t[0],a=t[1],r=[{courseID:"CISC",name:"Class Name",credits:3,key:1},{courseID:"CISC",name:"Class Name",credits:3,key:2},{courseID:"CISC",name:"Class Name",credits:3,key:3},{courseID:"CISC",name:"Class Name",credits:3,key:4},{courseID:"CISC",name:"Class Name",credits:3,key:5}],n=Object(c.useState)(0),u=Object(d.a)(n,2),b=u[0],o=u[1],m="schedule",C=[{id:s,semesterNum:1,year:1,classes:[{courseID:"CISC",name:"Class Name",credits:3,key:1},{courseID:"CISC",name:"Class Name",credits:3,key:2},{courseID:"CISC",name:"Class Name",credits:3,key:3},{courseID:"CISC",name:"Class Name",credits:3,key:4},{courseID:"CISC",name:"Class Name",credits:3,key:5}]}];var x=Object(c.useState)((function(){var e=localStorage.getItem(m);return null===e?[].concat(C):JSON.parse(e)})),f=Object(d.a)(x,2),S=f[0],I=f[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(l.a,{children:Object(O.jsx)(j.a,{"data-testid":"add-semester-button",onClick:function(){var e=b+1,t=s+1,c=(1+e)%2,n=Math.trunc(e/2)+1;0===c&&(c+=2),a(t);var d={id:t,semesterNum:c,year:n,classes:r},l=[].concat(Object(i.a)(S),[d]);I(l),o(e)},className:"btn btn-add m-3",style:{fontFamily:"Courier New"},children:"Add Semester"})}),Object(O.jsx)(l.a,{children:Object(O.jsx)("table",{children:S.map((function(e){return Object(O.jsx)("tr",{children:Object(O.jsx)("td",{children:Object(O.jsx)(h,{currentSem:e.semesterNum,currYear:e.year,currID:e.id,semList:S,setSemList:I,lastID:s,idSet:a,semPer:2,setSemCount:o,classList:e.classes})})},e.id)}))})}),Object(O.jsx)(j.a,{"data-testid":"clear-all-semesters-button",onClick:function(){a(-1),I([]),o(-1)},className:"btn btn-delete m-3",style:{fontFamily:"Courier New"},children:"Clear All Semesters"}),Object(O.jsx)(j.a,{"data-testid":"save-to-local-button",onClick:function(){localStorage.setItem(m,JSON.stringify(S))},className:"btn btn-save m-3",children:"Save Layout"})]})}var x=s(33);var f=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"text-center",style:{fontFamily:"Courier New"},children:[Object(O.jsx)("h1",{children:Object(O.jsx)("strong",{children:"UDel CISC Degree Planner"})}),Object(O.jsx)("p",{children:"Welcome to the University of Delaware CISC Degree Planner! Here you can add/delete semesters and courses from your degree plan."}),Object(O.jsx)("h5",{children:"Click Add Semester or Edit to get started!"})]}),Object(O.jsx)(x.a,{children:Object(O.jsx)(C,{})})]})},S=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,38)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,n=t.getTTFB;s(e),c(e),a(e),r(e),n(e)}))};n.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(f,{})}),document.getElementById("root")),S()}},[[30,1,2]]]);
//# sourceMappingURL=main.5a84304d.chunk.js.map