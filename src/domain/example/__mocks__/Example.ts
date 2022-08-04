import Example from '@domain/example/entities/Example'

export const exampleMock = new Example({
	id: 1,
	age: 20,
	name: 'fake name',
})

export const exampleUpdatedMock = new Example({
	id: 1,
	age: 30,
	name: 'fake name to update',
})
