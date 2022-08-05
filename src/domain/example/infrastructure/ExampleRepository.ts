import Example from '@domain/example/entities/Example'
import { ICreateExample } from '@domain/example/types/ICreateExample'

export default class ExampleRepository {
	private data: Example[] = []

	getAll(): Example[] {
		return this.data
	}

	getOne(id: number): Example | null {
		return this.data.find((dt) => dt.getId() === id) || null
	}

	create(example: ICreateExample): Example {
		const lastId = this.data[this.data.length - 1]?.getId()
		let id = 1

		if (lastId) id = lastId + 1

		this.data.push(
			new Example({
				...example,
				id,
			})
		)

		return this.getOne(id) as Example
	}

	update(id: number, example: ICreateExample): Example {
		const exampleCreated = this.getOne(id)

		if (!exampleCreated) throw new Error('Example was not found')

		const exampleToSave = Object.assign(exampleCreated, example)

		const index = this.data.findIndex((dt) => dt.getId() === id)

		this.data[index] = exampleToSave

		return this.getOne(id) as Example
	}

	delete(id: number): boolean {
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
