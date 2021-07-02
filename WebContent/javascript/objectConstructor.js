function motorCunstuctor(merk, tahun, harga) {
    this.merk = merk;
    this.tahun = tahun;
    this.harga = harga;
    this.kualitas = function () {
        return 'kualitas dari '+this.merk+' adalah baru'
    }
}
// new utk membuat object kosong
var outputMotor = new motorCunstuctor('Yamaha', 1999, 5000000)

console.log(outputMotor.tahun);