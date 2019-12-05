function beautify(){
    try{
        $("#jsoninput").val(JSON.stringify(JSON.parse($("#jsoninput").val()), null, 4))
        // $("#jsoninput").val(subEscapes($("#jsoninput").val()))
        message("Success", "green")
    }
    catch(e){
        message(e, "red")
    }
}
function message(m, color){
    $("#error").text(m).css("color", color)
}
function subEscapes(string) {
    const re = /\\(["\\\/bnrt]|u([a-fA-F0-9]{4}))/g;
    const map = {
        '"': '"',
        '\\': '\\',
        '/': '/',
        b: '\b',
        n: '\n',
        r: '\r',
        t: '\t',
    };

    return string.replace(re, (_, char, hexCodePoint) => {
        if (char[0] === 'u') {
            return String.fromCodePoint(parseInt(hexCodePoint, 16));
        } else {
            return map[char];
        }
    })
}