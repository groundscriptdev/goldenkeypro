'use client';

import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { imageOptimization, createIntersectionObserver, animationOptimization } from '@/lib/performance';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes,
  quality = 80,
  placeholder = 'blur',
  blurDataURL,
  onLoad,
  onError,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Generate responsive image sources
  const generateSrcSet = () => {
    if (!width) return undefined;
    
    const sizes = [width, width * 2]; // 1x and 2x
    return sizes
      .map(size => `${src}?w=${size}&q=${quality} ${size}w`)
      .join(', ');
  };

  // Generate placeholder image
  const getPlaceholder = () => {
    if (placeholder === 'blur') {
      if (blurDataURL) return blurDataURL;
      if (width && height) {
        return imageOptimization.generatePlaceholder(width, height);
      }
    }
    return undefined;
  };

  // Set up intersection observer for lazy loading
  useEffect(() => {
    if (priority || !imgRef.current) return;

    observerRef.current = createIntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          observerRef.current?.disconnect();
        }
      },
      { rootMargin: '200px' } // Start loading 200px before it comes into view
    );

    if (imgRef.current && observerRef.current) {
      observerRef.current.observe(imgRef.current);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [priority]);

  // Handle image load
  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  // Handle image error
  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Default image dimensions
  const imageWidth = width || 800;
  const imageHeight = height || 600;

  // Calculate aspect ratio for responsive images
  const aspectRatio = imageHeight / imageWidth;
  const paddingBottom = height ? undefined : `${aspectRatio * 100}%`;

  return (
    <div
      ref={imgRef}
      className={cn(
        'relative overflow-hidden',
        !height && 'w-full',
        className
      )}
      style={{ paddingBottom }}
    >
      {/* Placeholder */}
      {placeholder && !isLoaded && (
        <div
          className="absolute inset-0 bg-gray-100"
          style={{
            backgroundImage: getPlaceholder() ? `url(${getPlaceholder()})` : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(20px)',
            transform: 'scale(1.1)',
          }}
        />
      )}

      {/* Actual image */}
      {isInView && !hasError && (
        <img
          src={src}
          alt={alt}
          width={imageWidth}
          height={imageHeight}
          srcSet={generateSrcSet()}
          sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
          loading={priority ? 'eager' : 'lazy'}
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-opacity duration-300',
            isLoaded ? 'opacity-100' : 'opacity-0'
          )}
        />
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
            <path
              d="M21 15L16 10L5 21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="ml-2 text-sm">Failed to load image</span>
        </div>
      )}

      {/* Loading indicator */}
      {priority && !isLoaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="w-8 h-8 border-2 border-jade-green/30 border-t-jade-green rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
}

// Optimized background image component
interface OptimizedBackgroundImageProps {
  src: string;
  className?: string;
  children?: React.ReactNode;
  priority?: boolean;
  quality?: number;
  overlayColor?: string;
  overlayOpacity?: number;
}

export function OptimizedBackgroundImage({
  src,
  className,
  children,
  priority = false,
  quality = 80,
  overlayColor = '#000000',
  overlayOpacity = 0.4,
}: OptimizedBackgroundImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle image load
  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Handle image error
  const handleError = () => {
    setHasError(true);
  };

  useEffect(() => {
    if (!containerRef.current) return;

    // Create background image element
    const img = new Image();
    img.src = `${src}?w=1920&q=${quality}`;
    
    img.onload = handleLoad;
    img.onerror = handleError;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, quality]);

  return (
    <div
      ref={containerRef}
      className={cn('relative w-full h-full', className)}
    >
      {/* Background image */}
      {!hasError && (
        <div
          className={cn(
            'absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500',
            isLoaded ? 'opacity-100' : 'opacity-0'
          )}
          style={{ backgroundImage: `url(${src}?w=1920&q=${quality})` }}
        />
      )}

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: overlayColor,
          opacity: overlayOpacity,
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
}

// Picture component for art direction
interface OptimizedPictureProps {
  sources: {
    srcSet: string;
    media?: string;
    type?: string;
  }[];
  fallbackSrc: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  onLoad?: () => void;
  onError?: () => void;
}

export function OptimizedPicture({
  sources,
  fallbackSrc,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes,
  quality = 80,
  onLoad,
  onError,
}: OptimizedPictureProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Set up intersection observer for lazy loading
  useEffect(() => {
    if (priority || !imgRef.current) return;

    observerRef.current = createIntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          // Load the image when it comes into view
          if (imgRef.current) {
            imgRef.current.src = imgRef.current.dataset.src || '';
          }
          observerRef.current?.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    if (imgRef.current && observerRef.current) {
      observerRef.current.observe(imgRef.current);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [priority]);

  // Handle image load
  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  // Handle image error
  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Default image dimensions
  const imageWidth = width || 800;
  const imageHeight = height || 600;

  return (
    <picture className={cn('block w-full', className)}>
      {sources.map((source, index) => (
        <source
          key={index}
          srcSet={source.srcSet}
          media={source.media}
          type={source.type}
        />
      ))}
      
      <img
        ref={imgRef}
        src={priority ? fallbackSrc : ''}
        data-src={!priority ? fallbackSrc : undefined}
        alt={alt}
        width={imageWidth}
        height={imageHeight}
        sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={handleLoad}
        onError={handleError}
        className={cn(
          'w-full h-auto object-cover transition-opacity duration-300',
          isLoaded ? 'opacity-100' : 'opacity-0'
        )}
      />
      
      {/* Error state */}
      {hasError && (
        <div className="flex items-center justify-center w-full h-full bg-gray-100 text-gray-400" style={{ aspectRatio: `${imageWidth}/${imageHeight}` }}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
            <path
              d="M21 15L16 10L5 21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="ml-2 text-sm">Failed to load image</span>
        </div>
      )}
    </picture>
  );
}