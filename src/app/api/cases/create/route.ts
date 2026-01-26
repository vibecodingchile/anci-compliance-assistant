import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { IG3_CHECKLIST } from "@/lib/checklists/ig3";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const body = await req.json();
  const { entityId, createdBy } = body;

  const c = await prisma.delegationCase.create({
    data: {
      entityId,
      createdBy,
      checklist: {
        create: IG3_CHECKLIST.map((i) => ({
          key: i.key,
          title: i.title,
          description: i.description,
          required: i.required,
        })),
      },
    },
    include: { checklist: true },
  });

  await prisma.auditLog.create({
    data: {
      orgId: (await prisma.entity.findUnique({ where: { id: entityId } }))!.orgId,
      entityId,
      caseId: c.id,
      actorId: createdBy,
      action: "CASE_CREATED",
      metadata: { seeded: "IG3_CHECKLIST" },
    },
  });

  return NextResponse.json({ case: c });
}
