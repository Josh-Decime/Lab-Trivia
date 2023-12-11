import { AppState } from "../AppState.js";
import { triviaService } from "../services/TriviaService.js";


function _drawTriviaCards() {
    const trivia = AppState.trivia
    let content = ''
    trivia.forEach(trivia => content += trivia.TriviaCard)
    document.getElementById('trivia-cards').innerHTML = content
}

export class TriviaController {
    constructor() {
        console.log('Controller is controlling stuff! 🃏 its trivia time!')
        AppState.on('trivia', _drawTriviaCards)
        this.getTrivia()
        _drawTriviaCards()
    }

    getTrivia() {
        console.log('getting api out of service🃏')
        triviaService.getApiQuestions()
    }
}