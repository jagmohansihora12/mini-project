// Timer functionality
let timerInterval;
function startTimer() {
    const seconds = parseInt(document.getElementById('timerInput').value);
    let timeLeft = seconds;
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            document.getElementById('timerDisplay').textContent = "Time's up!";
        } else {
            timeLeft--;
            document.getElementById('timerDisplay').textContent = formatTime(timeLeft);
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Stopwatch functionality
let stopwatchInterval;
let stopwatchTime = 0;

function startStopwatch() {
    const input = document.getElementById('timerInput').value;
    const seconds = parseInt(input);
    if (isNaN(seconds) || seconds <= 0) {
        alert("Please enter a valid number greater than zero.");
        return;
    }
    // Rest of the timer logic...
}


function startStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = setInterval(() => {
        stopwatchTime++;
        document.getElementById('stopwatchDisplay').textContent = formatStopwatchTime(stopwatchTime);
    }, 1000);
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchTime = 0;
    document.getElementById('stopwatchDisplay').textContent = formatStopwatchTime(stopwatchTime);
}

function formatStopwatchTime(time) {
    const hours = Math.floor(time / 3600);
    const mins = Math.floor((time % 3600) / 60);
    const secs = time % 60;
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function resetTimer() {
    clearInterval(resetTimer);
    stopwatchTime = 0;
    document.getElementById('stopwatchDisplay').textContent = formatStopwatchTime(stopwatchTime);
}

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    if (taskText === '') return
    const taskList = document.getElementById('tasks');
    const taskItem = document.createElement('li')
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskSpan.onclick = () => taskSpan.classList.toggle('completed')
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove';
    removeButton.onclick = () => taskList.removeChild(taskItem)
    taskItem.appendChild(taskSpan);
    taskItem.appendChild(removeButton);
    taskList.appendChild(taskItem)
    taskInput.value = '';
}
