import MekanikSchema from "../models/mekanik";

const FindMekanikController = {
  find: async (req, res) => {
    const { id } = req.query;
    const data = await MekanikSchema.findOne({ _id: id });
    return res.json({
      data,
    });
  },
};
export default FindMekanikController;
