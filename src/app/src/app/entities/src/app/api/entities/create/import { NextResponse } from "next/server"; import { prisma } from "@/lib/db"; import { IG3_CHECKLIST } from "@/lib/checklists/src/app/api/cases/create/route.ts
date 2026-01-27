import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { IG3_CHECKLIST } from "@/lib/checklists/ig3";

export async function POST(req: Request) {
  const { entityId, createdBy } = await req.json();

  const c = await prisma.delegationCase.create({
    data: {
      entityId,
      createdBy,
      checklist: {
        create: IG3_CHECKLIST.map((i) => ({
          key: i.key,
          title: i.title,
          description: i.description!,
          required: i.required,
        })),
      },
    },
    include: {
      checklist: true,
    },
  });

  return NextResponse.json({ case: c });
    }
