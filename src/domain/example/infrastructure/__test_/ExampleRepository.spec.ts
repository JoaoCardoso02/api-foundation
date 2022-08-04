import ExampleRepository from '../ExampleRepository'

describe('ExampleRepository', () => {
	it('should create an ExampleRepository instance successfully', () => {
		const sut = new ExampleRepository()

		expect(sut).toBeInstanceOf(ExampleRepository)
	})

	it('should create an example successfully', () => {
		const sut = new ExampleRepository()

		const result = sut.create({
			age: 56,
			name: 'fake name',
		})

		expect(result).toEqual({
			id: 1,
			age: 56,
			name: 'fake name',
		})
	})

	it('should get an example and it returns undefined successfully', () => {
		const sut = new ExampleRepository()

		const result = sut.getOne(1)

		expect(result).toEqual(undefined)
	})

	it('should create an example and returns it', () => {
		const sut = new ExampleRepository()

		sut.create({
			age: 56,
			name: 'fake name',
		})

		const result = sut.getOne(1)

		expect(result).toEqual({
			id: 1,
			age: 56,
			name: 'fake name',
		})
	})

	it('should throw when update an example and it does not exist', () => {
		const sut = new ExampleRepository()

		const fn = () =>
			sut.update(1, {
				age: 56,
				name: 'fake name',
			})

		expect(fn).toThrowError('Example was not found')
	})

	it('should update an example and returns it', () => {
		const sut = new ExampleRepository()

		sut.create({
			age: 56,
			name: 'fake name',
		})

		const result = sut.update(1, {
			age: 25,
			name: 'fake name to update',
		})

		expect(result).toEqual({
			id: 1,
			age: 25,
			name: 'fake name to update',
		})
	})

	it('should return false if example does not exist', () => {
		const sut = new ExampleRepository()

		const result = sut.delete(1)

		expect(result).toBeFalsy()
	})

	it('should return false if example does not exist', () => {
		const sut = new ExampleRepository()

		sut.create({
			age: 56,
			name: 'fake name',
		})

		const result = sut.delete(1)

		expect(result).toBeTruthy()
	})
})
