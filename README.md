# 8dxlounge.js
🚙 8DX Lounge API Client for JavaScript.

[![npm version](https://badge.fury.io/js/8dxlounge.js.svg)](https://badge.fury.io/js/8dxlounge.js)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/iamtakagi/8dxlounge.js)](https://github.com/iamtakagi/8dxlounge.js/releases)
[![CI](https://github.com/iamtakagi/8dxlounge.js/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/iamtakagi/8dxlounge.js/actions/workflows/ci.yml)
[![Deploy](https://github.com/iamtakagi/8dxlounge.js/actions/workflows/deploy.yml/badge.svg)](https://github.com/iamtakagi/8dxlounge.js/actions/workflows/deploy.yml)
[![license](https://img.shields.io/github/license/iamtakagi/8dxlounge.js)](https://github.com/iamtakagi/8dxlounge.js/blob/master/LICENSE)
[![issues](https://img.shields.io/github/issues/iamtakagi/8dxlounge.js)](https://github.com/iamtakagi/8dxlounge.js/issues)
[![pull requests](https://img.shields.io/github/issues-pr/iamtakagi/8dxlounge.js)](https://github.com/8dxlounge.js/pulls)

[VikeMK/Lounge-API](https://github.com/VikeMK/Lounge-API) for JavaScript API Client\
[API Endpoints](https://github.com/iamtakagi/8dxlounge.js/blob/master/docs/Endpoints.md)

## Installation
```console
yarn add 8dxlounge.js
```
```console
npm install 8dxlounge.js
```
## Documentation
View details under [src](https://github.com/iamtakagi/8dxlounge.js/tree/master/src) directory.
```ts
import { LoungeApi } from '8dxlounge.js';

const api = new LoungeApi();

(async () => {
  /* Get the Players list */ 
  const players = await api.getPlayers()
  console.log(players);

  /* Get the Players list by MMR Range */ 
  const players = await api.getPlayersByRange(1000, 2000)
  console.log(players);

  /* Get the Player by MKCID */ 
  const player = await api.getPlayerById(6167)
  console.log(player);

  /* Get the Player by PlayerName */
  const player = await api.getPlayerByName("takagi")
  console.log(player)

  /* Get the PlayerDetails by PlayerName */
  const pd = await api.getPlayerDetailsByName("takagi")
  console.log(pd)

  /* Get the Table by TableID */
  const table = await api.getTableById(100)
  console.log(table)

  /* Get the Tables list */
  const tables = await api.getTables()
  console.log(tables)

  /* Get the Penalties list */
  const penalties = await api.getPenaltiesByName("kusaan")
  console.log(penalties)
})();
```
