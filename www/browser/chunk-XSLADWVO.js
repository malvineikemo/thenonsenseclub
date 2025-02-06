import{h as d}from"./chunk-72KDLSWN.js";import{b as p,g as l,h as f,k,l as m}from"./chunk-DNVHY64Q.js";import{g as b}from"./chunk-AHMUXBFN.js";var I=":host{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:200px;direction:ltr;z-index:0}:host .picker-before,:host .picker-after{position:absolute;width:100%;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:1;pointer-events:none}:host .picker-before{top:0;height:83px}:host .picker-before{inset-inline-start:0}:host .picker-after{top:116px;height:84px}:host .picker-after{inset-inline-start:0}:host .picker-highlight{border-radius:var(--highlight-border-radius, 8px);left:0;right:0;top:50%;bottom:0;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;position:absolute;width:calc(100% - 16px);height:34px;-webkit-transform:translateY(-50%);transform:translateY(-50%);background:var(--highlight-background);z-index:-1}:host input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host ::slotted(ion-picker-column:first-of-type){text-align:start}:host ::slotted(ion-picker-column:last-of-type){text-align:end}:host ::slotted(ion-picker-column:only-child){text-align:center}:host .picker-before{background:-webkit-gradient(linear, left top, left bottom, color-stop(20%, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1)), to(rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0.8)));background:linear-gradient(to bottom, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1) 20%, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0.8) 100%)}:host .picker-after{background:-webkit-gradient(linear, left bottom, left top, color-stop(20%, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1)), to(rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0.8)));background:linear-gradient(to top, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1) 20%, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0.8) 100%)}:host .picker-highlight{background:var(--highlight-background, var(--ion-color-step-150, var(--ion-background-color-step-150, #eeeeef)))}",x=I,M=":host{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:200px;direction:ltr;z-index:0}:host .picker-before,:host .picker-after{position:absolute;width:100%;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:1;pointer-events:none}:host .picker-before{top:0;height:83px}:host .picker-before{inset-inline-start:0}:host .picker-after{top:116px;height:84px}:host .picker-after{inset-inline-start:0}:host .picker-highlight{border-radius:var(--highlight-border-radius, 8px);left:0;right:0;top:50%;bottom:0;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;position:absolute;width:calc(100% - 16px);height:34px;-webkit-transform:translateY(-50%);transform:translateY(-50%);background:var(--highlight-background);z-index:-1}:host input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host ::slotted(ion-picker-column:first-of-type){text-align:start}:host ::slotted(ion-picker-column:last-of-type){text-align:end}:host ::slotted(ion-picker-column:only-child){text-align:center}:host .picker-before{background:-webkit-gradient(linear, left top, left bottom, color-stop(20%, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1)), color-stop(90%, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0)));background:linear-gradient(to bottom, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1) 20%, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0) 90%)}:host .picker-after{background:-webkit-gradient(linear, left bottom, left top, color-stop(30%, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1)), color-stop(90%, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0)));background:linear-gradient(to top, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1) 30%, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0) 90%)}",w=M,O=(()=>{let h=class{constructor(i){p(this,i),this.ionInputModeChange=m(this,"ionInputModeChange",7),this.useInputMode=!1,this.isInHighlightBounds=t=>{let{highlightEl:e}=this;if(!e)return!1;let n=e.getBoundingClientRect(),o=t.clientX<n.left||t.clientX>n.right,a=t.clientY<n.top||t.clientY>n.bottom;return!(o||a)},this.onFocusOut=t=>{let{relatedTarget:e}=t;(!e||e.tagName!=="ION-PICKER-COLUMN"&&e!==this.inputEl)&&this.exitInputMode()},this.onFocusIn=t=>{let{target:e}=t;if(e.tagName==="ION-PICKER-COLUMN"&&!this.actionOnClick){let n=e;n.numericInput?this.enterInputMode(n,!1):this.exitInputMode()}},this.onClick=()=>{let{actionOnClick:t}=this;t&&(t(),this.actionOnClick=void 0)},this.onPointerDown=t=>{let{useInputMode:e,inputModeColumn:n,el:o}=this;if(this.isInHighlightBounds(t)){if(e)t.target.tagName==="ION-PICKER-COLUMN"?n&&n===t.target?this.actionOnClick=()=>{this.enterInputMode()}:this.actionOnClick=()=>{this.enterInputMode(t.target)}:this.actionOnClick=()=>{this.exitInputMode()};else{let r=o.querySelectorAll("ion-picker-column.picker-column-numeric-input").length===1?t.target:void 0;this.actionOnClick=()=>{this.enterInputMode(r)}}return}this.actionOnClick=()=>{this.exitInputMode()}},this.enterInputMode=(t,e=!0)=>{let{inputEl:n,el:o}=this;!n||!o.querySelector("ion-picker-column.picker-column-numeric-input")||(this.useInputMode=!0,this.inputModeColumn=t,e?(this.destroyKeypressListener&&(this.destroyKeypressListener(),this.destroyKeypressListener=void 0),n.focus()):(o.addEventListener("keypress",this.onKeyPress),this.destroyKeypressListener=()=>{o.removeEventListener("keypress",this.onKeyPress)}),this.emitInputModeChange())},this.onKeyPress=t=>{let{inputEl:e}=this;if(!e)return;let n=parseInt(t.key,10);Number.isNaN(n)||(e.value+=t.key,this.onInputChange())},this.selectSingleColumn=()=>{let{inputEl:t,inputModeColumn:e,singleColumnSearchTimeout:n}=this;if(!t||!e)return;let o=Array.from(e.querySelectorAll("ion-picker-column-option")).filter(r=>r.disabled!==!0);if(n&&clearTimeout(n),this.singleColumnSearchTimeout=setTimeout(()=>{t.value="",this.singleColumnSearchTimeout=void 0},1e3),t.value.length>=3){let r=t.value.length-2,s=t.value.substring(r);t.value=s,this.selectSingleColumn();return}let a=o.find(({textContent:r})=>r.replace(/^0+(?=[1-9])|0+(?=0$)/,"")===t.value);if(a){e.setValue(a.value);return}if(t.value.length===2){let r=t.value.substring(t.value.length-1);t.value=r,this.selectSingleColumn()}},this.searchColumn=(t,e,n="start")=>{let o=n==="start"?/^0+/:/0$/,a=Array.from(t.querySelectorAll("ion-picker-column-option")).find(r=>r.disabled!==!0&&r.textContent.replace(o,"")===e);a&&t.setValue(a.value)},this.selectMultiColumn=()=>{let{inputEl:t,el:e}=this;if(!t)return;let n=Array.from(e.querySelectorAll("ion-picker-column")).filter(u=>u.numericInput),o=n[0],a=n[1],r=t.value,s;switch(r.length){case 1:this.searchColumn(o,r);break;case 2:let u=t.value.substring(0,1);r=u==="0"||u==="1"?t.value:u,this.searchColumn(o,r),r.length===1&&(s=t.value.substring(t.value.length-1),this.searchColumn(a,s,"end"));break;case 3:let c=t.value.substring(0,1);r=c==="0"||c==="1"?t.value.substring(0,2):c,this.searchColumn(o,r),s=r.length===1?t.value.substring(1):t.value.substring(2),this.searchColumn(a,s,"end");break;case 4:let g=t.value.substring(0,1);r=g==="0"||g==="1"?t.value.substring(0,2):g,this.searchColumn(o,r);let v=r.length===1?t.value.substring(1,t.value.length):t.value.substring(2,t.value.length);this.searchColumn(a,v,"end");break;default:let C=t.value.length-4,y=t.value.substring(C);t.value=y,this.selectMultiColumn();break}},this.onInputChange=()=>{let{useInputMode:t,inputEl:e,inputModeColumn:n}=this;!t||!e||(n?this.selectSingleColumn():this.selectMultiColumn())},this.emitInputModeChange=()=>{let{useInputMode:t,inputModeColumn:e}=this;this.ionInputModeChange.emit({useInputMode:t,inputModeColumn:e})}}preventTouchStartPropagation(i){i.stopPropagation()}componentWillLoad(){d(this.el).addEventListener("focusin",this.onFocusIn),d(this.el).addEventListener("focusout",this.onFocusOut)}exitInputMode(){return b(this,null,function*(){let{inputEl:i,useInputMode:t}=this;!t||!i||(this.useInputMode=!1,this.inputModeColumn=void 0,i.blur(),i.value="",this.destroyKeypressListener&&(this.destroyKeypressListener(),this.destroyKeypressListener=void 0),this.emitInputModeChange())})}render(){return l(f,{key:"f92214a09dc85b65873676f40fde2b802960e704",onPointerDown:i=>this.onPointerDown(i),onClick:()=>this.onClick()},l("input",{key:"6da37f75aca4ea1c9cb3bc733ebda2116279f313","aria-hidden":"true",tabindex:-1,inputmode:"numeric",type:"number",onKeyDown:i=>{var t;i.key==="Enter"&&((t=this.inputEl)===null||t===void 0||t.blur())},ref:i=>this.inputEl=i,onInput:()=>this.onInputChange(),onBlur:()=>this.exitInputMode()}),l("div",{key:"298e99d83dd3f5bf2798150bab0bb4024af472fa",class:"picker-before"}),l("div",{key:"ea578f04eb562a4dc6d6cc92de133dcb9fb7f42a",class:"picker-after"}),l("div",{key:"84567824956dfe967992a629904836ba8b75b3ec",class:"picker-highlight",ref:i=>this.highlightEl=i}),l("slot",{key:"df81f8fb90e1f649b608328034528f5c31c70c3b"}))}get el(){return k(this)}};return h.style={ios:x,md:w},h})();export{O as ion_picker};
