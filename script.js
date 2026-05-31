// ── Official design-system palette ──────────────────────────────────────────
const STATUS_COLORS = {
  "Critically Endangered": "#E05C3A",
  Endangered:              "#F0A500",
  Vulnerable:              "#8DC26F",
  Extinct:                 "#7A8FA6",
  "Conservation Dependent":"#50C9C3",
  "Extinct in the wild":   "#B8A4EF",
};

const STATUS_RANGE = [
  STATUS_COLORS["Critically Endangered"],
  STATUS_COLORS.Endangered,
  STATUS_COLORS.Vulnerable,
  STATUS_COLORS.Extinct,
];

const STATUS_RANGE_THREE = [
  STATUS_COLORS["Critically Endangered"],
  STATUS_COLORS.Endangered,
  STATUS_COLORS.Vulnerable,
];

const MAP1_SCHEME = ["#1A2431","#3D2E1A","#6B4A10","#A06A10","#D48C14","#EDAF3A","#F7D070"];
const MAP2_SCHEME = ["#0C1117","#0D2B2E","#0D4040","#0F6156","#1D9E75","#3DC49A","#7ADEC2"];

// Non-status accent colours (chart 14/15 only — never alongside status data)
const MAMMAL_COLOR     = "#C084B8";   // dusty mauve
const BIRD_COLOR       = "#5B9BD5";   // sky blue
const AMPHIBIAN_COLOR  = "#E8A857";   // warm ochre

const STATUS_ORDER = [
  "Critically Endangered",
  "Endangered",
  "Vulnerable",
  "Extinct",
];

// Matches CSS design-system variables exactly
const BG    = "#0C1117";   // --bg-primary
const BG2   = "#131A22";   // --bg-secondary
const BG3   = "#1A2431";   // --bg-card
const PANEL = "#1A2431";   // --bg-card
const BORDER = "#2F3D4C";  // --border (solid hex)
const TEXT  = "#F4F1EB";   // --text-primary
const TEXT2 = "#C0B8AA";   // --text-secondary
const TEXT3 = "#8F98A5";   // --text-muted
const ANNOTATION_TEXT = "#bf9b30"; //annotation-text
const GRID  = "rgba(47,61,76,0.25)";  // --grid

const tooltipHandler = new vegaTooltip.Handler({ theme: "story" });
const embedOptions = {
  actions: false,
  renderer: "svg",
  tooltip: tooltipHandler.call,
};

const baseConfig = {
  background: "transparent",
  view: { stroke: "transparent" },
  axis: {
    domainColor: BORDER,
    domainWidth: 1,
    gridColor: GRID,
    gridOpacity: 1,
    tickColor: BORDER,
    tickSize: 4,
    labelColor: TEXT3,
    titleColor: TEXT3,
    labelFont: "Inter, Source Sans 3, sans-serif",
    titleFont: "Inter, Source Sans 3, sans-serif",
    labelFontSize: 11,
    titleFontSize: 12,
    titleFontWeight: 600,
    labelFontWeight: 400,
    labelPadding: 8,
    titlePadding: 12,
    labelLimit: 320,
  },
  legend: {
    labelColor: TEXT2,
    titleColor: TEXT,
    labelFont: "Inter, Source Sans 3, sans-serif",
    titleFont: "Inter, Source Sans 3, sans-serif",
    labelFontSize: 12,
    titleFontSize: 11,
    titleFontWeight: 600,
    labelFontWeight: 400,
    labelLimit: 220,
    symbolStrokeColor: BG3,
    symbolStrokeWidth: 1.5,
  },
  title: {
    color: TEXT,
    font: "Inter, Source Sans 3, sans-serif",
    fontSize: 14,
    fontWeight: 700,
  },
};

// Data arrays
const STATUS_SUMMARY = [
  { "Threatened status": "Critically Endangered", count: 453, order: 1 },
  { "Threatened status": "Endangered", count: 860, order: 2 },
  { "Threatened status": "Vulnerable", count: 785, order: 3 },
  { "Threatened status": "Conservation Dependent", count: 7, order: 4 },
  { "Threatened status": "Extinct in the wild", count: 1, order: 5 },
  { "Threatened status": "Extinct", count: 102, order: 6 },
];

const KINGDOM_STATUS = [
  {
    Kingdom: "Animalia",
    "Threatened status": "Conservation Dependent",
    count: 7,
  },
  {
    Kingdom: "Animalia",
    "Threatened status": "Critically Endangered",
    count: 147,
  },
  { Kingdom: "Animalia", "Threatened status": "Endangered", count: 250 },
  { Kingdom: "Animalia", "Threatened status": "Extinct", count: 67 },
  {
    Kingdom: "Animalia",
    "Threatened status": "Extinct in the wild",
    count: 1,
  },
  { Kingdom: "Animalia", "Threatened status": "Vulnerable", count: 222 },
  {
    Kingdom: "Plantae",
    "Threatened status": "Critically Endangered",
    count: 306,
  },
  { Kingdom: "Plantae", "Threatened status": "Endangered", count: 610 },
  { Kingdom: "Plantae", "Threatened status": "Extinct", count: 35 },
  { Kingdom: "Plantae", "Threatened status": "Vulnerable", count: 563 },
];

const ANIMAL_CLASS = [
  {
    Class_name: "Birds",
    "Threatened status": "Critically Endangered",
    count: 18,
  },
  { Class_name: "Birds", "Threatened status": "Endangered", count: 69 },
  { Class_name: "Birds", "Threatened status": "Extinct", count: 22 },
  { Class_name: "Birds", "Threatened status": "Vulnerable", count: 77 },
  {
    Class_name: "Bony Fish",
    "Threatened status": "Critically Endangered",
    count: 26,
  },
  {
    Class_name: "Bony Fish",
    "Threatened status": "Endangered",
    count: 27,
  },
  { Class_name: "Bony Fish", "Threatened status": "Extinct", count: 1 },
  {
    Class_name: "Bony Fish",
    "Threatened status": "Vulnerable",
    count: 16,
  },
  {
    Class_name: "Crustaceans",
    "Threatened status": "Critically Endangered",
    count: 16,
  },
  {
    Class_name: "Crustaceans",
    "Threatened status": "Endangered",
    count: 26,
  },
  {
    Class_name: "Crustaceans",
    "Threatened status": "Vulnerable",
    count: 5,
  },
  {
    Class_name: "Frogs & Salamanders",
    "Threatened status": "Critically Endangered",
    count: 18,
  },
  {
    Class_name: "Frogs & Salamanders",
    "Threatened status": "Endangered",
    count: 15,
  },
  {
    Class_name: "Frogs & Salamanders",
    "Threatened status": "Extinct",
    count: 4,
  },
  {
    Class_name: "Frogs & Salamanders",
    "Threatened status": "Vulnerable",
    count: 16,
  },
  {
    Class_name: "Mammals",
    "Threatened status": "Critically Endangered",
    count: 22,
  },
  { Class_name: "Mammals", "Threatened status": "Endangered", count: 55 },
  { Class_name: "Mammals", "Threatened status": "Extinct", count: 34 },
  { Class_name: "Mammals", "Threatened status": "Vulnerable", count: 41 },
  {
    Class_name: "Reptiles",
    "Threatened status": "Critically Endangered",
    count: 14,
  },
  {
    Class_name: "Reptiles",
    "Threatened status": "Endangered",
    count: 44,
  },
  {
    Class_name: "Reptiles",
    "Threatened status": "Vulnerable",
    count: 44,
  },
];

const STATE_STATUS = [
  { state: "ACT", status: "Critically Endangered", count: 11 },
  { state: "ACT", status: "Endangered", count: 27 },
  { state: "ACT", status: "Vulnerable", count: 33 },
  { state: "NSW", status: "Critically Endangered", count: 152 },
  { state: "NSW", status: "Endangered", count: 285 },
  { state: "NSW", status: "Vulnerable", count: 284 },
  { state: "NSW", status: "Extinct", count: 33 },
  { state: "NT", status: "Critically Endangered", count: 14 },
  { state: "NT", status: "Endangered", count: 50 },
  { state: "NT", status: "Vulnerable", count: 78 },
  { state: "NT", status: "Extinct", count: 12 },
  { state: "QLD", status: "Critically Endangered", count: 86 },
  { state: "QLD", status: "Endangered", count: 199 },
  { state: "QLD", status: "Vulnerable", count: 290 },
  { state: "QLD", status: "Extinct", count: 33 },
  { state: "SA", status: "Critically Endangered", count: 31 },
  { state: "SA", status: "Endangered", count: 109 },
  { state: "SA", status: "Vulnerable", count: 146 },
  { state: "SA", status: "Extinct", count: 33 },
  { state: "TAS", status: "Critically Endangered", count: 29 },
  { state: "TAS", status: "Endangered", count: 80 },
  { state: "TAS", status: "Vulnerable", count: 108 },
  { state: "TAS", status: "Extinct", count: 13 },
  { state: "VIC", status: "Critically Endangered", count: 55 },
  { state: "VIC", status: "Endangered", count: 130 },
  { state: "VIC", status: "Vulnerable", count: 145 },
  { state: "VIC", status: "Extinct", count: 27 },
  { state: "WA", status: "Critically Endangered", count: 120 },
  { state: "WA", status: "Endangered", count: 192 },
  { state: "WA", status: "Vulnerable", count: 281 },
  { state: "WA", status: "Extinct", count: 21 },
];

const STATE_TOTALS = [
  { state: "ACT", count: 71, state_full: "Australian Capital Territory" },
  { state: "NSW", count: 760, state_full: "New South Wales" },
  { state: "NT", count: 155, state_full: "Northern Territory" },
  { state: "QLD", count: 612, state_full: "Queensland" },
  { state: "SA", count: 319, state_full: "South Australia" },
  { state: "TAS", count: 230, state_full: "Tasmania" },
  { state: "VIC", count: 357, state_full: "Victoria" },
  { state: "WA", count: 614, state_full: "Western Australia" },
];

const ENDEMIC_STATE = [
  {
    state: "ACT",
    state_full: "Australian Capital Territory",
    endemic_threatened: 0,
  },
  { state: "NSW", state_full: "New South Wales", endemic_threatened: 66 },
  {
    state: "NT",
    state_full: "Northern Territory",
    endemic_threatened: 24,
  },
  { state: "QLD", state_full: "Queensland", endemic_threatened: 91 },
  { state: "SA", state_full: "South Australia", endemic_threatened: 31 },
  { state: "TAS", state_full: "Tasmania", endemic_threatened: 48 },
  { state: "VIC", state_full: "Victoria", endemic_threatened: 23 },
  {
    state: "WA",
    state_full: "Western Australia",
    endemic_threatened: 69,
  },
];

const HOTSPOT = [
  { state: "ACT", total: 71, endemic: 0, pct_endemic: 0 },
  { state: "NSW", total: 760, endemic: 66, pct_endemic: 8.7 },
  { state: "NT", total: 155, endemic: 24, pct_endemic: 15.5 },
  { state: "QLD", total: 612, endemic: 91, pct_endemic: 14.9 },
  { state: "SA", total: 319, endemic: 31, pct_endemic: 9.7 },
  { state: "TAS", total: 230, endemic: 48, pct_endemic: 20.9 },
  { state: "VIC", total: 357, endemic: 23, pct_endemic: 6.4 },
  { state: "WA", total: 614, endemic: 69, pct_endemic: 11.2 },
];

const CO_OCCUR = [
  { state1: "NSW", state2: "QLD", shared: 224 },
  { state1: "NSW", state2: "VIC", shared: 202 },
  { state1: "SA", state2: "VIC", shared: 170 },
  { state1: "NSW", state2: "SA", shared: 140 },
  { state1: "QLD", state2: "VIC", shared: 94 },
  { state1: "QLD", state2: "SA", shared: 89 },
  { state1: "SA", state2: "WA", shared: 88 },
  { state1: "NT", state2: "WA", shared: 84 },
  { state1: "TAS", state2: "VIC", shared: 83 },
  { state1: "QLD", state2: "WA", shared: 81 },
  { state1: "NSW", state2: "WA", shared: 77 },
  { state1: "NSW", state2: "NT", shared: 64 },
  { state1: "NSW", state2: "TAS", shared: 61 },
  { state1: "VIC", state2: "WA", shared: 57 },
  { state1: "NT", state2: "QLD", shared: 55 },
  { state1: "QLD", state2: "TAS", shared: 42 },
  { state1: "SA", state2: "TAS", shared: 38 },
  { state1: "NT", state2: "SA", shared: 35 },
  { state1: "NT", state2: "VIC", shared: 26 },
  { state1: "NT", state2: "TAS", shared: 19 },
  { state1: "WA", state2: "VIC", shared: 57 },
  { state1: "WA", state2: "TAS", shared: 25 },
  { state1: "ACT", state2: "NSW", shared: 58 },
  { state1: "ACT", state2: "VIC", shared: 41 },
  { state1: "ACT", state2: "QLD", shared: 23 },
  { state1: "ACT", state2: "SA", shared: 17 },
  { state1: "ACT", state2: "TAS", shared: 12 },
  { state1: "ACT", state2: "WA", shared: 9 },
];

