import { Game } from './game.js'
import { GameStatuses } from './GAME_STATUSES.js'

describe('game tests', () => {
	it('should have pending status after creating', () => {
		const game = new Game()
		game.status
		expect(game.status).toBe(GameStatuses.PENDING)
	})

	it('should have InProgress status after start', () => {
		const game = new Game()
		game.status = GameStatuses.IN_PROGRESS
		expect(game.status).toBe(GameStatuses.PENDING)
	})
})
