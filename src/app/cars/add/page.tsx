"use client";

import Link from "next/link";
import { useState } from "react";

export default function NewCarPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    dateAchat: "",
    plaque: "",
    marque: "",
    modele: "",
    utilisateur: "",
    dateAssurance: "",
    dateAssuranceProchaine: "",
    dateVignette: "",
    dateVignetteProchaine: "",
    dateVisite: "",
    dateVisiteProchaine: "",
    dateCarteGrise: "",
    dateCarteGriseProchaine: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
        await fetch("/api/cars", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });
        window.location.href='/cars';
        setIsLoading(false);
    } catch (error) {
        setIsLoading(false);
        console.log(error);
    }
  };

  return (
        <div className="border border-[#30D5C0] my-24 mx-3 rounded-lg">
            <div className='bg-white px-6 md:px-10 py-18 rounded-lg'>
                <h3 className='text-blue-400 text-center' style={{fontSize: '2rem'}}><b>Nouvel enregistrement</b></h3>
                <form onSubmit={handleSubmit} className="border border-gray-500 rounded-md p-6 my-6 md:w-100 mx-auto">
                    <div className="grid grid-cols-1 gap-2 mb-5">
                        <label htmlFor="dateAchat">Date achat</label>
                        <input 
                            type="date" 
                            name="dateAchat" 
                            id="dateAchat" 
                            className="border border-gray-500 p-2 rounded-md" 
                            value={form.dateAchat} onChange={handleChange} required
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-2 mb-5">
                        <label htmlFor="plaque">Plaque</label>
                        <input 
                            type="number" 
                            name="plaque" 
                            id="plaque" 
                            className="border border-gray-500 p-2 rounded-md"  
                            value={form.plaque} onChange={handleChange} required
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-2 mb-5">
                        <label htmlFor="marque">Marque</label>
                        <input 
                            type="text" 
                            name="marque" 
                            id="marque" 
                            className="border border-gray-500 p-2 rounded-md"  
                            value={form.marque} onChange={handleChange} required
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-2 mb-5">
                        <label htmlFor="modele">Modele</label>
                        <input 
                            type="text" 
                            name="modele" 
                            id="modele" 
                            className="border border-gray-500 p-2 rounded-md"  
                            value={form.modele} onChange={handleChange} required
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-2 mb-5">
                        <label htmlFor="utilisateur">Utilisateur</label>
                        <input 
                            type="text" 
                            name="utilisateur" 
                            id="utilisateur" 
                            className="border border-gray-500 p-2 rounded-md"  
                            value={form.utilisateur} onChange={handleChange} required
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-2 mb-5">
                        <label htmlFor="dateAssurance">Date assurance</label>
                        <input 
                            type="date" 
                            name="dateAssurance" 
                            id="dateAssurance" 
                            className="border border-gray-500 p-2 rounded-md"  
                            value={form.dateAssurance} onChange={handleChange} required
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-2 mb-5">
                        <label htmlFor="dateAssuranceProchaine">Date assurance prochaine</label>
                        <input 
                            type="date" 
                            name="dateAssuranceProchaine" 
                            id="dateAssuranceProchaine" 
                            className="border border-gray-500 p-2 rounded-md"  
                            value={form.dateAssuranceProchaine} onChange={handleChange} required
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-2 mb-5">
                        <label htmlFor="dateVignette">Date vignette</label>
                        <input 
                            type="date" 
                            name="dateVignette" 
                            id="dateVignette" 
                            className="border border-gray-500 p-2 rounded-md"  
                            value={form.dateVignette} onChange={handleChange} required
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-2 mb-5">
                        <label htmlFor="dateVignetteProchaine">Date vignette prochaine</label>
                        <input 
                            type="date" 
                            name="dateVignetteProchaine" 
                            id="dateVignetteProchaine" 
                            className="border border-gray-500 p-2 rounded-md"  
                            value={form.dateVignetteProchaine} onChange={handleChange} required
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-2 mb-5">
                        <label htmlFor="dateVisite">Date visite</label>
                        <input 
                            type="date" 
                            name="dateVisite" 
                            id="dateVisite" 
                            className="border border-gray-500 p-2 rounded-md"  
                            value={form.dateVisite} onChange={handleChange} required
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-2 mb-5">
                        <label htmlFor="dateVisiteProchaine">Date visite prochaine</label>
                        <input 
                            type="date" 
                            name="dateVisiteProchaine" 
                            id="dateVisiteProchaine" 
                            className="border border-gray-500 p-2 rounded-md"  
                            value={form.dateVisiteProchaine} onChange={handleChange} required
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-2 mb-5">
                        <label htmlFor="dateCarteGrise">Date carte grise</label>
                        <input 
                            type="date" 
                            name="dateCarteGrise" 
                            id="dateCarteGrise" 
                            className="border border-gray-500 p-2 rounded-md"  
                            value={form.dateCarteGrise} onChange={handleChange} required
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-2 mb-5">
                        <label htmlFor="dateCarteGriseProchaine">Date carte grise prochaine</label>
                        <input 
                            type="date" 
                            name="dateCarteGriseProchaine" 
                            id="dateCarteGriseProchaine" 
                            className="border border-gray-500 p-2 rounded-md"  
                            value={form.dateCarteGriseProchaine} onChange={handleChange} required
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
