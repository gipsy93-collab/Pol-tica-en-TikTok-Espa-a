import React, { useState, useRef, useEffect } from 'react';
import { ArrowDown, Play, AlertCircle, X, Send, ThumbsUp, Lightbulb, MessageSquare } from 'lucide-react';
import TikTokOverlay from './components/TikTokOverlay';
import { ActivityChart, ToneChart, InteractiveMethodology } from './components/Visualizations';
import { INTERVIEW_QUOTES, PARTIES, THEORY_CARDS, CONCLUSION_CARDS, INITIAL_COMMENTS } from './constants';
import { TheoryCard, ConclusionCard, Comment } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // States for Cards
  const [selectedTheory, setSelectedTheory] = useState<TheoryCard | null>(null);
  const [selectedConclusion, setSelectedConclusion] = useState<ConclusionCard | null>(null);

  // States for Comment Section
  const [comments, setComments] = useState<Comment[]>(INITIAL_COMMENTS);
  const [newCommentText, setNewCommentText] = useState('');

  // Scroll detection to update active section
  const handleScroll = () => {
    if (containerRef.current) {
      const scrollPosition = containerRef.current.scrollTop;
      const height = containerRef.current.clientHeight;
      const index = Math.round(scrollPosition / height);
      setActiveSection(index);
    }
  };

  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll);
      return () => el.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleAddComment = () => {
    if (!newCommentText.trim()) return;
    const newComment: Comment = {
      id: Date.now(),
      username: 'tu_usuario',
      text: newCommentText,
      likes: 0,
      isUser: true
    };
    setComments([newComment, ...comments]);
    setNewCommentText('');
  };

  return (
    <div 
      ref={containerRef}
      className="h-screen w-full snap-y snap-mandatory overflow-y-scroll overflow-x-hidden bg-black no-scrollbar"
    >
      {/* --- SECTION 1: INTRO (HOOK) --- */}
      <section className="h-screen w-full snap-start relative flex items-center justify-center bg-gradient-to-br from-purple-900 to-black">
        <div className="absolute inset-0 opacity-40">
           <img src="https://picsum.photos/seed/politics/800/1200" className="w-full h-full object-cover blur-sm" alt="Background" />
        </div>
        
        <div className="z-10 text-center px-6 max-w-md">
          <div className="bg-red-600 text-white text-xs font-bold px-2 py-1 inline-block mb-4 rounded uppercase tracking-wider animate-pulse">
            Investigación
          </div>
          <h1 className="text-5xl font-black mb-2 leading-tight">
            ¿QUIÉN DOMINA <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">TIKTOK?</span>
          </h1>
          <p className="text-xl mb-8 font-light text-gray-200">
            Analizando 1.299 videos políticos en España.
          </p>
          <div className="flex justify-center">
             <ArrowDown className="animate-bounce w-8 h-8 text-white" />
          </div>
        </div>

        <TikTokOverlay 
          author="revistacomunicacion" 
          description="¿Saben los partidos españoles usar TikTok? ¿O da cringe? 🇪🇸📱 #politicatiktok #research #españa"
          tags={['ciencia', 'politica', 'parati']}
          likes="1.2M"
          comments="342"
          shares="12k"
        />
      </section>

      {/* --- SECTION 2: THEORETICAL FRAMEWORK (Interactive Timeline) --- */}
      <section className="h-screen w-full snap-start relative bg-zinc-900 flex flex-col justify-center items-center">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <div className="z-10 w-full max-w-md px-6 pointer-events-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-cyan-400">La Evolución</h2>
          <p className="text-center text-xs text-gray-400 mb-6 animate-pulse">(Toca los puntos para saber más)</p>
          
          <div className="relative border-l-4 border-gray-700 ml-4 space-y-8 py-4">
            {THEORY_CARDS.map((item) => (
               <div 
                 key={item.id} 
                 className="pl-6 relative group cursor-pointer"
                 onClick={() => setSelectedTheory(item)}
               >
                 <div className={`absolute -left-[14px] top-1 w-6 h-6 ${item.color} rounded-full border-4 border-zinc-900 group-hover:scale-125 transition-transform duration-300`}></div>
                 <h3 className="font-bold text-lg group-hover:text-cyan-300 transition-colors">{item.title} ({item.year})</h3>
                 <p className="text-sm text-gray-400">{item.shortDesc}</p>
               </div>
            ))}
          </div>

          <div className="mt-8 bg-gray-800 p-4 rounded-xl border border-gray-700 transform rotate-1">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle size={16} className="text-yellow-400"/>
              <span className="font-bold text-sm text-yellow-400">POP-UP DEF: Trend vs. Viral</span>
            </div>
            <p className="text-xs leading-relaxed">
              Un <strong>Trend</strong> copia un sonido/plantilla (≥1000 usos). <br/>
              <strong>Viral</strong> es solo muchas vistas y engagement (Top 10%).
            </p>
          </div>
        </div>

        {/* THEORY MODAL */}
        {selectedTheory && (
          <div className="absolute inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-6 animate-in fade-in duration-200">
            <div className="bg-zinc-900 border-2 border-white/20 rounded-3xl p-6 max-w-sm w-full shadow-2xl relative">
              <button 
                onClick={() => setSelectedTheory(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
              
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-4 ${selectedTheory.color}`}>
                {selectedTheory.year}
              </div>
              
              <h3 className="text-2xl font-black mb-2 leading-tight">{selectedTheory.fullTitle}</h3>
              
              <div className="space-y-4">
                <div className="bg-white/5 p-3 rounded-lg">
                  <h4 className="text-xs uppercase text-gray-400 font-bold mb-1">Definición</h4>
                  <p className="text-sm leading-relaxed">{selectedTheory.definition}</p>
                </div>
                
                <div className="bg-white/5 p-3 rounded-lg border-l-4 border-cyan-500">
                  <h4 className="text-xs uppercase text-cyan-400 font-bold mb-1">En TikTok hoy</h4>
                  <p className="text-sm leading-relaxed">{selectedTheory.implication}</p>
                </div>
              </div>
              
              <p className="mt-6 text-center text-xs text-gray-500 italic">Toca la X para cerrar</p>
            </div>
          </div>
        )}

        <TikTokOverlay 
          author="profe_teoria" 
          description="Del debate racional a los bailes virales. ¿Cómo llegamos aquí? 🧠📚"
          tags={['historia', 'teoria', 'medios']}
          likes="45k"
          comments="102"
          shares="550"
        />
      </section>

      {/* --- SECTION 3: METHODOLOGY (Interactive) --- */}
      <section className="h-screen w-full snap-start relative bg-black flex flex-col justify-center items-center">
         <div className="w-full max-w-md px-6 z-10 pointer-events-auto">
            <h2 className="text-3xl font-bold mb-4 text-center text-pink-500">El Filtro</h2>
            <p className="text-center text-sm mb-6 text-gray-300">¿Cuántos videos son realmente "Nativos de TikTok"?</p>
            
            <InteractiveMethodology />
            
            <div className="mt-8 grid grid-cols-2 gap-4">
                {PARTIES.map(p => (
                    <div key={p.name} className="bg-zinc-800 p-2 rounded text-center border-l-4" style={{borderLeftColor: p.color}}>
                        <p className="font-bold text-sm">{p.name}</p>
                        <p className="text-xs text-gray-400">{p.videos} videos totales</p>
                    </div>
                ))}
            </div>
         </div>

         <TikTokOverlay 
          author="data_lab" 
          description="Filtrando el ruido. 1.299 videos -> 137 trends. 📉🧐"
          tags={['metodologia', 'datos', 'ciencia']}
          likes="10k"
          comments="88"
          shares="200"
        />
      </section>

      {/* --- SECTION 4: RESULTS (Charts) --- */}
      <section className="h-screen w-full snap-start relative bg-gradient-to-t from-black to-zinc-900 flex flex-col justify-center items-center">
        <div className="w-full max-w-md px-4 z-10 space-y-4 pointer-events-auto">
          <div className="text-center mb-2">
             <h2 className="text-3xl font-bold text-white">Resultados</h2>
             <p className="text-xs text-green-400 uppercase tracking-widest font-bold">Datos Para Ti</p>
          </div>
          
          <ActivityChart />
          <ToneChart />
        </div>

        <TikTokOverlay 
          author="maestro_graficos" 
          description="¡Mira ese pico en abril! 📈 La Ley de Amnistía lo cambió todo. El PP fue negativo, el PSOE positivo."
          tags={['estadisticas', 'resultados', 'politica']}
          likes="892k"
          comments="5.2k"
          shares="30k"
        />
      </section>

      {/* --- SECTION 5: INTERVIEWS (Audio Mock) --- */}
      <section className="h-screen w-full snap-start relative bg-indigo-950 flex flex-col justify-center items-center">
         <div className="w-full max-w-md px-6 z-10 space-y-6 pointer-events-auto">
            <h2 className="text-3xl font-bold mb-2 text-center">Detrás de Cámaras</h2>
            <p className="text-center text-xs text-gray-300 mb-6">Lo que dicen los estrategas vs. lo que hacen.</p>

            {INTERVIEW_QUOTES.map((interview, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 hover:scale-105 transition-transform duration-300 cursor-pointer">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center">
                            <Play size={14} fill="white" />
                        </div>
                        <span className="font-bold text-sm text-cyan-300">{interview.role} ({interview.id})</span>
                    </div>
                    <p className="italic text-lg mb-3">"{interview.quote}"</p>
                    <div className="bg-black/40 p-2 rounded text-xs text-red-300 font-mono">
                        {interview.reality}
                    </div>
                </div>
            ))}
         </div>

         <TikTokOverlay 
          author="filtraciones_reales" 
          description="Exponiendo estrategias. 🤫🔊 Escucha lo que dicen vs. la realidad."
          tags={['exposure', 'entrevistas', 'verdad']}
          likes="56k"
          comments="400"
          shares="1.2k"
        />
      </section>

      {/* --- SECTION 6: CONCLUSIONS & DEBATE --- */}
      <section className="h-screen w-full snap-start relative bg-gradient-to-br from-gray-900 to-black flex flex-col justify-between pt-20 pb-20">
         
         <div className="px-6 w-full max-w-md mx-auto z-10 flex flex-col h-full pointer-events-auto">
             {/* Header */}
             <div className="text-center mb-4">
                 <div className="bg-pink-600 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-2">
                    <Lightbulb size={12} />
                    <span>Conclusiones del Estudio</span>
                 </div>
                 <h2 className="text-3xl font-black leading-tight">
                     ¿Qué aprendimos?
                 </h2>
                 <p className="text-gray-400 text-xs mt-1">Toca las tarjetas para ver los hallazgos.</p>
             </div>

             {/* Conclusion Flashcards Grid */}
             <div className="grid gap-3 flex-1 overflow-y-auto pb-4 no-scrollbar">
                {CONCLUSION_CARDS.map((card) => (
                    <div 
                        key={card.id} 
                        onClick={() => setSelectedConclusion(card)}
                        className={`bg-gradient-to-r ${card.color} p-4 rounded-xl shadow-lg transform transition-all hover:scale-[1.02] cursor-pointer flex flex-col justify-between min-h-[100px]`}
                    >
                        <div>
                            <h3 className="font-bold text-lg mb-1">{card.title}</h3>
                            <p className="text-white/90 text-sm leading-tight">{card.summary}</p>
                        </div>
                        <div className="flex justify-end mt-2">
                            <div className="bg-black/20 p-1 rounded-full">
                                <ArrowDown size={14} className="-rotate-90" />
                            </div>
                        </div>
                    </div>
                ))}

                {/* Dynamic User Comments List */}
                {comments.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-800">
                        <div className="flex items-center gap-2 mb-3 text-gray-400">
                            <MessageSquare size={14} />
                            <span className="text-xs font-bold uppercase">Tus Notas</span>
                        </div>
                        <div className="space-y-3">
                            {comments.map((comment) => (
                                <div key={comment.id} className="bg-gray-800/50 p-3 rounded-lg border border-gray-700 animate-in fade-in slide-in-from-bottom-2">
                                    <p className="text-xs font-bold text-cyan-400 mb-1">@{comment.username}</p>
                                    <p className="text-sm text-gray-200">{comment.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
             </div>
         </div>

         {/* Input Area */}
         <div className="absolute bottom-0 w-full p-4 bg-black/90 backdrop-blur-xl border-t border-gray-800 z-20 pb-8 pointer-events-auto">
             <div className="max-w-md mx-auto relative flex items-center gap-2">
                 <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex-shrink-0 flex items-center justify-center font-bold text-xs">Tú</div>
                 <input 
                    type="text" 
                    value={newCommentText}
                    onChange={(e) => setNewCommentText(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleAddComment()}
                    placeholder="Escribe tu propia conclusión..."
                    className="flex-1 bg-gray-800 text-white rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-500"
                 />
                 <button 
                    onClick={handleAddComment}
                    className="p-2 bg-pink-500 rounded-full text-white hover:bg-pink-400 transition-colors disabled:opacity-50"
                    disabled={!newCommentText.trim()}
                 >
                     <Send size={16} />
                 </button>
             </div>
         </div>

         {/* CONCLUSION MODAL */}
         {selectedConclusion && (
            <div className="absolute inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-6 animate-in zoom-in-95 duration-200 pointer-events-auto">
                <div className={`bg-gradient-to-br ${selectedConclusion.color} rounded-3xl p-1 shadow-2xl max-w-sm w-full relative`}>
                    <div className="bg-black/40 h-full w-full rounded-[20px] p-6 backdrop-blur-sm">
                        <button 
                            onClick={() => setSelectedConclusion(null)}
                            className="absolute top-4 right-4 text-white/70 hover:text-white bg-black/20 rounded-full p-1"
                        >
                            <X size={20} />
                        </button>
                        
                        <h3 className="text-2xl font-black mb-4 leading-tight border-b border-white/20 pb-4">
                            {selectedConclusion.title}
                        </h3>
                        
                        <p className="text-lg leading-relaxed font-light">
                            {selectedConclusion.detail}
                        </p>

                        <div className="mt-6 flex justify-center">
                            <button 
                                onClick={() => setSelectedConclusion(null)}
                                className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform"
                            >
                                Entendido
                            </button>
                        </div>
                    </div>
                </div>
            </div>
         )}

         <TikTokOverlay 
          author="comunidad_politica" 
          description="💡 Estas son las conclusiones clave. ¿Qué opinas tú? Déjalo abajo 👇"
          tags={['conclusiones', 'debate', 'fin']}
          likes="5.2M"
          comments={`${comments.length}`}
          shares="50k"
        />
      </section>
    </div>
  );
};

export default App;