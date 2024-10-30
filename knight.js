let movesArray = [
    [2, 1], [2, -1], [-2, 1], [-2, -1],
    [1, 2], [1, -2], [-1, 2], [-1, -2]
]

function knightMoves(current, end) {
    let queue = [];
    current = [current, []]
    queue.push(current);
    let reached = false;
    while(queue.length && !reached) {
        if(current[0][0] == end[0] && current[0][1] == end[1]) {
            reached = true;
        } else {
            movesArray.forEach(element => {
                let x = current[0][0] + element[0];
                let y = current[0][1] + element[1];
                if( x >= 0 && x <= 7 && y >= 0 && y <= 7) {
                    let ancestors = new Array();
                    current[1].forEach(ancest => {
                        ancestors.push(ancest)
                    })
                    ancestors.push(current[0])
                    queue.push([[x, y], ancestors])
                }
            })
            current = queue.shift();
        }
    }
    let finalString = "";
    let steps = 0;
    for(let i = 0; i < current[1].length; i++) {
        steps++;
        finalString += "[" + current[1][i] + "] -> "
    }
    finalString += "[" + current[0] + "]";
    // console.log(current[1])
    // console.log(current[0])
    console.log("Getting from start to end took " + steps + " steps. Here is the path:")
    console.log(finalString)
    return current;
}
knightMoves([2, 5], [0, 7])
