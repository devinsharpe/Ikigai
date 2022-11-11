import { ZodFormattedError } from "zod";
import dotenv from "dotenv";
import { schema } from "./schema";
dotenv.config();

export const formatErrors = (errors: ZodFormattedError<Map<string, string>>) =>
  Object.entries(errors)
    .map(([name, value]) => {
      if (value && "_errors" in value)
        return `${name}: ${value._errors.join(", ")}\n`;
      else return "";
    })
    .filter(Boolean);
const _env = schema.safeParse(process.env);

if (_env.success === false) {
  console.error(
    "❌ Invalid environment variables:\n",
    ...formatErrors(_env.error.format())
  );
  throw new Error("Invalid environment variables");
}

export const env = _env.data;
