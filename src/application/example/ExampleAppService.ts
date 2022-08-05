import Example from '@domain/example/entities/Example'
import ExampleService from '@domain/example/services/ExampleService'
import { IExampleService } from '@domain/example/types/IExampleService'
import { ICreateExample } from '@domain/example/types/ICreateExample'

export default class ExampleAppService {
	private exampleService: IExampleService

	constructor() {
		this.exampleService = new ExampleService()
	}

	findAll(): Example[] {
		return this.exampleService.findAll()
	}

	findOne(id: number): Example | null {
		return this.exampleService.findOne(id)
	}

	create(data: ICreateExample): Example {
		return this.exampleService.create(data)
	}

	update(id: number, data: ICreateExample): Example {
		return this.exampleService.update(id, data)
	}

	delete(id: number): boolean {
		return this.exampleService.delete(id)
	}
}
