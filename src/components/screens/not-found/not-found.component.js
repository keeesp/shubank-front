import { BaseScreen } from '@/core/component/base-screen.component'

export class NotFound extends BaseScreen {
	constructor() {
		super({ title: 'No page' })
	}
	render() {
		return '<p>NotFound</p>'
	}
}
