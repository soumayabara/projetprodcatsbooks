class StackAndQueue {
    constructor() {
        this.pointer = this.holder = this.peak = null;
    }
    add(data) {
        if (!this.peak) {
            this.pointer = this.holder = this.peak = new Element(data);
            return;
        }
        let temp = this.holder;
        this.holder = this.holder.next = new Element(data);
        this.holder.previous = temp;
    }
    next() {
        if (this.pointer && this.pointer.next) {
            this.pointer = this.pointer.next;
        }
    }
    previous() {
        if (this.pointer && this.pointer.previous) {
            this.pointer = this.pointer.previous;
        }
    }
    show() {
        if (this.pointer) {
            return this.pointer.data;
        }
        return null;
    }
}
class Element {
    constructor(data, next, previous) {
        this.data = data;
        this.next = next || null;
        this.previous = previous || null;
    }
}
let list2 = new StackAndQueue();

//load some songs those are exist online
list2.add({
    url: "http://feeds.soundcloud.com/stream/723223927-swordandlaser-370-death-is-her-favorite-character.mp3",
    title: "#370",
    album: "Chaotic Neutral"
});
list2.add({
    url: "http://feeds.soundcloud.com/stream/731533105-swordandlaser-371-science-fungus.mp3",
    title: "#371",
    album: "Generation Sword & Laser"
});
list2.add({
    url: "http://feeds.soundcloud.com/stream/744461425-swordandlaser-372-hmmm-hmmm.mp3",
    title: "#372",
    album: "Hmmm... hmmm."
});
list2.add({
    url: "http://feeds.soundcloud.com/stream/752220916-swordandlaser-373-generation-sword-laser.mp3",
    title: "#373",
    album: "Generation Sword & Laser"
});
list2.add({
    url: "http://feeds.soundcloud.com/stream/760297075-swordandlaser-374-chaotic-neutral.mp3",
    title: "#374",
    album: "Chaotic Neutral"
});

function add(type) {
        if (type === "audio") {
        list2.add({
            url: document.getElementById("url-audio").value,
            title: document.getElementById("title-audio").value,
            album: document.getElementById("album-audio").value
        });
    }
}


function show(type) {

    if (type === "audio") {
        if (list2.show()) {
            document.getElementById("audio").src = list2.show().url || "";
            document.getElementById("audio-info").innerHTML = (list2.show().title || "No title") + " - " + (list2.show().album || "No album");
            document.getElementById("audio").play();
        } else {
            document.getElementById("audio").src = "";
            document.getElementById("audio-info").innerHTML = "No title - No album";
        }
    }
}

show("audio");
document.getElementById("audio").pause();

function next(type) {
    list2.next();
    show(type);
}

function previous(type) {
    list2.previous();
    show(type);
}