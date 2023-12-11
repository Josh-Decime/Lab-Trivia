import { AppState } from "../AppState.js";
import { TriviaModel } from "../models/Trivia.js";
import { loadState, saveState } from "../utils/Store.js";


class TriviaService {

    async getApiQuestions() {
        let response = await fetch('https://opentdb.com/api.php?amount=10&category=23&difficulty=medium&type=multiple')
        console.log('🃏📡 fetching api questions', response)
        let body = await response.json()
        console.log('🃏💾', body)
        let newTrivia = body.results.map(triviaData => new TriviaModel(triviaData))
        console.log('✨🃏', newTrivia)
        AppState.trivia = newTrivia
    }


}

export const triviaService = new TriviaService()