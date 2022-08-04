import {
	exampleMock,
	exampleUpdatedMock,
} from '@domain/example/__mocks__/Example'
import ExampleService from '@domain/example/services/ExampleService'

jest.mock('@domain/example/infrastructure/ExampleRepository', () => {
	const ExampleRepositoryStub = jest.fn().mockReturnValue({
		getAll: jest.fn().mockReturnValue([exampleMock]),
		getOne: jest.fn().mockReturnValue(exampleMock),
		create: jest.fn().mockReturnValue(exampleMock),
		update: jest.fn().mockReturnValue(exampleUpdatedMock),
		delete: jest.fn().mockReturnValue(true),
	})

	return ExampleRepositoryStub
})

describe('ExampleService', () => {
	it('should create an ExampleService instance successfully', () => {
		const sut = new ExampleService()

		expect(sut).toBeInstanceOf(ExampleService)
	})

	it('should get all Examples successfully', () => {
		const sut = new ExampleService()

		const result = sut.findAll()

		expect(result).toEqual([exampleMock])
	})

	it('should get one Examples by id successfully', () => {
		const sut = new ExampleService()

		const result = sut.findOne(1)

		expect(result).toEqual(exampleMock)
	})

	it('should create one Example successfully', () => {
		const sut = new ExampleService()

		const result = sut.create({
			age: 20,
			name: 'fake name',
		})

		expect(result).toEqual(exampleMock)
	})

	it('should update one Example by id successfully', () => {
		const sut = new ExampleService()

		const result = sut.update(1, {
			age: 30,
			name: 'fake name to update',
		})

		expect(result).toEqual(exampleUpdatedMock)
	})

	it('should delete one Example successfully', () => {
		const sut = new ExampleService()

		const result = sut.delete(1)

		expect(result).toBeTruthy()
	})
})
