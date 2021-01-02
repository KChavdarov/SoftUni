function songs(input) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    let count = input.shift();
    let type = input.pop();
    let playlist = [];

    for (const element of input) {
        let [typeList, name, time] = element.split('_');
        let song = new Song(typeList, name, time);
        playlist.push(song);
    }
    if (type == 'all') {
        for (const track of playlist) {
            console.log(track.name);
        }
    } else {
        let filtered = playlist.filter(a => a.typeList === type);
        for (const track of filtered) {
            console.log(track.name);
        }
    }
}
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'
]);