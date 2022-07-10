import isMutant from '../src/services/isMutant'

describe('Pruebas de mutaciones de ADN', () => {
    test('Caso del ejemplo', async () => {
        expect(await isMutant(['ATGCGA', 'CAGTGC', 'TTATGT', 'AGAAGG', 'CCCCTA', 'TCACTG'])).toBe(true)
    })
    test('Sin Mutacion', async () => {
        expect(await isMutant(['ATGCGA', 'CAGTGC', 'TTATTT', 'AGACGG', 'GCGTCA', 'TCACTG'])).toBe(false)
    })
    test('Mutacion Horizontal', async () => {
      expect(await isMutant(['CCCCCC', 'CAGTGC', 'TTATGT', 'AAAAAA', 'CCCCTA', 'TCACTG'])).toBe(true)
    })
    test('Mutacion Vertical', async () => {
      expect(await isMutant(['ATGCGA', 'ATGTGC', 'ATGTGT', 'ATGAGG', 'CCCCTA', 'TCACTG'])).toBe(true)
    })
    test('Mutacion Oblicua Normal', async () => {
      expect(await isMutant(['ACGCGA', 'CACTGC', 'TTACGT', 'ATAACG', 'CCTCTA', 'TCATTG'])).toBe(true)
    })
    test('Mutacion Oblicua Invertida', async () => {
      expect(await isMutant(['ATGCGA', 'CAGTGC', 'TTATCT', 'AGTCGG', 'GTCTCA', 'TCACTG'])).toBe(true)
    })
    test('Mutacion Combinada', async () => {
      expect(await isMutant(['AAAAGA', 'CAGGAC', 'TTGACT', 'TGTCGG', 'TACTCA', 'TCGCTG'])).toBe(true)
    })
  })