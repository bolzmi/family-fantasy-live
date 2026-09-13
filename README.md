# Bolz Family Fantasy Live

A TV-friendly, read-only live scoreboard for the Bolz family Sleeper fantasy football league.

## What it does

- Reads the current NFL week from Sleeper.
- Shows every family matchup and live score.
- Updates every 15 seconds.
- Shows the highest-scoring active starters.
- Highlights scoring changes and matchup lead changes.
- Shows quick league-wide context such as closest matchup, high score, and biggest lead.

## Hosting

This repository is intended for GitHub Pages. The site is fully static and reads public league data directly from Sleeper's public API in the browser. No API key or other secret is required.

GitHub Pages should publish from the `main` branch root (`/`).

## Privacy

This is a public website. It exposes the family league's public Sleeper information, including team/display names, player rosters, and fantasy scoring. Do not add private Fantasy Command Center data, credentials, API keys, email addresses, or other personal information to this repository.

## Data source

Live fantasy data is provided by Sleeper's public API. The configured league ID is `1392346581944012800`.
