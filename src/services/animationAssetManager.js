/**
 * Service Animation Asset Manager
 * Handles backend/API integration, caching, asset retrieval, and static fallbacks
 * for Kuber AIS Technologies service card animations.
 */

// In-memory cache to prevent redundant network fetches
const assetCache = new Map();

/**
 * Retrieve animation asset configuration for a specific service.
 * @param {string} serviceKey - 'business-automation' | 'cyber-security' | 'film-production'
 * @returns {Promise<Object>} Asset metadata with videoUrl, poster, status, etc.
 */
export async function getServiceAnimationAsset(serviceKey) {
  // Normalize key (handle aliases)
  const normalizedKey = serviceKey === 'ai-services' 
    ? 'business-automation' 
    : serviceKey === 'ai-films' 
    ? 'film-production' 
    : serviceKey;

  // 1. Check in-memory cache
  if (assetCache.has(normalizedKey)) {
    return assetCache.get(normalizedKey);
  }

  try {
    // 2. Fetch manifest from backend API endpoint
    const response = await fetch('/api/service-assets', {
      headers: { 'Accept': 'application/json' },
      cache: 'force-cache'
    });

    if (!response.ok) {
      throw new Error(`Failed to load asset manifest: ${response.status}`);
    }

    const data = await response.json();
    const asset = data?.assets?.[normalizedKey];

    if (!asset) {
      throw new Error(`Asset not found for service: ${normalizedKey}`);
    }

    // Cache the result
    assetCache.set(normalizedKey, asset);
    return asset;
  } catch (error) {
    console.warn(`[AssetManager] Falling back to default asset config for ${normalizedKey}:`, error.message);

    // 3. Resilient fallback mapping (guarantees UI never breaks)
    const fallbackAssets = {
      'business-automation': {
        id: 'business-automation',
        serviceTitle: 'Business Automation',
        poster: '/assets/ai-services.webp',
        videoUrl: '/assets/videos/business-automation.mp4',
        videoType: 'video/mp4',
        animationDescription: 'Animated original AI brain, neural network flow, and laptop dashboard interface.',
        hasGeneratedVideo: false
      },
      'cyber-security': {
        id: 'cyber-security',
        serviceTitle: 'Cyber Security',
        poster: '/assets/cybersecurity-2023-social_uvx3rt.png',
        videoUrl: '/assets/videos/cyber-security.mp4',
        videoType: 'video/mp4',
        animationDescription: 'Animated original security lock, laser scanner sweep, and cybersecurity shield interface.',
        hasGeneratedVideo: false
      },
      'film-production': {
        id: 'film-production',
        serviceTitle: 'Film Production',
        poster: '/assets/ai-film-studio-hero.webp',
        videoUrl: '/assets/videos/film-production.mp4',
        videoType: 'video/mp4',
        animationDescription: 'Animated original camera, virtual studio set, and cinematic spotlight sweeps.',
        hasGeneratedVideo: false
      }
    };

    const fallback = fallbackAssets[normalizedKey] || fallbackAssets['business-automation'];
    assetCache.set(normalizedKey, fallback);
    return fallback;
  }
}

/**
 * Pre-cache all service assets ahead of time for instantaneous modal opening.
 */
export async function prefetchServiceAssets() {
  try {
    const keys = ['business-automation', 'cyber-security', 'film-production'];
    await Promise.all(keys.map(k => getServiceAnimationAsset(k)));
  } catch (e) {
    // Non-blocking
  }
}
