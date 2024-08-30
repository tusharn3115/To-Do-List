const checkbox = document.querySelectorAll(".circle");
const inputList = document.querySelectorAll(".goal-input");
const warning = document.querySelector(".warning");
const progressBar = document.querySelector(".progress-bar");
const progressCompleted = document.querySelector(".progress-completed");

const allGoals = {
    first: {
        name: 'Learn JS',
        conpleted: false
    },
    second: {
        name: 'Learn JS',
        conpleted: false
    },
    third: {
        name: 'Learn JS',
        conpleted: false
    },
}

checkbox.forEach((checkbox) => {
    checkbox.addEventListener('click', (e) => {
        const allfieldsfilled = [...inputList].every(function(input){
            return input.value;
        })
        if(allfieldsfilled){
            checkbox.parentElement.classList.toggle('completed');
            progressCompleted.style.paddingLeft = '15px'
            progressCompleted.style.width = '33.33%'
        }
        else{
            warning.style.display = "block";
        }
    })
})

inputList.forEach((input) => {
    input.addEventListener('focus', () => {
        warning.style.display = "none";
    })
})