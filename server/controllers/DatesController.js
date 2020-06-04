import express from "express";
import BaseController from "../utils/BaseController";
import { datesService } from "../services/DatesService";
import auth0Provider from "@bcwdev/auth0provider";


export class DatesController extends BaseController {
  constructor() {
    super("api/dates");
    this.router
      .use(auth0Provider.getAuthorizedUserInfo)
      .get("", this.getAll)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .post("", this.create);
  }
  async getAll(req, res, next) {
    try {
      let data = await datesService.findAll({ creatorEmail: req.userInfo.email })
      res.send(data)
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      req.body.creatorEmail = req.userInfo.email;
      let data = await datesService.create(req.body);
      return res.send(data)
      res.send(req.body);
    } catch (error) {
      next(error);
    }
  }
}
