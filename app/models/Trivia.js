

export class TriviaModel {
    constructor(data) {
        this.category = data.category
        this.difficulty = data.difficulty
        this.question = data.question
        this.correct_answer = data.correct_answer
        this.incorrect_answers = data.incorrect_answers
    }


    get TriviaCard() {
        return `
<div class="card col-12 m-1">
    <div class="row">
        <h3 class="text-center">${this.category}</h3>
        <h5 class="text-center">${this.difficulty}</h5>
        <p class="fs-4 text-center">${this.question}</p>
    </div>
    <div class="row d-flex justify-content-center pb-2">
        <div class="col-6 text-center">
            <button class="btn btn-secondary p-1">${this.correct_answer}</button>
        </div>
        <div class="col-6 text-center p-1">
            <button class="btn btn-secondary">${this.incorrect_answers[0]}</button>
        </div>
        <div class="col-6 text-center p-1">
            <button class="btn btn-secondary">${this.incorrect_answers[1]}</button>
        </div>
        <div class="col-6 text-center p-1">
            <button class="btn btn-secondary">${this.incorrect_answers[2]}</button>
        </div>
    </div>
</div>
        `
    }
}