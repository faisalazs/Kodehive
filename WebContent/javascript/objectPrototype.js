function martabak(ukuran, jenis, harga){
 this.ukuran = ukuran;
 this.jenis = jenis;
 this.harga = harga;   
}

martabak.prototype.pembeli = function(quantity) {
    var biaya = this.harga * quantity;
    return "biaya pembelian "+this.ukuran+" adalah "+biaya
}

martabak = new martabak("Besar", "Martabak Bulan Premium", 35000);