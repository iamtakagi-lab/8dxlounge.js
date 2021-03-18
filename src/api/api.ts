import axios from 'axios'
import { Penalty, Player, PlayerDetails, Table } from '@/types'

export class LoungeApi {
  private baseUrl = 'https://www.mk8dx-lounge.com/api/'

  private get client() {
    return axios.create({
      baseURL: this.baseUrl,
      timeout: 5000,
    })
  }

  /**
   * Get the Players list
   * @param minMmr
   * @param maxMmr
   * @returns Players list
   */
  async getPlayers() {
    const { data } = await this.client.get<Player[]>(`player/list`)
    return data
  }

  /**
   * Get the Players list by MMR Range
   * @param minMmr
   * @param maxMmr
   * @returns Players list
   */
  async getPlayersByRange(minMmr: number, maxMmr: number) {
    const { data } = await this.client.get<Player[]>(`player/list`, {
      params: {
        minMmr: minMmr,
        maxMmr: maxMmr,
      },
    })
    return data
  }

  /**
   * Get the Player by MKCID
   * @param mkcId
   * @returns Player
   */
  async getPlayerById(mkcId: number) {
    const { data } = await this.client.get<Player>(`player`, {
      params: {
        mkcId: mkcId,
      },
    })
    return data
  }

  /**
   * Get the Player by PlayerName
   * @param name
   * @returns Player
   */
  async getPlayerByName(name: string) {
    const { data } = await this.client.get<Player>(`player`, {
      params: {
        name: name,
      },
    })
    return data
  }

  /**
   * Get the PlayerDetails by PlayerName
   * @param name
   * @returns PlayerDetails
   */
  async getPlayerDetailsByName(name: string) {
    const { data } = await this.client.get<PlayerDetails>(`player/details`, {
      params: {
        name: name,
      },
    })
    return data
  }

  /**
   * Get the Table by TableID
   * @param tableId
   * @returns Table
   */
  async getTableById(tableId: number) {
    const { data } = await this.client.get<Table>(`table`, {
      params: {
        tableId: tableId,
      },
    })
    return data
  }

  /**
   * Get the Tables list
   * @returns Tables list
   */
  async getTables() {
    const { data } = await this.client.get<Table[]>(`table/list`)
    return data
  }

  /**
   * Get the Penalties list
   * @param name
   * @returns Penalties list
   */
  async getPenaltiesByName(name: string) {
    const { data } = await this.client.get<Penalty[]>(`penalty/list`, {
      params: {
        name: name,
      },
    })
    return data
  }
}
