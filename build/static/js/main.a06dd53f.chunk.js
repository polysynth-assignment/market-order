(this["webpackJsonpmarket-order"]=this["webpackJsonpmarket-order"]||[]).push([[0],{153:function(e,a,t){},154:function(e,a,t){},260:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t(28),c=t.n(l),s=(t(153),t.p,t(154),t(13)),i=t(307),r=t(310),o=t(302),d=t(304),u=t(303),j=t(312),b=t(313),m=t(314),x=t(315),h=t(316),p=t(308),O=t(317),v=t(47),g=t(89),f=t(140),T=t(305),S=t(309),C=t(2);function E(){var e=Object(n.useState)({}),a=Object(s.a)(e,2),t=a[0],l=a[1],c=t.amountUSDP,E=t.amountETH,N=t.leverage,y=t.slippageTolerance,A=function(e){var a=e.submittedForm,t=v.a().shape({amountUSDP:v.b().required(),amountETH:v.b().required(),leverage:v.b().required(),slippageTolerance:v.b().required()}),c=Object(g.b)({initialValues:{amountUSDP:"",amountETH:"",leverage:1,slippageTolerance:.5,usdpAutoCalc:!1,ethAutoCalc:!1,customSlippageTolerance:""},validationSchema:t,onSubmit:function(){c.setSubmitting(!0),setTimeout((function(){c.setSubmitting(!1)}),2e3),l(c.values),a(c.values)}}),s=c.isSubmitting;return Object(n.useEffect)((function(){c.values.ethAutoCalc?c.setFieldValue("amountETH",1e3*c.values.amountUSDP/c.values.leverage):c.values.usdpAutoCalc&&c.setFieldValue("amountUSDP",c.values.amountETH*c.values.leverage/1e3)}),[c.values.leverage]),Object(C.jsxs)(n.Fragment,{children:[Object(C.jsx)("div",{className:"col-md-6 col-sm-12",children:Object(C.jsx)("div",{className:"form-group",children:Object(C.jsxs)("div",{children:[Object(C.jsx)(i.a,{container:!0,spacing:0,children:Object(C.jsx)(i.a,{item:!0,children:Object(C.jsx)(r.a,{gutterBottom:!0,sx:{color:"#000"},children:"Amount"})})}),Object(C.jsx)(o.a,{fullWidth:!0,name:"amountUSDP",sx:{mt:-3},variant:"standard",InputProps:{endAdornment:Object(C.jsx)("p",{children:"USDP"})},helperText:Object(C.jsxs)("span",{children:[Object(C.jsx)(f.a,{})," $ abcd"]}),type:"number",onChange:function(e){c.handleChange(e),c.setFieldValue("usdpAutoCalc",!1),c.setFieldValue("ethAutoCalc",!0)},value:c.values.amountUSDP})]})})}),Object(C.jsx)("div",{className:"col-md-6 col-sm-12",children:Object(C.jsx)("div",{className:"form-group",children:Object(C.jsx)("div",{children:Object(C.jsxs)(i.a,{container:!0,spacing:0,sx:{mt:1},children:[Object(C.jsx)(i.a,{item:!0,children:Object(C.jsx)(r.a,{gutterBottom:!0,sx:{color:"#000"},children:"Amount"})}),Object(C.jsx)(o.a,{fullWidth:!0,sx:{mt:-3},name:"amountETH",variant:"standard",InputProps:{endAdornment:Object(C.jsx)("p",{children:"ETH"})},type:"number",onChange:function(e){c.handleChange(e),c.setFieldValue("ethAutoCalc",!1),c.setFieldValue("usdpAutoCalc",!0)},value:c.values.amountETH})]})})})}),Object(C.jsx)("div",{className:"col-md-6 col-sm-12",children:Object(C.jsx)("div",{className:"form-group",children:Object(C.jsxs)("div",{children:[Object(C.jsxs)(i.a,{container:!0,spacing:2,sx:{justifyContent:"space-between",mt:1},children:[Object(C.jsx)(i.a,{item:!0,children:Object(C.jsx)(r.a,{id:"non-linear-slider",gutterBottom:!0,sx:{color:"#000"},children:"Leverage"})}),Object(C.jsx)(i.a,{item:!0,children:Object(C.jsx)(r.a,{id:"non-linear-slider",gutterBottom:!0,sx:{color:"#000"},children:"".concat(c.values.leverage,"x")})})]}),Object(C.jsx)(d.a,{name:"leverage",onChange:c.handleChange,"aria-label":"Always visible",getAriaValueText:function(){return"".concat(c.values.leverage,"x")},value:c.values.leverage,scale:function(){return c.values.leverage},min:1,step:1,max:10,marks:[{value:1,label:"1x"},{value:10,label:"10x"}],"aria-labelledby":"non-linear-slider"})]})})}),Object(C.jsx)("div",{className:"col-md-6 col-sm-12",children:Object(C.jsx)("div",{className:"form-group",children:Object(C.jsxs)("div",{children:[Object(C.jsxs)(i.a,{container:!0,spacing:2,sx:{justifyContent:"space-between",mt:.5},children:[Object(C.jsx)(i.a,{item:!0,children:Object(C.jsx)(r.a,{id:"non-linear-slider",gutterBottom:!0,sx:{color:"#000"},children:"Slippage Tolerance"})}),Object(C.jsx)(i.a,{item:!0,children:Object(C.jsx)(r.a,{id:"non-linear-slider",gutterBottom:!0,sx:{color:"#000"},children:"".concat(c.values.slippageTolerance,"%")})})]}),Object(C.jsxs)(i.a,{container:!0,spacing:.2,sx:{justifyContent:"space-between"},children:[Object(C.jsx)(i.a,{item:!0,children:Object(C.jsx)(u.a,{variant:"outlined",name:"slippageTolerance",onClick:function(){c.setFieldValue("slippageTolerance",.1),c.setFieldValue("customSlippageTolerance","")},sx:{borderRadius:"20px",color:"#000"},children:"0.1%"})}),Object(C.jsx)(i.a,{item:!0,children:Object(C.jsx)(u.a,{variant:"outlined",name:"slippageTolerance",onClick:function(){c.setFieldValue("slippageTolerance",.5),c.setFieldValue("customSlippageTolerance","")},sx:{borderRadius:"20px",color:"#000"},children:"0.5%"})}),Object(C.jsx)(i.a,{item:!0,children:Object(C.jsx)(u.a,{variant:"outlined",name:"slippageTolerance",onClick:function(){c.setFieldValue("slippageTolerance",1),c.setFieldValue("customSlippageTolerance","")},sx:{borderRadius:"20px",color:"#000"},children:"1%"})}),Object(C.jsx)(i.a,{item:!0,sx:{width:"34%"},children:Object(C.jsx)(u.a,{variant:"outlined",sx:{borderRadius:"20px",color:"#000",height:"36px"},children:Object(C.jsx)(o.a,{variant:"standard",placeholder:"Others",name:"slippageTolerance",onChange:function(e){e.target.value>=1&&e.target.value<=5?(e.preventDefault(),c.handleChange(e),c.setFieldValue("customSlippageTolerance",e.target.value)):(e.preventDefault(),c.setFieldValue("slippageTolerance",c.values.slippageTolerance))},value:c.values.customSlippageTolerance,sx:{outline:"none",border:"none"},InputProps:{endAdornment:Object(C.jsx)("p",{children:"%"}),disableUnderline:!0}})})})]})]})})}),Object(C.jsx)("div",{className:"col-md-6 col-sm-12",children:Object(C.jsx)("div",{className:"form-group",children:Object(C.jsx)("div",{children:Object(C.jsx)(T.a,{fullWidth:!0,disabled:""===c.values.amountETH||""===c.values.amountUSDP,loading:s,variant:"contained",sx:{mt:3},onClick:c.handleSubmit,children:"Place Market Order"})})})})]})};return Object(C.jsxs)(n.Fragment,{children:[Object(C.jsx)(j.a,{sx:{width:"fit-content"},children:Object(C.jsx)(b.a,{sx:{mt:4,backgroundColor:"#84a1ff",color:"white"},children:Object(C.jsx)(m.a,{sx:{p:4,width:350},children:Object(C.jsx)(g.a,{children:Object(C.jsx)(A,{submittedForm:function(e){console.log("submitted form",e),l(e)}})})})})}),t&&Object(C.jsxs)(S.a,{style:{display:"inline"},children:[Object(C.jsx)(x.a,{children:Object(C.jsxs)(h.a,{children:[Object(C.jsx)(p.a,{children:"AmountUSDP"}),Object(C.jsx)(p.a,{children:"AmountETH"}),Object(C.jsx)(p.a,{children:"Leverage"}),Object(C.jsx)(p.a,{children:"Slippage Tolerance"})]})}),Object(C.jsx)(O.a,{children:Object(C.jsxs)(h.a,{children:[Object(C.jsx)(p.a,{children:c}),Object(C.jsx)(p.a,{children:E}),Object(C.jsx)(p.a,{children:N}),Object(C.jsx)(p.a,{children:y})]})})]})]})}var N=function(){return Object(C.jsx)("div",{className:"App",children:Object(C.jsx)(E,{})})},y=t(139),A=t(131),F=t(137),V=t(46),k=t(135),P=t(68),D={avatar:"",customToken:"",email:"",firstName:"",lastName:"",phoneNumber:"",token:"",_id:""},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"USER_LOGOUT":return Object(P.a)({},D);case"USER_EMAIL_VERIFIED":return Object(P.a)(Object(P.a)({},e),{},{avatar:a.payload.avatar,customToken:a.payload.customToken,email:a.payload.email,firstName:a.payload.firstName,lastName:a.payload.lastName,phoneNumber:a.payload.phoneNumber,token:a.payload.token,_id:a.payload._id});default:return e}},w=Object(V.b)({userProfileSlice:U});c.a.render(Object(C.jsx)(A.a,{children:Object(C.jsx)(y.a,{children:Object(C.jsx)(F.a,{store:function(){var e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||V.c;return Object(V.d)(w,e(Object(V.a)(k.a)))}(),children:Object(C.jsx)(N,{})})})}),document.getElementById("root"))}},[[260,1,2]]]);
//# sourceMappingURL=main.a06dd53f.chunk.js.map