import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, Cell, Legend } from 'recharts';
import { MONTHLY_ACTIVITY, PARTIES } from '../constants';

export const ActivityChart: React.FC = () => {
  return (
    <div className="w-full h-64 bg-black/50 backdrop-blur-sm rounded-xl p-2 border border-white/10">
      <h4 className="text-xs font-bold mb-2 text-center">Picos de Actividad Viral (Ene-Jun 2024)</h4>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={MONTHLY_ACTIVITY}>
          <XAxis dataKey="month" stroke="#888" fontSize={10} tickLine={false} />
          <YAxis hide />
          <Tooltip 
            contentStyle={{ backgroundColor: '#111', border: 'none', borderRadius: '8px', fontSize: '12px' }}
            itemStyle={{ padding: 0 }}
          />
          <Legend iconSize={8} wrapperStyle={{ fontSize: '10px' }} />
          <Line type="monotone" dataKey="PP" stroke="#0056a3" strokeWidth={3} dot={false} />
          <Line type="monotone" dataKey="PSOE" stroke="#e30613" strokeWidth={3} dot={false} />
          <Line type="monotone" dataKey="Vox" stroke="#63be21" strokeWidth={3} dot={false} />
          <Line type="monotone" dataKey="Sumar" stroke="#e51c55" strokeWidth={3} dot={false} />
        </LineChart>
      </ResponsiveContainer>
      <div className="mt-2 text-[10px] text-center text-gray-400">
        <span className="text-red-500 font-bold">Pico de Abril:</span> Coincide con la Ley de Amnistía y la Carta de Sánchez.
      </div>
    </div>
  );
};

export const ToneChart: React.FC = () => {
  const data = [
    { name: 'PP', positive: 7, negative: 81, neutral: 12 },
    { name: 'PSOE', positive: 86, negative: 5, neutral: 9 },
    { name: 'Sumar', positive: 50, negative: 20, neutral: 30 },
  ];

  return (
    <div className="w-full h-64 bg-black/50 backdrop-blur-sm rounded-xl p-2 border border-white/10 mt-4">
      <h4 className="text-xs font-bold mb-2 text-center">Estrategia: Ataque vs. Promoción</h4>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" barSize={15}>
          <XAxis type="number" hide />
          <YAxis dataKey="name" type="category" stroke="#fff" fontSize={12} width={40} tickLine={false} />
          <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ backgroundColor: '#111', border: 'none' }} />
          <Legend iconSize={8} wrapperStyle={{ fontSize: '10px' }} />
          <Bar dataKey="negative" name="Negativo (Ataque)" stackId="a" fill="#ef4444" radius={[4, 0, 0, 4]} />
          <Bar dataKey="positive" name="Positivo (Promo)" stackId="a" fill="#22c55e" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export const InteractiveMethodology: React.FC = () => {
  const [filter, setFilter] = useState(1299);
  
  // Calculate visual representation
  const totalDots = 100; // Representing 100%
  const activeDots = Math.floor((filter / 1299) * 100);
  const isViralMode = filter <= 137;

  return (
    <div className="p-4 bg-zinc-900 rounded-xl border border-zinc-800">
      <div className="mb-4">
        <label className="text-sm font-bold mb-2 block">
            Filtrar la muestra: {filter} Videos
        </label>
        <input 
            type="range" 
            min="137" 
            max="1299" 
            value={filter} 
            onChange={(e) => setFilter(Number(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-pink-500"
        />
        <div className="flex justify-between text-[10px] text-gray-500 mt-1">
            <span>Trends Virales (137)</span>
            <span>Corpus Total (1.299)</span>
        </div>
      </div>

      <div className="grid grid-cols-10 gap-1 h-32 content-start">
        {Array.from({ length: totalDots }).map((_, i) => (
            <div 
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    i < activeDots 
                    ? (isViralMode ? 'bg-pink-500 scale-125' : 'bg-gray-600') 
                    : 'bg-transparent border border-gray-800'
                }`}
            />
        ))}
      </div>
      
      <div className={`mt-4 p-2 rounded bg-opacity-20 transition-colors ${isViralMode ? 'bg-pink-500' : 'bg-gray-800'}`}>
        <p className="text-xs text-center">
            {isViralMode 
                ? "✨ ¡MATCH! Solo el 9.5% de los videos usan trends virales, pero generan mayor engagement." 
                : "La mayoría (90.5%) son cortes tradicionales de mítines o televisión."}
        </p>
      </div>
    </div>
  );
};