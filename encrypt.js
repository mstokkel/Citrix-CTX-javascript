function encrypt(pt){
    var ct = '';
    var last = 0;
    for (var ch in pt){
        var ct = ct + enc_letter(pt[ch], last);
        var last = last ^ pt[ch].charCodeAt();
    }
    return ct.replace(/\s*$/,"");
}

function enc_letter(ch, last=0){
    var c = ch.charCodeAt() ^ last;
    var h = c / 16;
    var l = c % 16;

    var a = h ^ 0x0A;
    var b = l ^ 0x05;
    var c = h;
    var d = l;

    var ach = String.fromCharCode(a+0x41);
    var bch = String.fromCharCode(b+0x41);
    var cch = String.fromCharCode(c+0x41);
    var dch = String.fromCharCode(d+0x41);

    return ach + bch + cch + dch;
}

var pt = "INSERT PLAINTEXT PASSWORD HERE";
encrypt(pt);