const BIRD_TREND = [
  {
    year: 1990,
    group: "Critically Endangered",
    mean_count: 195.89,
    index: 100,
  },
  {
    year: 1991,
    group: "Critically Endangered",
    mean_count: 139.54,
    index: 71.2,
  },
  {
    year: 1992,
    group: "Critically Endangered",
    mean_count: 239.97,
    index: 122.5,
  },
  {
    year: 1993,
    group: "Critically Endangered",
    mean_count: 87.24,
    index: 44.5,
  },
  {
    year: 1994,
    group: "Critically Endangered",
    mean_count: 106.67,
    index: 54.5,
  },
  {
    year: 1995,
    group: "Critically Endangered",
    mean_count: 98.31,
    index: 50.2,
  },
  {
    year: 1996,
    group: "Critically Endangered",
    mean_count: 81.35,
    index: 41.5,
  },
  {
    year: 1997,
    group: "Critically Endangered",
    mean_count: 57.83,
    index: 29.5,
  },
  {
    year: 1998,
    group: "Critically Endangered",
    mean_count: 78.57,
    index: 40.1,
  },
  {
    year: 1999,
    group: "Critically Endangered",
    mean_count: 53.38,
    index: 27.2,
  },
  {
    year: 2000,
    group: "Critically Endangered",
    mean_count: 112.14,
    index: 57.2,
  },
  {
    year: 2001,
    group: "Critically Endangered",
    mean_count: 59.42,
    index: 30.3,
  },
  {
    year: 2002,
    group: "Critically Endangered",
    mean_count: 68.16,
    index: 34.8,
  },
  {
    year: 2003,
    group: "Critically Endangered",
    mean_count: 111.3,
    index: 56.8,
  },
  {
    year: 2004,
    group: "Critically Endangered",
    mean_count: 83.46,
    index: 42.6,
  },
  {
    year: 2005,
    group: "Critically Endangered",
    mean_count: 163.35,
    index: 83.4,
  },
  {
    year: 2006,
    group: "Critically Endangered",
    mean_count: 50.14,
    index: 25.6,
  },
  {
    year: 2007,
    group: "Critically Endangered",
    mean_count: 145.91,
    index: 74.5,
  },
  {
    year: 2008,
    group: "Critically Endangered",
    mean_count: 31.88,
    index: 16.3,
  },
  {
    year: 2009,
    group: "Critically Endangered",
    mean_count: 24.13,
    index: 12.3,
  },
  {
    year: 2010,
    group: "Critically Endangered",
    mean_count: 37.5,
    index: 19.1,
  },
  {
    year: 2011,
    group: "Critically Endangered",
    mean_count: 48.2,
    index: 24.6,
  },
  {
    year: 2012,
    group: "Critically Endangered",
    mean_count: 31.1,
    index: 15.9,
  },
  {
    year: 2013,
    group: "Critically Endangered",
    mean_count: 22.5,
    index: 11.5,
  },
  {
    year: 2014,
    group: "Critically Endangered",
    mean_count: 19.8,
    index: 10.1,
  },
  {
    year: 2015,
    group: "Critically Endangered",
    mean_count: 28.6,
    index: 14.6,
  },
  {
    year: 2016,
    group: "Critically Endangered",
    mean_count: 24.1,
    index: 12.3,
  },
  {
    year: 2017,
    group: "Critically Endangered",
    mean_count: 35.2,
    index: 18.0,
  },
  {
    year: 2018,
    group: "Critically Endangered",
    mean_count: 28.7,
    index: 14.6,
  },
  {
    year: 2019,
    group: "Critically Endangered",
    mean_count: 18.4,
    index: 9.4,
  },
  {
    year: 2020,
    group: "Critically Endangered",
    mean_count: 21.3,
    index: 10.9,
  },
  {
    year: 2021,
    group: "Critically Endangered",
    mean_count: 17.9,
    index: 9.1,
  },
  {
    year: 2022,
    group: "Critically Endangered",
    mean_count: 15.2,
    index: 7.8,
  },
  { year: 1990, group: "Endangered", mean_count: 175.0, index: 100 },
  { year: 1995, group: "Endangered", mean_count: 142.0, index: 81.1 },
  { year: 2000, group: "Endangered", mean_count: 130.0, index: 74.3 },
  { year: 2005, group: "Endangered", mean_count: 118.0, index: 67.4 },
  { year: 2010, group: "Endangered", mean_count: 95.0, index: 54.3 },
  { year: 2015, group: "Endangered", mean_count: 88.0, index: 50.3 },
  { year: 2019, group: "Endangered", mean_count: 72.0, index: 41.1 },
  { year: 2022, group: "Endangered", mean_count: 65.0, index: 37.1 },
  { year: 1990, group: "Vulnerable", mean_count: 210.0, index: 100 },
  { year: 1995, group: "Vulnerable", mean_count: 195.0, index: 92.9 },
  { year: 2000, group: "Vulnerable", mean_count: 180.0, index: 85.7 },
  { year: 2005, group: "Vulnerable", mean_count: 160.0, index: 76.2 },
  { year: 2010, group: "Vulnerable", mean_count: 145.0, index: 69.0 },
  { year: 2015, group: "Vulnerable", mean_count: 130.0, index: 61.9 },
  { year: 2019, group: "Vulnerable", mean_count: 118.0, index: 56.2 },
  { year: 2022, group: "Vulnerable", mean_count: 110.0, index: 52.4 },
];

const BIRDS_STATE = [
  {
    State: "Australian Capital Territory",
    EPBCStatus: "Endangered",
    count: 2,
  },
  {
    State: "Australian Capital Territory",
    EPBCStatus: "Vulnerable",
    count: 6,
  },
  {
    State: "New South Wales",
    EPBCStatus: "Critically Endangered",
    count: 3,
  },
  { State: "New South Wales", EPBCStatus: "Endangered", count: 15 },
  { State: "New South Wales", EPBCStatus: "Vulnerable", count: 13 },
  {
    State: "Northern Territory",
    EPBCStatus: "Critically Endangered",
    count: 2,
  },
  { State: "Northern Territory", EPBCStatus: "Endangered", count: 7 },
  { State: "Northern Territory", EPBCStatus: "Vulnerable", count: 7 },
  { State: "Queensland", EPBCStatus: "Critically Endangered", count: 3 },
  { State: "Queensland", EPBCStatus: "Endangered", count: 10 },
  { State: "Queensland", EPBCStatus: "Vulnerable", count: 9 },
  {
    State: "South Australia",
    EPBCStatus: "Critically Endangered",
    count: 3,
  },
  { State: "South Australia", EPBCStatus: "Endangered", count: 11 },
  { State: "South Australia", EPBCStatus: "Vulnerable", count: 11 },
  { State: "Tasmania", EPBCStatus: "Critically Endangered", count: 2 },
  { State: "Tasmania", EPBCStatus: "Endangered", count: 7 },
  { State: "Tasmania", EPBCStatus: "Vulnerable", count: 8 },
  { State: "Victoria", EPBCStatus: "Critically Endangered", count: 5 },
  { State: "Victoria", EPBCStatus: "Endangered", count: 11 },
  { State: "Victoria", EPBCStatus: "Vulnerable", count: 13 },
  {
    State: "Western Australia",
    EPBCStatus: "Critically Endangered",
    count: 3,
  },
  { State: "Western Australia", EPBCStatus: "Endangered", count: 8 },
  { State: "Western Australia", EPBCStatus: "Vulnerable", count: 10 },
];

const TOP_BIRDS = [
  {
    CommonName: "South-eastern Brown Treecreeper",
    sites: 161,
    status: "Vulnerable",
  },
  { CommonName: "Gang-gang Cockatoo", sites: 74, status: "Endangered" },
  {
    CommonName: "South-east Southern Whiteface",
    sites: 118,
    status: "Vulnerable",
  },
  { CommonName: "Red-necked Stint", sites: 90, status: "Endangered" },
  {
    CommonName: "South-eastern Hooded Robin",
    sites: 87,
    status: "Endangered",
  },
  { CommonName: "Common Greenshank", sites: 84, status: "Endangered" },
  {
    CommonName: "Sharp-tailed Sandpiper",
    sites: 77,
    status: "Vulnerable",
  },
  { CommonName: "Diamond Firetail", sites: 72, status: "Vulnerable" },
  {
    CommonName: "Curlew Sandpiper",
    sites: 70,
    status: "Critically Endangered",
  },
  {
    CommonName: "Far Eastern Curlew",
    sites: 59,
    status: "Critically Endangered",
  },
  { CommonName: "Lesser Sand Plover", sites: 55, status: "Endangered" },
  { CommonName: "Painted Honeyeater", sites: 53, status: "Vulnerable" },
  { CommonName: "Red Knot", sites: 53, status: "Vulnerable" },
  { CommonName: "Black-tailed Godwit", sites: 53, status: "Endangered" },
  { CommonName: "Little Curlew", sites: 38, status: "Vulnerable" },
];

const TOP_FAM = [
  { family: "Orchidaceae", status: "Critically Endangered", count: 66 },
  { family: "Orchidaceae", status: "Endangered", count: 108 },
  { family: "Orchidaceae", status: "Vulnerable", count: 64 },
  { family: "Myrtaceae", status: "Critically Endangered", count: 37 },
  { family: "Myrtaceae", status: "Endangered", count: 68 },
  { family: "Myrtaceae", status: "Vulnerable", count: 91 },
  { family: "Fabaceae", status: "Critically Endangered", count: 25 },
  { family: "Fabaceae", status: "Endangered", count: 67 },
  { family: "Fabaceae", status: "Vulnerable", count: 62 },
  { family: "Proteaceae", status: "Critically Endangered", count: 30 },
  { family: "Proteaceae", status: "Endangered", count: 63 },
  { family: "Proteaceae", status: "Vulnerable", count: 44 },
  { family: "Rutaceae", status: "Critically Endangered", count: 21 },
  { family: "Rutaceae", status: "Endangered", count: 31 },
  { family: "Rutaceae", status: "Vulnerable", count: 36 },
  { family: "Asteraceae", status: "Critically Endangered", count: 3 },
  { family: "Asteraceae", status: "Endangered", count: 16 },
  { family: "Asteraceae", status: "Vulnerable", count: 31 },
  { family: "Parastacidae", status: "Critically Endangered", count: 16 },
  { family: "Parastacidae", status: "Endangered", count: 26 },
  { family: "Parastacidae", status: "Vulnerable", count: 5 },
  { family: "Lamiaceae", status: "Critically Endangered", count: 11 },
  { family: "Lamiaceae", status: "Endangered", count: 14 },
  { family: "Lamiaceae", status: "Vulnerable", count: 17 },
  { family: "Scincidae", status: "Critically Endangered", count: 8 },
  { family: "Scincidae", status: "Endangered", count: 19 },
  { family: "Scincidae", status: "Vulnerable", count: 12 },
  { family: "Muridae", status: "Critically Endangered", count: 1 },
  { family: "Muridae", status: "Endangered", count: 7 },
  { family: "Muridae", status: "Vulnerable", count: 11 },
];

const POP_TREND = [
  { year: 1990, group: "Birds", mean_count: 160.2 },
  { year: 1995, group: "Birds", mean_count: 145.0 },
  { year: 2000, group: "Birds", mean_count: 132.0 },
  { year: 2005, group: "Birds", mean_count: 118.0 },
  { year: 2010, group: "Birds", mean_count: 98.0 },
  { year: 2015, group: "Birds", mean_count: 85.0 },
  { year: 2018, group: "Birds", mean_count: 74.0 },
  { year: 2020, group: "Birds", mean_count: 65.0 },
  { year: 2022, group: "Birds", mean_count: 58.0 },
  { year: 1990, group: "Mammals", mean_count: 95.0 },
  { year: 1995, group: "Mammals", mean_count: 88.0 },
  { year: 2000, group: "Mammals", mean_count: 79.0 },
  { year: 2005, group: "Mammals", mean_count: 68.0 },
  { year: 2010, group: "Mammals", mean_count: 52.0 },
  { year: 2015, group: "Mammals", mean_count: 41.0 },
  { year: 2018, group: "Mammals", mean_count: 33.0 },
  { year: 2020, group: "Mammals", mean_count: 27.0 },
  { year: 2022, group: "Mammals", mean_count: 22.0 },
  { year: 1990, group: "Amphibians", mean_count: 120.0 },
  { year: 1995, group: "Amphibians", mean_count: 95.0 },
  { year: 2000, group: "Amphibians", mean_count: 70.0 },
  { year: 2005, group: "Amphibians", mean_count: 55.0 },
  { year: 2010, group: "Amphibians", mean_count: 42.0 },
  { year: 2015, group: "Amphibians", mean_count: 35.0 },
  { year: 2018, group: "Amphibians", mean_count: 28.0 },
  { year: 2020, group: "Amphibians", mean_count: 23.0 },
  { year: 2022, group: "Amphibians", mean_count: 18.0 },
];

