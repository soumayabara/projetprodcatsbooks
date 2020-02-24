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

// Load List

list2.add({
    url: "http://traffic.libsyn.com/rejoyce/364_-_Be_Italian_-_1-23-17_12.51_PM.mp3?dest-id=15579",
    title: "Be Italian",
    album: "Re:Joyce Episode 364 "
});
list2.add({
    url: "http://traffic.libsyn.com/rejoyce/365__Soubrettes__Silken_Thomas_-_1-26-17_2.13_PM.mp3?dest-id=15579",
    title: "Soubrettes & Silken Thomas",
    album: "Re:Joyce Episode 365"
});
list2.add({
    url: "http://traffic.libsyn.com/rejoyce/366_-_Gesundheidt_-_1-31-17_1.09_PM.mp3?dest-id=15579",
    title: "Gesundheit!",
    album: "Re:Joyce Episode 366"
});
list2.add({
    url: "http://traffic.libsyn.com/rejoyce/367__Theatrical_Turns__Toxic_Gas_-_2-6-17_6.05_PM.mp3?dest-id=15579",
    title: "Theatrical Turns & Toxic Gas",
    album: "Re:Joyce Episode 367"
});
list2.add({
    url: "http://traffic.libsyn.com/rejoyce/368__Cavalcades__Comets_Tails__-_2-14-17_3.34_PM.mp3?dest-id=15579",
    title: "Cavalcades & Comets’ Tails",
    album: "Re:Joyce Episode 368"
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