import axios from "axios"
import { Penalty, Player, PlayerDetails, Table } from "@/types"

export class LoungeApi {
    private baseUrl = "https://www.mk8dx-lounge.com/api/"

    private get client() {
        return axios.create({
            baseURL: this.baseUrl,
            timeout: 5000
        })
    }

    async getPlayers(minMmr: number | null, maxMmr: number | null) {
        const { data } = await this.client.get<Player[]>(
            `players/list`, {
            params: {
                minMmr: minMmr,
                maxMmr: maxMmr
            }
        })
        return data
    }

    async getPlayerById(mkcId: number) {
        const { data } = await this.client.get<Player>(
            `player`, {
            params: {
                mkcId: mkcId
            }
        })
        return data
    }

    async getPlayerByName(name: string) {
        const { data } = await this.client.get<Player>(
            `player`, {
            params: {
                name: name
            }
        })
        return data
    }

    async getPlayerDetails(name: string) {
        const { data } = await this.client.get<PlayerDetails>(
            `player/details`, {
            params: {
                name: name
            }
        })
        return data
    }

    async getTable(tableId: number) {
        const { data } = await this.client.get<Table>(
            `table`, {
            params: {
                tableId: tableId
            }
        })
        return data
    }

    async getTables() {
        const { data } = await this.client.get<Table>(`table/list`)
        return data
    }

    async getPenalties(name: string) {
        const { data } = await this.client.get<Penalty[]>(
            `penalty/list`, {
            params: {
                name: name
            }
        })
        return data
    }


}