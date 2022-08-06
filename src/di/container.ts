import { container } from 'tsyringe'
import { tokens } from '@di/tokens'

const childContainer = container.createChildContainer()

// Example
import ExampleRepository from '@domain/example/infrastructure/ExampleRepository'
import ExampleService from '@domain/example/services/ExampleService'
import ExampleAppService from '@application/example/ExampleAppService'
import GetAllExamplesController from '@presentation/http/controllers/example/GetAllExamplesController'
import GetOneExampleController from '@presentation/http/controllers/example/GetOneExampleController'
import CreateExampleController from '@presentation/http/controllers/example/CreateExampleController'
import UpdateExampleController from '@presentation/http/controllers/example/UpdateExampleController'
import DeleteExampleController from '@presentation/http/controllers/example/DeleteExampleController'

childContainer.registerSingleton(tokens.ExampleRepository, ExampleRepository)
childContainer.registerSingleton(tokens.ExampleService, ExampleService)
childContainer.registerSingleton(tokens.ExampleAppService, ExampleAppService)
childContainer.registerSingleton(
	tokens.GetAllExamplesController,
	GetAllExamplesController
)
childContainer.registerSingleton(
	tokens.GetOneExampleController,
	GetOneExampleController
)
childContainer.registerSingleton(
	tokens.CreateExampleController,
	CreateExampleController
)
childContainer.registerSingleton(
	tokens.UpdateExampleController,
	UpdateExampleController
)
childContainer.registerSingleton(
	tokens.DeleteExampleController,
	DeleteExampleController
)

export { childContainer as container }
