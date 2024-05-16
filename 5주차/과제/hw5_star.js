function printStarPyramid() {
    let rows = 5;
    let output = '';
    
    for (let i = 1; i <= rows; i++) {
        let row = '';
        for (let j = 0; j < rows - i; j++) {
            row += ' ';
        }
        for (let k = 0; k < i; k++) {
            row += '* ';
        }
        output += row.trim() + '\n';
    }

    document.getElementById('starOutput').textContent = output;
}
