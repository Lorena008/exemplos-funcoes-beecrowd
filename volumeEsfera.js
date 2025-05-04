function calcularVolumeEsfera(raio) {
    const pi = 3.14159;
    const volume = (4 / 3) * pi * Math.pow(raio, 3);
    return volume.toFixed(3);
  }
  
  const raio = 5; 
  console.log("VOLUME = " + calcularVolumeEsfera(raio));
  