const MONITORING_LOCATIONS_RAW = [
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "Western Australia",
    lat: -25.0153,
    lon: 114.4114,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "Western Australia",
    lat: -18.3111,
    lon: 122.3163,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "Western Australia",
    lat: -20.6605,
    lon: 117.0796,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "Western Australia",
    lat: -15.7141,
    lon: 120.8315,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "Western Australia",
    lat: -31.9153,
    lon: 115.4916,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "Victoria",
    lat: -37.847,
    lon: 143.2518,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "South Australia",
    lat: -33.7985,
    lon: 134.7935,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "Tasmania",
    lat: -40.4357,
    lon: 147.8211,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "Victoria",
    lat: -38.3864,
    lon: 146.2604,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "Western Australia",
    lat: -22.4051,
    lon: 114.4196,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "New South Wales",
    lat: -33.6868,
    lon: 151.3158,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "South Australia",
    lat: -32.7642,
    lon: 134.4945,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "Tasmania",
    lat: -40.448,
    lon: 144.5314,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "Queensland",
    lat: -19.5994,
    lon: 147.3552,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "Victoria",
    lat: -38.321,
    lon: 144.2402,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "Tasmania",
    lat: -42.656,
    lon: 147.752,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "Northern Territory",
    lat: -12.7242,
    lon: 131.1775,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "South Australia",
    lat: -34.9575,
    lon: 137.4744,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "New South Wales",
    lat: -33.2071,
    lon: 151.5581,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "South Australia",
    lat: -33.9139,
    lon: 137.9382,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "South Australia",
    lat: -35.7747,
    lon: 139.2178,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "Northern Territory",
    lat: -11.9893,
    lon: 134.579,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "New South Wales",
    lat: -29.2459,
    lon: 153.2594,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "Northern Territory",
    lat: -12.674,
    lon: 136.4093,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "Western Australia",
    lat: -34.1505,
    lon: 116.6498,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "New South Wales",
    lat: -32.366,
    lon: 152.2973,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "South Australia",
    lat: -37.3493,
    lon: 140.0268,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "Victoria",
    lat: -37.7506,
    lon: 148.9293,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "Western Australia",
    lat: -28.3574,
    lon: 114.4414,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "New South Wales",
    lat: -31.2316,
    lon: 152.798,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "New South Wales",
    lat: -32.5201,
    lon: 151.189,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "Western Australia",
    lat: -32.066,
    lon: 127.5511,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "New South Wales",
    lat: -34.6618,
    lon: 150.8783,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "Northern Territory",
    lat: -22.6756,
    lon: 134.1468,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "Western Australia",
    lat: -34.6955,
    lon: 116.1574,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "New South Wales",
    lat: -35.2652,
    lon: 150.66,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "Western Australia",
    lat: -29.7288,
    lon: 126.694,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "Queensland",
    lat: -14.3065,
    lon: 141.8775,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "South Australia",
    lat: -32.763,
    lon: 136.9455,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "Victoria",
    lat: -38.5121,
    lon: 142.5393,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "Queensland",
    lat: -18.763,
    lon: 146.4544,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "New South Wales",
    lat: -34.2247,
    lon: 151.0052,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "Western Australia",
    lat: -26.8755,
    lon: 114.3104,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "Western Australia",
    lat: -25.7517,
    lon: 113.0045,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "Queensland",
    lat: -16.6887,
    lon: 140.4145,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "Queensland",
    lat: -21.092,
    lon: 149.3839,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "Queensland",
    lat: -17.2769,
    lon: 146.0729,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "Queensland",
    lat: -27.2052,
    lon: 153.3375,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "Queensland",
    lat: -25.1012,
    lon: 152.8141,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "Queensland",
    lat: -24.2295,
    lon: 151.7723,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "Queensland",
    lat: -22.673,
    lon: 150.5462,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "Queensland",
    lat: -14.7268,
    lon: 145.1059,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "Queensland",
    lat: -18.1753,
    lon: 146.2083,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "Queensland",
    lat: -22.5986,
    lon: 150.9014,
  },
  {
    common_name: "Lesser Sand Plover",
    species: "Charadrius_mongolus",
    group: "Birds",
    status: "Endangered",
    state: "New South Wales",
    lat: -28.1695,
    lon: 153.6797,
  },
  {
    common_name: "Greater Sand Plover",
    species: "Charadrius_leschenaultii",
    group: "Birds",
    status: "Vulnerable",
    state: "Western Australia",
    lat: -25.0153,
    lon: 114.4114,
  },
  {
    common_name: "Greater Sand Plover",
    species: "Charadrius_leschenaultii",
    group: "Birds",
    status: "Vulnerable",
    state: "Western Australia",
    lat: -18.3111,
    lon: 122.3163,
  },
  {
    common_name: "Greater Sand Plover",
    species: "Charadrius_leschenaultii",
    group: "Birds",
    status: "Vulnerable",
    state: "Western Australia",
    lat: -31.9153,
    lon: 115.4916,
  },
  {
    common_name: "Greater Sand Plover",
    species: "Charadrius_leschenaultii",
    group: "Birds",
    status: "Vulnerable",
    state: "Western Australia",
    lat: -15.7141,
    lon: 120.8315,
  },
  {
    common_name: "Greater Sand Plover",
    species: "Charadrius_leschenaultii",
    group: "Birds",
    status: "Vulnerable",
    state: "South Australia",
    lat: -33.7985,
    lon: 134.7935,
  },
  {
    common_name: "Greater Sand Plover",
    species: "Charadrius_leschenaultii",
    group: "Birds",
    status: "Vulnerable",
    state: "South Australia",
    lat: -33.9139,
    lon: 137.9382,
  },
  {
    common_name: "Greater Sand Plover",
    species: "Charadrius_leschenaultii",
    group: "Birds",
    status: "Vulnerable",
    state: "Western Australia",
    lat: -33.895,
    lon: 122.5969,
  },
  {
    common_name: "Greater Sand Plover",
    species: "Charadrius_leschenaultii",
    group: "Birds",
    status: "Vulnerable",
    state: "Western Australia",
    lat: -22.4051,
    lon: 114.4196,
  },
  {
    common_name: "Greater Sand Plover",
    species: "Charadrius_leschenaultii",
    group: "Birds",
    status: "Vulnerable",
    state: "South Australia",
    lat: -32.7642,
    lon: 134.4945,
  },
  {
    common_name: "Greater Sand Plover",
    species: "Charadrius_leschenaultii",
    group: "Birds",
    status: "Vulnerable",
    state: "Tasmania",
    lat: -40.448,
    lon: 144.5314,
  },
  {
    common_name: "Greater Sand Plover",
    species: "Charadrius_leschenaultii",
    group: "Birds",
    status: "Vulnerable",
    state: "South Australia",
    lat: -34.9575,
    lon: 137.4744,
  },
  {
    common_name: "Greater Sand Plover",
    species: "Charadrius_leschenaultii",
    group: "Birds",
    status: "Vulnerable",
    state: "Victoria",
    lat: -38.3864,
    lon: 146.2604,
  },
  {
    common_name: "Greater Sand Plover",
    species: "Charadrius_leschenaultii",
    group: "Birds",
    status: "Vulnerable",
    state: "Western Australia",
    lat: -20.6605,
    lon: 117.0796,
  },
  {
    common_name: "Greater Sand Plover",
    species: "Charadrius_leschenaultii",
    group: "Birds",
    status: "Vulnerable",
    state: "New South Wales",
    lat: -29.2459,
    lon: 153.2594,
  },
  {
    common_name: "Greater Sand Plover",
    species: "Charadrius_leschenaultii",
    group: "Birds",
    status: "Vulnerable",
    state: "Northern Territory",
    lat: -12.7242,
    lon: 131.1775,
  },
  {
    common_name: "Greater Sand Plover",
    species: "Charadrius_leschenaultii",
    group: "Birds",
    status: "Vulnerable",
    state: "Tasmania",
    lat: -40.4357,
    lon: 147.8211,
  },
  {
    common_name: "Greater Sand Plover",
    species: "Charadrius_leschenaultii",
    group: "Birds",
    status: "Vulnerable",
    state: "Northern Territory",
    lat: -12.674,
    lon: 136.4093,
  },
  {
    common_name: "Greater Sand Plover",
    species: "Charadrius_leschenaultii",
    group: "Birds",
    status: "Vulnerable",
    state: "Western Australia",
    lat: -34.1505,
    lon: 116.6498,
  },
  {
    common_name: "Greater Sand Plover",
    species: "Charadrius_leschenaultii",
    group: "Birds",
    status: "Vulnerable",
    state: "New South Wales",
    lat: -32.366,
    lon: 152.2973,
  },
  {
    common_name: "Greater Sand Plover",
    species: "Charadrius_leschenaultii",
    group: "Birds",
    status: "Vulnerable",
    state: "Western Australia",
    lat: -28.3574,
    lon: 114.4414,
  },
  {
    common_name: "Greater Sand Plover",
    species: "Charadrius_leschenaultii",
    group: "Birds",
    status: "Vulnerable",
    state: "Western Australia",
    lat: -34.6955,
    lon: 116.1574,
  },
  {
    common_name: "Greater Sand Plover",
    species: "Charadrius_leschenaultii",
    group: "Birds",
    status: "Vulnerable",
    state: "Western Australia",
    lat: -29.9069,
    lon: 115.383,
  },
  {
    common_name: "Greater Sand Plover",
    species: "Charadrius_leschenaultii",
    group: "Birds",
    status: "Vulnerable",
    state: "Northern Territory",
    lat: -22.6756,
    lon: 134.1468,
  },
  {
    common_name: "Greater Sand Plover",
    species: "Charadrius_leschenaultii",
    group: "Birds",
    status: "Vulnerable",
    state: "Victoria",
    lat: -38.321,
    lon: 144.2402,
  },
  {
    common_name: "Greater Sand Plover",
    species: "Charadrius_leschenaultii",
    group: "Birds",
    status: "Vulnerable",
    state: "Western Australia",
    lat: -29.7288,
    lon: 126.694,
  },
  {
    common_name: "Greater Sand Plover",
    species: "Charadrius_leschenaultii",
    group: "Birds",
    status: "Vulnerable",
    state: "New South Wales",
    lat: -34.6618,
    lon: 150.8783,
  },
  {
    common_name: "Greater Sand Plover",
    species: "Charadrius_leschenaultii",
    group: "Birds",
    status: "Vulnerable",
    state: "Queensland",
    lat: -18.763,
    lon: 146.4544,
  },
  {
    common_name: "Greater Sand Plover",
    species: "Charadrius_leschenaultii",
    group: "Birds",
    status: "Vulnerable",
    state: "Western Australia",
    lat: -26.8755,
    lon: 114.3104,
  },
  {
    common_name: "Greater Sand Plover",
    species: "Charadrius_leschenaultii",
    group: "Birds",
    status: "Vulnerable",
    state: "South Australia",
    lat: -35.9292,
    lon: 137.2438,
  },
  {
    common_name: "Greater Sand Plover",
    species: "Charadrius_leschenaultii",
    group: "Birds",
    status: "Vulnerable",
    state: "Queensland",
    lat: -16.6887,
    lon: 140.4145,
  },
  {
    common_name: "Greater Sand Plover",
    species: "Charadrius_leschenaultii",
    group: "Birds",
    status: "Vulnerable",
    state: "Queensland",
    lat: -21.092,
    lon: 149.3839,
  },
  {
    common_name: "Greater Sand Plover",
    species: "Charadrius_leschenaultii",
    group: "Birds",
    status: "Vulnerable",
    state: "Queensland",
    lat: -19.5994,
    lon: 147.3552,
  },
  {
    common_name: "Greater Sand Plover",
    species: "Charadrius_leschenaultii",
    group: "Birds",
    status: "Vulnerable",
    state: "Queensland",
    lat: -17.2769,
    lon: 146.0729,
  },
  {
    common_name: "Greater Sand Plover",
    species: "Charadrius_leschenaultii",
    group: "Birds",
    status: "Vulnerable",
    state: "Queensland",
    lat: -27.2052,
    lon: 153.3375,
  },
  {
    common_name: "Greater Sand Plover",
    species: "Charadrius_leschenaultii",
    group: "Birds",
    status: "Vulnerable",
    state: "Queensland",
    lat: -25.1012,
    lon: 152.8141,
  },
  {
    common_name: "Greater Sand Plover",
    species: "Charadrius_leschenaultii",
    group: "Birds",
    status: "Vulnerable",
    state: "Queensland",
    lat: -22.673,
    lon: 150.5462,
  },
  {
    common_name: "Greater Sand Plover",
    species: "Charadrius_leschenaultii",
    group: "Birds",
    status: "Vulnerable",
    state: "Queensland",
    lat: -24.2295,
    lon: 151.7723,
  },
  {
    common_name: "Greater Sand Plover",
    species: "Charadrius_leschenaultii",
    group: "Birds",
    status: "Vulnerable",
    state: "Queensland",
    lat: -18.1753,
    lon: 146.2083,
  },
  {
    common_name: "Greater Sand Plover",
    species: "Charadrius_leschenaultii",
    group: "Birds",
    status: "Vulnerable",
    state: "Queensland",
    lat: -14.7268,
    lon: 145.1059,
  },
  {
    common_name: "Greater Sand Plover",
    species: "Charadrius_leschenaultii",
    group: "Birds",
    status: "Vulnerable",
    state: "Queensland",
    lat: -22.5986,
    lon: 150.9014,
  },
  {
    common_name: "Black-tailed Godwit",
    species: "Limosa_limosa",
    group: "Birds",
    status: "Endangered",
    state: "Western Australia",
    lat: -25.0153,
    lon: 114.4114,
  },
  {
    common_name: "Black-tailed Godwit",
    species: "Limosa_limosa",
    group: "Birds",
    status: "Endangered",
    state: "Western Australia",
    lat: -18.3111,
    lon: 122.3163,
  },
  {
    common_name: "Black-tailed Godwit",
    species: "Limosa_limosa",
    group: "Birds",
    status: "Endangered",
    state: "Western Australia",
    lat: -31.9153,
    lon: 115.4916,
  },
  {
    common_name: "Black-tailed Godwit",
    species: "Limosa_limosa",
    group: "Birds",
    status: "Endangered",
    state: "Northern Territory",
    lat: -23.6767,
    lon: 132.5498,
  },
  {
    common_name: "Black-tailed Godwit",
    species: "Limosa_limosa",
    group: "Birds",
    status: "Endangered",
    state: "New South Wales",
    lat: -32.5201,
    lon: 151.189,
  },
  {
    common_name: "Black-tailed Godwit",
    species: "Limosa_limosa",
    group: "Birds",
    status: "Endangered",
    state: "Victoria",
    lat: -38.3864,
    lon: 146.2604,
  },
  {
    common_name: "Black-tailed Godwit",
    species: "Limosa_limosa",
    group: "Birds",
    status: "Endangered",
    state: "South Australia",
    lat: -32.7642,
    lon: 134.4945,
  },
  {
    common_name: "Black-tailed Godwit",
    species: "Limosa_limosa",
    group: "Birds",
    status: "Endangered",
    state: "South Australia",
    lat: -33.9139,
    lon: 137.9382,
  },
  {
    common_name: "Black-tailed Godwit",
    species: "Limosa_limosa",
    group: "Birds",
    status: "Endangered",
    state: "Victoria",
    lat: -35.1862,
    lon: 142.3331,
  },
  {
    common_name: "Black-tailed Godwit",
    species: "Limosa_limosa",
    group: "Birds",
    status: "Endangered",
    state: "Tasmania",
    lat: -40.4357,
    lon: 147.8211,
  },
  {
    common_name: "Black-tailed Godwit",
    species: "Limosa_limosa",
    group: "Birds",
    status: "Endangered",
    state: "New South Wales",
    lat: -34.6618,
    lon: 150.8783,
  },
  {
    common_name: "Black-tailed Godwit",
    species: "Limosa_limosa",
    group: "Birds",
    status: "Endangered",
    state: "New South Wales",
    lat: -33.2071,
    lon: 151.5581,
  },
  {
    common_name: "Black-tailed Godwit",
    species: "Limosa_limosa",
    group: "Birds",
    status: "Endangered",
    state: "South Australia",
    lat: -35.7747,
    lon: 139.2178,
  },
  {
    common_name: "Black-tailed Godwit",
    species: "Limosa_limosa",
    group: "Birds",
    status: "Endangered",
    state: "Western Australia",
    lat: -20.6605,
    lon: 117.0796,
  },
  {
    common_name: "Black-tailed Godwit",
    species: "Limosa_limosa",
    group: "Birds",
    status: "Endangered",
    state: "Northern Territory",
    lat: -11.9893,
    lon: 134.579,
  },
  {
    common_name: "Black-tailed Godwit",
    species: "Limosa_limosa",
    group: "Birds",
    status: "Endangered",
    state: "New South Wales",
    lat: -29.2459,
    lon: 153.2594,
  },
  {
    common_name: "Black-tailed Godwit",
    species: "Limosa_limosa",
    group: "Birds",
    status: "Endangered",
    state: "Northern Territory",
    lat: -12.7242,
    lon: 131.1775,
  },
  {
    common_name: "Black-tailed Godwit",
    species: "Limosa_limosa",
    group: "Birds",
    status: "Endangered",
    state: "New South Wales",
    lat: -34.7952,
    lon: 145.1549,
  },
  {
    common_name: "Black-tailed Godwit",
    species: "Limosa_limosa",
    group: "Birds",
    status: "Endangered",
    state: "Western Australia",
    lat: -28.3574,
    lon: 114.4414,
  },
  {
    common_name: "Black-tailed Godwit",
    species: "Limosa_limosa",
    group: "Birds",
    status: "Endangered",
    state: "New South Wales",
    lat: -31.2316,
    lon: 152.798,
  },
  {
    common_name: "Black-tailed Godwit",
    species: "Limosa_limosa",
    group: "Birds",
    status: "Endangered",
    state: "Western Australia",
    lat: -34.6955,
    lon: 116.1574,
  },
  {
    common_name: "Black-tailed Godwit",
    species: "Limosa_limosa",
    group: "Birds",
    status: "Endangered",
    state: "Victoria",
    lat: -38.321,
    lon: 144.2402,
  },
  {
    common_name: "Black-tailed Godwit",
    species: "Limosa_limosa",
    group: "Birds",
    status: "Endangered",
    state: "New South Wales",
    lat: -32.366,
    lon: 152.2973,
  },
  {
    common_name: "Black-tailed Godwit",
    species: "Limosa_limosa",
    group: "Birds",
    status: "Endangered",
    state: "Victoria",
    lat: -37.847,
    lon: 143.2518,
  },
  {
    common_name: "Black-tailed Godwit",
    species: "Limosa_limosa",
    group: "Birds",
    status: "Endangered",
    state: "Victoria",
    lat: -36.3188,
    lon: 144.9278,
  },
  {
    common_name: "Black-tailed Godwit",
    species: "Limosa_limosa",
    group: "Birds",
    status: "Endangered",
    state: "Queensland",
    lat: -20.5816,
    lon: 139.7437,
  },
  {
    common_name: "Black-tailed Godwit",
    species: "Limosa_limosa",
    group: "Birds",
    status: "Endangered",
    state: "Western Australia",
    lat: -33.895,
    lon: 122.5969,
  },
  {
    common_name: "Black-tailed Godwit",
    species: "Limosa_limosa",
    group: "Birds",
    status: "Endangered",
    state: "South Australia",
    lat: -37.3493,
    lon: 140.0268,
  },
  {
    common_name: "Black-tailed Godwit",
    species: "Limosa_limosa",
    group: "Birds",
    status: "Endangered",
    state: "South Australia",
    lat: -33.7985,
    lon: 134.7935,
  },
  {
    common_name: "Black-tailed Godwit",
    species: "Limosa_limosa",
    group: "Birds",
    status: "Endangered",
    state: "New South Wales",
    lat: -35.2652,
    lon: 150.66,
  },
  {
    common_name: "Black-tailed Godwit",
    species: "Limosa_limosa",
    group: "Birds",
    status: "Endangered",
    state: "Western Australia",
    lat: -34.1505,
    lon: 116.6498,
  },
  {
    common_name: "Black-tailed Godwit",
    species: "Limosa_limosa",
    group: "Birds",
    status: "Endangered",
    state: "Tasmania",
    lat: -42.656,
    lon: 147.752,
  },
  {
    common_name: "Black-tailed Godwit",
    species: "Limosa_limosa",
    group: "Birds",
    status: "Endangered",
    state: "Western Australia",
    lat: -29.7288,
    lon: 126.694,
  },
  {
    common_name: "Black-tailed Godwit",
    species: "Limosa_limosa",
    group: "Birds",
    status: "Endangered",
    state: "Queensland",
    lat: -14.3065,
    lon: 141.8775,
  },
  {
    common_name: "Black-tailed Godwit",
    species: "Limosa_limosa",
    group: "Birds",
    status: "Endangered",
    state: "South Australia",
    lat: -31.7303,
    lon: 136.5455,
  },
  {
    common_name: "Black-tailed Godwit",
    species: "Limosa_limosa",
    group: "Birds",
    status: "Endangered",
    state: "Queensland",
    lat: -20.5766,
    lon: 146.001,
  },
  {
    common_name: "Black-tailed Godwit",
    species: "Limosa_limosa",
    group: "Birds",
    status: "Endangered",
    state: "Tasmania",
    lat: -40.448,
    lon: 144.5314,
  },
  {
    common_name: "Black-tailed Godwit",
    species: "Limosa_limosa",
    group: "Birds",
    status: "Endangered",
    state: "Queensland",
    lat: -18.763,
    lon: 146.4544,
  },
  {
    common_name: "Black-tailed Godwit",
    species: "Limosa_limosa",
    group: "Birds",
    status: "Endangered",
    state: "New South Wales",
    lat: -35.5804,
    lon: 144.9212,
  },
  {
    common_name: "Black-tailed Godwit",
    species: "Limosa_limosa",
    group: "Birds",
    status: "Endangered",
    state: "New South Wales",
    lat: -34.2247,
    lon: 151.0052,
  },
  {
    common_name: "Black-tailed Godwit",
    species: "Limosa_limosa",
    group: "Birds",
    status: "Endangered",
    state: "New South Wales",
    lat: -28.4196,
    lon: 153.6112,
  },
  {
    common_name: "Black-tailed Godwit",
    species: "Limosa_limosa",
    group: "Birds",
    status: "Endangered",
    state: "South Australia",
    lat: -35.9292,
    lon: 137.2438,
  },
  {
    common_name: "Black-tailed Godwit",
    species: "Limosa_limosa",
    group: "Birds",
    status: "Endangered",
    state: "Queensland",
    lat: -16.6887,
    lon: 140.4145,
  },
  {
    common_name: "Black-tailed Godwit",
    species: "Limosa_limosa",
    group: "Birds",
    status: "Endangered",
    state: "Queensland",
    lat: -27.2052,
    lon: 153.3375,
  },
  {
    common_name: "Black-tailed Godwit",
    species: "Limosa_limosa",
    group: "Birds",
    status: "Endangered",
    state: "Queensland",
    lat: -21.092,
    lon: 149.3839,
  },
  {
    common_name: "Black-tailed Godwit",
    species: "Limosa_limosa",
    group: "Birds",
    status: "Endangered",
    state: "Queensland",
    lat: -17.2769,
    lon: 146.0729,
  },
  {
    common_name: "Black-tailed Godwit",
    species: "Limosa_limosa",
    group: "Birds",
    status: "Endangered",
    state: "Queensland",
    lat: -19.5994,
    lon: 147.3552,
  },
  {
    common_name: "Black-tailed Godwit",
    species: "Limosa_limosa",
    group: "Birds",
    status: "Endangered",
    state: "Queensland",
    lat: -25.1012,
    lon: 152.8141,
  },
  {
    common_name: "Black-tailed Godwit",
    species: "Limosa_limosa",
    group: "Birds",
    status: "Endangered",
    state: "Queensland",
    lat: -22.673,
    lon: 150.5462,
  },
  {
    common_name: "Black-tailed Godwit",
    species: "Limosa_limosa",
    group: "Birds",
    status: "Endangered",
    state: "Queensland",
    lat: -24.2295,
    lon: 151.7723,
  },
  {
    common_name: "Black-tailed Godwit",
    species: "Limosa_limosa",
    group: "Birds",
    status: "Endangered",
    state: "Queensland",
    lat: -27.7708,
    lon: 150.908,
  },
  {
    common_name: "Black-tailed Godwit",
    species: "Limosa_limosa",
    group: "Birds",
    status: "Endangered",
    state: "Queensland",
    lat: -22.5986,
    lon: 150.9014,
  },
  {
    common_name: "Black-tailed Godwit",
    species: "Limosa_limosa",
    group: "Birds",
    status: "Endangered",
    state: "New South Wales",
    lat: -28.1695,
    lon: 153.6797,
  },
  {
    common_name: "Red Knot",
    species: "Calidris_canutus",
    group: "Birds",
    status: "Vulnerable",
    state: "Western Australia",
    lat: -25.0153,
    lon: 114.4114,
  },
  {
    common_name: "Red Knot",
    species: "Calidris_canutus",
    group: "Birds",
    status: "Vulnerable",
    state: "Western Australia",
    lat: -18.3111,
    lon: 122.3163,
  },
  {
    common_name: "Red Knot",
    species: "Calidris_canutus",
    group: "Birds",
    status: "Vulnerable",
    state: "Western Australia",
    lat: -31.9153,
    lon: 115.4916,
  },
  {
    common_name: "Red Knot",
    species: "Calidris_canutus",
    group: "Birds",
    status: "Vulnerable",
    state: "New South Wales",
    lat: -32.366,
    lon: 152.2973,
  },
  {
    common_name: "Red Knot",
    species: "Calidris_canutus",
    group: "Birds",
    status: "Vulnerable",
    state: "New South Wales",
    lat: -32.5201,
    lon: 151.189,
  },
  {
    common_name: "Red Knot",
    species: "Calidris_canutus",
    group: "Birds",
    status: "Vulnerable",
    state: "Western Australia",
    lat: -34.6955,
    lon: 116.1574,
  },
  {
    common_name: "Red Knot",
    species: "Calidris_canutus",
    group: "Birds",
    status: "Vulnerable",
    state: "Victoria",
    lat: -37.847,
    lon: 143.2518,
  },
  {
    common_name: "Red Knot",
    species: "Calidris_canutus",
    group: "Birds",
    status: "Vulnerable",
    state: "South Australia",
    lat: -33.7985,
    lon: 134.7935,
  },
  {
    common_name: "Red Knot",
    species: "Calidris_canutus",
    group: "Birds",
    status: "Vulnerable",
    state: "South Australia",
    lat: -33.9139,
    lon: 137.9382,
  },
  {
    common_name: "Red Knot",
    species: "Calidris_canutus",
    group: "Birds",
    status: "Vulnerable",
    state: "Victoria",
    lat: -38.3864,
    lon: 146.2604,
  },
  {
    common_name: "Red Knot",
    species: "Calidris_canutus",
    group: "Birds",
    status: "Vulnerable",
    state: "Victoria",
    lat: -38.321,
    lon: 144.2402,
  },
  {
    common_name: "Red Knot",
    species: "Calidris_canutus",
    group: "Birds",
    status: "Vulnerable",
    state: "Western Australia",
    lat: -22.4051,
    lon: 114.4196,
  },
  {
    common_name: "Red Knot",
    species: "Calidris_canutus",
    group: "Birds",
    status: "Vulnerable",
    state: "New South Wales",
    lat: -33.6868,
    lon: 151.3158,
  },
  {
    common_name: "Red Knot",
    species: "Calidris_canutus",
    group: "Birds",
    status: "Vulnerable",
    state: "South Australia",
    lat: -32.7642,
    lon: 134.4945,
  },
  {
    common_name: "Red Knot",
    species: "Calidris_canutus",
    group: "Birds",
    status: "Vulnerable",
    state: "Tasmania",
    lat: -40.448,
    lon: 144.5314,
  },
  {
    common_name: "Red Knot",
    species: "Calidris_canutus",
    group: "Birds",
    status: "Vulnerable",
    state: "New South Wales",
    lat: -35.955,
    lon: 150.2451,
  },
  {
    common_name: "Red Knot",
    species: "Calidris_canutus",
    group: "Birds",
    status: "Vulnerable",
    state: "Tasmania",
    lat: -40.4357,
    lon: 147.8211,
  },
  {
    common_name: "Red Knot",
    species: "Calidris_canutus",
    group: "Birds",
    status: "Vulnerable",
    state: "South Australia",
    lat: -34.9575,
    lon: 137.4744,
  },
  {
    common_name: "Red Knot",
    species: "Calidris_canutus",
    group: "Birds",
    status: "Vulnerable",
    state: "New South Wales",
    lat: -35.2652,
    lon: 150.66,
  },
  {
    common_name: "Red Knot",
    species: "Calidris_canutus",
    group: "Birds",
    status: "Vulnerable",
    state: "New South Wales",
    lat: -34.6618,
    lon: 150.8783,
  },
  {
    common_name: "Red Knot",
    species: "Calidris_canutus",
    group: "Birds",
    status: "Vulnerable",
    state: "New South Wales",
    lat: -33.2071,
    lon: 151.5581,
  },
  {
    common_name: "Red Knot",
    species: "Calidris_canutus",
    group: "Birds",
    status: "Vulnerable",
    state: "South Australia",
    lat: -35.7747,
    lon: 139.2178,
  },
  {
    common_name: "Red Knot",
    species: "Calidris_canutus",
    group: "Birds",
    status: "Vulnerable",
    state: "Western Australia",
    lat: -20.6605,
    lon: 117.0796,
  },
  {
    common_name: "Red Knot",
    species: "Calidris_canutus",
    group: "Birds",
    status: "Vulnerable",
    state: "Northern Territory",
    lat: -11.9893,
    lon: 134.579,
  },
  {
    common_name: "Red Knot",
    species: "Calidris_canutus",
    group: "Birds",
    status: "Vulnerable",
    state: "New South Wales",
    lat: -29.2459,
    lon: 153.2594,
  },
  {
    common_name: "Red Knot",
    species: "Calidris_canutus",
    group: "Birds",
    status: "Vulnerable",
    state: "Northern Territory",
    lat: -12.7242,
    lon: 131.1775,
  },
  {
    common_name: "Red Knot",
    species: "Calidris_canutus",
    group: "Birds",
    status: "Vulnerable",
    state: "Western Australia",
    lat: -33.895,
    lon: 122.5969,
  },
  {
    common_name: "Red Knot",
    species: "Calidris_canutus",
    group: "Birds",
    status: "Vulnerable",
    state: "Western Australia",
    lat: -34.1505,
    lon: 116.6498,
  },
  {
    common_name: "Red Knot",
    species: "Calidris_canutus",
    group: "Birds",
    status: "Vulnerable",
    state: "New South Wales",
    lat: -31.2316,
    lon: 152.798,
  },
  {
    common_name: "Red Knot",
    species: "Calidris_canutus",
    group: "Birds",
    status: "Vulnerable",
    state: "Western Australia",
    lat: -28.3574,
    lon: 114.4414,
  },
  {
    common_name: "Red Knot",
    species: "Calidris_canutus",
    group: "Birds",
    status: "Vulnerable",
    state: "Victoria",
    lat: -38.5121,
    lon: 142.5393,
  },
  {
    common_name: "Red Knot",
    species: "Calidris_canutus",
    group: "Birds",
    status: "Vulnerable",
    state: "Western Australia",
    lat: -32.4133,
    lon: 117.1793,
  },
  {
    common_name: "Red Knot",
    species: "Calidris_canutus",
    group: "Birds",
    status: "Vulnerable",
    state: "New South Wales",
    lat: -36.5332,
    lon: 149.739,
  },
  {
    common_name: "Red Knot",
    species: "Calidris_canutus",
    group: "Birds",
    status: "Vulnerable",
    state: "Tasmania",
    lat: -42.656,
    lon: 147.752,
  },
  {
    common_name: "Red Knot",
    species: "Calidris_canutus",
    group: "Birds",
    status: "Vulnerable",
    state: "Victoria",
    lat: -37.7506,
    lon: 148.9293,
  },
  {
    common_name: "Red Knot",
    species: "Calidris_canutus",
    group: "Birds",
    status: "Vulnerable",
    state: "South Australia",
    lat: -37.3493,
    lon: 140.0268,
  },
  {
    common_name: "Red Knot",
    species: "Calidris_canutus",
    group: "Birds",
    status: "Vulnerable",
    state: "South Australia",
    lat: -35.9292,
    lon: 137.2438,
  },
  {
    common_name: "Red Knot",
    species: "Calidris_canutus",
    group: "Birds",
    status: "Vulnerable",
    state: "Western Australia",
    lat: -29.7288,
    lon: 126.694,
  },
  {
    common_name: "Red Knot",
    species: "Calidris_canutus",
    group: "Birds",
    status: "Vulnerable",
    state: "Victoria",
    lat: -38.3855,
    lon: 141.3016,
  },
  {
    common_name: "Red Knot",
    species: "Calidris_canutus",
    group: "Birds",
    status: "Vulnerable",
    state: "New South Wales",
    lat: -34.2247,
    lon: 151.0052,
  },
  {
    common_name: "Red Knot",
    species: "Calidris_canutus",
    group: "Birds",
    status: "Vulnerable",
    state: "South Australia",
    lat: -32.763,
    lon: 136.9455,
  },
  {
    common_name: "Red Knot",
    species: "Calidris_canutus",
    group: "Birds",
    status: "Vulnerable",
    state: "Queensland",
    lat: -18.763,
    lon: 146.4544,
  },
  {
    common_name: "Red Knot",
    species: "Calidris_canutus",
    group: "Birds",
    status: "Vulnerable",
    state: "Western Australia",
    lat: -26.8755,
    lon: 114.3104,
  },
  {
    common_name: "Red Knot",
    species: "Calidris_canutus",
    group: "Birds",
    status: "Vulnerable",
    state: "Queensland",
    lat: -27.2052,
    lon: 153.3375,
  },
  {
    common_name: "Red Knot",
    species: "Calidris_canutus",
    group: "Birds",
    status: "Vulnerable",
    state: "Queensland",
    lat: -16.6887,
    lon: 140.4145,
  },
  {
    common_name: "Red Knot",
    species: "Calidris_canutus",
    group: "Birds",
    status: "Vulnerable",
    state: "Queensland",
    lat: -21.092,
    lon: 149.3839,
  },
  {
    common_name: "Red Knot",
    species: "Calidris_canutus",
    group: "Birds",
    status: "Vulnerable",
    state: "Queensland",
    lat: -17.2769,
    lon: 146.0729,
  },
  {
    common_name: "Red Knot",
    species: "Calidris_canutus",
    group: "Birds",
    status: "Vulnerable",
    state: "Queensland",
    lat: -19.5994,
    lon: 147.3552,
  },
  {
    common_name: "Red Knot",
    species: "Calidris_canutus",
    group: "Birds",
    status: "Vulnerable",
    state: "Queensland",
    lat: -25.1012,
    lon: 152.8141,
  },
  {
    common_name: "Red Knot",
    species: "Calidris_canutus",
    group: "Birds",
    status: "Vulnerable",
    state: "Queensland",
    lat: -22.673,
    lon: 150.5462,
  },
  {
    common_name: "Red Knot",
    species: "Calidris_canutus",
    group: "Birds",
    status: "Vulnerable",
    state: "Queensland",
    lat: -24.2295,
    lon: 151.7723,
  },
  {
    common_name: "Red Knot",
    species: "Calidris_canutus",
    group: "Birds",
    status: "Vulnerable",
    state: "Northern Territory",
    lat: -22.6756,
    lon: 134.1468,
  },
  {
    common_name: "Red Knot",
    species: "Calidris_canutus",
    group: "Birds",
    status: "Vulnerable",
    state: "New South Wales",
    lat: -28.1695,
    lon: 153.6797,
  },
  {
    common_name: "Gould's Petrel",
    species: "Pterodroma_leucoptera",
    group: "Birds",
    status: null,
    state: "New South Wales",
    lat: -32.366,
    lon: 152.2973,
  },
  {
    common_name: "Gould's Petrel",
    species: "Pterodroma_leucoptera",
    group: "Birds",
    status: null,
    state: "New South Wales",
    lat: -35.955,
    lon: 150.2451,
  },
  {
    common_name: "White-bellied Frog",
    species: "Anstisia_alba",
    group: "Amphibians",
    status: "Critically Endangered",
    state: "Western Australia",
    lat: -34.6955,
    lon: 116.1574,
  },
  {
    common_name: "White-bellied Frog",
    species: "Anstisia_alba",
    group: "Amphibians",
    status: "Critically Endangered",
    state: "Western Australia",
    lat: -34.1505,
    lon: 116.6498,
  },
  {
    common_name: "Orange-bellied Frog",
    species: "Anstisia_vitellina",
    group: "Amphibians",
    status: "Vulnerable",
    state: "Western Australia",
    lat: -34.1505,
    lon: 116.6498,
  },
  {
    common_name: "Green and Golden Bell Frog",
    species: "Litoria_aurea",
    group: "Amphibians",
    status: "Vulnerable",
    state: "New South Wales",
    lat: -34.8501,
    lon: 149.0708,
  },
  {
    common_name: "Green and Golden Bell Frog",
    species: "Litoria_aurea",
    group: "Amphibians",
    status: "Vulnerable",
    state: "New South Wales",
    lat: -33.8851,
    lon: 150.8078,
  },
  {
    common_name: "Green and Golden Bell Frog",
    species: "Litoria_aurea",
    group: "Amphibians",
    status: "Vulnerable",
    state: "New South Wales",
    lat: -34.2247,
    lon: 151.0052,
  },
  {
    common_name: "Green and Golden Bell Frog",
    species: "Litoria_aurea",
    group: "Amphibians",
    status: "Vulnerable",
    state: "New South Wales",
    lat: -34.6618,
    lon: 150.8783,
  },
  {
    common_name: "Green and Golden Bell Frog",
    species: "Litoria_aurea",
    group: "Amphibians",
    status: "Vulnerable",
    state: "New South Wales",
    lat: -29.8207,
    lon: 153.4154,
  },
  {
    common_name: "Green and Golden Bell Frog",
    species: "Litoria_aurea",
    group: "Amphibians",
    status: "Vulnerable",
    state: "New South Wales",
    lat: -32.5201,
    lon: 151.189,
  },
  {
    common_name: "Green and Golden Bell Frog",
    species: "Litoria_aurea",
    group: "Amphibians",
    status: "Vulnerable",
    state: "New South Wales",
    lat: -33.6868,
    lon: 151.3158,
  },
  {
    common_name: "Green and Golden Bell Frog",
    species: "Litoria_aurea",
    group: "Amphibians",
    status: "Vulnerable",
    state: "New South Wales",
    lat: -35.2652,
    lon: 150.66,
  },
  {
    common_name: "Green and Golden Bell Frog",
    species: "Litoria_aurea",
    group: "Amphibians",
    status: "Vulnerable",
    state: "Victoria",
    lat: -38.3864,
    lon: 146.2604,
  },
  {
    common_name: "Green and Golden Bell Frog",
    species: "Litoria_aurea",
    group: "Amphibians",
    status: "Vulnerable",
    state: "New South Wales",
    lat: -31.2316,
    lon: 152.798,
  },
  {
    common_name: "Green and Golden Bell Frog",
    species: "Litoria_aurea",
    group: "Amphibians",
    status: "Vulnerable",
    state: "New South Wales",
    lat: -32.366,
    lon: 152.2973,
  },
  {
    common_name: "Green and Golden Bell Frog",
    species: "Litoria_aurea",
    group: "Amphibians",
    status: "Vulnerable",
    state: "New South Wales",
    lat: -36.1397,
    lon: 149.1057,
  },
  {
    common_name: "Booroolong Frog",
    species: "Litoria_booroolongensis",
    group: "Amphibians",
    status: "Endangered",
    state: "New South Wales",
    lat: -34.1382,
    lon: 148.3764,
  },
  {
    common_name: "Booroolong Frog",
    species: "Litoria_booroolongensis",
    group: "Amphibians",
    status: "Endangered",
    state: "New South Wales",
    lat: -35.5939,
    lon: 148.3174,
  },
  {
    common_name: "Booroolong Frog",
    species: "Litoria_booroolongensis",
    group: "Amphibians",
    status: "Endangered",
    state: "New South Wales",
    lat: -34.8501,
    lon: 149.0708,
  },
  {
    common_name: "Tasmanian Tree Frog",
    species: "Litoria_burrowsae",
    group: "Amphibians",
    status: null,
    state: "Tasmania",
    lat: -42.5662,
    lon: 145.6212,
  },
  {
    common_name: "Tasmanian Tree Frog",
    species: "Litoria_burrowsae",
    group: "Amphibians",
    status: null,
    state: "Tasmania",
    lat: -43.133,
    lon: 146.7429,
  },
  {
    common_name: "Australian Lace-lid",
    species: "Litoria_dayi",
    group: "Amphibians",
    status: "Vulnerable",
    state: "Queensland",
    lat: -18.8326,
    lon: 146.0068,
  },
  {
    common_name: "Kroombit Tree Frog",
    species: "Litoria_kroombitensis",
    group: "Amphibians",
    status: "Critically Endangered",
    state: "Queensland",
    lat: -24.2295,
    lon: 151.7723,
  },
  {
    common_name: "Northern Heath Frog",
    species: "Litoria_littlejohni",
    group: "Amphibians",
    status: "Endangered",
    state: "New South Wales",
    lat: -34.2247,
    lon: 151.0052,
  },
  {
    common_name: "Northern Heath Frog",
    species: "Litoria_littlejohni",
    group: "Amphibians",
    status: "Endangered",
    state: "New South Wales",
    lat: -33.2071,
    lon: 151.5581,
  },
  {
    common_name: "Southern Owl Frog",
    species: "Heleioporus_australiacus_flavopunctatus",
    group: "Amphibians",
    status: "Endangered",
    state: "New South Wales",
    lat: -36.5332,
    lon: 149.739,
  },
  {
    common_name: "Alpine Tree Frog",
    species: "Litoria_verreauxii_alpina",
    group: "Amphibians",
    status: "Vulnerable",
    state: "Victoria",
    lat: -37.209,
    lon: 146.8453,
  },
  {
    common_name: "Armoured Mist Frog",
    species: "Litoria_lorica",
    group: "Amphibians",
    status: "Critically Endangered",
    state: "Queensland",
    lat: -16.0942,
    lon: 145.3602,
  },
  {
    common_name: "Kuranda Tree Frog",
    species: "Litoria_myola",
    group: "Amphibians",
    status: "Critically Endangered",
    state: "Queensland",
    lat: -16.5884,
    lon: 145.7091,
  },
  {
    common_name: "Wallum Sedge Frog",
    species: "Litoria_olongburensis",
    group: "Amphibians",
    status: "Vulnerable",
    state: "Queensland",
    lat: -27.1534,
    lon: 152.8243,
  },
  {
    common_name: "Wallum Sedge Frog",
    species: "Litoria_olongburensis",
    group: "Amphibians",
    status: "Vulnerable",
    state: "Queensland",
    lat: -27.2052,
    lon: 153.3375,
  },
  {
    common_name: "Wallum Sedge Frog",
    species: "Litoria_olongburensis",
    group: "Amphibians",
    status: "Vulnerable",
    state: "New South Wales",
    lat: -28.4196,
    lon: 153.6112,
  },
  {
    common_name: "Wallum Sedge Frog",
    species: "Litoria_olongburensis",
    group: "Amphibians",
    status: "Vulnerable",
    state: "New South Wales",
    lat: -28.5964,
    lon: 153.1884,
  },
  {
    common_name: "Wallum Sedge Frog",
    species: "Litoria_olongburensis",
    group: "Amphibians",
    status: "Vulnerable",
    state: "New South Wales",
    lat: -29.2459,
    lon: 153.2594,
  },
  {
    common_name: "Wallum Sedge Frog",
    species: "Litoria_olongburensis",
    group: "Amphibians",
    status: "Vulnerable",
    state: "New South Wales",
    lat: -29.8207,
    lon: 153.4154,
  },
  {
    common_name: "Southern Bell Frog",
    species: "Litoria_raniformis",
    group: "Amphibians",
    status: "Vulnerable",
    state: "New South Wales",
    lat: -34.8501,
    lon: 149.0708,
  },
  {
    common_name: "Southern Bell Frog",
    species: "Litoria_raniformis",
    group: "Amphibians",
    status: "Vulnerable",
    state: "Victoria",
    lat: -37.847,
    lon: 143.2518,
  },
  {
    common_name: "Southern Bell Frog",
    species: "Litoria_raniformis",
    group: "Amphibians",
    status: "Vulnerable",
    state: "Victoria",
    lat: -37.2197,
    lon: 144.8841,
  },
  {
    common_name: "Southern Bell Frog",
    species: "Litoria_raniformis",
    group: "Amphibians",
    status: "Vulnerable",
    state: "Victoria",
    lat: -38.3864,
    lon: 146.2604,
  },
  {
    common_name: "Southern Bell Frog",
    species: "Litoria_raniformis",
    group: "Amphibians",
    status: "Vulnerable",
    state: "New South Wales",
    lat: -34.7952,
    lon: 145.1549,
  },
  {
    common_name: "Southern Bell Frog",
    species: "Litoria_raniformis",
    group: "Amphibians",
    status: "Vulnerable",
    state: "New South Wales",
    lat: -33.7093,
    lon: 144.581,
  },
  {
    common_name: "Southern Bell Frog",
    species: "Litoria_raniformis",
    group: "Amphibians",
    status: "Vulnerable",
    state: "New South Wales",
    lat: -34.1355,
    lon: 147.2989,
  },
  {
    common_name: "Southern Bell Frog",
    species: "Litoria_raniformis",
    group: "Amphibians",
    status: "Vulnerable",
    state: "New South Wales",
    lat: -33.5561,
    lon: 142.5487,
  },
  {
    common_name: "Southern Bell Frog",
    species: "Litoria_raniformis",
    group: "Amphibians",
    status: "Vulnerable",
    state: "Victoria",
    lat: -36.8579,
    lon: 143.9087,
  },
  {
    common_name: "Southern Bell Frog",
    species: "Litoria_raniformis",
    group: "Amphibians",
    status: "Vulnerable",
    state: "Victoria",
    lat: -38.321,
    lon: 144.2402,
  },
  {
    common_name: "Common Mist Frog",
    species: "Litoria_rheocola",
    group: "Amphibians",
    status: null,
    state: "Queensland",
    lat: -16.0942,
    lon: 145.3602,
  },
  {
    common_name: "Common Mist Frog",
    species: "Litoria_rheocola",
    group: "Amphibians",
    status: null,
    state: "Queensland",
    lat: -18.1263,
    lon: 145.7201,
  },
  {
    common_name: "Common Mist Frog",
    species: "Litoria_rheocola",
    group: "Amphibians",
    status: null,
    state: "Queensland",
    lat: -17.4353,
    lon: 145.76,
  },
];

