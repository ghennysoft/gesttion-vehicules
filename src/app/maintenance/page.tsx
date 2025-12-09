import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function Page() {
  const maintenances = await prisma.maintenance.findMany({
    orderBy: { createdAt: "desc" },
  });
  
  return (
    <>
      <h3 className='text-blue-400 text-center p-2 mt-5' style={{fontSize: '1.7rem', fontWeight: 600}}>Tous les véhicules</h3>
      <div className="flex justify-center gap-3">
        <Link href={'/maintenances/add'} className="border border-blue-400 bg-blue-400 text-white rounded-md px-3 py-1">Ajouter</Link>
        <Link href={'/'} className="border border-blue-400 text-blue-400 rounded-md px-3 py-1">Retourner à l&apos;accueil</Link>
      </div>
      <div className="rounded-lg border border-[#555] m-7 mt-2" style={{boxShadow:'0px 0px 10px 1px #aaa', overflow: 'hidden'}}>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-blue-400">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">MARQUE</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">MODELE</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">PLAQUE</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">UTILISATEUR</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">DATE ACHAT</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">DATE ASSURANCE</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">DATE VIGNETTE</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">DATE VISITE</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">DATE maintenanceTE GRISE</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {
                maintenances.map(maintenance=>(
                  <tr key={maintenance?.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{maintenance?.marque}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{maintenance?.modele}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{maintenance?.plaque}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{maintenance?.utilisateur}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{new Date(maintenance?.dateAchat).toLocaleDateString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{new Date(maintenance?.dateAssurance).toLocaleDateString()} - {new Date(maintenance?.dateAssuranceProchaine).toLocaleDateString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{new Date(maintenance?.dateVignette).toLocaleDateString()} - {new Date(maintenance?.dateVignetteProchaine).toLocaleDateString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{new Date(maintenance?.dateVisite).toLocaleDateString()} - {new Date(maintenance?.dateVisiteProchaine).toLocaleDateString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{new Date(maintenance?.datemaintenanceteGrise).toLocaleDateString()} - {new Date(maintenance?.datemaintenanceteGriseProchaine).toLocaleDateString()}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}