const volumeBalokKubus = (panjang, ...rest) => {
    if (rest.length == 1) {
        return "jumlah parameter kurang"
    }

    if (rest.length == 0) {
        return panjang * panjang * panjang
    } else {
        return panjang * rest[0] * rest[1]
    }
}

const volumeBalok = volumeBalokKubus(3,4,5)
const volumeKubus = volumeBalokKubus(3)

const volume = `Volume Balok : ${volumeBalok}, Volume Kubus : ${volumeKubus}`

console.log(volume);
