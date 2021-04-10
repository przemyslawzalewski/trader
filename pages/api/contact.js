import sendgrid from "@sendgrid/mail";
import multer from "multer";

import emailTemplate from "../../emailTemplate";

const { SENDGRID_API_KEY, SENDGRID_SENDER } = process.env;

const TO = SENDGRID_SENDER;
const FROM = TO;
const REPLY_TO = FROM;
const SUBJECT = "New message by the contact form";

sendgrid.setApiKey(SENDGRID_API_KEY);

const upload = multer();

const initMiddleware = (middleware) => (req, res) =>
  new Promise((resolve, reject) => {
    middleware(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });

const multerAny = initMiddleware(upload.any());

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  await multerAny(req, res);

  const files = req.files;

  const {
    name,
    phone,
    city,
    postcode,
    message,
    successUrl,
    errorUrl,
  } = req.body;

  // TODO: Validate model (string fields, lengths, etc.)
  // TODO: Validate successUrl/errorUrl are valid internal domains
  const model = { name, phone, city, postcode, message };

  const text = `${name} (${phone}) from ${city} ${postcode} has sent you a message\n${message}`;

  // TODO: Render proper HTML, please be vary of XXSes like <script>alert()</script> or <s>test</s> contents
  const html = emailTemplate(model);

  const attachments = files.map(({ originalname, mimetype, buffer }) => ({
    content: buffer.toString("base64"),
    filename: originalname,
    type: mimetype,
    disposition: "attachment",
  }));

  const msg = {
    from: FROM,
    html,
    replyTo: REPLY_TO,
    subject: SUBJECT,
    text,
    to: TO,
    attachments,
  };

  try {
    await sendgrid.send(msg);

    return res.redirect(successUrl);
  } catch (error) {
    console.error(error);
    console.error(model);

    return res.redirect(errorUrl);
  }
};
