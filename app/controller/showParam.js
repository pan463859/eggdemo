"use strict";
const Controller = require("egg").Controller;

class ShowParamController extends Controller {
  async index() {
    const { ctx } = this;
    const { id } = ctx.query;
    ctx.body = id;
  }
}

module.exports = ShowParamController;
