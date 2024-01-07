const Contact = require("../model/contact-model");

const contactForm = async (req, res) => {
  try {
    const response = req.body;
    await Contact.create(response);
    return res.status(200).json({ message: "Your Message Sent Successfully" });
  } catch (error) {
    return res.status(400).json({ message: "Contact Form Error Controller" });
  }
};

module.exports = contactForm;