const STATE_LABEL_COORDS = [
  { abbr: "NSW", lat: -32.5, lon: 146.0 },
  { abbr: "QLD", lat: -22.5, lon: 144.5 },
  { abbr: "VIC", lat: -37.0, lon: 144.5 },
  { abbr: "SA",  lat: -30.5, lon: 135.5 },
  { abbr: "WA",  lat: -25.5, lon: 121.5 },
  { abbr: "TAS", lat: -42.3, lon: 146.5 },
  { abbr: "NT",  lat: -19.5, lon: 133.5 },
  { abbr: "ACT", lat: -35.5, lon: 149.5 },
];

const STATUS_ORDER_CALC = "datum['Threatened status'] === 'Critically Endangered' ? 1 : datum['Threatened status'] === 'Endangered' ? 2 : datum['Threatened status'] === 'Vulnerable' ? 3 : datum['Threatened status'] === 'Extinct' ? 4 : 5";
const STATUS_ORDER_CALC_S = "datum.status === 'Critically Endangered' ? 1 : datum.status === 'Endangered' ? 2 : datum.status === 'Vulnerable' ? 3 : datum.status === 'Extinct' ? 4 : 5";

const AUS_TOPOJSON_URL =
  "https://raw.githubusercontent.com/FIT3179/Vega-Lite/main/3_choropleth_map/js/ne_110m_admin_0_countries.topojson";
