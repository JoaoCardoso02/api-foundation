import { Router } from 'express'
import BaseController from './BaseController'

export default class BaseRouter {
	private router: Router

	constructor(router: Router) {
		this.router = router
	}

	post(path: string, handler: BaseController) {
		this.router.post(path, handler.execute)
	}

	get(path: string, handler: BaseController) {
		this.router.get(path, handler.execute)
	}

	patch(path: string, handler: BaseController) {
		this.router.patch(path, handler.execute)
	}

	put(path: string, handler: BaseController) {
		this.router.put(path, handler.execute)
	}

	delete(path: string, handler: BaseController) {
		this.router.delete(path, handler.execute)
	}

	getRouter() {
		return this.router
	}
}
