import{x as c,b as l,c as d,d as i,e,f as s}from"./index.21c4003b.js";const n={class:"grid"},p={class:"col-12"},_={class:"card"},m=e("h5",null,"Advanced",-1),r=e("h5",null,"Basic",-1),F={__name:"File",setup(u){const t=c(),o=()=>{t.add({severity:"info",summary:"Success",detail:"File Uploaded",life:3e3})};return(h,f)=>{const a=l("FileUpload");return d(),i("div",n,[e("div",p,[e("div",_,[m,s(a,{name:"demo[]",url:"./upload.php",onUpload:o,multiple:!0,accept:"image/*",maxFileSize:1e6}),r,s(a,{mode:"basic",name:"demo[]",url:"./upload.php",accept:"image/*",maxFileSize:1e6,onUpload:o})])])])}}};export{F as default};
