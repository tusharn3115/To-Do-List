const checkbox = document.querySelectorAll(".circle");
const inputList = document.querySelectorAll(".goal-input");
const warning = document.querySelector(".warning");
const progressBar = document.querySelector(".progress-bar");
const progressCompleted = document.querySelector(".progress-completed");

const allGoals = JSON.parse(localStorage.getItem('allGoals')) || {};
let completedGoalsCount = Object.values(allGoals).filter((goals) => goals.completed).length;
progressCompleted.style.width = `${completedGoalsCount / 3 * 100}%`

checkbox.forEach((checkbox) => {
    checkbox.addEventListener('click', (e) => {
        const allfieldsfilled = [...inputList].every(function(input){
            return input.value;
        })
        if(allfieldsfilled){
            checkbox.parentElement.classList.toggle('completed');
            // progressCompleted.style.paddingLeft = '15px'
            const inputId = checkbox.nextElementSibling.id;
            allGoals[inputId].completed = !allGoals[inputId].completed;
            completedGoalsCount = Object.values(allGoals).filter((goals) => goals.completed).length;
            progressCompleted.style.width = `${completedGoalsCount / 3 * 100}%`
            localStorage.setItem('allGoals', JSON.stringify(allGoals));
        }
        else{
            warning.style.display = "block";
        }
    })
})

inputList.forEach((input) => {

    input.value = allGoals[input.id].name;
    if(allGoals[input.id].completed){
        input.parentElement.classList.add('completed');
    }

    input.addEventListener('focus', () => {
        warning.style.display = "none";
    })

    input.addEventListener('input', (e) => {
        allGoals[input.id] = {
            name: input.value,
            completed: false,
        }
        localStorage.setItem('allGoals', JSON.stringify(allGoals));
    })
})