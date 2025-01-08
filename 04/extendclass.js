class Media {
    constructor(info) {
        this.publishDate = info.publishDate;
        this.name = info.name;
    }
}

class Song extends Media {
    constructor(songData) {
        super(songData);
        this.artlist = songData.artlist;
    }
}
const mySong = new Song({
    artlist: "Queen" ,
    name: "Bohemian Rhapsody",
    publishDate: 1975,
});

console.log(mySong);