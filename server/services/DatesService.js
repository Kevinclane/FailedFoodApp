import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class DatesService {

  async findAll(query = {}) {
    let dates = await dbContext.Dates.find(query).populate(
      "creator",
      "name picture"
    );
    return dates;
  }
  async findById(id) {
    let date = await dbContext.Dates.findById(id);
    if (!date) {
      throw new BadRequest("Invalid Id");
    }
    return date;
  }
  async create(body) {
    return await dbContext.Dates.create(body)
  }
}

export const datesService = new DatesService();
