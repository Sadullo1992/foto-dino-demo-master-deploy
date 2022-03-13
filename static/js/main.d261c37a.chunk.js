(this["webpackJsonpfoto-dino"]=this["webpackJsonpfoto-dino"]||[]).push([[0],{48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(22),s=n.n(c),r=n(4),i=n(8),l=n(3),o=n.n(l),d=n(5),u=n(2),j=n(7),b=n.n(j),m=n(0),h=function(e){var t=e.setSortType,n=e.setSearchCity,c=e.searchCity,s=e.cities,l=e.setAddCity,o=e.setCities,d=e.setShowEvents,j=e.showEvents,b=e.setAddEvent,h=e.setEvents,f=e.events,x=e.searchEvent,p=e.setSearchEvent,O=Object(a.useState)(""),v=Object(u.a)(O,2),N=v[0],y=v[1];return Object(m.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light fixed-top",style:{zIndex:"100"},children:Object(m.jsxs)("div",{className:"container-fluid",children:[Object(m.jsx)("h1",{className:"navbar-brand",children:"Foto Dino"}),Object(m.jsx)("button",{className:"btn btn-primary",onClick:function(){return d(!j)},children:j?"Cities":"Events"}),Object(m.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(m.jsx)("span",{className:"navbar-toggler-icon"})}),Object(m.jsxs)("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarSupportedContent",children:[Object(m.jsxs)("form",{className:"d-flex mx-5",onSubmit:function(e){var t=new RegExp(N.toLowerCase(),"g");if(j){e.preventDefault();var a=f.filter((function(e){return e.name.toLowerCase().match(t)}));p(Object(r.a)(Object(r.a)({},x),{},{events:a,text:N,searching:!0})),y("")}else{e.preventDefault();var i=s.filter((function(e){return e.name.toLowerCase().match(t)}));n(Object(r.a)(Object(r.a)({},c),{},{cities:i,text:N,searching:!0})),y("")}},children:[Object(m.jsx)("input",{className:"form-control me-2",type:"search",placeholder:j?"Search a event":"Search a city","aria-label":"Search",value:N,onChange:function(e){return y(e.target.value)},style:{width:"300px"}}),Object(m.jsx)("button",{className:"btn btn-success",type:"submit",children:"Search"})]}),Object(m.jsxs)("div",{className:"mx-5",children:[Object(m.jsx)("p",{className:"my-auto mx-2",children:"Sort by: "}),Object(m.jsx)("ul",{className:"navbar-nav",children:Object(m.jsxs)("select",{onChange:function(e){!function(e){if(j){if("name"===e)return void h((function(e){return Object(i.a)(e.sort((function(e,t){return e.name>t.name?1:-1})))}));if("id"===e)return void h((function(e){return Object(i.a)(e.sort((function(e,t){return e.id-t.id})))}));if("id2"===e)h((function(e){return Object(i.a)(e.sort((function(e,t){return t.id-e.id})))}))}else{if("name"===e)return void o((function(e){return Object(i.a)(e.sort((function(e,t){return e.name>t.name?1:-1})))}));if("id"===e)return void o((function(e){return Object(i.a)(e.sort((function(e,t){return e.id-t.id})))}));if("id2"===e)o((function(e){return Object(i.a)(e.sort((function(e,t){return t.id-e.id})))}))}}(e.target.value),t(e.target.value)},className:"form-select",children:[Object(m.jsx)("option",{className:"dropdown-item",value:"id",children:"Oldest"}),Object(m.jsx)("option",{className:"dropdown-item",value:"name",children:"Name"}),Object(m.jsx)("option",{className:"dropdown-item",value:"id2",children:"Newly Added"})]})})]}),Object(m.jsxs)("button",{className:"btn btn-warning mx-3","aria-current":"page",onClick:function(){j?b(!0):l(!0)},children:[Object(m.jsx)("i",{className:"fa fa-plus"})," ",j?"Add Event":"Add City"]})]})]})})},f=function(e){var t=e.city,n=t.id,a=t.code,c=t.name,s=t.locations,r=e.city,i=e.deleteCity,l=e.setUpdatingCity,o=e.fetchLocations,d=e.setCity,u=e.setAddCity;return Object(m.jsxs)("div",{className:"cityItem mx-auto p-3",children:[Object(m.jsx)("img",{alt:"location",src:"https://images-platform.99static.com//6lGOzEAYLsS0U1etk92iqtXunGw=/1145x1239:1844x1938/fit-in/500x500/99designs-contests-attachments/110/110086/attachment_110086393"}),Object(m.jsxs)("div",{className:"d-flex flex-column",style:{width:"100%"},children:[Object(m.jsx)("h1",{children:n+". "+c}),Object(m.jsx)("h2",{children:s+" locations to visit"}),Object(m.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(m.jsx)("h3",{children:"code: "+a}),Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{className:"btn btn-outline-success ml-1",onClick:function(){l(r),u(!0)},children:Object(m.jsx)("i",{className:"fa fa-edit"})}),Object(m.jsx)("button",{className:"btn btn-outline-danger mx-1",onClick:function(){return i(n)},children:Object(m.jsx)("i",{className:"fa fa-trash"})}),Object(m.jsx)("button",{className:"btn btn-sm btn-outline-primary",onClick:function(){o(n),d(r)},children:"Locations"})]})]})]})]})},x=function(e){var t=e.cities,n=e.deleteCity,a=e.setUpdatingCity,c=e.fetchLocations,s=e.setCity,i=e.setAddCity,l=e.setSearchCity,o=e.searchCity;return Object(m.jsxs)("div",{className:"cities d-flex flex-column py-5 m-5",children:[Object(m.jsxs)("div",{className:"d-flex flex-row justify-content-between px-5",children:[Object(m.jsx)("h1",{children:"Cities"}),o.searching&&Object(m.jsx)("button",{className:"btn btn-danger",style:{height:"40px"},children:Object(m.jsx)("i",{className:"fa fa-times",onClick:function(){l(Object(r.a)(Object(r.a)({},o),{},{searching:!1,text:"",cities:[]}))}})})]}),o.searching&&0===o.cities.length?Object(m.jsx)("p",{className:"text-center",children:"Not record found"}):t.map((function(e){return Object(m.jsx)(f,{city:e,deleteCity:n,setUpdatingCity:a,fetchLocations:c,setCity:s,setAddCity:i},e.id)}))]})},p=function(e){var t=e.createCity,n=e.updatingCity,c=e.setUpdatingCity,s=e.updateCity,r=e.setAddCity,i=Object(a.useState)(0),l=Object(u.a)(i,2),o=l[0],d=l[1],j=Object(a.useState)(""),b=Object(u.a)(j,2),h=b[0],f=b[1];Object(a.useEffect)((function(){d(n.code?n.code:0),f(n.name?n.name:"")}),[n]);return Object(m.jsxs)("form",{className:"city-form mx-auto my-5",onSubmit:function(e){e.preventDefault(),h?o?(void 0!==n.id?s({code:o,name:h},n.id):(console.log("null"),t({code:o,name:h})),r(!1),c({}),d(0),f("")):alert("Please add a code"):alert("Please add a name")},children:[Object(m.jsxs)("div",{className:"d-flex flex-row justify-content-between",children:[Object(m.jsx)("h2",{children:"City Form"}),Object(m.jsx)("button",{className:"btn btn-danger",onClick:function(){r(!1),c({})},children:Object(m.jsx)("i",{className:"fa fa-times"})})]}),Object(m.jsxs)("div",{className:"mb-3 d-flex flex-column",children:[Object(m.jsx)("label",{htmlFor:"code",className:"form-label",children:"Code"}),Object(m.jsx)("input",{type:"number",className:"form-control",id:"code",placeholder:"Code",value:o,onChange:function(e){return d(e.target.value)}})]}),Object(m.jsxs)("div",{className:"mb-3 d-flex flex-column",children:[Object(m.jsx)("label",{htmlFor:"Name",className:"form-label",children:"Name"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"Name",placeholder:"Name",value:h,onChange:function(e){return f(e.target.value)}})]}),n.id?Object(m.jsx)("button",{type:"submit",className:"btn btn-outline-primary",children:"Update"}):Object(m.jsx)("button",{type:"submit",className:"btn btn-outline-primary",children:"Submit"}),Object(m.jsx)("button",{type:"reset",onClick:function(){c({})},className:"btn btn-outline-warning mx-2",children:"Clear"})]})},O=function(e){var t=e.location,n=t.email,a=t.phone,c=t.postal_code,s=t.id,r=e.setViewLocation,i=e.deleteLocation,l=e.setUpdateLocation,o=e.location,d=e.setAddLocation;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h6",{children:"Email: "+n}),Object(m.jsx)("h6",{children:"Phone: "+a}),Object(m.jsx)("h6",{children:"Postal Code: "+c}),Object(m.jsxs)("div",{style:{marginLeft:"auto"},children:[Object(m.jsx)("button",{className:"btn btn-outline-warning btn-sm",style:{width:"40px"},onClick:function(){l(o),d(!1)},children:Object(m.jsx)("i",{className:"fa fa-edit"})}),Object(m.jsx)("button",{className:"btn btn-outline-danger btn-sm mx-1",style:{width:"40px"},onClick:function(){return i(s)},children:Object(m.jsx)("i",{className:"fa fa-trash"})}),Object(m.jsx)("button",{className:"btn btn-outline-secondary btn-sm",style:{width:"40px"},onClick:function(){return r(!1)},children:Object(m.jsx)("i",{className:"fa fa-angle-up"})})," "]})]})},v=function(e){var t=e.location,n=t.name,c=t.rent,s=t.street_name,r=t.status,i=e.setUpdateLocation,l=e.location,o=e.deleteLocation,d=e.setAddLocation,j=Object(a.useState)(!1),b=Object(u.a)(j,2),h=b[0],f=b[1];return Object(m.jsxs)("div",{className:"location-item justify-content-between align-items-end",children:[Object(m.jsxs)("div",{className:"d-flex flex-column",style:{width:"100%"},children:[Object(m.jsx)("h4",{children:n}),Object(m.jsx)("h5",{children:"Rent: $"+c}),Object(m.jsx)("h6",{children:"Address: "+s}),h&&Object(m.jsx)(O,{location:l,setViewLocation:f,deleteLocation:o,setUpdateLocation:i,setAddLocation:d}),"Available"===r&&Object(m.jsxs)("h6",{children:[Object(m.jsx)("i",{className:"fa fa-circle",style:{color:"green"}})," ","Available"]}),"Unavailable"===r&&Object(m.jsxs)("h6",{children:[Object(m.jsx)("i",{className:"fa fa-circle",style:{color:"red"}})," ","Unavailable"]}),"Active"===r&&Object(m.jsxs)("h6",{children:[Object(m.jsx)("i",{className:"fa fa-circle",style:{color:"yellow"}})," Active"]})]}),!h&&Object(m.jsx)("button",{className:"btn btn-outline-primary btn-sm",onClick:function(){f(!0)},children:Object(m.jsx)("i",{className:"fa fa-eye"})})]})},N=function(e){var t=e.city,n=t.name,a=t.code,c=e.locations,s=e.setCity,r=e.setLocations,i=e.setUpdateLocation,l=e.setAddLocation,o=e.deleteLocation;return Object(m.jsx)("div",{className:"back",children:Object(m.jsxs)("div",{className:"city d-flex flex-column my-5",children:[Object(m.jsx)("button",{className:"btn btn-sm btn-danger",onClick:function(){s({}),r([]),l(!1),i(!1)},children:Object(m.jsx)("i",{className:"fa fa-times"})}),Object(m.jsx)("h1",{children:n}),Object(m.jsx)("h2",{children:"- code: "+a}),Object(m.jsx)("h3",{children:"Places to visit"}),Object(m.jsxs)("button",{className:"btn btn-primary",onClick:function(){l(!0),i({})},children:[Object(m.jsx)("i",{className:"fa fa-plus"})," Add a location"]}),c.map((function(e){return Object(m.jsx)(v,{location:e,setUpdateLocation:i,deleteLocation:o,setAddLocation:l})}))]})})},y=function(e){var t=e.event,n=e.deleteEvent,a=e.setAddEvent,c=e.setShowEventLocation,s=e.setEvent,r=t.id,i=t.name,l=t.description,o=t.event_date;return Object(m.jsxs)("div",{className:"eventItem mx-auto p-3",children:[Object(m.jsx)("img",{alt:"location",src:"https://images-platform.99static.com//6lGOzEAYLsS0U1etk92iqtXunGw=/1145x1239:1844x1938/fit-in/500x500/99designs-contests-attachments/110/110086/attachment_110086393"}),Object(m.jsxs)("div",{className:"d-flex flex-column",style:{width:"100%"},children:[Object(m.jsx)("h1",{children:r+". "+i}),Object(m.jsx)("h2",{children:l}),Object(m.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(m.jsxs)("h3",{children:["Date: ",o]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{className:"btn btn-outline-success ml-1",onClick:function(){a(!0)},children:Object(m.jsx)("i",{className:"fa fa-edit"})}),Object(m.jsx)("button",{className:"btn btn-outline-danger mx-1",onClick:function(){return n(r)},children:Object(m.jsx)("i",{className:"fa fa-trash"})}),Object(m.jsx)("button",{className:"btn btn-sm btn-outline-primary",onClick:function(){c(!0),s(t)},children:"Location"})]})]})]})]})},g=function(e){var t=e.events,n=e.deleteEvent,a=e.setUpdatingEvent,c=e.setAddEvent,s=e.setShowEventLocation,i=e.setEvent,l=e.setSearchEvent,o=e.searchEvent;return Object(m.jsxs)("div",{className:"events d-flex flex-column py-5 m-5",children:[Object(m.jsxs)("div",{className:"d-flex flex-row justify-content-between px-5",children:[Object(m.jsx)("h1",{children:"Events"}),o.searching&&Object(m.jsx)("button",{className:"btn btn-danger",style:{height:"40px"},children:Object(m.jsx)("i",{className:"fa fa-times",onClick:function(){l(Object(r.a)(Object(r.a)({},o),{},{searching:!1,text:"",events:[]}))}})})]}),o.searching&&0===o.events.length?Object(m.jsx)("p",{className:"text-center",children:"Not record found"}):t.map((function(e){return Object(m.jsx)(y,{event:e,deleteEvent:n,setUpdatingEvent:a,setAddEvent:c,setShowEventLocation:s,setEvent:i},e.id)}))]})};var C=function(){return Object(m.jsx)("div",{className:"my-5",children:"EventForm"})},w=function(e){var t=e.event,n=e.allLocations,c=e.setShowEventLocation,s=Object(a.useState)({}),r=Object(u.a)(s,2),i=r[0],l=r[1];return Object(a.useEffect)((function(){var e=n.find((function(e){return e.id===t.location}));l(e)}),[n,t]),Object(m.jsx)("div",{className:"back",children:Object(m.jsxs)("div",{className:"city event d-flex flex-column my-5",children:[Object(m.jsx)("button",{className:"btn btn-sm btn-danger",onClick:function(){c(!1),l({})},children:Object(m.jsx)("i",{className:"fa fa-times"})}),Object(m.jsx)("h1",{children:t.name}),Object(m.jsx)("h2",{children:t.description}),Object(m.jsxs)("h3",{children:["Date: ",t.event_date]}),Object(m.jsx)("div",{className:"location-item justify-content-between align-items-end",children:Object(m.jsxs)("div",{className:"d-flex flex-column",style:{width:"100%"},children:[Object(m.jsx)("h4",{children:i.name}),Object(m.jsx)("h5",{children:"Rent: $"+i.rent}),Object(m.jsx)("h6",{children:"Address: "+i.street_name}),Object(m.jsx)("h6",{children:"Email: "+i.email}),Object(m.jsx)("h6",{children:"Phone: "+i.phone}),Object(m.jsx)("h6",{children:"Postal Code: "+i.postal_code}),"Available"===i.status&&Object(m.jsxs)("h6",{children:[Object(m.jsx)("i",{className:"fa fa-circle",style:{color:"green"}})," ","Available"]}),"Unavailable"===i.status&&Object(m.jsxs)("h6",{children:[Object(m.jsx)("i",{className:"fa fa-circle",style:{color:"red"}})," ","Unavailable"]}),"Active"===i.status&&Object(m.jsxs)("h6",{children:[Object(m.jsx)("i",{className:"fa fa-circle",style:{color:"yellow"}})," Active"]})]})})]})})},S=(n(48),n(9)),E=function(e){var t=e.createLocation,n=e.setAddLocation,c=Object(a.useState)({name:"",rent:"",email:"",phone:"",coordinates:"",street_number:0,street_name:"",postal_code:0,status:"Available"}),s=Object(u.a)(c,2),i=s[0],l=s[1],o=i.name,d=i.rent,j=i.email,b=i.phone,h=i.coordinates,f=i.street_number,x=i.street_name,p=i.postal_code,O=i.status,v=function(e){return l(Object(r.a)(Object(r.a)({},i),{},Object(S.a)({},e.target.name,e.target.value)))};return Object(m.jsxs)("div",{className:"p-5 d-flex flex-column location-form",children:[Object(m.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(m.jsx)("h2",{children:"Location Form"}),Object(m.jsx)("button",{className:"btn btn-danger",onClick:function(){return n(!1)},children:Object(m.jsx)("i",{className:"fa fa-times"})})]}),Object(m.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),o?d?j?b?h?f?x?p?O?(t(i),n(!1)):alert("Please add a status"):alert("Please add a postal code"):alert("Please add a street name"):alert("Please add a street number"):alert("Please add a coordinates"):alert("Please add a phone"):alert("Please add a email"):alert("Please add a rent"):alert("Please add a name")}(e)},children:[Object(m.jsxs)("div",{className:"mb-3 d-flex flex-column",children:[Object(m.jsx)("label",{htmlFor:"Name",className:"form-label",children:"Name"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"Name",placeholder:"Name",name:"name",value:o,onChange:function(e){return v(e)}})]}),Object(m.jsxs)("div",{className:"mb-3 d-flex flex-column",children:[Object(m.jsx)("label",{htmlFor:"Rent",className:"form-label",children:"Rent"}),Object(m.jsx)("input",{type:"number",className:"form-control",id:"Rent",placeholder:"Rent",name:"rent",value:d,onChange:function(e){return v(e)}})]}),Object(m.jsxs)("div",{className:"mb-3 d-flex flex-column",children:[Object(m.jsx)("label",{htmlFor:"Email",className:"form-label",children:"Email"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"Email",placeholder:"Email",name:"email",value:j,onChange:function(e){return v(e)}})]}),Object(m.jsxs)("div",{className:"mb-3 d-flex flex-column",children:[Object(m.jsx)("label",{htmlFor:"Phone",className:"form-label",children:"Phone"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"Phone",placeholder:"Phone",name:"phone",value:b,onChange:function(e){return v(e)}})]}),Object(m.jsxs)("div",{className:"mb-3 d-flex flex-column",children:[Object(m.jsx)("label",{htmlFor:"Coordinates",className:"form-label",children:"Coordinates"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"Coordinates",placeholder:"Coordinates",name:"coordinates",value:h,onChange:function(e){return v(e)}})]}),Object(m.jsxs)("div",{className:"mb-3 d-flex flex-column",children:[Object(m.jsx)("label",{htmlFor:"Street-number",className:"form-label",children:"Street number"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"Street-number",placeholder:"Street number",name:"street_number",value:f,onChange:function(e){return v(e)}})]}),Object(m.jsxs)("div",{className:"mb-3 d-flex flex-column",children:[Object(m.jsx)("label",{htmlFor:"Street-name",className:"form-label",children:"Street name"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"Street-name",placeholder:"Street name",name:"street_name",value:x,onChange:function(e){return v(e)}})]}),Object(m.jsxs)("div",{className:"mb-3 d-flex flex-column",children:[Object(m.jsx)("label",{htmlFor:"Postal-code",className:"form-label",children:"Postal code"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"Postal-code",placeholder:"Postal code",name:"postal_code",value:p,onChange:function(e){return v(e)}})]}),Object(m.jsxs)("div",{className:"mb-3 d-flex flex-column",children:[Object(m.jsx)("label",{htmlFor:"status",className:"form-label",children:"Status"}),Object(m.jsxs)("select",{className:"form-select","aria-label":"Default select example",id:"status",name:"status",value:O,onChange:function(e){return v(e)},children:[Object(m.jsx)("option",{selected:!0,value:"Available",children:"Available"}),Object(m.jsx)("option",{value:"Unavailable",children:"Unavailable"}),Object(m.jsx)("option",{value:"Active",children:"Active"})]})]}),Object(m.jsx)("button",{type:"submit",className:"btn btn-outline-primary",children:"Submit"})]})]})},L=function(e){var t=e.updateLocation,n=e.updatingLocation,c=e.setUpdateLocation,s=Object(a.useState)({name:"",rent:"",email:"",phone:"",coordinates:"",street_number:0,street_name:"",postal_code:0,status:"Available"}),i=Object(u.a)(s,2),l=i[0],o=i[1];Object(a.useEffect)((function(){o({name:t.name?t.name:"",rent:t.rent?t.rent:"",email:t.email?t.email:"",phone:t.phone?t.phone:"",coordinates:t.coordinates?t.coordinates:"",street_number:t.street_number?t.street_number:0,street_name:t.street_name?t.street_name:"",postal_code:t.postal_code?t.postal_code:0,status:t.status?t.status:"Available"})}),[t]);var d=l.name,j=l.rent,b=l.email,h=l.phone,f=l.coordinates,x=l.street_number,p=l.street_name,O=l.postal_code,v=l.status,N=function(e){return o(Object(r.a)(Object(r.a)({},l),{},Object(S.a)({},e.target.name,e.target.value)))};return Object(m.jsxs)("div",{className:"p-5 d-flex flex-column location-form",children:[Object(m.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(m.jsx)("h2",{children:"Update Location"}),Object(m.jsx)("button",{className:"btn btn-danger",onClick:function(){return c(!1)},children:Object(m.jsx)("i",{className:"fa fa-times"})})]}),Object(m.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),d?j?b?h?f?x?p?O?v?(c({}),n(l,t.id)):alert("Please add a status"):alert("Please add a postal code"):alert("Please add a street name"):alert("Please add a street number"):alert("Please add a coordinates"):alert("Please add a phone"):alert("Please add a email"):alert("Please add a rent"):alert("Please add a name")}(e)},children:[Object(m.jsxs)("div",{className:"mb-3 d-flex flex-column",children:[Object(m.jsx)("label",{htmlFor:"Name",className:"form-label",children:"Name"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"Name",placeholder:"Name",name:"name",value:d,onChange:function(e){return N(e)}})]}),Object(m.jsxs)("div",{className:"mb-3 d-flex flex-column",children:[Object(m.jsx)("label",{htmlFor:"Rent",className:"form-label",children:"Rent"}),Object(m.jsx)("input",{type:"number",className:"form-control",id:"Rent",placeholder:"Rent",name:"rent",value:j,onChange:function(e){return N(e)}})]}),Object(m.jsxs)("div",{className:"mb-3 d-flex flex-column",children:[Object(m.jsx)("label",{htmlFor:"Email",className:"form-label",children:"Email"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"Email",placeholder:"Email",name:"email",value:b,onChange:function(e){return N(e)}})]}),Object(m.jsxs)("div",{className:"mb-3 d-flex flex-column",children:[Object(m.jsx)("label",{htmlFor:"Phone",className:"form-label",children:"Phone"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"Phone",placeholder:"Phone",name:"phone",value:h,onChange:function(e){return N(e)}})]}),Object(m.jsxs)("div",{className:"mb-3 d-flex flex-column",children:[Object(m.jsx)("label",{htmlFor:"Coordinates",className:"form-label",children:"Coordinates"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"Coordinates",placeholder:"Coordinates",name:"coordinates",value:f,onChange:function(e){return N(e)}})]}),Object(m.jsxs)("div",{className:"mb-3 d-flex flex-column",children:[Object(m.jsx)("label",{htmlFor:"Street-number",className:"form-label",children:"Street number"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"Street-number",placeholder:"Street number",name:"street_number",value:x,onChange:function(e){return N(e)}})]}),Object(m.jsxs)("div",{className:"mb-3 d-flex flex-column",children:[Object(m.jsx)("label",{htmlFor:"Street-name",className:"form-label",children:"Street name"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"Street-name",placeholder:"Street name",name:"street_name",value:p,onChange:function(e){return N(e)}})]}),Object(m.jsxs)("div",{className:"mb-3 d-flex flex-column",children:[Object(m.jsx)("label",{htmlFor:"Postal-code",className:"form-label",children:"Postal code"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"Postal-code",placeholder:"Postal code",name:"postal_code",value:O,onChange:function(e){return N(e)}})]}),Object(m.jsxs)("div",{className:"mb-3 d-flex flex-column",children:[Object(m.jsx)("label",{htmlFor:"status",className:"form-label",children:"Status"}),Object(m.jsxs)("select",{className:"form-select","aria-label":"Default select example",id:"status",name:"status",value:v,onChange:function(e){return N(e)},children:[Object(m.jsx)("option",{selected:!0,value:"Available",children:"Available"}),Object(m.jsx)("option",{value:"Unavailable",children:"Unavailable"}),Object(m.jsx)("option",{value:"Active",children:"Active"})]})]}),Object(m.jsx)("button",{type:"submit",className:"btn btn-outline-primary",children:"Submit"})]})]})},A=function(){var e=Object(a.useState)(!0),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)([{}]),l=Object(u.a)(s,2),j=l[0],f=l[1],O=Object(a.useState)({}),v=Object(u.a)(O,2),y=v[0],S=v[1],A=Object(a.useState)({text:"",cities:[],searching:!1}),k=Object(u.a)(A,2),P=k[0],_=k[1],F=Object(a.useState)(!1),U=Object(u.a)(F,2),R=U[0],D=U[1],T=Object(a.useState)("id"),G=Object(u.a)(T,2),I=G[0],z=G[1],q=Object(a.useState)({}),J=Object(u.a)(q,2),V=J[0],X=J[1],Y=Object(a.useState)({}),$=Object(u.a)(Y,2),B=$[0],H=$[1],K=Object(a.useState)([]),M=Object(u.a)(K,2),Q=M[0],W=M[1],Z=Object(a.useState)(!1),ee=Object(u.a)(Z,2),te=ee[0],ne=ee[1],ae=Object(a.useState)({}),ce=Object(u.a)(ae,2),se=ce[0],re=ce[1],ie=Object(a.useState)(!1),le=Object(u.a)(ie,2),oe=le[0],de=le[1],ue=Object(a.useState)(!1),je=Object(u.a)(ue,2),be=je[0],me=je[1],he=Object(a.useState)([{}]),fe=Object(u.a)(he,2),xe=fe[0],pe=fe[1],Oe=Object(a.useState)([]),ve=Object(u.a)(Oe,2),Ne=ve[0],ye=ve[1],ge=Object(a.useState)(!1),Ce=Object(u.a)(ge,2),we=Ce[0],Se=Ce[1],Ee=Object(a.useState)({text:"",events:[],searching:!1}),Le=Object(u.a)(Ee,2),Ae=Le[0],ke=Le[1];Object(a.useEffect)((function(){var e=function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Pe();case 2:t=e.sent,f(t),c(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var Pe=function(){var e=Object(d.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://testapi.photodino.de/cities/");case 2:return t=e.sent,e.next=5,t.data;case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_e=function(){var e=Object(d.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{"Content-Type":"application/json"}},e.next=3,b.a.post("https://testapi.photodino.de/cities/",t,n).then((function(e){var t=e.data;f("id2"===I?[t].concat(Object(i.a)(j)):[].concat(Object(i.a)(j),[t]))}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Fe=function(){var e=Object(d.a)(o.a.mark((function e(t,n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json"}},e.next=3,b.a.put("https://testapi.photodino.de/cities/".concat(n,"/"),t,a).then((function(e){var t=e.data;f(j.map((function(e){return e.id===n?Object(r.a)(Object(r.a)({},e),{},{name:t.name,code:t.code}):e})))}));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Ue=function(){var e=Object(d.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.delete("https://testapi.photodino.de/cities/".concat(t,"/"));case 2:f(j.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Re=function(){var e=Object(d.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://testapi.photodino.de/locations/",{params:{city_id:t}}).then((function(e){var t=e.data;W(t)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),De=function(){var e=Object(d.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(r.a)(Object(r.a)({},t),{},{city:y.id}),console.log(t),n={headers:{"Content-Type":"application/json"}},e.next=5,b.a.post("https://testapi.photodino.de/locations/",t,n).then((function(e){var t=e.data;W([t].concat(Object(i.a)(Q)))}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Te=function(){var e=Object(d.a)(o.a.mark((function e(t,n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(r.a)(Object(r.a)({},t),{},{city:y.id}),a={headers:{"Content-Type":"application/json"}},e.next=4,b.a.put("https://testapi.photodino.de/locations/".concat(n,"/"),t,a).then((function(e){var t=e.data;W(Q.map((function(e){return e.id===n?t:e})))}));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Ge=function(){var e=Object(d.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.delete("https://testapi.photodino.de/locations/".concat(t,"/"));case 2:W(Q.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){var e=function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ie();case 2:t=e.sent,pe(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var Ie=function(){var e=Object(d.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://testapi.photodino.de/events/");case 2:return t=e.sent,e.next=5,t.data;case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ze=function(){var e=Object(d.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.delete("https://testapi.photodino.de/events/".concat(t,"/"));case 2:pe(xe.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){var e=function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,qe();case 2:t=e.sent,ye(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[te,oe]);var qe=function(){var e=Object(d.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://testapi.photodino.de/locations/");case 2:return t=e.sent,e.next=5,t.data;case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)(a.Fragment,{children:[Object(m.jsx)(h,{setSortType:z,searchCity:P,setSearchCity:_,cities:j,setAddCity:D,setCities:f,setShowEvents:de,showEvents:oe,setAddEvent:me,setEvents:pe,events:xe,setSearchEvent:ke,searchEvent:Ae}),oe?Object(m.jsx)(a.Fragment,{children:Object(m.jsxs)("div",{className:"justify-content-center",children:[be&&Object(m.jsx)(C,{}),!be&&!we&&Object(m.jsx)(g,{events:Ae.searching?Ae.events:xe,deleteEvent:ze,setAddEvent:me,setShowEventLocation:Se,setEvent:re,setSearchEvent:ke,searchEvent:Ae}),we&&Object(m.jsx)(w,{event:se,allLocations:Ne,setShowEventLocation:Se})]})}):Object(m.jsxs)(a.Fragment,{children:[R&&Object(m.jsx)(p,{createCity:_e,updatingCity:V,setUpdatingCity:X,updateCity:Fe,setAddCity:D}),Object(m.jsxs)("div",{className:"d-flex flex-column",children:[te&&Object(m.jsx)(E,{createLocation:De,setAddLocation:ne}),B.id&&Object(m.jsx)(L,{updateLocation:B,updatingLocation:Te,setUpdateLocation:H})]}),Object(m.jsxs)("div",{className:"justify-content-center",children:[n?Object(m.jsx)("img",{className:"mx-auto",src:"https://www.icegif.com/wp-content/uploads/loading-icegif-1.gif",alt:"loading"}):!te&&!B.id&&!R&&Object(m.jsx)(x,{cities:P.searching?P.cities:j,deleteCity:Ue,setUpdatingCity:X,fetchLocations:Re,setCity:S,setAddCity:D,searchCity:P,setSearchCity:_}),y.id&&!te&&!B.id&&Object(m.jsx)(N,{city:y,locations:Q,setCity:S,setLocations:W,setUpdateLocation:H,setAddLocation:ne,deleteLocation:Ge})]})," "]})]})})};s.a.render(Object(m.jsx)(A,{}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.d261c37a.chunk.js.map