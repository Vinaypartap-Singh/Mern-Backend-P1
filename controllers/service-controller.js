const serviceModel = require("../model/services-modal");

const service = async (req, res) => {
  try {
    const response = await serviceModel.find();

    if (!response) {
      return res.status(401).json({ message: "Services Not Found" });
    }

    res.status(200).json({ data: response });
  } catch (error) {
    console.log(error);
  }
};

module.exports = service;
