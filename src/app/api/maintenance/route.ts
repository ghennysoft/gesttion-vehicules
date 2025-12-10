"use server"

import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/prisma";
import { revalidatePath } from "next/cache";

export async function getMaintenances() {
  return await prisma.maintenance.findMany({
    orderBy: { createdAt: "desc" },
    include: { car: true },
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    await prisma.maintenance.create({
      data: {
        car: {
          connect: {id: body.carId}
        },
        type: body.type,
        facture: body.facture,
        montant: body.montant,
        note: body.note,
      },
    });
    revalidatePath("/maintenance")
    // return NextResponse.json(maintenance);
  } catch (error) {
    // console.error(error);
    return NextResponse.json({ error: "Erreur lors de la création" }, { status: 500 });
  }
}
