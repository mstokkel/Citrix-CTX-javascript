function decrypt(ct) {
    var rm = ct.replace(/(.{4})/g, "$1 ").replace(/\s*$/,"");;
    var range = rm.split(' ');
    var pt = '';
    var last = 0;
    for (var i in range) {
        var pc = dec_letter(range[i], last);
        var pt = pt + pc;
        var last = last ^ pc.charCodeAt();
    }
    return pt;
}

function dec_letter(ct, last=0) {

    var c = ct[2].charCodeAt() - 1 & 0x0f;
    var d = ct[3].charCodeAt() - 1 & 0x0f;

    var x = c*16+d;

    var pc = String.fromCharCode(x^last);

    return pc;
}

var ct = "INSERT ENCODED PASSWORD HERE";
decrypt(ct);