import Example from '@domain/example/entities/Example'
import { ICreateExample } from '../types/ICreateExample'

export default class ExampleRepository {
	private data: Example[] = []

	getAll() {
		return this.data
	}

	getOne(id: number) {
		return this.data.find((dt) => dt.getId() === id)
	}

	create(example: ICreateExample) {
		const lastId = this.data[this.data.length - 1]?.getId()
		let id = 1

		if (lastId) id = lastId + 1

		this.data.push(
			new Example({
				...example,
				id,
			})
		)

		return this.getOne(id)
	}

	update(id: number, example: ICreateExample) {
		const exampleCreated = this.getOne(id)

		if (!exampleCreated) throw new Error('Example was not found')

		const exampleToSave = Object.assign(exampleCreated, example)

		const index = this.data.findIndex((dt) => dt.getId() === id)

		this.data[index] = exampleToSave

		return this.getOne(id)
	}

	delete(id: number) {
		try {
			const index = this.data.findIndex((dt) => dt.getId() === id)

			if (index < 0) throw new Error('Example was not found')

			this.data.splice(index)

			return true
		} catch {
			return false
		}
	}
}
