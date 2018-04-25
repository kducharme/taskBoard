function* idMaker() {
    let index = 0;
    while (index < index + 1)
        yield index++;
}

const taskID = idMaker();
const buttonID = idMaker();