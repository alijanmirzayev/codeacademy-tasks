// Göndərilmiş textdəki hərflərin sayını tapan function yazın (let text= “ Salam ”

function countLetter(text) {
    return text.trim().length
}

console.log(countLetter(" Salam "))

// Göndərilmiş sözdəki sait səslərin sayını qaytaran function yazın ( let saitsəslər = “aeiouAEIOU”)
function saitSeslerSayi(text) {
    let saitSesler = "aeiouAEIOU"
    let count = 0
    for (let i = 0; i < text.length; i++) {
        if (saitSesler.includes(text.charAt(i))) {
            count++
        }
    }
    return count
}

console.log(saitSeslerSayi("Alik"))

// Göndərilmiş texti tərsinə çevirən function yazın ( ‘salam’ ⇒ ’malas’ )

function reverseText(text) {
    let tempText = "";
    for (let i = 0; i <= text.length; i++) {
        tempText += text.charAt(text.length - i)
    }
    return tempText
}

console.log(reverseText("salam"))

// Verilən bir stringin içindəki sözlərin sayını tapan function yazın

function countWords(text) {
    return text.trim().split(" ").length
}

console.log(countWords("Salam Necesiz?"))

// Verilen bir tarix aralığındaki gün sayını tapan function yazın ( "2023-01-05" , "2023-01-10" output: 5 )

function gunFerqi(tarix1, tarix2) {
    const tarix2Millisaniye = new Date(tarix2).getTime();
    const tarix1Millisaniye = new Date(tarix1).getTime();
    let millisaniyeFerqi = tarix2Millisaniye - tarix1Millisaniye
    return Math.round(millisaniyeFerqi / (1000 * 60 * 60 * 24))
}

console.log(gunFerqi("2023-01-01", "2023-01-10"))