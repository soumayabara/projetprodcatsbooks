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
    url: "https://ia800206.us.archive.org/4/items/goodwives_0903_librivox/goodwives_01_alcott_64kb.mp3",
    title: "Chapter 01",
    album: "Good Wives"
});
list2.add({
    url: "http://www.archive.org/download/goodwives_0903_librivox/goodwives_02_alcott_64kb.mp3",
    title: "Chapter 02",
    album: "Good Wives"
});
list2.add({
    url: "http://www.archive.org/download/goodwives_0903_librivox/goodwives_03_alcott_64kb.mp3",
    title: "Chapter 03",
    album: "Good Wives"
});
list2.add({
    url: "http://www.archive.org/download/goodwives_0903_librivox/goodwives_04_alcott_64kb.mp3",
    title: "Chapter 04",
    album: "Good Wives"
});
list2.add({
    url: "http://www.archive.org/download/goodwives_0903_librivox/goodwives_05_alcott_64kb.mp3",
    title: "Chapter 05",
    album: "Good Wives"
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