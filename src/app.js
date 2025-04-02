function generadorExcusas(){
    let quien = ['My dog', 'My grandma', 'The mail man', 'My bird' ];
    let como = [ 'ate', 'peed', 'crushed', 'broken'];
    let que = ['my homeworks', 'my phone', 'the car'];
    let cuando = ['before the class', 'when I was spleeping', 'while I was exercising', 'during my lunch', 'while I was playing'];

    let quienidx = Math.floor(Math.random() * quien.length);
    let comoidx = Math.floor(Math.random() * como.length);
    let queidx = Math.floor(Math.random() * que.length);
    let cuandoidx = Math.floor(Math.random() * cuando.length);

    let excusa = quien[quienidx] + " " + como[comoidx] + " " + que[queidx] + " " + cuando[cuandoidx];

    document.getElementById("excusa-random").innerHTML = excusa;

    }