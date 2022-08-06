import { inject, injectable } from 'tsyringe'
import { tokens } from '@di/tokens'
import { Router } from 'express'
import { IRouter } from '@presentation/http/routes/IRouter'

@injectable()
export class Routes {
	constructor(
		@inject(tokens.ExampleRouter)
		private exampleRouter: IRouter
	) {}

	public setupRouter(router: Router) {
		router.use('/v1/examples', this.exampleRouter.setup())
	}
}
