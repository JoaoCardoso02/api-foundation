import { container } from 'tsyringe'
import { tokens } from '@di/tokens'

const childContainer = container.createChildContainer()

// Example
import ExampleRepository from '@domain/example/infrastructure/ExampleRepository'
import ExampleService from '@domain/example/services/ExampleService'
import ExampleAppService from '@application/example/ExampleAppService'

childContainer.registerSingleton(tokens.ExampleRepository, ExampleRepository)
childContainer.registerSingleton(tokens.ExampleService, ExampleService)
childContainer.registerSingleton(tokens.ExampleAppService, ExampleAppService)

export { childContainer as container }
