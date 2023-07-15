export class StorageService {
	/**
	 *
	 * @param {string} key
	 * @param {any} value
	 */
	setItem(key, value) {
		localStorage.setItem(key, JSON.stringify(value))
	}
	/**
	 *
	 * @param {string} key
	 */
	removeItem(key) {
		localStorage.removeItem(key)
	}

	clear() {
		localStorage.clear()
	}

	/**
	 *
	 * @param {string} key
	 * @returns {any}
	 */

	getItem(key) {
		const value = localStorage.getItem(key)
		return value ? JSON.parse(value) : null
	}
}
