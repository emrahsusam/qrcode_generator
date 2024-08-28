var qrcode = null;

function makeCode() {
  var elText = document.getElementById("text");
  var elWidth = document.getElementById("width").value;
  var elHeight = document.getElementById("height").value;

  if (!elText.value) {
    alert("Input a text");
    elText.focus();
    return;
  }

  // Eski QR kodu kaldır
  document.getElementById("qrcode").innerHTML = "";

  // Yeni QR kodu oluştur (önizleme için sabit boyut)
  qrcode = new QRCode(document.getElementById("qrcode"), {
    text: elText.value,
    width: 300,
    height: 300,
  });
}

document
  .getElementById("downloadBtn")
  .addEventListener("click", function () {
    if (qrcode) {
      var elWidth = document.getElementById("width").value;
      var elHeight = document.getElementById("height").value;

      // Geçici bir canvas oluştur ve QR kodunu indirme boyutlarına göre çiz
      var tempCanvas = document.createElement("canvas");
      tempCanvas.width = elWidth;
      tempCanvas.height = elHeight;
      var context = tempCanvas.getContext("2d");
      context.drawImage(
        document.querySelector("#qrcode canvas"),
        0,
        0,
        elWidth,
        elHeight
      );

      var url = tempCanvas.toDataURL("image/png");
      var link = document.createElement("a");
      link.href = url;
      link.download = "qrcode.png";
      link.click();
    } else {
      alert("Generate a QR code first");
    }
  });

// İlk QR kodunu otomatik olarak oluştur
makeCode();

// Giriş alanlarında değişiklik olduğunda QR kodunu yeniden oluştur
$("#text, #width, #height")
  .on("blur", function () {
    makeCode();
  })
  .on("keydown", function (e) {
    if (e.keyCode == 13) {
      makeCode();
    }
  });