// 1. Bir dəyişkən təyin edin və ona bir ədəd mənimsədin. Ədədin mənfi, müsbət və ya sıfır olub olmadığını yoxlayın və cavabı console-da göstərin.

// let number = -1

// if (number > 0) {
//     console.log(`${number} müsbət ədəddir`)
// } else if (number < 0) {
//     console.log(`${number} mənfi ədəddir`)
// } else {
//     console.log(`${number} - Sıfır`)
// }

// 2.Bir dəyişkən təyin edin və ona bir ədəd mənimsədin.Həmin ədədin faktorialını tapın və cavabı console-da çap edin.

// let number = 4
// let sum = 1
// for (let i = 1; i<=number; i++) {
//     sum *= i
// }
// console.log(sum)

// 3. Bir dəyişkən təyin edin və ona bir ay nömrəsi mənimsədin, ona qarşılıq gələn fəsilin adını yazdıran alqoritm yazın (switch case)

// let input = 9

// switch (input) {
//     case 1:
//     case 2:
//     case 12:
//         console.log("Qış fəsilidir")
//         break;
//     case 3:
//     case 4:
//     case 5:
//         console.log("Yaz fəsilidir")
//         break;
//     case 6:
//     case 7:
//     case 8:
//         console.log("Yay fəsilidir")
//         break;
//     case 9:
//     case 10:
//     case 11:
//         console.log("Payız fəsilidir")
//         break;
//     default:
//         console.log("Belə bir ay yoxdur")
// }

// 4. Bir dəyişkən təyin edin və ona bir ədəd mənimsədin, ədədin mükəmməl olub olmadığını yoxlayan alqoritm yazın və console-da ‘mükəmməldir’ və ya ‘mükəmməl deyil’ yazdırın.

// let number = 499
// let sum = 0
// for (let i = 0; i < number; i++) {
//     if (number % i == 0) {
//         sum += i
//     }
// }
// if (number === sum) {
//     console.log(`${number} mükəmməl rəqəmdir`)
// } else {
//     console.log(`${number} mükəmməl rəqəm deyil`)
// }