export default class Game {
	start() {
		console.log('game started');
	}
}

export class GameSavingData {
}

export function readGameSaving() {
	console.log('readGameSaving')
}

export function writeGameSaving() {
	console.log('writeGameSaving')
}

import Character from './domain.js'