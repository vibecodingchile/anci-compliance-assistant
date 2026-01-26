import { z } from "zod";

const institutionalEmail = z
  .string()
  .email()
  .refine((v) => !/(gmail|hotmail|outlook|yahoo)\.com$/i.test(v), {
    message: "Debe ser correo institucional (no genérico).",
  });

export const IG3WizardSchema = z.object({
  delegateFullName: z.string().min(3),
  delegateRut: z.string().min(7),
  delegateAddress: z.string().min(5),
  delegateEmailInstitutional: institutionalEmail,
  delegatePhone: z.string().min(6),

  subrogantEmailInstitutional: institutionalEmail,

  legalLinkType: z.enum(["contrato", "acto", "acuerdo", "otro"]),
  legalLinkReference: z.string().min(3),

  orgPosition: z.string().min(2),
  representationPowerDesc: z.string().min(10),

  deadlineFeb15Ack: z.boolean().refine((v) => v === true, {
    message: "Debes reconocer el hito para continuar.",
  }),
});
