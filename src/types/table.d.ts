import { Format } from "./string-literal"

export type Table = {
    id: number
    createdOn: string
    verifiedOn: string
    numTeams: number
    format: Format
    url: String // 例:https://www.mk8dx-lounge.com/TableImage/0.png
    tier: String // Tierはシーズン毎に変動する可能性があるためリテラル定義しない
    teams: Team[]
    tableMessageId: number
}

export type Team = {
    rank: number
    scores: Score[]
}

export type Score = {
    score: number
    multiplier: number
    playerId: number
    playerName: string
}