import React, { useState, useEffect } from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallback?: string;
  className?: string;
  lazyLoad?: boolean;
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  fallback = '/images/tech-wings.bg.png',
  className = '',
  lazyLoad = true,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(lazyLoad ? fallback : src);
  const [isLoaded, setIsLoaded] = useState(!lazyLoad);

  useEffect(() => {
    if (lazyLoad) {
      // Usando Intersection Observer para carregar imagens apenas quando visíveis
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setImgSrc(src);
            observer.disconnect();
          }
        });
      }, { rootMargin: '200px 0px' });

      // Encontra o elemento DOM para observar
      const imgElement = document.querySelector(`img[data-src="${src}"]`);
      if (imgElement) {
        observer.observe(imgElement);
      }

      return () => {
        if (imgElement) {
          observer.unobserve(imgElement);
        }
        observer.disconnect();
      };
    }
  }, [src, lazyLoad]);

  return (
    <img
      src={imgSrc}
      data-src={src}
      alt={alt}
      className={`transition-opacity duration-300 ${!isLoaded ? 'opacity-0' : 'opacity-100'} ${className}`}
      onLoad={() => setIsLoaded(true)}
      onError={() => {
        setImgSrc(fallback);
        setIsLoaded(true);
      }}
      loading={lazyLoad ? "lazy" : "eager"}
      {...props}
    />
  );
};
