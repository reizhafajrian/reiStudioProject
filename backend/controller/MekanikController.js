import MekanikSchema from "../models/mekanik";
const MekanikController = {
  create: async (req, res) => {
    try {
      const data = await MekanikSchema.create(req.body);
      return res.json({
        status: 200,
        data,
      });
    } catch (error) {
      throw error;
    }
  },
  get: async (req, res) => {
    try {
      const data = await MekanikSchema.find({});
      return res.json({
        status: 200,
        data,
      });
    } catch (error) {
      throw error;
    }
  },
  edit: async (req, res) => {
    try {
      const data = await MekanikSchema.findOneAndUpdate(
        {
          _id: req.body.data.id,
        },
        req.body.data,
        { new: true }
      );
      return res.json({
        status: 200,
        data,
      });
    } catch (error) {
      throw error;
    }
  },
  delete: async (req, res) => {
    try {
      const data = await MekanikSchema.findOneAndDelete({
        _id: req.body.id,
      });
      return res.json({
        status: 200,
        data,
      });
    } catch (error) {
      throw error;
    }
  },
};
export default MekanikController;