const AUS_STATES_URL =
  "https://raw.githubusercontent.com/rowanhogan/australian-states/master/states.min.geojson";

const MONITORING_LOCATIONS = MONITORING_LOCATIONS_RAW.filter(
  (d) => d.status !== null,
);

const W = (id) => document.getElementById(id).clientWidth - 20 || 700;

const STATE_FULL_NAMES = {
  ACT: "Australian Capital Territory",
  NSW: "New South Wales",
  NT: "Northern Territory",
  QLD: "Queensland",
  SA: "South Australia",
  TAS: "Tasmania",
  VIC: "Victoria",
  WA: "Western Australia",
};

const STATE_STATUS_LABELED = STATE_STATUS.map((d) => ({
  ...d,
  state_full: STATE_FULL_NAMES[d.state],
}));

// Charts
const chart1 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  width: "container",
  height: 300,
  autosize: { type: "fit-x", contains: "padding" },
  config: {
    ...baseConfig,
    legend: { ...baseConfig.legend, symbolSize: 140 },
  },
  data: { values: STATUS_SUMMARY },
  transform: [
    {
      filter:
        "datum['Threatened status'] !== 'Extinct in the wild' && datum['Threatened status'] !== 'Conservation Dependent'",
    },
  ],
  layer: [
    {
      params: [
        {
          name: "statusSel1",
          select: { type: "point", fields: ["Threatened status"] },
          bind: "legend",
        },
      ],
      mark: {
        type: "arc",
        outerRadius: 128,
        innerRadius: 62,
        stroke: BG,
        strokeWidth: 2,
      },
      encoding: {
        theta: { field: "count", type: "quantitative", stack: true },
        color: {
          field: "Threatened status",
          type: "nominal",
          scale: {
            domain: [
              "Critically Endangered",
              "Endangered",
              "Vulnerable",
              "Extinct",
            ],
            range: STATUS_RANGE,
          },
          legend: {
            orient: "bottom",
            anchor: "middle",
            direction: "horizontal",
            columnPadding: 20,
            title: "Click to filter",
            titleFontSize: 10,
          },
        },
        opacity: { condition: { param: "statusSel1", value: 1 }, value: 0.15 },
        tooltip: [
          { field: "Threatened status", title: "Status" },
          { field: "count", title: "Species", format: "," },
        ],
      },
    },
    {
      mark: {
        type: "text",
        fontSize: 26,
        fontWeight: 700,
        font: "Playfair Display, serif",
        color: TEXT,
      },
      encoding: { text: { value: "2,200" } },
    },
    {
      mark: { type: "text", fontSize: 12, dy: 22, color: TEXT3 },
      encoding: { text: { value: "threatened species" } },
    },
  ],
};

vegaEmbed("#chart1", chart1, embedOptions);

