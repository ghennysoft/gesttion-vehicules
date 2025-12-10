import prisma from "../lib/prisma";
import Link from "next/link";

export default async function Home() {
  const carsCount = await prisma.car.count();
  const maintenance = await prisma.maintenance.findMany();
  let montantTotal=0;
  maintenance.map(item=>{
    montantTotal += Number(item?.montant);
  })
  return (
    <div className="border border-[#30D5C0] my-24 mx-3 rounded-lg">
        <h3 className='text-blue-400 text-center p-3' style={{fontSize: '1.7rem'}}>Tableau de bord</h3>
        {/* <p className="text-center">Nombre de véhicules</p> */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 p-8 mt-6'>
          <div className="flex flex-col items-center rounded-lg p-5 border border-[transparent] hover:border-[#555]" style={{boxShadow:'0px 0px 10px 1px #aaa'}}>
            <span className="bg-blue-400 px-4 py-3 text-white rounded-lg">O</span>
            <div className="card-body text-center p-2">
              <small><b>Nombre de véhicules</b></small> <br />
              <h3 className="text-4xl p-5">
                <strong>{carsCount}</strong>
              </h3>
            </div>
            <div className="flex justify-center gap-2">
              <Link href={'/cars/add'}><span className='border border-blue-400 px-5 py-2 text-blue-400 rounded-lg cursor-pointer'>Ajouter</span></Link>
              <Link href={'/cars'}><span className='border border-blue-400 px-5 py-2 text-white bg-blue-400 rounded-lg cursor-pointer'>Voir</span></Link>
            </div>
          </div>
          <div className="flex flex-col items-center rounded-lg p-5 border border-[transparent] hover:border-[#555]" style={{boxShadow:'0px 0px 10px 1px #aaa'}}>
            <span className="bg-blue-400 px-4 py-3 text-white rounded-lg">O</span>
            <div className="card-body text-center p-2">
              <small><b>Total dépenses d&apos;entretiens</b></small> <br />
              <h3 className="text-4xl p-5">
                <strong>{montantTotal} Fc</strong>
              </h3>
            </div>
            <div className="flex justify-center gap-2">
              <Link href={'/maintenance/add'}><span className='border border-blue-400 px-5 py-2 text-blue-400 rounded-lg cursor-pointer'>Ajouter</span></Link>
              <Link href={'/maintenance'}><span className='border border-blue-400 px-5 py-2 text-white bg-blue-400 rounded-lg cursor-pointer'>Voir</span></Link>
            </div>
          </div>
          <div className="flex flex-col items-center rounded-lg p-5 border border-[transparent] hover:border-[#555]" style={{boxShadow:'0px 0px 10px 1px #aaa'}}>
            <span className="bg-blue-400 px-4 py-3 text-white rounded-lg">O</span>
            <div className="card-body text-center p-2">
              <small><b>Total essence</b></small> <br />
              <h3 className="text-4xl p-5">
                <strong>159000</strong>
              </h3>
            </div>
            <div className="flex justify-center gap-2">
              <Link href={'/essences/add'}><span className='border border-blue-400 px-5 py-2 text-blue-400 rounded-lg cursor-pointer'>Ajouter</span></Link>
              <Link href={'/essences'}><span className='border border-blue-400 px-5 py-2 text-white bg-blue-400 rounded-lg cursor-pointer'>Voir</span></Link>
            </div>
          </div>
        </div>
    </div>
  );
}
