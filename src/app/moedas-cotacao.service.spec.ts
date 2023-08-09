import { TestBed } from '@angular/core/testing';

import { MoedasCotacaoService } from './moedas-cotacao.service';

describe('MoedasCotacaoService', () => {
  let service: MoedasCotacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoedasCotacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