const chart2 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  width: "container",
  height: 300,
  autosize: { type: "fit-x", contains: "padding" },
  config: {
    ...baseConfig,
    legend: { ...baseConfig.legend, symbolSize: 140 },
  },
  data: {
    values: KINGDOM_STATUS.filter((d) =>
      ["Critically Endangered", "Endangered", "Vulnerable", "Extinct"].includes(
        d["Threatened status"],
      ),
    ),
  },
  layer: [
    {
      params: [
        {
          name: "statusSel2",
          select: { type: "point", fields: ["Threatened status"] },
          bind: "legend",
        },
      ],
      mark: { type: "bar", cornerRadiusTopLeft: 2, cornerRadiusTopRight: 2 },
      encoding: {
        x: { field: "Kingdom", type: "nominal", axis: { labelAngle: 0 }, title: null },
        xOffset: {
          field: "Threatened status", type: "nominal",
          sort: ["Critically Endangered", "Endangered", "Vulnerable", "Extinct"],
        },
        y: {
          field: "count", type: "quantitative", title: "Species Count",
          axis: { grid: true, gridColor: GRID },
        },
        color: {
          field: "Threatened status", type: "nominal",
          scale: { domain: ["Critically Endangered", "Endangered", "Vulnerable", "Extinct"], range: STATUS_RANGE },
          legend: {
            orient: "bottom", anchor: "middle", direction: "horizontal",
            columnPadding: 20, title: "Click to filter", titleFontSize: 10,
          },
        },
        opacity: { condition: { param: "statusSel2", value: 1 }, value: 0.15 },
        tooltip: [
          { field: "Kingdom", title: "Kingdom" },
          { field: "Threatened status", title: "Status" },
          { field: "count", title: "Species", format: "," },
        ],
      },
    },
    {
      mark: { type: "text", align: "center", baseline: "bottom", dy: -3, fontSize: 10, fontWeight: 600, color: TEXT2 },
      encoding: {
        x: { field: "Kingdom", type: "nominal" },
        xOffset: {
          field: "Threatened status", type: "nominal",
          sort: ["Critically Endangered", "Endangered", "Vulnerable", "Extinct"],
        },
        y: { field: "count", type: "quantitative" },
        text: { field: "count", type: "quantitative" },
        opacity: { condition: { param: "statusSel2", value: 1 }, value: 0 },
      },
    },
    {
      data: { values: [{ x: "Plantae", y: 650, label: "2× more than Animalia" }] },
      mark: { type: "text", align: "center", dy: -14, fontSize: 13, fontStyle: "italic", fontWeight:"bold", color: ANNOTATION_TEXT },
      encoding: { x: { field: "x", type: "nominal" }, y: { field: "y", type: "quantitative" }, text: { field: "label" } },
    },
  ],
};
vegaEmbed("#chart2", chart2, embedOptions);

const chart3 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  width: "container",
  height: 300,
  padding: { left: 5, right: 44, top: 5, bottom: 5 },
  config: baseConfig,
  data: { values: ANIMAL_CLASS },
  transform: [{ calculate: STATUS_ORDER_CALC, as: "status_order" }],
  layer: [
    {
      params: [
        {
          name: "statusSel3",
          select: { type: "point", fields: ["Threatened status"] },
          bind: "legend",
        },
      ],
      mark: { type: "bar", cornerRadius: 2 },
      encoding: {
        y: {
          field: "Class_name", type: "nominal", title: null,
          sort: { field: "count", op: "sum", order: "descending" },
          axis: { labelLimit: 210, labelFontSize: 12, minExtent: 195 },
        },
        x: {
          field: "count", type: "quantitative",
          title: "Number of Threatened Species",
          axis: { grid: true, gridColor: GRID },
        },
        color: {
          field: "Threatened status", type: "nominal",
          scale: { domain: ["Critically Endangered", "Endangered", "Vulnerable", "Extinct"], range: STATUS_RANGE },
          legend: {
            orient: "bottom", anchor: "middle", direction: "horizontal",
            columnPadding: 20, title: "Click to filter", titleFontSize: 10,
          },
        },
        opacity: { condition: { param: "statusSel3", value: 1 }, value: 0.15 },
        order: { field: "status_order", type: "quantitative" },
        tooltip: [
          { field: "Class_name", title: "Class" },
          { field: "Threatened status", title: "Status" },
          { field: "count", title: "Species" },
        ],
      },
    },
    {
      transform: [
        { aggregate: [{ op: "sum", field: "count", as: "total" }], groupby: ["Class_name"] },
      ],
      mark: { type: "text", align: "left", dx: 5, fontSize: 11, fontWeight: 600, color: TEXT2 },
      encoding: {
        y: { field: "Class_name", type: "nominal", sort: { field: "count", op: "sum", order: "descending" } },
        x: { field: "total", type: "quantitative" },
        text: { field: "total", type: "quantitative" },
      },
    },
    {
      data: { values: [{ Class_name: "Mammals", x: 160, label: "Most diverse threat profile" }] },
      mark: { type: "text", align: "left", fontSize: 13, fontStyle: "italic", fontWeight:"bold", color: ANNOTATION_TEXT, dy: -1 },
      encoding: { y: { field: "Class_name", type: "nominal", sort: { field: "count", op: "sum", order: "descending" } }, x: { field: "x", type: "quantitative" }, text: { field: "label" } },
    },
  ],
};
vegaEmbed("#chart3", chart3, embedOptions);

const map1 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  width: "container",
  height: 440,
  config: baseConfig,
  projection: { type: "mercator", center: [133, -28], scale: 650 },
  layer: [
    {
      data: {
        url: "https://raw.githubusercontent.com/SohamDarekar/fit3179-assignment2/refs/heads/main/australia-states.json",
        format: { type: "topojson", feature: "STE_2021_AUST_GDA2020" },
      },
      transform: [
        {
          lookup: "properties.STE_NAME21",
          from: { data: { values: STATE_TOTALS }, key: "state_full", fields: ["count", "state"] },
        },
      ],
      mark: { type: "geoshape", stroke: BG, strokeWidth: 1.5 },
      encoding: {
        color: {
          field: "count", type: "quantitative", title: "Threatened Species",
          scale: { range: MAP1_SCHEME, domainMin: 0 },
          legend: { orient: "bottom-right", titleFontSize: 11 },
        },
        tooltip: [
          { field: "properties.STE_NAME21", title: "State" },
          { field: "count", title: "Threatened Species", format: "," },
        ],
      },
    },
    {
      data: { values: STATE_LABEL_COORDS },
      mark: {
        type: "text", fontSize: 12, fontWeight: 800,
        color: "#F4F1EB", fill: "#F4F1EB", stroke: "#0C1117", strokeWidth: 3, strokeJoin: "round",
      },
      encoding: {
        longitude: { field: "lon", type: "quantitative" },
        latitude: { field: "lat", type: "quantitative" },
        text: { field: "abbr", type: "nominal" },
      },
    },
    {
      data: { values: [{ lon: 170, lat: -32, label: "NSW holds 35% of all nationally threatened species" }] },
      mark: { type: "text", fontSize: 14, fontStyle: "italic", fontWeight:"bold", color: ANNOTATION_TEXT },
      encoding: { longitude: { field: "lon", type: "quantitative" }, latitude: { field: "lat", type: "quantitative" }, text: { field: "label" } },
    },
  ],
};
vegaEmbed("#map1", map1, embedOptions);

const chart4 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  width: "container",
  height: 300,
  padding: { left: 5, right: 44, top: 5, bottom: 5 },
  autosize: { type: "fit-x", contains: "padding" },
  config: {
    ...baseConfig,
    legend: { ...baseConfig.legend, symbolSize: 140 },
  },
  data: { values: STATE_STATUS_LABELED },
  transform: [{ calculate: STATUS_ORDER_CALC_S, as: "status_order" }],
  layer: [
    {
      params: [
        {
          name: "statusSel4",
          select: { type: "point", fields: ["status"] },
          bind: "legend",
        },
      ],
      mark: { type: "bar", cornerRadius: 2 },
      encoding: {
        x: {
          field: "count", type: "quantitative",
          title: "Species Count",
          axis: { grid: true, gridColor: GRID },
        },
        y: {
          field: "state", type: "nominal", title: null,
          sort: { field: "count", op: "sum", order: "descending" },
        },
        color: {
          field: "status", type: "nominal",
          scale: { domain: ["Critically Endangered", "Endangered", "Vulnerable", "Extinct"], range: STATUS_RANGE },
          legend: {
            orient: "bottom", anchor: "middle", direction: "horizontal",
            columnPadding: 20, title: "Click to filter", titleFontSize: 10,
          },
        },
        opacity: { condition: { param: "statusSel4", value: 1 }, value: 0.15 },
        order: { field: "status_order", type: "quantitative" },
        tooltip: [
          { field: "state_full", title: "State" },
          { field: "status", title: "Status" },
          { field: "count", title: "Species", format: "," },
        ],
      },
    },
    {
      transform: [
        { aggregate: [{ op: "sum", field: "count", as: "total" }], groupby: ["state"] },
      ],
      mark: { type: "text", align: "left", dx: 5, fontSize: 11, fontWeight: 600, color: TEXT2 },
      encoding: {
        y: { field: "state", type: "nominal", sort: { field: "count", op: "sum", order: "descending" } },
        x: { field: "total", type: "quantitative" },
        text: { field: "total", type: "quantitative" },
      },
    },
    {
      data: { values: [{ state: "NSW", label: "NSW Leads by 2× over nearest state" }] },
      mark: { type: "text", align: "left", dx: 0, fontSize: 13, fontStyle: "italic", fontWeight:"bold", color: ANNOTATION_TEXT, dy: -30 },
      encoding: { y: { field: "state", type: "nominal", sort: { field: "count", op: "sum", order: "descending" } }, x: { datum: 400 }, text: { field: "label" } },
    },
  ],
};
vegaEmbed("#chart4", chart4, embedOptions);

const chart5 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  width: "container",
  height: 340,
  padding: { left: 5, right: 44, top: 5, bottom: 5 },
  autosize: { type: "fit-x", contains: "padding" },
  config: baseConfig,
  data: { values: ENDEMIC_STATE.filter((d) => d.endemic_threatened > 0) },
  transform: [{ calculate: "0", as: "zero" }],
  layer: [
    {
      mark: { type: "rule", color: TEXT3, strokeWidth: 1.5 },
      encoding: {
        y: {
          field: "state",
          type: "nominal",
          sort: { field: "endemic_threatened", order: "descending" },
        },
        x: { field: "zero", type: "quantitative" },
        x2: { field: "endemic_threatened", type: "quantitative" },
      },
    },
    {
      mark: { type: "point", filled: true, size: 120 },
      encoding: {
        y: {
          field: "state", type: "nominal", title: null,
          sort: { field: "endemic_threatened", order: "descending" },
        },
        x: {
          field: "endemic_threatened", type: "quantitative",
          title: "Single-State Endemic Threatened Species",
          axis: { grid: true, gridColor: GRID },
        },
        color: { value: STATUS_COLORS.Endangered },
        tooltip: [
          { field: "state_full", title: "State" },
          { field: "endemic_threatened", title: "Single-State Endemics" },
        ],
      },
    },
    {
      mark: { type: "text", align: "left", dx: 8, fontSize: 10, fontWeight: 600, color: TEXT2 },
      encoding: {
        y: { field: "state", type: "nominal", sort: { field: "endemic_threatened", order: "descending" } },
        x: { field: "endemic_threatened", type: "quantitative" },
        text: { field: "endemic_threatened", type: "quantitative" },
      },
    },
    {
      data: { values: [{ state: "QLD", label: "QLD: Most single-state endemics" }] },
      mark: { type: "text", align: "center", dy: -15, fontSize: 13, fontStyle: "italic", fontWeight:"bold", color: ANNOTATION_TEXT},
      encoding: {
        y: { field: "state", type: "nominal", sort: { field: "endemic_threatened", order: "descending" } },
        x: { datum: 45 },
        text: { field: "label" },
      },
    },
    {
      data: { values: [{ state: "TAS", label: "Highest endemic rate (21%)" }] },
      mark: { type: "text", dx: 260, dy: -1, fontSize: 13, fontStyle: "italic", fontWeight:"bold", color: ANNOTATION_TEXT },
      encoding: {
        y: { field: "state", type: "nominal", sort: { field: "endemic_threatened", order: "descending" } },
        x: { datum: 25 },
        text: { field: "label" },
      },
    },
  ],
};
vegaEmbed("#chart5", chart5, embedOptions);

const map2 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  width: "container",
  height: 440,
  config: baseConfig,
  projection: { type: "mercator", center: [133, -28], scale: 650 },
  layer: [
    {
      data: {
        url: "https://raw.githubusercontent.com/SohamDarekar/fit3179-assignment2/refs/heads/main/australia-states.json",
        format: { type: "topojson", feature: "STE_2021_AUST_GDA2020" },
      },
      transform: [
        {
          lookup: "properties.STE_NAME21",
          from: { data: { values: ENDEMIC_STATE }, key: "state_full", fields: ["endemic_threatened", "state"] },
        },
      ],
      mark: { type: "geoshape", stroke: BG, strokeWidth: 1.5 },
      encoding: {
        color: {
          field: "endemic_threatened", type: "quantitative", title: "Endemic Threatened Species",
          scale: { range: MAP2_SCHEME, domainMin: 0 },
          legend: { orient: "bottom-right", titleFontSize: 11 },
        },
        tooltip: [
          { field: "properties.STE_NAME21", title: "State" },
          { field: "endemic_threatened", title: "Endemic Threatened Species", format: "," },
        ],
      },
    },
    {
      data: { values: STATE_LABEL_COORDS },
      mark: {
        type: "text", fontSize: 12, fontWeight: 800,
        color: "#F4F1EB", fill: "#F4F1EB", stroke: "#0C1117", strokeWidth: 3, strokeJoin: "round",
      },
      encoding: {
        longitude: { field: "lon", type: "quantitative" },
        latitude: { field: "lat", type: "quantitative" },
        text: { field: "abbr", type: "nominal" },
      },
    },
    {
      data: { values: [{ lon: 158, lat: -20.5, label: "QLD leads in endemics (91)"}] },
      mark: { type: "text", fontSize: 13, fontStyle: "italic", fontWeight:"bold", color: ANNOTATION_TEXT },
      encoding: { longitude: { field: "lon", type: "quantitative" }, latitude: { field: "lat", type: "quantitative" }, text: { field: "label" } },
    },
        {
      data: { values: [{ lon: 134, lat: -42, label: "TAS has highest endemic rate (21%)" }] },
      mark: { type: "text", fontSize: 13, fontStyle: "italic", fontWeight:"bold", color: ANNOTATION_TEXT},
      encoding: { longitude: { field: "lon", type: "quantitative" }, latitude: { field: "lat", type: "quantitative" }, text: { field: "label" } },
    },
  ],
};
vegaEmbed("#map2", map2, embedOptions);

const chart6 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  width: "container",
  height: 360,
  autosize: { type: "fit-x", contains: "padding" },
  config: {
    ...baseConfig,
    legend: { ...baseConfig.legend, symbolSize: 140 },
  },
  data: { values: BIRD_TREND },
  layer: [
    {
      params: [
        {
          name: "statusSel6",
          select: { type: "point", fields: ["group"] },
          bind: "legend",
        },
      ],
      mark: {
        type: "line",
        point: false,
        interpolate: "monotone",
        strokeWidth: 2.5,
      },
      encoding: {
        x: {
          field: "year",
          type: "quantitative",
          title: "Year",
          axis: { format: "d", grid: false },
        },
        y: {
          field: "index",
          type: "quantitative",
          title: "Population Index (1990 = 100)",
          axis: { grid: true, gridColor: GRID },
        },
        color: {
          field: "group",
          type: "nominal",
          scale: {
            domain: ["Critically Endangered", "Endangered", "Vulnerable"],
            range: STATUS_RANGE_THREE,
          },
          legend: {
            orient: "bottom",
            anchor: "middle",
            direction: "horizontal",
            columnPadding: 20,
            title: "Click to filter",
            titleFontSize: 10,
          },
        },
        opacity: { condition: { param: "statusSel6", value: 1 }, value: 0.08 },
      },
    },
    {
      mark: {
        type: "rule",
        strokeDash: [4, 3],
        color: TEXT3,
        opacity: 0.5,
      },
      encoding: { y: { datum: 100 } },
    },
    {
      data: { values: [{ y: 100, label: "1990 Baseline" }] },
      mark: {
        type: "text",
        align: "right",
        dx: -4,
        dy: -15,
        fontSize: 11,
        color: TEXT3,
      },
      encoding: {
        x: { datum: 2022 },
        y: { field: "y", type: "quantitative" },
        text: { field: "label" },
      },
    },
    {
      data: { values: [{ x: 2019, y: 40 }] },
      mark: {
        type: "rule",
        strokeDash: [4, 3],
        color: BORDER,
        opacity: 0.8,
        strokeWidth: 1,
      },
      encoding: { x: { datum: 2019 } },
    },
    {
      data: { values: [{y: 75, label: "2019–20 Black Summer fires" }] },
      mark: { type: "text", align: "right", dx: 90, fontSize: 11, fontWeight: 600, color: TEXT2 },
      encoding: {
        x: { datum: 2019 },
        y: { field: "y", type: "quantitative" },
        text: { field: "label" },
      },
    },
    {
      data: { values: [{ y: 30, label: "Critically Endangered birds −92% since 1990" }] },
      mark: { type: "text", align: "right", dx: 45, fontSize: 11, fontWeight: 700, color: STATUS_COLORS["Critically Endangered"] },
      encoding: {
        x: { datum: 2022 },
        y: { field: "y", type: "quantitative" },
        text: { field: "label" },
      },
    },
  ],
  resolve: { scale: { y: "shared" } },
};
vegaEmbed("#chart6", chart6, embedOptions);

