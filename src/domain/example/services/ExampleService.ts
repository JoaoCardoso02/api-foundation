import ExampleRepository from '@domain/example/infrastructure/ExampleRepository'
import Example from '@domain/example/entities/Example'

import { ICreateExample } from '@domain/example/types/ICreateExample'
import { IExampleService } from '@domain/example/types/IExampleService'

export default class ExampleService implements IExampleService {
	private readonly exampleRepository: ExampleRepository

	constructor() {
		this.exampleRepository = new ExampleRepository()
	}

	findAll(): Example[] {
		return this.exampleRepository.getAll()
	}

	findOne(id: number): Example | null {
		return this.exampleRepository.getOne(id)
	}

	create(example: ICreateExample): Example {
		return this.exampleRepository.create(example)
	}

	update(id: number, example: ICreateExample): Example {
		return this.exampleRepository.update(id, example)
	}

	delete(id: number): boolean {
		return this.exampleRepository.delete(id)
	}
}
