import React from 'react';
import { Heart, MessageCircle, Share2, Music, User } from 'lucide-react';

interface TikTokOverlayProps {
  author: string;
  description: string;
  tags: string[];
  likes: string;
  comments: string;
  shares: string;
}

const TikTokOverlay: React.FC<TikTokOverlayProps> = ({
  author,
  description,
  tags,
  likes,
  comments,
  shares
}) => {
  return (
    <div className="absolute inset-0 pointer-events-none z-20 flex flex-col justify-between p-4 pb-16 md:pb-4">
      {/* Top Bar */}
      <div className="flex justify-center pt-4 opacity-80 text-sm font-bold">
        <span className="mr-4 text-gray-400">Siguiendo</span>
        <span className="text-white border-b-2 border-white pb-1">Para ti</span>
      </div>

      {/* Right Sidebar Action Buttons */}
      <div className="absolute right-2 bottom-20 flex flex-col items-center space-y-6 pointer-events-auto">
        <div className="relative">
          <div className="w-12 h-12 bg-white rounded-full p-0.5 overflow-hidden border-2 border-white">
            <img src={`https://picsum.photos/seed/${author}/100/100`} alt="profile" className="w-full h-full object-cover rounded-full" />
          </div>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-red-500 rounded-full p-0.5">
            <div className="w-4 h-4 flex items-center justify-center text-[10px] font-bold">+</div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <Heart className="w-8 h-8 text-white drop-shadow-lg" fill="white" />
          <span className="text-xs font-bold drop-shadow-md">{likes}</span>
        </div>

        <div className="flex flex-col items-center">
          <MessageCircle className="w-8 h-8 text-white drop-shadow-lg" fill="white" />
          <span className="text-xs font-bold drop-shadow-md">{comments}</span>
        </div>

        <div className="flex flex-col items-center">
          <Share2 className="w-8 h-8 text-white drop-shadow-lg" fill="white" />
          <span className="text-xs font-bold drop-shadow-md">{shares}</span>
        </div>
        
        <div className="animate-[spin_4s_linear_infinite]">
             <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center border-4 border-gray-900">
                <Music size={16} />
             </div>
        </div>
      </div>

      {/* Bottom Information */}
      <div className="flex flex-col items-start w-3/4 pointer-events-auto mb-4">
        <h3 className="font-bold text-lg drop-shadow-md">@{author}</h3>
        <p className="text-sm line-clamp-2 drop-shadow-md mb-2 leading-tight">
          {description}
        </p>
        <p className="text-sm font-bold drop-shadow-md text-blue-400 mb-2">
          {tags.map(tag => `#${tag} `)}
        </p>
        
        <div className="flex items-center space-x-2 opacity-90 overflow-hidden w-48">
          <Music size={14} />
          <div className="text-xs whitespace-nowrap animate-ticker">
            Senra-Silva, Moguer-Terol & Cristòfol - Sonido Original Análisis Político •
          </div>
        </div>
      </div>
    </div>
  );
};

export default TikTokOverlay;