const stateAbbrMap = {
  "Australian Capital Territory": "ACT",
  "New South Wales": "NSW",
  "Northern Territory": "NT",
  Queensland: "QLD",
  "South Australia": "SA",
  Tasmania: "TAS",
  Victoria: "VIC",
  "Western Australia": "WA",
};
const BIRDS_STATE_ABBR = BIRDS_STATE.map((d) => ({
  ...d,
  state_abbr: stateAbbrMap[d.State] || d.State,
}));

const STATUS_SORT_THREE = ["Critically Endangered", "Endangered", "Vulnerable"];
const chart7 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  width: "container",
  height: 400,
  autosize: { type: "fit-x", contains: "padding" },
  config: {
    ...baseConfig,
    legend: { ...baseConfig.legend, symbolSize: 140 },
  },
  data: { values: BIRDS_STATE_ABBR },
  layer: [
    {
      params: [
        {
          name: "statusSel7",
          select: { type: "point", fields: ["EPBCStatus"] },
          bind: "legend",
        },
      ],
      mark: { type: "bar", cornerRadiusTopLeft: 2, cornerRadiusTopRight: 2 },
      encoding: {
        x: {
          field: "state_abbr", type: "nominal", title: null,
          sort: ["NSW", "VIC", "QLD", "SA", "WA", "TAS", "NT", "ACT"],
          axis: { labelAngle: 0 },
        },
        xOffset: {
          field: "EPBCStatus", type: "nominal",
          sort: STATUS_SORT_THREE,
        },
        y: {
          field: "count", type: "quantitative", title: "Bird Species",
          axis: { grid: true, gridColor: GRID },
        },
        color: {
          field: "EPBCStatus", type: "nominal",
          scale: { domain: STATUS_SORT_THREE, range: STATUS_RANGE_THREE },
          legend: {
            orient: "bottom", anchor: "middle", direction: "horizontal",
            columnPadding: 20, title: "Click to filter", titleFontSize: 10,
          },
        },
        opacity: { condition: { param: "statusSel7", value: 1 }, value: 0.15 },
        tooltip: [
          { field: "State", title: "State" },
          { field: "EPBCStatus", title: "Status" },
          { field: "count", title: "Bird Species" },
        ],
      },
    },
    {
      mark: { type: "text", align: "center", baseline: "bottom", dy: -3, fontSize: 9, fontWeight: 600, color: TEXT2 },
      encoding: {
        x: { field: "state_abbr", type: "nominal", sort: ["NSW", "VIC", "QLD", "SA", "WA", "TAS", "NT", "ACT"] },
        xOffset: { field: "EPBCStatus", type: "nominal", sort: STATUS_SORT_THREE },
        y: { field: "count", type: "quantitative" },
        text: { field: "count", type: "quantitative" },
        opacity: { condition: { param: "statusSel7", value: 1 }, value: 0 },
      },
    },
    {
      data: { values: [{ state_abbr: "SA", y: 12, label: "SA: most Critically Endangered species relative to size" }] },
      mark: { type: "text", dx:50, dy: -5, fontSize: 11, fontStyle: "italic", fontWeight:"bold", color: ANNOTATION_TEXT },
      encoding: { x: { field: "state_abbr", type: "nominal", sort: ["NSW","VIC","QLD","SA","WA","TAS","NT","ACT"] }, y: { field: "y", type: "quantitative" }, text: { field: "label" } },
    },
  ],
};
vegaEmbed("#chart7", chart7, embedOptions);

const chart8 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  width: "container",
  height: 420,
  padding: { left: 10, right: 60, top: 5, bottom: 5 },
  autosize: { type: "fit", contains: "padding" },
  config: {
    ...baseConfig,
    legend: { ...baseConfig.legend, symbolSize: 120 },
  },
  data: { values: TOP_BIRDS },
  layer: [
    {
      params: [
        {
          name: "statusSel8",
          select: { type: "point", fields: ["status"] },
          bind: "legend",
        },
      ],
      mark: { type: "bar", cornerRadiusTopRight: 2, cornerRadiusBottomRight: 2 },
      encoding: {
        y: {
          field: "CommonName", type: "nominal",
          sort: { field: "sites", order: "descending" },
          title: null,
          axis: { labelLimit: 500, labelFontSize: 11, minExtent: 220 },
        },
        x: {
          field: "sites", type: "quantitative", title: "Monitoring Sites",
          axis: { grid: true, gridColor: GRID },
          scale: { domainMax: 185 },
        },
        color: {
          field: "status", type: "nominal",
          scale: { domain: ["Critically Endangered", "Endangered", "Vulnerable"], range: STATUS_RANGE_THREE },
          legend: {
            orient: "bottom", anchor: "middle", direction: "horizontal",
            columnPadding: 20, title: "Click to filter", titleFontSize: 10,
          },
        },
        opacity: { condition: { param: "statusSel8", value: 1 }, value: 0.15 },
        tooltip: [
          { field: "CommonName", title: "Species" },
          { field: "status", title: "Status" },
          { field: "sites", title: "Monitoring Sites" },
        ],
      },
    },
    {
      mark: { type: "text", align: "left", dx: 4, fontSize: 10, fontWeight: 600, color: TEXT2 },
      encoding: {
        y: { field: "CommonName", type: "nominal", sort: { field: "sites", order: "descending" } },
        x: { field: "sites", type: "quantitative" },
        text: { field: "sites", type: "quantitative" },
        opacity: { condition: { param: "statusSel8", value: 1 }, value: 0 },
      },
    },
    {
      data: { values: [{ CommonName: "Red-necked Stint", x: 100, label: "Shorebirds dominate top 10 monitored species" }] },
      mark: { type: "text", align: "left", fontSize: 12, fontStyle: "italic", fontWeight:"bold", color: ANNOTATION_TEXT },
      encoding: { y: { field: "CommonName", type: "nominal", sort: { field: "sites", order: "descending" } }, x: { field: "x", type: "quantitative" }, text: { field: "label" } },
    },
  ],
};
vegaEmbed("#chart8", chart8, embedOptions);

const map3 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  width: "container",
  height: 440,
  config: baseConfig,
  projection: { type: "mercator", center: [133, -28], scale: 650 },
  layer: [
    {
      data: {
        url: "https://raw.githubusercontent.com/SohamDarekar/fit3179-assignment2/refs/heads/main/australia-states.json",
        format: { type: "topojson", feature: "STE_2021_AUST_GDA2020" },
      },
      mark: {
        type: "geoshape",
        fill: BG3,
        stroke: BORDER,
        strokeWidth: 1,
      },
    },
    {
      data: { values: MONITORING_LOCATIONS },
      params: [
        {
          name: "statusSel",
          select: { type: "point", fields: ["status"] },
          bind: "legend",
        },
      ],
      transform: [
        {
          calculate:
            "datum.status === 'Critically Endangered' ? 100 : datum.status === 'Endangered' ? 55 : 32",
          as: "pt_size",
        },
      ],
      mark: { type: "circle", stroke: BG, strokeWidth: 0.5 },
      encoding: {
        longitude: { field: "lon", type: "quantitative" },
        latitude: { field: "lat", type: "quantitative" },
        color: {
          field: "status",
          type: "nominal",
          scale: {
            domain: ["Critically Endangered", "Endangered", "Vulnerable"],
            range: STATUS_RANGE_THREE,
          },
          legend: {
            orient: "bottom-left",
            title: "Click to filter",
            titleFontSize: 10,
          },
        },
        opacity: {
          condition: { param: "statusSel", value: 0.55 },
          value: 0.07,
        },
        size: {
          field: "pt_size",
          type: "quantitative",
          legend: null,
          scale: { range: [16, 55] },
        },
        tooltip: [
          { field: "common_name", title: "Species" },
          { field: "status", title: "Threat Status" },
          { field: "state", title: "State" },
          { field: "group", title: "Group" },
        ],
      },
    },
    {
      data: { values: [{ lon: 97, lat: -22, label: "Coastal WA and eastern seaboard are monitoring hotspots" }] },
      mark: { type: "text", fontSize: 13, fontStyle: "italic", fontWeight:"bold", color: ANNOTATION_TEXT },
      encoding: { longitude: { field: "lon", type: "quantitative" }, latitude: { field: "lat", type: "quantitative" }, text: { field: "label" } },
    },
  ],
};
vegaEmbed("#map3", map3, embedOptions);

const chart9 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  width: "container",
  height: 380,
  padding: { left: 5, right: 44, top: 5, bottom: 5 },
  autosize: { type: "fit-x", contains: "padding" },
  config: baseConfig,
  data: { values: TOP_FAM },
  transform: [
    {
      aggregate: [{ op: "sum", field: "count", as: "total" }],
      groupby: ["family"],
    },
    { calculate: "0", as: "zero" },
  ],
  layer: [
    {
      mark: { type: "rule", strokeWidth: 2, color: TEXT3, opacity: 0.5 },
      encoding: {
        y: {
          field: "family", type: "nominal",
          sort: { field: "total", order: "descending" }, title: null,
          axis: { labelLimit: 150, labelFontSize: 12, minExtent: 110 },
        },
        x: { field: "zero", type: "quantitative" },
        x2: { field: "total" },
      },
    },
    {
      mark: { type: "point", filled: true, size: 120 },
      encoding: {
        y: {
          field: "family", type: "nominal",
          sort: { field: "total", order: "descending" }, title: null,
          axis: { labelLimit: 150, labelFontSize: 12, minExtent: 110 },
        },
        x: {
          field: "total", type: "quantitative", title: "Species Count",
          axis: { grid: true, gridColor: GRID },
        },
        color: { value: STATUS_COLORS["Endangered"] },
        tooltip: [
          { field: "family", title: "Family" },
          { field: "total", title: "Total Threatened Species" },
        ],
      },
    },
    {
      mark: { type: "text", align: "left", dx: 8, fontSize: 10, fontWeight: 600, color: TEXT2 },
      encoding: {
        y: { field: "family", type: "nominal", sort: { field: "total", order: "descending" } },
        x: { field: "total", type: "quantitative" },
        text: { field: "total", type: "quantitative" },
      },
    },
    {
      data: { values: [{ family: "Orchidaceae", label: "Largest threatened plant family" }] },
      mark: { type: "text", align: "center", dy: -11, fontSize: 13, fontStyle: "italic", fontWeight:"bold", color: ANNOTATION_TEXT },
      encoding: {
        y: { field: "family", type: "nominal", sort: { field: "total", order: "descending" } },
        x: { datum: 120 },
        text: { field: "label" },
      },
    },
  ],
};
vegaEmbed("#chart9", chart9, embedOptions);

const PLANT_STATUS = [
  { status: "Critically Endangered", count: 306 },
  { status: "Endangered", count: 610 },
  { status: "Vulnerable", count: 563 },
  { status: "Extinct", count: 35 },
];

const chart10 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  width: "container",
  height: 300,
  autosize: { type: "fit-x", contains: "padding" },
  config: {
    ...baseConfig,
    legend: { ...baseConfig.legend, symbolSize: 140 },
  },
  data: { values: PLANT_STATUS },
  layer: [
    {
      params: [
        {
          name: "statusSel10",
          select: { type: "point", fields: ["status"] },
          bind: "legend",
        },
      ],
      mark: {
        type: "arc",
        outerRadius: 132,
        innerRadius: 66,
        stroke: BG,
        strokeWidth: 2,
      },
      encoding: {
        theta: { field: "count", type: "quantitative", stack: true },
        color: {
          field: "status",
          type: "nominal",
          scale: {
            domain: [
              "Critically Endangered",
              "Endangered",
              "Vulnerable",
              "Extinct",
            ],
            range: STATUS_RANGE,
          },
          legend: {
            orient: "bottom",
            anchor: "middle",
            direction: "horizontal",
            columnPadding: 20,
            title: "Click to filter",
            titleFontSize: 10,
          },
        },
        opacity: { condition: { param: "statusSel10", value: 1 }, value: 0.15 },
        tooltip: [
          { field: "status", title: "Status" },
          { field: "count", title: "Plant Species", format: "," },
        ],
      },
    },
    {
      mark: {
        type: "text",
        fontSize: 26,
        fontWeight: 700,
        font: "Playfair Display, serif",
        color: TEXT,
      },
      encoding: { text: { value: "1,514" } },
    },
    {
      mark: { type: "text", fontSize: 12, dy: 20, color: TEXT3 },
      encoding: { text: { value: "plant species" } },
    },
  ],
};
vegaEmbed("#chart10", chart10, embedOptions);

const HOTSPOT_NO_ACT = HOTSPOT.filter((d) => d.state !== "ACT").map((d) => ({
  ...d,
  state_full: STATE_FULL_NAMES[d.state],
}));
const DUMBBELL_STATE_ORDER = HOTSPOT_NO_ACT.slice()
  .sort((a, b) => b.total - a.total)
  .map((d) => d.state);
const HOTSPOT_DUMBBELL = HOTSPOT_NO_ACT.flatMap((d) => [
  {
    state: d.state,
    state_full: d.state_full,
    metric: "Total Threatened",
    value: d.total,
    total: d.total,
    endemic: d.endemic,
    pct_endemic: d.pct_endemic,
  },
  {
    state: d.state,
    state_full: d.state_full,
    metric: "Endemic Threatened",
    value: d.endemic,
    total: d.total,
    endemic: d.endemic,
    pct_endemic: d.pct_endemic,
  },
]);

