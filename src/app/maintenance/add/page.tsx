"use client";

import { getCars } from "../../../app/api/cars/route";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Car {
  id: string,
  dateAchat: Date,
  plaque: number,
  marque: string,
  modele:string,
}

export default function NewCarPage() {
  const [cars, setCars] = useState<Car[]>([]);
  const [dataLoading, setDataLoading] = useState(false); 
    useEffect(() => {
        const getData = async () => {
            setDataLoading(true);
            try {
                const res = await getCars()
                setCars(res)
            } catch (error) {
                console.log(error);
            } finally {
                setDataLoading(false);              
            }            
        }
        getData();
    }, [])

  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    carId: "",
    type: "",
    facture: "",
    montant: "",
    note: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
        await fetch("/api/maintenance", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });
        window.location.href='/maintenance';
        setIsLoading(false);
    } catch (error) {
        setIsLoading(false);
        console.log(error);
    }
  };

  if(dataLoading) return <p>Chargement...</p>

  return (
        <div className="border border-[#30D5C0] my-24 mx-3 rounded-lg">
            <div className='bg-white px-6 md:px-10 py-18 rounded-lg'>
                <h3 className='text-blue-400 text-center' style={{fontSize: '2rem'}}><b>Nouvel enregistrement</b></h3>
                <form onSubmit={handleSubmit} className="border border-gray-500 rounded-md p-6 my-6 md:w-100 mx-auto">
                    <div className="grid grid-cols-1 gap-2 mb-5">
                        <label htmlFor="carId">Véhicule</label>
                        <select 
                            name="carId" 
                            id="carId" 
                            className="border border-gray-500 p-2 rounded-md"  
                            value={form.carId} onChange={(e)=>setForm({...form, carId: e.target.value})} required
                        >
                            <option value="" disabled>Selectionnez un vehicule</option>
                            {
                                cars?.map(car=>(
                                    <option key={car?.id} value={car?.id}>{car?.marque} {car?.modele}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="grid grid-cols-1 gap-2 mb-5">
                        <label htmlFor="type">Type d&apos;entretient</label>
                        <input 
                            type="text" 
                            name="type" 
                            id="type" 
                            className="border border-gray-500 p-2 rounded-md"  
                            value={form.type} onChange={(e)=>setForm({...form, type: e.target.value})} required
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-2 mb-5">
                        <label htmlFor="montant">Montant (Fc)</label>
                        <input 
                            type="text" 
                            name="montant" 
                            id="montant" 
                            className="border border-gray-500 p-2 rounded-md"  
                            value={form.montant} onChange={(e)=>setForm({...form, montant: e.target.value})} required
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-2 mb-5">
                        <label htmlFor="facture">Facture</label>
                        <input 
                            type="text" 
                            name="facture" 
                            id="facture" 
                            className="border border-gray-500 p-2 rounded-md"  
                            value={form.facture} onChange={(e)=>setForm({...form, facture: e.target.value})} required
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-2 mb-5">
                        <label htmlFor="note">Note</label>
                        <input 
                            type="text" 
                            name="note" 
                            id="note" 
                            className="border border-gray-500 p-2 rounded-md"  
                            value={form.note} onChange={(e)=>setForm({...form, note: e.target.value})}
                        />
                    </div>
                    <div className="text-center">
                        {
                            isLoading
                            ? <button 
                                type="button" 
                                className="bg-gray-400 w-full text-gray-700 p-3 rounded-md"
                            >Enregistrement en cours...</button>
                            : <button 
                                type="submit" 
                                className="bg-blue-400 w-full text-white cursor-pointer p-3 rounded-md"
                            >Enregistrer</button>
                        }
                    </div>
                </form>
                <div className="text-center mt-10">
                    <Link href={'/'} className="border border-blue-400 text-blue-400 rounded-md p-3">Retourner à l&apos;accueil</Link>
                </div>
            </div>
        </div>
  );
}
