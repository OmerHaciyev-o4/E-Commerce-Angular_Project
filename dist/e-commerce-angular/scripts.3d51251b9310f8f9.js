function imageDragDropLoadFunc(){console.log("yes work"),document.querySelectorAll(".drop-zone__input").forEach(a=>{const e=a.closest(".drop-zone");e.addEventListener("click",r=>{a.click()}),a.addEventListener("change",r=>{a.files.length&&updateThumbnail(e,a.files[0])}),e.addEventListener("dragover",r=>{r.preventDefault(),e.classList.add("drop-zone--over")}),["dragleave","dragend"].forEach(r=>{e.addEventListener(r,o=>{e.classList.remove("drop-zone--over")}),e.addEventListener("drop",o=>{o.preventDefault(),o.dataTransfer.files.length&&(a.files=o.dataTransfer.files,updateThumbnail(e,o.dataTransfer.files[0])),e.classList.remove("drop-zone--over")})})})}function updateThumbnail(a,e){let r=a.querySelector(".drop-zone__thumb");if(a.querySelector(".drop-zone__prompt")&&a.querySelector(".drop-zone__prompt").remove(),r||(r=document.createElement("div"),r.classList.add("drop-zone__thumb"),a.appendChild(r)),r.dataset.label=e.name,e.type.startsWith("image/")){const o=new FileReader;o.readAsDataURL(e),o.onload=()=>{r.style.backgroundImage=`url('${o.result}')`}}else r.style.backgroundImage=null}