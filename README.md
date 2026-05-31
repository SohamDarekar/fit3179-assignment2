# Australia's Threatened Species: A Crisis in the Wild

**FIT3179 Data Visualisation - Assignment 2**

**Live URL:** https://sohamdarekar.github.io/fit3179-assignment2/

---

## Overview

Interactive data visualisation exploring Australia's biodiversity crisis. Australia is one of 17 megadiverse nations yet holds one of the worst species-loss records in the developed world. This visualisation examines the scale, geography, and trajectory of its threatened species problem.

**Key figures:** 453 Critically Endangered · 860 Endangered · 785 Vulnerable · 102 Extinct

---

## Sections

| # | Section | Focus |
|---|---------|-------|
| 01 | Overview | National threatened species counts by status |
| 02 | Geography | State-level distribution maps |
| 03 | Birds | Avian threat trends over time |
| 04 | Plants | Plant species threat breakdown |
| 05 | Looking Forward | Trajectory and projections |

---

## Stack

- **Vega-Lite 5** - declarative chart specs
- **D3.js 7** - custom map rendering (chord chart)
- **Vega-Embed** - chart embedding
- **Vanilla HTML/CSS/JS** - no framework

---

## Data

| File | Source |
|------|--------|
| `data/Australian_Threatened_Species_Index_2025.csv` | Australian Threatened Species Index 2025 |
| `data/Threatened_Species_Australia.csv` | EPBC Act threatened species listings |
| `australia-states.json` | Australian state boundaries (TopoJSON) |

---

## Run Locally

No build step needed. Open `index.html` directly or serve with any static server:

---

## Author

Soham Darekar, Monash University
