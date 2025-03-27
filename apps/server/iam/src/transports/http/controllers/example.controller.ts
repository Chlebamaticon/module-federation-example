import { Controller, Get } from '@nestjs/common';

import { fooDtos } from '@inveniam/dtos';

@Controller()
export class ExampleController {
  @Get()
  getExample() {
    return {
      data: 'test',
      dto: fooDtos(),
    };
  }
}
