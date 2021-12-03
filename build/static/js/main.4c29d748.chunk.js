(this["webpackJsonpmarket-order"]=this["webpackJsonpmarket-order"]||[]).push([[0],{141:function(e,a,t){},142:function(e,a,t){},247:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t(37),c=t.n(l),s=(t(141),t.p,t(142),t(13)),i=t(292),r=t(301),o=t(303),d=t(304),u=t(305),j=t(296),b=t(302),x=t(290),m=t(293),h=t(297),p=t(306),O=t(307),g=t(298),v=t(308),f=t(45),T=t(85),S=t(126),C=t(294),A=t(299),V=t(2),F={width:"max-content",textAlign:"center",margin:"auto",display:"flex",float:"right",marginRight:"1rem"};function P(){var e=Object(n.useState)({}),a=Object(s.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(!1),P=Object(s.a)(c,2),y=P[0],D=P[1],E=Object(n.useState)(!1),k=Object(s.a)(E,2),w=k[0],N=k[1],U=t.amountUSDP,H=t.amountETH,B=t.leverage,R=t.slippageTolerance,q=f.a().shape({amountUSDP:f.b().required(),amountETH:f.b().required(),leverage:f.b().required(),slippageTolerance:f.b().required()}),I=Object(T.b)({initialValues:{amountUSDP:"",amountETH:"",leverage:1,slippageTolerance:.5,usdpAutoCalc:!1,ethAutoCalc:!1,customSlippageTolerance:""},validationSchema:q,onSubmit:function(){I.setSubmitting(!0),setTimeout((function(){I.setSubmitting(!1)}),2e3),D(!0),N(!0),setTimeout((function(){N(!1)}),2e3),l(I.values)}}),W=I.isSubmitting;return Object(n.useEffect)((function(){I.values.ethAutoCalc?I.setFieldValue("amountETH",1e3*I.values.amountUSDP/I.values.leverage):I.values.usdpAutoCalc&&I.setFieldValue("amountUSDP",I.values.amountETH*I.values.leverage/1e3)}),[I.values.leverage]),Object(V.jsxs)(n.Fragment,{children:[w&&Object(V.jsx)(i.a,{severity:"success",sx:F,children:Object(V.jsx)(r.a,{children:"Success"})}),Object(V.jsx)(o.a,{sx:{width:"fit-content"},children:Object(V.jsx)(d.a,{sx:{mt:4,backgroundColor:"#84a1ff",color:"white"},children:Object(V.jsx)(u.a,{sx:{p:4,width:350},children:Object(V.jsxs)(T.a,{children:[Object(V.jsx)("div",{className:"col-md-6 col-sm-12",children:Object(V.jsx)("div",{className:"form-group",children:Object(V.jsxs)("div",{children:[Object(V.jsx)(j.a,{container:!0,spacing:0,children:Object(V.jsx)(j.a,{item:!0,children:Object(V.jsx)(b.a,{gutterBottom:!0,sx:{color:"#000"},children:"Amount"})})}),Object(V.jsx)(x.a,{fullWidth:!0,name:"amountUSDP",sx:{mt:-3},variant:"standard",InputProps:{endAdornment:Object(V.jsx)("p",{children:"USDP"})},helperText:Object(V.jsxs)("span",{children:[Object(V.jsx)(S.a,{})," $ abcd"]}),type:"number",onChange:function(e){I.handleChange(e),I.setFieldValue("usdpAutoCalc",!1),I.setFieldValue("ethAutoCalc",!0)},value:I.values.amountUSDP})]})})}),Object(V.jsx)("div",{className:"col-md-6 col-sm-12",children:Object(V.jsx)("div",{className:"form-group",children:Object(V.jsx)("div",{children:Object(V.jsxs)(j.a,{container:!0,spacing:0,sx:{mt:1},children:[Object(V.jsx)(j.a,{item:!0,children:Object(V.jsx)(b.a,{gutterBottom:!0,sx:{color:"#000"},children:"Amount"})}),Object(V.jsx)(x.a,{fullWidth:!0,sx:{mt:-3},name:"amountETH",variant:"standard",InputProps:{endAdornment:Object(V.jsx)("p",{children:"ETH"})},type:"number",onChange:function(e){I.handleChange(e),I.setFieldValue("ethAutoCalc",!1),I.setFieldValue("usdpAutoCalc",!0)},value:I.values.amountETH})]})})})}),Object(V.jsx)("div",{className:"col-md-6 col-sm-12",children:Object(V.jsx)("div",{className:"form-group",children:Object(V.jsxs)("div",{children:[Object(V.jsxs)(j.a,{container:!0,spacing:2,sx:{justifyContent:"space-between",mt:1},children:[Object(V.jsx)(j.a,{item:!0,children:Object(V.jsx)(b.a,{id:"non-linear-slider",gutterBottom:!0,sx:{color:"#000"},children:"Leverage"})}),Object(V.jsx)(j.a,{item:!0,children:Object(V.jsx)(b.a,{id:"non-linear-slider",gutterBottom:!0,sx:{color:"#000"},children:"".concat(I.values.leverage,"x")})})]}),Object(V.jsx)(m.a,{name:"leverage",onChange:I.handleChange,"aria-label":"Always visible",getAriaValueText:function(){return"".concat(I.values.leverage,"x")},value:I.values.leverage,scale:function(){return I.values.leverage},min:1,step:1,max:10,marks:[{value:1,label:"1x"},{value:10,label:"10x"}],"aria-labelledby":"non-linear-slider"})]})})}),Object(V.jsx)("div",{className:"col-md-6 col-sm-12",children:Object(V.jsx)("div",{className:"form-group",children:Object(V.jsxs)("div",{children:[Object(V.jsxs)(j.a,{container:!0,spacing:2,sx:{justifyContent:"space-between",mt:.5},children:[Object(V.jsx)(j.a,{item:!0,children:Object(V.jsx)(b.a,{id:"non-linear-slider",gutterBottom:!0,sx:{color:"#000"},children:"Slippage Tolerance"})}),Object(V.jsx)(j.a,{item:!0,children:Object(V.jsx)(b.a,{id:"non-linear-slider",gutterBottom:!0,sx:{color:"#000"},children:"".concat(I.values.slippageTolerance,"%")})})]}),Object(V.jsxs)(j.a,{container:!0,spacing:.2,sx:{justifyContent:"space-between"},children:[Object(V.jsx)(j.a,{item:!0,children:Object(V.jsx)(h.a,{variant:"outlined",name:"slippageTolerance",onClick:function(){I.setFieldValue("slippageTolerance",.1),I.setFieldValue("customSlippageTolerance","")},sx:{borderRadius:"20px",color:"#000"},children:"0.1%"})}),Object(V.jsx)(j.a,{item:!0,children:Object(V.jsx)(h.a,{variant:"outlined",name:"slippageTolerance",onClick:function(){I.setFieldValue("slippageTolerance",.5),I.setFieldValue("customSlippageTolerance","")},sx:{borderRadius:"20px",color:"#000"},children:"0.5%"})}),Object(V.jsx)(j.a,{item:!0,children:Object(V.jsx)(h.a,{variant:"outlined",name:"slippageTolerance",onClick:function(){I.setFieldValue("slippageTolerance",1),I.setFieldValue("customSlippageTolerance","")},sx:{borderRadius:"20px",color:"#000"},children:"1%"})}),Object(V.jsx)(j.a,{item:!0,sx:{width:"34%"},children:Object(V.jsx)(h.a,{variant:"outlined",sx:{borderRadius:"20px",color:"#000",height:"36px"},children:Object(V.jsx)(x.a,{variant:"standard",placeholder:"Others",name:"slippageTolerance",onChange:function(e){e.target.value>=1&&e.target.value<=5?(e.preventDefault(),I.handleChange(e),I.setFieldValue("customSlippageTolerance",e.target.value)):(e.preventDefault(),I.setFieldValue("slippageTolerance",I.values.slippageTolerance))},value:I.values.customSlippageTolerance,sx:{outline:"none",border:"none"},InputProps:{endAdornment:Object(V.jsx)("p",{children:"%"}),disableUnderline:!0}})})})]})]})})}),Object(V.jsx)("div",{className:"col-md-6 col-sm-12",children:Object(V.jsx)("div",{className:"form-group",children:Object(V.jsx)("div",{children:Object(V.jsx)(C.a,{fullWidth:!0,disabled:""===I.values.amountETH||""===I.values.amountUSDP,loading:W,variant:"contained",sx:{mt:3},onClick:I.handleSubmit,children:"Place Market Order"})})})})]})})})}),y&&Object(V.jsxs)(A.a,{style:{display:"inline"},children:[Object(V.jsx)(p.a,{children:Object(V.jsxs)(O.a,{children:[Object(V.jsx)(g.a,{children:"AmountUSDP"}),Object(V.jsx)(g.a,{children:"AmountETH"}),Object(V.jsx)(g.a,{children:"Leverage"}),Object(V.jsx)(g.a,{children:"Slippage Tolerance"})]})}),Object(V.jsx)(v.a,{children:Object(V.jsxs)(O.a,{children:[Object(V.jsx)(g.a,{children:U}),Object(V.jsx)(g.a,{children:H}),Object(V.jsx)(g.a,{children:B}),Object(V.jsx)(g.a,{children:R})]})})]})]})}var y=function(){return Object(V.jsx)("div",{className:"App",children:Object(V.jsx)(P,{})})};c.a.render(Object(V.jsx)(y,{}),document.getElementById("root"))}},[[247,1,2]]]);
//# sourceMappingURL=main.4c29d748.chunk.js.map