(()=>{const e=document.getElementById("buttonInstall");let t;window.addEventListener("beforeinstallprompt",(n=>{n.preventDefault(),t=n,e.classList.toggle("hidden",!1)})),e.addEventListener("click",(async()=>{if(t){t.prompt();const{outcome:e}=await t.userChoice;"accepted"===e?console.log("App installed"):console.log("App not installed"),t=null}})),window.addEventListener("appinstalled",(e=>{console.log("App installed")}))})();