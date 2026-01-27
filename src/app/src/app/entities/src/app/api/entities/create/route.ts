import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(req: Request) {
  const body = await req.json();
  const { rut, legalName } = body;

  const entity = await prisma.entity.create({
    data: {
      rut,
      legalName,
      // temporales
      orgId: "TEMP_ORG", 
    },
  });

  return NextResponse.json({ entity });
}
