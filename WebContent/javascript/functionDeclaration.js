function motor(merk, tahun, harga) {
    var dataMotor = {}
    dataMotor.merk = merk;
    dataMotor.tahun = tahun;
    dataMotor.harga = harga;
    dataMotor.kualitas = function (baik, buruk) {
        this.baik = baik;
        this.buruk = buruk;

        return 'kualitas ' +dataMotor.merk+' sangat baik, namun'+this.baik+" "+this.buruk
    }
    return dataMotor; 
}

var astrea = motor('Honda Astrea', 2000, 5000000)
var mio = motor('Mio Z', 2012, 8000000)

console.log(mio.kualitas('bagus', 'jelek'));

console.log("Harga dari Mio dalah = "+mio.harga);