const chart12 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  width: "container",
  height: 360,
  padding: { left: 5, right: 44, top: 18, bottom: 5 },
  autosize: { type: "fit-x", contains: "padding" },
  config: baseConfig,
  layer: [
    {
      data: { values: HOTSPOT_NO_ACT },
      mark: { type: "rule", strokeWidth: 2, color: TEXT3, opacity: 0.5 },
      encoding: {
        y: {
          field: "state",
          type: "nominal",
          sort: DUMBBELL_STATE_ORDER,
          title: null,
        },
        x: { field: "endemic", type: "quantitative" },
        x2: { field: "total" },
      },
    },
    {
      data: { values: HOTSPOT_DUMBBELL },
      params: [
        {
          name: "metricSel12",
          select: { type: "point", fields: ["metric"] },
          bind: "legend",
        },
      ],
      mark: { type: "point", filled: true, size: 120 },
      encoding: {
        y: {
          field: "state",
          type: "nominal",
          sort: DUMBBELL_STATE_ORDER,
          title: null,
        },
        x: {
          field: "value",
          type: "quantitative",
          title: "Species Count",
          axis: { grid: true, gridColor: GRID },
        },
        color: {
          field: "metric",
          type: "nominal",
          scale: {
            domain: ["Total Threatened", "Endemic Threatened"],
            range: [
              STATUS_COLORS["Critically Endangered"],
              STATUS_COLORS.Endangered,
            ],
          },
          legend: {
            orient: "bottom",
            anchor: "middle",
            direction: "horizontal",
            columnPadding: 20,
            title: "Click to filter",
            titleFontSize: 10,
          },
        },
        opacity: { condition: { param: "metricSel12", value: 1 }, value: 0.12 },
        tooltip: [
          { field: "state_full", title: "State" },
          { field: "total", title: "Total Threatened" },
          { field: "endemic", title: "Endemic Threatened" },
          { field: "pct_endemic", title: "% Endemic", format: ".1f" },
        ],
      },
    },
    {
      data: { values: [{ state: "NSW", label: "National leader - 760 species" }] },
      mark: { type: "text", align: "center", dy: -12, fontSize: 13, fontStyle: "italic", fontWeight:"bold", color: ANNOTATION_TEXT },
      encoding: {
        y: { field: "state", type: "nominal", sort: DUMBBELL_STATE_ORDER },
        x: { datum: 380 },
        text: { field: "label" },
      },
    },
    {
      data: { values: [{ state: "TAS", label: "Highest endemic rate (21%)" }] },
      mark: { type: "text", dx: 180, dy: -1, fontSize: 13, fontStyle: "italic", fontWeight:"bold", color: ANNOTATION_TEXT },
      encoding: {
        y: { field: "state", type: "nominal", sort: DUMBBELL_STATE_ORDER },
        x: { datum: 140 },
        text: { field: "label" },
      },
    },
  ],
};
vegaEmbed("#chart12", chart12, embedOptions);

function renderChordDiagram() {
  const CHORD_STATES = ["NSW", "QLD", "WA", "VIC", "SA", "TAS", "NT", "ACT"];
  const CHORD_FULL = {
    NSW: "New South Wales",
    QLD: "Queensland",
    WA: "Western Australia",
    VIC: "Victoria",
    SA: "South Australia",
    TAS: "Tasmania",
    NT: "Northern Territory",
    ACT: "Australian Capital Territory",
  };
  const n = CHORD_STATES.length;

  const matrix = Array.from({ length: n }, () => Array(n).fill(0));
  CO_OCCUR.forEach(({ state1, state2, shared }) => {
    const i = CHORD_STATES.indexOf(state1);
    const j = CHORD_STATES.indexOf(state2);
    if (i >= 0 && j >= 0) {
      matrix[i][j] = shared;
      matrix[j][i] = shared;
    }
  });

  const STATE_COLORS = {
    NSW: "#C0392B",
    QLD: "#E8913A",
    SA:  "#2E86AB",
    VIC: "#1BAA6E",
    WA:  "#50C9C3",
    TAS: "#7B61D1",
    NT:  "#C45CA0",
    ACT: "#7A8FA6",
  };
  const CHORD_COLORS = CHORD_STATES.map((s) => STATE_COLORS[s]);

  const el = document.getElementById("chart13");
  el.innerHTML = "";
  el.style.position = "relative";

  const W = el.clientWidth || 500;
  const H = Math.min(W, 500);
  const outerR = Math.min(W, H) / 2 - 70;
  const innerR = outerR - 22;

  const svg = d3
    .select(el)
    .append("svg")
    .attr("width", W)
    .attr("height", H)
    .style("background", "transparent");

  const g = svg.append("g").attr("transform", `translate(${W / 2},${H / 2})`);

  const chordLayout = d3.chord().padAngle(0.04);
  const chords = chordLayout(matrix);

  const arcGen = d3.arc().innerRadius(innerR).outerRadius(outerR);
  const ribbonGen = d3.ribbon().radius(innerR - 1);

  d3.select(".chord-tip").remove();
  const tip = d3
    .select("body")
    .append("div")
    .attr("class", "chord-tip")
    .style("position", "absolute")
    .style("pointer-events", "none")
    .style("background", BG3)
    .style("border", `1px solid ${BORDER}`)
    .style("border-radius", "6px")
    .style("padding", "8px 12px")
    .style("font-size", "13px")
    .style("color", TEXT)
    .style("font-family", "Source Sans 3, sans-serif")
    .style("opacity", 0)
    .style("transition", "opacity 0.12s")
    .style("white-space", "nowrap")
    .style("z-index", 9999);

  const ribbonPaths = g
    .append("g")
    .selectAll("path")
    .data(chords)
    .join("path")
    .attr("d", ribbonGen)
    .attr("fill", (d) => CHORD_COLORS[d.source.index])
    .attr("opacity", 0.28)
    .attr("stroke", "none")
    .style("cursor", "pointer");

  ribbonPaths
    .on("mouseover", function (event, d) {
      ribbonPaths.attr("opacity", 0.06);
      d3.select(this).attr("opacity", 0.88);
      tip
        .style("opacity", 1)
        .html(
          `<strong>${CHORD_FULL[CHORD_STATES[d.source.index]]} ↔ ${CHORD_FULL[CHORD_STATES[d.target.index]]}</strong><br>${d.source.value} shared threatened species`,
        )
        .style("left", event.pageX + 14 + "px")
        .style("top", event.pageY - 10 + "px");
    })
    .on("mouseout", () => {
      ribbonPaths.attr("opacity", 0.28);
      tip.style("opacity", 0);
    });

  const groups = g.append("g").selectAll("g").data(chords.groups).join("g");

  groups
    .append("path")
    .attr("d", arcGen)
    .attr("fill", (d) => CHORD_COLORS[d.index])
    .attr("stroke", BG)
    .attr("stroke-width", 1.5)
    .style("cursor", "pointer")
    .on("mouseover", function (event, d) {
      ribbonPaths.attr("opacity", (c) =>
        c.source.index === d.index || c.target.index === d.index ? 0.75 : 0.04,
      );
      const total = matrix[d.index].reduce((s, v) => s + v, 0);
      tip
        .style("opacity", 1)
        .html(
          `<strong>${CHORD_FULL[CHORD_STATES[d.index]]}</strong><br>${total} total shared threatened species`,
        )
        .style("left", event.pageX + 14 + "px")
        .style("top", event.pageY - 10 + "px");
    })
    .on("mouseout", () => {
      ribbonPaths.attr("opacity", 0.28);
      tip.style("opacity", 0);
    });

  groups
    .append("text")
    .each((d) => { d.angle = (d.startAngle + d.endAngle) / 2; })
    .attr("dy", "0.35em")
    .attr(
      "transform",
      (d) =>
        `rotate(${(d.angle * 180) / Math.PI - 90}) translate(${outerR + 18}) ${d.angle > Math.PI ? "rotate(180)" : ""}`,
    )
    .attr("text-anchor", (d) => (d.angle > Math.PI ? "end" : "start"))
    .attr("font-size", 11)
    .attr("font-weight", 700)
    .attr("font-family", "Inter, Source Sans 3, sans-serif")
    .attr("fill", TEXT2)
    .attr("stroke", BG)
    .attr("stroke-width", 2)
    .attr("paint-order", "stroke")
    .text((d) => CHORD_STATES[d.index]);

  svg.selectAll("text.chord-annotation").remove();
  g.append("text")
    .attr("x", 0).attr("y", H / 2 - 18)
    .attr("text-anchor", "middle")
    .attr("font-size", 13).attr("font-style", "italic").attr("font-weight", "bold")
    .attr("font-family", "Inter, Source Sans 3, sans-serif")
    .attr("fill", ANNOTATION_TEXT)
    .text("NSW–QLD strongest link: 224 shared threatened species");
}

renderChordDiagram();

const MAMMAL_TREND = POP_TREND.filter((d) => d.group === "Mammals");
const chart14 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  width: "container",
  height: 340,
  config: baseConfig,
  data: { values: MAMMAL_TREND },
  layer: [
    {
      mark: { type: "line", strokeWidth: 1.5, color: MAMMAL_COLOR, opacity: 0.4, interpolate: "monotone" },
      encoding: {
        x: { field: "year", type: "quantitative", title: "Year", axis: { format: "d", grid: false, tickCount: 8, values: [1990, 1995, 2000, 2005, 2010, 2015, 2020, 2025] }, scale: { domain: [1990, 2025] } },
        y: { field: "mean_count", type: "quantitative", title: "Population Index", axis: { grid: true, gridColor: GRID } },
      },
    },
    {
      mark: { type: "point", filled: true, size: 130, opacity: 1 },
      encoding: {
        x: { field: "year", type: "quantitative", scale: { domain: [1990, 2025] } },
        y: { field: "mean_count", type: "quantitative" },
        color: {
          field: "mean_count", type: "quantitative",
          scale: { range: [BG3, MAMMAL_COLOR], domainMin: 0, domainMax: 100 },
          legend: { title: "Index value", orient: "right", gradientLength: 120 },
        },
        size: {
          field: "mean_count", type: "quantitative",
          scale: { range: [40, 200] }, legend: null,
        },
        tooltip: [
          { field: "year", type: "quantitative", title: "Year" },
          { field: "mean_count", title: "Population Index", format: ".1f" },
        ],
      },
    },
    {
      data: { values: [{ y: 95, label: "1990 baseline: 95" }] },
      mark: { type: "text", align: "left", dx: 15, dy: -10, fontSize: 13, fontWeight:"bold", fontStyle:"italic", color: ANNOTATION_TEXT },
      encoding: {
        x: { datum: 1990 },
        y: { field: "y", type: "quantitative" },
        text: { field: "label" },
      },
    },
    {
      data: { values: [{ y: 22, label: "2022: −77%" }] },
      mark: { type: "text", align: "right", dx: 40, dy: 18, fontSize: 13, fontStyle: "italic", fontWeight: "bold", color: ANNOTATION_TEXT },
      encoding: {
        x: { datum: 2022 },
        y: { field: "y", type: "quantitative" },
        text: { field: "label" },
      },
    },
    {
      data: { values: [{}] },
      mark: { type: "rule", strokeDash: [4,3], color: BORDER, strokeWidth: 1 },
      encoding: { x: { datum: 2019 } },
    },
    {
      data: { values: [{ y: 70, label: "2019 fires" }] },
      mark: { type: "text", align: "right", dx: -4, fontSize: 13, fontStyle: "italic", fontWeight: "bold", color: ANNOTATION_TEXT },
      encoding: { x: { datum: 2019 }, y: { field: "y", type: "quantitative" }, text: { field: "label" } },
    },
  ],
};
vegaEmbed("#chart14", chart14, embedOptions);

const TREND_COLORS_15 = { Birds: BIRD_COLOR, Mammals: MAMMAL_COLOR, Amphibians: AMPHIBIAN_COLOR };
const chart15 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  width: "container",
  height: 320,
  padding: { left: 5, right: 5, top: 5, bottom: 5 },
  config: baseConfig,
  layer: [
    {
      data: { values: POP_TREND },
      params: [
        {
          name: "groupSel15",
          select: { type: "point", fields: ["group"] },
          bind: "legend",
        },
      ],
      mark: { type: "line", point: true, interpolate: "monotone", strokeWidth: 2.5 },
      encoding: {
        x: { field: "year", type: "quantitative", title: "Year", axis: { format: "d", grid: false, values: [1990, 1995, 2000, 2005, 2010, 2015, 2020, 2025] }, scale: { domain: [1990, 2025] } },
        y: {
          field: "mean_count", type: "quantitative", title: "Average Population Index",
          axis: { grid: true, gridColor: GRID },
        },
        color: {
          field: "group", type: "nominal",
          scale: { domain: ["Birds", "Mammals", "Amphibians"], range: [BIRD_COLOR, MAMMAL_COLOR, AMPHIBIAN_COLOR] },
          legend: {
            orient: "bottom", anchor: "middle", direction: "horizontal",
            columnPadding: 20, title: "Click to filter", titleFontSize: 10,
          },
        },
        opacity: { condition: { param: "groupSel15", value: 1 }, value: 0.08 },
        tooltip: [
          { field: "group", title: "Group" },
          { field: "year", title: "Year" },
          { field: "mean_count", title: "Avg Index", format: ".1f" },
        ],
      },
    },
    {
      data: { values: [
        { year: 2014, mean_count: 96,  group: "Birds",      label: "Birds −40%" },
        { year: 2014, mean_count: 56,  group: "Mammals",    label: "Mammals −58%" },
        { year: 2014, mean_count: 26,  group: "Amphibians", label: "Amphibians −65%" },
      ]},
      mark: { type: "text", align: "left", dx: 6, fontSize: 13, fontWeight: "bold", fontStyle: "italic"},
      encoding: {
        x: { field: "year", type: "quantitative" },
        y: { field: "mean_count", type: "quantitative" },
        color: {
          field: "group", type: "nominal",
          scale: { domain: ["Birds", "Mammals", "Amphibians"], range: [BIRD_COLOR, MAMMAL_COLOR, AMPHIBIAN_COLOR] },
          legend: null,
        },
        text: { field: "label", type: "nominal" },
      },
    },
    {
      data: { values: [{ x: 1995, y: 105, label: "Chytrid fungus spreads - sharpest amphibian drop" }] },
      mark: { type: "text", align: "left", dx: 6, fontSize: 13, fontStyle: "italic", color: AMPHIBIAN_COLOR },
      encoding: { x: { field: "x", type: "quantitative" }, y: { field: "y", type: "quantitative" }, text: { field: "label" } },
    },
  ],
};
vegaEmbed("#chart15", chart15, embedOptions);

// Sticky nav: scroll progress + active section highlighting
(function () {
  const nav = document.getElementById("sticky-nav");
  const progressBar = document.getElementById("nav-progress");
  const navLinks = document.querySelectorAll(".nav-link");
  const sectionIds = ["overview", "geography", "birds", "plants", "forward"];

  function onScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = pct + "%";

    if (scrollTop > 60) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }

    let activeId = null;
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      if (rect.top <= 80) {
        activeId = id;
      }
    }

    navLinks.forEach((link) => {
      const href = link.getAttribute("href").replace("#", "");
      link.classList.toggle("active", href === activeId);
      if (href === activeId) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();

// ClickSpark — vanilla JS port of the React component
(function () {
  const canvas = document.createElement("canvas");
  Object.assign(canvas.style, {
    position: "fixed", top: "0", left: "0",
    width: "100vw", height: "100vh",
    pointerEvents: "none", zIndex: "99999",
  });
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize, { passive: true });

  const SPARK_COLOR   = STATUS_COLORS["Critically Endangered"];
  const SPARK_SIZE    = 11;
  const SPARK_RADIUS  = 22;
  const SPARK_COUNT   = 8;
  const DURATION      = 480;

  let sparks = [];

  function easeOut(t) { return t * (2 - t); }

  (function draw(ts) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    sparks = sparks.filter(function (s) {
      const elapsed = ts - s.t;
      if (elapsed >= DURATION) return false;
      const p    = easeOut(elapsed / DURATION);
      const dist = p * SPARK_RADIUS;
      const len  = SPARK_SIZE * (1 - p);
      const x1 = s.x + dist * Math.cos(s.a);
      const y1 = s.y + dist * Math.sin(s.a);
      const x2 = s.x + (dist + len) * Math.cos(s.a);
      const y2 = s.y + (dist + len) * Math.sin(s.a);
      ctx.strokeStyle = SPARK_COLOR;
      ctx.lineWidth   = 2.2;
      ctx.lineCap     = "round";
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      return true;
    });
    requestAnimationFrame(draw);
  })(0);

  document.addEventListener("click", function (e) {
    const ts = performance.now();
    for (let i = 0; i < SPARK_COUNT; i++) {
      sparks.push({
        x: e.clientX,
        y: e.clientY,
        a: (2 * Math.PI * i) / SPARK_COUNT,
        t: ts,
      });
    }
  });
})();
