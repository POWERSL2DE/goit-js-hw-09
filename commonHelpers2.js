import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const a=document.querySelector(".feedback-form"),r="feedback-form-state",{email:l,message:o}=a.elements;let e;try{e=JSON.parse(localStorage.getItem(r))||{},e&&(l.value=e.email||"",o.value=e.message||"")}catch{console.error("PARSE ERROR")}a.addEventListener("input",t=>{e[t.target.name]=t.target.value.trim(),localStorage.setItem(r,JSON.stringify(e))});a.addEventListener("submit",t=>{if(t.preventDefault(),!l.value.trim()||!o.value.trim()){alert("Fill all the fields");return}localStorage.removeItem(r),a.reset(),console.log(e),e={}});
//# sourceMappingURL=commonHelpers2.js.map
