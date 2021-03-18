# 8dxlounge.js: 🚙 8DX Lounge API Client for JavaScript.

[![npm version](https://badge.fury.io/js/8dxlounge.js.svg)](https://badge.fury.io/js/8dxlounge.js)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/iamtakagi/8dxlounge.js)](https://github.com/iamtakagi/8dxlounge.js/releases)
[![CI](https://github.com/iamtakagi/8dxlounge.js/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/iamtakagi/8dxlounge.js/actions/workflows/ci.yml)
[![Deploy](https://github.com/iamtakagi/8dxlounge.js/actions/workflows/deploy.yml/badge.svg)](https://github.com/iamtakagi/8dxlounge.js/actions/workflows/deploy.yml)

[VikeMK/Lounge-API](https://github.com/VikeMK/Lounge-API) の JavaScript API Clientです。\
API Endpointsは [こちら](https://github.com/iamtakagi/8dxlounge.js/blob/master/docs/Endpoints.md) に記載してあります。

リリースまで数日程度お待ちください。

## Installation / インストール
```console
yarn add 8dxlounge.js
```
```console
npm install 8dxlounge.js
```
## Documentation / ドキュメント
```ts
import { LoungeApi } from '8dxlounge.js';

const api = new LoungeApi();

(async () => {
  /* プレイヤーリストを取得 */ 
  const players = await api.getPlayers()
  console.log(players);

  /* MMR範囲からプレイヤーリストを取得 */ 
  const players = await api.getPlayersByRange(1000, 2000)
  console.log(players);

  /* MKCIDからプレイヤーを取得 */ 
  const player = await api.getPlayerById(6167)
  console.log(player);

  /* 名前からプレイヤーを取得 */
  const player = await api.getPlayerByName("takagi")
  console.log(player)

  /* 名前からプレイヤー詳細を取得 */
  const pd = await api.getPlayerDetailsByName("takagi")
  console.log(pd)

  /* TableIDからテーブルを取得 */
  const table = await api.getTableById(100)
  console.log(table)

  /* テーブルリストを取得 */
  const tables = await api.getTables()
  console.log(tables)

  /* 名前からプレイヤーのペナルティリストを取得 */
  const penalties = await api.getPenaltiesByName("kusaan")
  console.log(penalties)
})();
```
