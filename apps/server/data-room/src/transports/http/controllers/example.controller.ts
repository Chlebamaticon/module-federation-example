import { Controller, Get } from "@nestjs/common";

@Controller()
export class ExampleController {
    @Get()
    getExample() {
        return {
            data: 'test'
        }
    }
}