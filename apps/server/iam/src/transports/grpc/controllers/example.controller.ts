import { Controller } from "@nestjs/common";
import { GrpcMethod } from "@nestjs/microservices";

@Controller()
export class ExampleController {
    @GrpcMethod('ExampleService', 'GetExample')
    getExample() {
        return { data: 'test' };
    }
}