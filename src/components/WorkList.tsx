import Autoplay from 'embla-carousel-autoplay';
import { useEffect, useState } from 'react';
import { LuExternalLink, LuGithub, LuImagePlus } from 'react-icons/lu';
import ImageGallery from './ImageGallery';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from './ui/carousel';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';

import worksData from '../data/works.json';

const WorkList = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const autoplayOptions = {
    delay: 4000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  };

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="space-y-4">
      <Carousel
        setApi={setApi}
        plugins={[Autoplay(autoplayOptions)]}
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full select-none"
      >
        <CarouselContent className="py-4">
          {worksData.map((work) => {
            const hasMultipleImages =
              Array.isArray(work.url) && work.url.length > 1;
            const thumbnailUrl = Array.isArray(work.url)
              ? work.url[0]
              : work.url;

            return (
              <CarouselItem
                key={work.id}
                className="md:basis-1/2 w-full xl:basis-1/3 pt-6"
              >
                <div className="p-1 h-full">
                  <Card className="bg-zinc-900/50 shadow-xl rounded-2xl overflow-hidden border border-zinc-800/50 transition-all duration-300 hover:shadow-2xl hover:translate-y-[-5px] h-full flex flex-col">
                    <CardContent className="p-0 flex flex-col flex-grow w-full h-full">
                      <Dialog>
                        <DialogTrigger className="w-full">
                          <div className="relative overflow-hidden h-56">
                            <img
                              src={thumbnailUrl}
                              className="w-full h-56 cursor-pointer object-cover transition-transform duration-500 hover:scale-105"
                              alt={work.title}
                            />
                            {hasMultipleImages && (
                              <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md flex items-center">
                                <LuImagePlus size={14} className="mr-1" />
                                {Array.isArray(work.url) ? work.url.length : 1}
                              </div>
                            )}
                          </div>
                        </DialogTrigger>
                        <DialogContent className="bg-zinc-900 border border-zinc-800 max-w-3xl">
                          <DialogTitle className="text-2xl font-bold text-white mb-2">
                            {work.title}
                          </DialogTitle>
                          <DialogDescription className="text-zinc-300">
                            {work.description}
                          </DialogDescription>
                          <div className="flex flex-wrap gap-2 my-3">
                            {work.badgeList.map((badge) => (
                              <Badge
                                key={badge.id}
                                variant="outline"
                                className="bg-zinc-800 text-zinc-100 border-zinc-700"
                              >
                                {badge.name}
                              </Badge>
                            ))}
                          </div>

                          <ImageGallery images={work.url} />

                          <div className="flex gap-2 mt-4 justify-end">
                            <Button
                              variant="outline"
                              className="border-zinc-700 hover:bg-zinc-800 hover:text-white mx-auto md:mx-0"
                            >
                              <a
                                href={work.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center"
                              >
                                <LuGithub className="mr-2" size={18} />
                                Ver no GitHub
                              </a>
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>

                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold mb-2 text-white">
                          {work.title}
                        </h3>
                        <p className="text-zinc-300 text-sm mb-4 line-clamp-2 h-10">
                          {work.description || ''}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {work.badgeList.map((badge) => (
                            <Badge
                              key={badge.id}
                              variant="outline"
                              className="bg-zinc-800 text-zinc-200 border-zinc-700 rounded-full"
                            >
                              {badge.name}
                            </Badge>
                          ))}
                        </div>
                        <div className="mt-auto pt-4">
                          <Button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white border-none transition-colors duration-300">
                            <a
                              href={work.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center w-full"
                            >
                              Ver Projeto
                              <LuExternalLink className="ml-2" size={16} />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        <div className="flex items-center justify-evenly gap-8 lg:mt-4 mt-8">
          <CarouselPrevious className="static transform-none bg-zinc-800 hover:bg-zinc-700 border-zinc-700 text-white md:absolute" />
          <div className="gap-1 hidden md:flex">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                className={`block h-2 w-2 rounded-full transition-colors ${
                  i === current ? 'bg-white' : 'bg-zinc-600'
                }`}
                onClick={() => api?.scrollTo(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <CarouselNext className="static transform-none bg-zinc-800 hover:bg-zinc-700 border-zinc-700 text-white md:absolute" />
        </div>
      </Carousel>
    </div>
  );
};

export default WorkList;
