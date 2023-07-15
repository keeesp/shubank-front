import styles from '@/components/layout/notification/notification.module.scss'

import { $R } from '../rquery/rquery.lib'

export class NotificationService {
	#timeout
	constructor() {
		this.#timeout = null
	}
	#setTimeout(callback, duration) {
		if (this.#timeout) {
			clearTimeout(this.#setTimeout)
		}
		this.#timeout = setTimeout(callback, duration)
	}

	/**
	 *
	 * @param {('success' | 'error')} type
	 * @param {string} message
	 */
	show(type, message) {
		if (!['success', 'error'].includes(type)) {
			throw new Error('invalid notification type')
		}
		const classNames = {
			success: styles.success,
			error: styles.error
		}
		const notificationElement = $R('#notification')
		const className = classNames[type]
		notificationElement.text(message).addClass(className)
		this.#setTimeout(() => {
			notificationElement.removeClass(className)
		}, 6000)
	}
}
