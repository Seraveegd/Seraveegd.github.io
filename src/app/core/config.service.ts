import { Injectable, Optional } from '@angular/core';

export class Config {
  api_base_url = '';
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private _api_base_url = '';

  constructor(@Optional() config: Config) {
    if (config) {
      this._api_base_url = config.api_base_url;
    }
  }

  get api_base_url() {
    return this._api_base_url;
  }
}
