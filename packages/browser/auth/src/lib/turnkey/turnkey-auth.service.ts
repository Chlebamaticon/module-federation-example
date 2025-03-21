import { Injectable } from '@angular/core';

import { fooDtos } from '@inveniam/dtos';
@Injectable()
export class TurnkeyAuthService {
  constructor() {
    console.log(fooDtos());
  }
}
