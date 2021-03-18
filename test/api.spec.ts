import LoungeApi from '@/api'
import { lateinit } from '@/utils/lateinit'

describe('API', () => {
  let api = lateinit<LoungeApi>()

  beforeAll(() => {
    api = new LoungeApi()
  })

  it('getPlayers', async () => {
    const players = await api.getPlayers()
    console.log(players)
    expect(players)
  })

  it('getPlayersByRange', async () => {
    const players = await api.getPlayersByRange(1000, 2000)
    console.log(players)
    expect(players)
  })

  it('getPlayerById', async () => {
    const player = await api.getPlayerById(6167)
    console.log(player)
    expect(player)
  })

  it('getPlayerByName', async () => {
    const player = await api.getPlayerByName("takagi")
    console.log(player)
    expect(player)
  })

  it('getPlayerDetailsByName', async () => {
    const pd = await api.getPlayerDetailsByName("takagi")
    console.log(pd)
    expect(pd)
  })

  it('getTableById', async () => {
    const table = await api.getTableById(100)
    console.log(table)
    expect(table)
  })

  it('getTables', async () => {
    const tables = await api.getTables()
    console.log(tables)
    expect(tables)
  })

  it('getPenaltiesByName', async () => {
    const penalties = await api.getPenaltiesByName("kusaan")
    console.log(penalties)
    expect(penalties)
  })
  
})
