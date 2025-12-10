"use server"

import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/prisma";
import { revalidatePath } from "next/cache";

export async function getCarburants() {
  return await prisma.carburant.findMany({
    orderBy: { createdAt: "desc" },
    include: { car: true },
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    await prisma.carburant.create({
      data: {
        car: {
          connect: {id: body.carId}
        },
        type: body.type,
        litres: body.litres,
        montant: body.montant,
        facture: body.facture,
      },
    });
    revalidatePath("/carburant")
    // return NextResponse.json(carburant);
  } catch (error) {
    // console.error(error);
    return NextResponse.json({ error: "Erreur lors de la création" }, { status: 500 });
  }
}
