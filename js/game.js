import { GameStatuses } from './GAME_STATUSES'

export class Game {
	#gameStatus = GameStatuses.PENDING

	get status() {
		return this.#gameStatus
	}
}
