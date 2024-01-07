const { z } = require("zod");

const registerSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(6, { message: "Name must be at least 6 characters" })
    .max(100, { message: "Maximum 255 characters only" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid Email Address" })
    .min(6, { message: "Email must be at least 6 characters" })
    .max(100, { message: "Maximum 255 characters only" }),
  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone must be at least 10 digits" })
    .max(10, { message: "Maximum 10 digits only" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters" })
    .max(1024, { message: "Maximum 1024 characters only" }),
});

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid Email Address" })
    .min(6, { message: "Email must be at least 6 characters" })
    .max(100, { message: "Maximum 255 characters only" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters" })
    .max(1024, { message: "Maximum 1024 characters only" }),
});

module.exports = { registerSchema, loginSchema };
