import { GameStatuses } from './GAME_STATUSES'
import { RandomNumberUtility } from './random_number'

export class Game {
  #settings = {
    gridSize: {
      columnsCount: 4,
      rowsCount: 4,
    },
    googleJumpInterval: 1000,
  }
  #status = GameStatuses.PENDING

  #googlePosition = null
  /**
   * @type RandomNumberUtility
   */
  #numberUtility

  constructor() {
    this.#numberUtility = new RandomNumberUtility()
  }

  set googleJumpInterval(value) {
    if (!Number.isInteger(value) || value <= 0) {
      throw new Error('google jump interval must be position incorrect ')
    }
    this.#settings.googleJumpInterval = value
  }

  get status() {
    return this.#status
  }

  get googlePosition() {
    return this.#googlePosition
  }

  get gridSize() {
    return this.#settings.gridSize
  }

  start() {
    this.#status = GameStatuses.IN_PROGRESS
    this.#jumpGoogle()
    setInterval(() => {
      this.#jumpGoogle()
    }, this.#settings.googleJumpInterval)
  }
  #jumpGoogle() {
    const newPosition = {
      x: this.#numberUtility.getRandomInteger(0, this.#settings.gridSize.columnsCount),
      y: this.#numberUtility.getRandomInteger(0, this.#settings.gridSize.rowsCount),
    }
    if (
      newPosition.x === this.googlePosition?.x &&
      newPosition.y === this.googlePosition?.y
    ) {
      this.#jumpGoogle()
      return
    }
    this.#googlePosition = newPosition
  }
}
