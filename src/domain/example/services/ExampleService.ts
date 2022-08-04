import ExampleRepository from '@domain/example/infrastructure/ExampleRepository'
import { ICreateExample } from '@domain/example/types/ICreateExample'

export default class ExampleService {
	private readonly exampleRepository: ExampleRepository

	constructor() {
		this.exampleRepository = new ExampleRepository()
	}

	findAll() {
		return this.exampleRepository.getAll()
	}

	findOne(id: number) {
		return this.exampleRepository.getOne(id)
	}

	create(example: ICreateExample) {
		return this.exampleRepository.create(example)
	}

	update(id: number, example: ICreateExample) {
		return this.exampleRepository.update(id, example)
	}

	delete(id: number) {
		return this.exampleRepository.delete(id)
	}
}
