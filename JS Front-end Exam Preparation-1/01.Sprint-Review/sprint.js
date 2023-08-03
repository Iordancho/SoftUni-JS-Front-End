function solve(input) {
    const assingeesNumber = input.shift();
    const initialBoard = input.slice(0, Number(assingeesNumber));
    const commands = input.slice(Number(assingeesNumber), input.length);

    const board = initialBoard.reduce((acc, curr) => {
        const [asignee, taskId, title, status, points] = curr.split(':');
        
        if(!acc.hasOwnProperty(asignee)) {
            acc[asignee] = [];
        }
        acc[asignee].push({taskId, title, status, points: Number(points)});
        
        return acc;
    }, {})

    const inputCommands = {
        "Add New": addNew,
        "Change Status": changeStatus,
        "Remove Task": removeTask,
    };


    commands.forEach(command => {
        const [commandName, ...rest] = command.split(':');
        inputCommands[commandName](...rest);
    });

    const toDoPoints = calculateSum("ToDo");
    const inProgressPoints = calculateSum("In Progress");
    const codeReviewPoints = calculateSum("Code Review");
    const donePoints = calculateSum("Done");

    console.log(`ToDo: ${toDoPoints}pts`)
    console.log(`In Progress: ${inProgressPoints}pts`)
    console.log(`Code Review: ${codeReviewPoints}pts`)
    console.log(`Done Points: ${donePoints}pts`)
    const sds = toDoPoints + inProgressPoints + codeReviewPoints;
    
    if(donePoints >= sds) {
        console.log('Sprint was successful!')
    } else {
        console.log('Sprint was unsuccessful...');
    }



    function calculateSum(status) {
        return totalPoints = Object.values(board).reduce((acc, curr) => {
            const boardTotal = curr
            .filter(t => t.status === status)
            .reduce((taskTotal, task) => taskTotal + task.points, 0)
    
            return acc + boardTotal;
        }, 0);
    }

    function addNew(assignee, taskId, title, status, points) {
        if(!board.hasOwnProperty(assignee)) {
            console.log(`Assignee ${assignee} does not exist on the board!`)
            return;
        }
        board[assignee].push({taskId, title, status, points: Number(points)})
    }
    function changeStatus(assignee, taskId, status) {
        if(!board.hasOwnProperty(assignee)) {
            console.log(`Assignee ${assignee} does not exist on the board!`)
            return;
        }
        const task = board[assignee].find(t => t.taskId === taskId);
        if(!task) {
            console.log(`Task with ID ${taskId} does not exist for ${assignee}!`)
            return;
        }
        task.status = status;
    }
    function removeTask(assignee, index) {
        if(!board.hasOwnProperty(assignee)) {
            console.log(`Assignee ${assignee} does not exist on the board!`)
            return;
        }
        if(index < 0 || index >= board[assignee].length){
            console.log('Index is out of range!')
            return;
        }
        board[assignee].splice(index, 1);
    }
}



