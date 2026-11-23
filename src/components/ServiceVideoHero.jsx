import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Loader2, AlertCircle } from 'lucide-react';
import { getServiceAnimationAsset } from '../services/animationAssetManager';

/**
 * ServiceVideoHero
 * Seamlessly integrates backend asset retrieval, video playback, loading states,
 * and reliable fallback to the original high-resolution card asset with visual motion.
 */
export default function ServiceVideoHero({ 
  serviceKey, 
  poster, 
  title, 
  fallbackOverlay = null,
  imageMotionStyle = null
}) {
  const [assetConfig, setAssetConfig] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [videoAvailable, setVideoAvailable] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  // 1. Fetch asset metadata from backend/API manager
  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    setHasError(false);

    getServiceAnimationAsset(serviceKey)
      .then((asset) => {
        if (!isMounted) return;
        setAssetConfig(asset);
        // Test whether video file actually exists and can be loaded
        if (asset?.videoUrl) {
          const testVideo = document.createElement('video');
          testVideo.src = asset.videoUrl;
          testVideo.oncanplay = () => {
            if (isMounted) {
              setVideoAvailable(true);
              setIsLoading(false);
            }
          };
          testVideo.onerror = () => {
            if (isMounted) {
              // Video file not yet uploaded / 404, gracefully activate visual fallback
              setVideoAvailable(false);
              setIsLoading(false);
            }
          };
        } else {
          setVideoAvailable(false);
          setIsLoading(false);
        }
      })
      .catch(() => {
        if (!isMounted) return;
        setHasError(true);
        setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [serviceKey]);

  const togglePlayback = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const activePoster = assetConfig?.poster || poster;

  return (
    <div className="relative w-full h-full min-h-[260px] sm:min-h-[320px] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 flex items-center justify-center group">
      
      {/* 1. REAL ANIMATED VIDEO PLAYBACK (Autoplay, Loop, Muted, PlaysInline) */}
      {videoAvailable && assetConfig?.videoUrl ? (
        <motion.video
          ref={videoRef}
          src={assetConfig.videoUrl}
          poster={activePoster}
          autoPlay
          loop
          muted
          playsInline
          style={imageMotionStyle || {}}
          className="w-full h-full object-cover object-center relative z-0"
        />
      ) : (
        /* 2. HIGH-FIDELITY INTERACTIVE VISUAL FALLBACK BASED ON EXACT CARD IMAGE */
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          {/* Exact source picture */}
          <motion.img
            src={activePoster}
            alt={title}
            style={imageMotionStyle || {}}
            className="w-full h-full object-cover object-center opacity-95 scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />

          {/* Interactive motion overlay for the specific service */}
          {fallbackOverlay}
        </div>
      )}

      {/* Loading state indicator */}
      {isLoading && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-white/80 backdrop-blur-xs">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200 text-xs font-semibold text-[#0866E8] shadow-md">
            <Loader2 className="w-4 h-4 animate-spin text-[#0866E8]" />
            <span>Loading Asset...</span>
          </div>
        </div>
      )}

      {/* Video controls toggle when real video is active */}
      {videoAvailable && !isLoading && (
        <button
          onClick={togglePlayback}
          className="absolute bottom-3 right-3 z-30 p-2 rounded-full bg-white/90 hover:bg-white text-[#082B59] backdrop-blur-md border border-slate-200 transition-all opacity-0 group-hover:opacity-100 shadow-md cursor-pointer"
          title={isPlaying ? "Pause Video" : "Play Video"}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-[#082B59]" />}
        </button>
      )}
    </div>
  );
}
