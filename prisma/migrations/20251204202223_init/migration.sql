-- CreateTable
CREATE TABLE "Car" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dateAchat" DATETIME NOT NULL,
    "plaque" INTEGER NOT NULL,
    "marque" TEXT NOT NULL,
    "modele" TEXT NOT NULL,
    "utilisateur" TEXT NOT NULL,
    "dateAssurance" DATETIME NOT NULL,
    "dateAssuranceProchaine" DATETIME NOT NULL,
    "dateVignette" DATETIME NOT NULL,
    "dateVignetteProchaine" DATETIME NOT NULL,
    "dateVisite" DATETIME NOT NULL,
    "dateVisiteProchaine" DATETIME NOT NULL,
    "dateCarteGrise" DATETIME NOT NULL,
    "dateCarteGriseProchaine" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
