import { useState } from 'react';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';

const ImageGallery = ({ images }: { images: string[] | string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const imageArray = Array.isArray(images) ? images : [images];
  const hasMultipleImages = imageArray.length > 1;

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % imageArray.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + imageArray.length) % imageArray.length
    );
  };

  return (
    <>
      <div className="relative mt-4 rounded-lg overflow-hidden">
        <div className="w-full aspect-video bg-zinc-950 flex items-center justify-center overflow-hidden">
          <img
            src={imageArray[currentIndex]}
            alt="Imagem do projeto"
            className="max-w-full max-h-full object-contain cursor-zoom-in"
            onClick={() => setIsModalOpen(true)}
          />
        </div>

        {hasMultipleImages && (
          <>
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-colors"
              aria-label="Imagem anterior"
            >
              <LuChevronLeft size={20} />
            </button>

            <button
              onClick={nextImage}
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-colors"
              aria-label="Próxima imagem"
            >
              <LuChevronRight size={20} />
            </button>

            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
              {imageArray.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-white' : 'bg-white/40'
                  }`}
                  aria-label={`Ver imagem ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setIsModalOpen(false)}
        >
          <img
            src={imageArray[currentIndex]}
            alt="Imagem ampliada"
            className="max-w-full max-h-full sm:max-w-[90vw] sm:max-h-[90vh] object-contain cursor-zoom-out"
          />
        </div>
      )}
    </>
  );
};

export default ImageGallery;
