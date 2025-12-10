"use server"

import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/prisma";
import { revalidatePath } from "next/cache";

export async function getCars() {
  return await prisma.car.findMany({
    orderBy: { createdAt: "desc" },
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // const car = await prisma.car.create({
    await prisma.car.create({
      data: {
        dateAchat: new Date(body.dateAchat),
        plaque: Number(body.plaque),
        marque: body.marque,
        modele: body.modele,
        utilisateur: body.utilisateur,
        dateAssurance: new Date(body.dateAssurance),
        dateAssuranceProchaine: new Date(body.dateAssuranceProchaine),
        dateVignette: new Date(body.dateVignette),
        dateVignetteProchaine: new Date(body.dateVignetteProchaine),
        dateVisite: new Date(body.dateVisite),
        dateVisiteProchaine: new Date(body.dateVisiteProchaine),
        dateCarteGrise: new Date(body.dateCarteGrise),
        dateCarteGriseProchaine: new Date(body.dateCarteGriseProchaine),
      },
    });
    revalidatePath("/cars")
    // return NextResponse.json(car);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erreur lors de la création" }, { status: 500 });
  }
}
