function volume_sphere() {
  const radius = parseFloat(document.getElementById("radius").value);
  const volumeField = document.getElementById("volume");
  let volume = NaN;

  if (!isNaN(radius) && radius >= 0) {
    volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    volumeField.value = volume.toFixed(4);
  } else {
    volumeField.value = "NaN";
  }

  return false; // form reload rokne ke liye
}

window.onload = document.getElementById("MyForm").onsubmit = volume_sphere;
