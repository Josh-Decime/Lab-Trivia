

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
        <div class="row d-flex justify-content-center">
            <div class="col-6 text-center">${this.correct_answer}</div>
            <div class="col-6 text-center">${this.incorrect_answers[0]}</div>
            <div class="col-6 text-center">${this.incorrect_answers[1]}</div>
            <div class="col-6 text-center">${this.incorrect_answers[2]}</div>

        </div>
    </div>
        `
    }
}