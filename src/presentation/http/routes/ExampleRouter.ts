import { tokens } from '@di/tokens'
import BaseController from '@shared/http/controller/BaseController'
import { inject, injectable } from 'tsyringe'
import { IRouter } from './IRouter'
import BaseRouter from '@shared/http/controller/BaseRouter'
import { Router } from 'express'

@injectable()
export class ArticleRouter extends BaseRouter implements IRouter {
	constructor(
		@inject(tokens.GetAllArticlesController)
		private getAllArticlesController: BaseController,

		@inject(tokens.GetOneArticleController)
		private getOneArticleController: BaseController,

		@inject(tokens.CreateArticleController)
		private createArticleController: BaseController,

		@inject(tokens.UpdateArticleController)
		private updateArticleController: BaseController,

		@inject(tokens.DeleteArticleController)
		private deleteArticleController: BaseController
	) {
		super(Router())
	}

	setup(): void {
		this.get('v1/articles', this.getAllArticlesController)
		this.get('v1/articles/{id}', this.getOneArticleController)
		this.post('v1/articles', this.createArticleController)
		this.patch('v1/articles/{id}', this.updateArticleController)
		this.delete('v1/articles/{id}', this.deleteArticleController)
	}
}
