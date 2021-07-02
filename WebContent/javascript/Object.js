function Buku (judul, harga, penulis){
	var propBuku = {}
	propBuku.judul = judul;
	propBuku.harga = harga;
	propBuku.penulis = penulis;
	return propBuku;
}

var PropBuku1 = Buku('Spring in Action', '360979','Craig Walls')

console.log(PropBuku1)