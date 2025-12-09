import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

// export async function GET() {
//     return NextResponse.json({
//         ok: true,
//         env: process.env.NODE_ENV,
//     });
// }

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const maintenance = await prisma.maintenance.create({
      data: {
        car: body.car,
        carId: body.carId,
        type: body.type,
        facture: body.facture,
        montant: body.montant,
        note: body.note,
      },
    });
    return NextResponse.json(maintenance);
  } catch (error) {
    // console.error(error);
    return NextResponse.json({ error: "Erreur lors de la création" }, { status: 500 });
  }
}
