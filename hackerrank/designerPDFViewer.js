function designerPdfViewer(h, word) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let splitWord = word.split('');
    var output = [];
    var index
    var result = 1;

    splitWord.forEach(element => {
        index = alpha.indexOf(element);
        output.push(h[index])
    });
    
    result = Math.max(...output)
    result *= (output.length)

    return result
};

let alpha = [1,3,1,3,1,4,1,3,2,5,5,5,5,1,1,5,5,1,5,2,5,5,5,5,5,5];
let wrd = 'torn';

console.log(designerPdfViewer(alpha, wrd));