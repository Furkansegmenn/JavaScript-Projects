const insert = document.getElementById("insert");

window.addEventListener("keydown", (event) => {
	insert.innerHTML = ` 
<div class="key">
${event.key == " " ? "space" : event.key}
<small>event key</small>
</div>
<div class="key">
${event.keyCode}
<small>event keycode</small>
</div>
<div class="key">
${event.key == "*" ? "times" : event.code && event.key == "-" ? "minus" : event.code} 
<small>event code</small>
</div>`;
	console.log(event);
});
