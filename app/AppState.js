import { TriviaModel } from './models/Trivia.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { loadState } from './utils/Store.js'


class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []



  trivia = [
    // new TriviaModel({ category: 'Coding', difficulty: 'Easy', question: 'Will this work?', correctAnswer: 'Eventually', incorrectAnswer: 'you wish' }),
    // new TriviaModel({ category: 'History', difficulty: 'Hard', question: 'Have you passed all of your checkpoints?', correctAnswer: 'Of course', incorrectAnswer: 'definitely not' }),
  ]









}

export const AppState = createObservableProxy(new ObservableAppState())