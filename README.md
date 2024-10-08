# QRCode.js
QRCode.js is javascript library for making QRCode. QRCode.js supports Cross-browser with HTML5 Canvas and table tag in DOM.
QRCode.js has no dependencies.

## Basic Usages
```
<div id="qrcode"></div>
<script type="text/javascript">
new QRCode(document.getElementById("qrcode"), "https://www.linkedin.com/in/emrahsusam/");
</script>
```

or with some options

```
<div id="qrcode"></div>
<script type="text/javascript">
var qrcode = new QRCode(document.getElementById("qrcode"), {
	text: "https://www.linkedin.com/in/emrahsusam/",
	width: 128,
	height: 128,
	colorDark : "#000000",
	colorLight : "#ffffff",
	correctLevel : QRCode.CorrectLevel.H
});
</script>
```

and you can use some methods

```
qrcode.clear(); // clear the code.
qrcode.makeCode("https://www.linkedin.com/in/emrahsusam/"); // make another code.
```

## Browser Compatibility
IE6~10, Chrome, Firefox, Safari, Opera, Mobile Safari, Android, Windows Mobile, ETC.

## License
MIT License

## Contact
[Linkedin](https://www.linkedin.com/in/emrahsusam/)


