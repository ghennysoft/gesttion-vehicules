"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import { getMaintenances } from "../api/maintenance/route";

export default function Page() {
  const [maintenances, setMaintenances] = useState(null);  
  const [isLoading, setIsLoading] = useState(false); 
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const res = await getMaintenances()
        setMaintenances(res)
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);              
      }            
    }
    getData();
  }, [])

  if(isLoading) return <p>Loading...</p>
  
  return (
    <>
      <h3 className='text-blue-400 text-center p-2 mt-5' style={{fontSize: '1.7rem', fontWeight: 600}}>Depenses entretiens</h3>
      <div className="flex justify-center gap-3 my-5">
        <Link href={'/maintenance/add'} className="border border-blue-400 bg-blue-400 text-white rounded-md px-3 py-1">Ajouter</Link>
        <Link href={'/'} className="border border-blue-400 text-blue-400 rounded-md px-3 py-1">Retourner à l&apos;accueil</Link>
      </div>
      <div className="rounded-lg border border-[#555] m-7 mt-2" style={{boxShadow:'0px 0px 10px 1px #aaa', overflow: 'hidden'}}>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-blue-400">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">VEHICULE</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">FACTURE</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">MONTANT</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">TYPE</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">DATE</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">NOTE</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {
                maintenances?.map(maintenance=>(
                  <tr key={maintenance?.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{maintenance?.car?.marque} {maintenance?.car?.modele} ({maintenance?.car?.plaque})</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{maintenance?.facture}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{maintenance?.montant} Fc</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{maintenance?.type}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{new Date(maintenance?.createdAt).toLocaleDateString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{maintenance?.note}</td>
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