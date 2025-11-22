const addOn = require("./add-on");
const checkbox = require("./checkbox");
const field = require("./field");
const fileUpload = require("./file-upload");
const input = require("./input");
const progress = require("./progress");
const select = require("./select");
const switchComponent = require("./switch");

const accordion = require("./accordion");
const heading = require("./heading");
const body = require("./body");
const code = require("./code");
const dialog = require("./dialog");
const drawer = require("./drawer");
const quote = require("./quote");
const slat = require("./slat");
const smartCard = require("./smart-card");
const table = require("./table");
const image = require("./image");
const list = require("./list");
const icons = require("./icons");

const card = require("./card");
const container = require("./container");
const responsive = require("./responsive");
const rule = require("./rule");
const stack = require("./stack");
const grid = require("./grid");

const alert = require("./alert");
const badge = require("./badge");
const message = require("./message");
const loader = require("./loader");

const button = require("./button");
const chip = require("./chip");
const dropdown = require("./dropdown");
const link = require("./link");

const carousel = require("./carousel");
const stepper = require("./stepper");
const tabBar = require("./tab-bar");

// Export all guidelines as an array in the same order
const guidelines = [
  addOn,
  checkbox,
  field,
  fileUpload,
  input,
  progress,
  select,
  switchComponent,

  accordion,
  heading,
  body,
  code,
  dialog,
  drawer,
  quote,
  slat,
  smartCard,
  table,
  image,
  list,
  icons,

  card,
  container,
  responsive,
  rule,
  stack,
  grid,

  alert,
  badge,
  message,
  loader,

  button,
  chip,
  dropdown,
  link,

  carousel,
  stepper,
  tabBar,
];

// Export individual guidelines for direct access
module.exports = {
  guidelines,

  addOn,
  checkbox,
  field,
  fileUpload,
  input,
  progress,
  select,
  switchComponent,

  accordion,
  heading,
  body,
  code,
  dialog,
  drawer,
  quote,
  slat,
  smartCard,
  table,
  image,
  list,
  icons,

  card,
  container,
  responsive,
  rule,
  stack,
  grid,

  alert,
  badge,
  message,
  loader,

  button,
  chip,
  dropdown,
  link,

  carousel,
  stepper,
  tabBar,
};
