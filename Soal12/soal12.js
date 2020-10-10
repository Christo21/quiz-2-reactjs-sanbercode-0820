class BangunDatar {
    constructor(nama) {
        this._nama = nama;
    }
    luas() {
        return "";
    }
    keliling() {
        return "";
    }

    get nama() {
        return this._nama;
    }
    set nama(nama) {
        this._nama = nama;
    }
}

class Lingkaran extends BangunDatar {
    constructor(nama, jarijari) {
        super(nama);
        this._jarijari = jarijari;
    }
    luas() {
        return 22 / 7 * this._jarijari * this._jarijari;
    }
    keliling() {
        return 2 * 22 / 7 * this._jarijari;
    }
    get jarijari() {
        return this._jarijari;
    }
    set jarijari(jarijari) {
        this._jarijari = jarijari;
    }
}

class Persegi extends BangunDatar {
    constructor(nama, sisi) {
        super(nama);
        this._sisi = sisi;
    }
    luas() {
        return this._sisi * this._sisi;
    }
    keliling() {
        return 4 * this._sisi;
    }
    get sisi() {
        return this._sisi;
    }
    set sisi(sisi) {
        this._sisi = sisi;
    }
}

var bangunDatar = new BangunDatar("segitiga");
var lingkaran = new Lingkaran("lingkaran", 14);
var persegi = new Persegi("persegi", 8);

console.log("Luas Bangun Datar : ", bangunDatar.luas());
console.log("Keliling Bangun Datar : ", bangunDatar.keliling());
console.log("Luas Lingkaran : ", lingkaran.luas());
console.log("Keliling Lingkaran : ", lingkaran.keliling());
console.log("Luas Persegi : ", persegi.luas());
console.log("Keliling Persegi : ", persegi.keliling());