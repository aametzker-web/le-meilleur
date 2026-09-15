import React, { useEffect, useState } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { Logo } from '../ui/Logo';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import {
  fadeUpVariant,
  staggerContainerVariant,
} from '../motion/MotionVariants';

interface HeroProps {
  hasLoaded?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ hasLoaded = true }) => {
  const { t, language, setLanguage } = useLanguage();
  const [isDesktop, setIsDesktop] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  const glowX = useTransform(smoothX, [-0.5, 0.5], [-25, 25]);
  const glowY = useTransform(smoothY, [-0.5, 0.5], [-18, 18]);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 768px)');

    const update = () => setIsDesktop(media.matches);

    update();
    media.addEventListener('change', update);

    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX / window.innerWidth - 0.5);
      mouseY.set(event.clientY / window.innerHeight - 0.5);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDesktop, mouseX, mouseY]);

  return (
    <section
      className="
        relative
        flex
        min-h-[100svh]
        w-full
        min-w-0
        items-center
        justify-center
        overflow-hidden
        px-4
        py-8
        sm:px-6
        sm:py-10
        md:px-10
        md:py-12
        lg:px-16
      "
    >
      {/* Language switch */}

      <div
        className="
          absolute
          right-4
          top-4
          z-30
          sm:right-6
          sm:top-6
          md:right-10
          md:top-8
          lg:right-16
          lg:top-8
        "
      >
        <div
          className="
            flex
            items-center
            rounded-full
            bg-white/[0.035]
            p-1
            backdrop-blur-xl
            shadow-[0_8px_30px_rgba(139,59,242,0.08)]
          "
        >
          <button
            type="button"
            onClick={() => setLanguage('ru')}
            className={`
              rounded-full
              px-2.5
              py-1.5
              font-mono
              text-[8px]
              uppercase
              tracking-[0.16em]
              transition-all
              duration-300
              sm:px-3
              sm:text-[9px]
              ${
                language === 'ru'
                  ? 'bg-brand-lavender-300/[0.10] text-brand-lavender-100 shadow-[0_0_18px_rgba(216,180,254,0.08)]'
                  : 'text-brand-lavender-100/35 hover:text-brand-lavender-100/70'
              }
            `}
          >
            RU
          </button>

          <span className="mx-0.5 h-3 w-px bg-brand-lavender-300/[0.08]" />

          <button
            type="button"
            onClick={() => setLanguage('en')}
            className={`
              rounded-full
              px-2.5
              py-1.5
              font-mono
              text-[8px]
              uppercase
              tracking-[0.16em]
              transition-all
              duration-300
              sm:px-3
              sm:text-[9px]
              ${
                language === 'en'
                  ? 'bg-brand-lavender-300/[0.10] text-brand-lavender-100 shadow-[0_0_18px_rgba(216,180,254,0.08)]'
                  : 'text-brand-lavender-100/35 hover:text-brand-lavender-100/70'
              }
            `}
          >
            EN
          </button>
        </div>
      </div>

      {/* Ambient atmosphere */}

      <motion.div
        style={isDesktop ? { x: glowX, y: glowY } : undefined}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          -z-10
          h-[200px]
          w-[240px]
          -translate-x-1/2
          -translate-y-1/2
          radial-glow-violet
          opacity-35
          sm:h-[280px]
          sm:w-[420px]
          lg:h-[380px]
          lg:w-[640px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          -z-10
          h-[150px]
          w-[180px]
          -translate-x-1/2
          -translate-y-1/2
          radial-glow-lavender
          opacity-15
          sm:h-[220px]
          sm:w-[300px]
          lg:h-[280px]
          lg:w-[460px]
        "
      />

      {/* Subtle grid */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-20
          opacity-[0.25]
          bg-[radial-gradient(rgba(216,180,254,0.055)_1px,transparent_1px)]
          [background-size:28px_28px]
        "
      />

      {/* Main composition */}

      <motion.div
        variants={staggerContainerVariant}
        initial="hidden"
        animate={hasLoaded ? 'visible' : 'hidden'}
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          min-w-0
          max-w-4xl
          -translate-y-2
          flex-col
          items-center
          justify-center
          text-center
          sm:-translate-y-2
          md:max-w-5xl
          md:-translate-y-3
          lg:max-w-6xl
          lg:-translate-y-3
        "
      >
        {/* Discipline */}

        <motion.div
          variants={fadeUpVariant}
          className="mb-3 sm:mb-4 md:mb-5"
        >
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-brand-lavender-300/15
              bg-white/[0.035]
              px-3
              py-1.5
              backdrop-blur-xl
              shadow-[0_6px_25px_rgba(139,59,242,0.07)]
              md:px-3.5
              md:py-2
            "
          >
            <span className="relative flex h-1.5 w-1.5 shrink-0 md:h-2 md:w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-lavender-300 opacity-40" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-lavender-300 md:h-2 md:w-2" />
            </span>

            <span
              className="
                font-mono
                text-[8px]
                uppercase
                tracking-[0.2em]
                text-brand-lavender-200/80
                sm:text-[9px]
                md:text-[10px]
              "
            >
              {t.hero.disciplines}
            </span>
          </div>
        </motion.div>

        {/* Crystal emblem */}

        <motion.div
          variants={fadeUpVariant}
          className="
            relative
            mb-3
            flex
            w-full
            items-center
            justify-center
            sm:mb-4
            md:mb-5
          "
        >
          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-32
              w-32
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-brand-violet-500/10
              blur-3xl
              sm:h-40
              sm:w-40
              md:h-48
              md:w-48
            "
          />

          <motion.div
            animate={{ y: [-2, 2, -2] }}
            transition={{
              duration: 6,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
            className="
              relative
              flex
              shrink-0
              items-center
              justify-center
              overflow-hidden
              rounded-[1.3rem]
              border
              border-white/[0.11]
              bg-white/[0.03]
              p-3
              backdrop-blur-2xl
              shadow-[0_14px_45px_rgba(114,38,196,0.18)]
              sm:rounded-[1.5rem]
              sm:p-3.5
              md:rounded-[1.6rem]
              md:p-4
            "
          >
            {/* Glass reflection */}

            <motion.div
              animate={{ x: ['-120%', '120%'] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatDelay: 3,
                ease: 'easeInOut',
              }}
              className="
                pointer-events-none
                absolute
                bottom-0
                top-0
                w-12
                -skew-x-12
                bg-gradient-to-r
                from-transparent
                via-white/[0.06]
                to-transparent
                md:w-16
              "
            />

            {/* Inner glass border */}

            <div
              className="
                pointer-events-none
                absolute
                inset-[1px]
                rounded-[1.2rem]
                border
                border-brand-lavender-300/[0.06]
                md:rounded-[1.4rem]
              "
            />

            <Logo
              size="xl"
              variant="monogram"
              interactive
            />

            {/* Top reflection */}

            <div
              className="
                pointer-events-none
                absolute
                left-[18%]
                right-[18%]
                top-0
                h-px
                bg-gradient-to-r
                from-transparent
                via-white/25
                to-transparent
              "
            />
          </motion.div>
        </motion.div>

        {/* Headline */}

        <motion.div
          variants={fadeUpVariant}
          className="
            relative
            w-full
            px-2
            sm:px-4
          "
        >
          <div
            className="
              pointer-events-none
              absolute
              -inset-x-12
              -inset-y-5
              -z-10
              bg-brand-violet-500/[0.035]
              blur-2xl
              md:-inset-x-24
              md:-inset-y-8
            "
          />

          <h1
            className="
              mx-auto
              max-w-full
              break-words
              font-display
              text-[2rem]
              font-extrabold
              uppercase
              leading-[0.92]
              tracking-[-0.045em]
              text-gradient-lavender
              sm:text-4xl
              md:max-w-5xl
              md:text-6xl
              lg:text-7xl
              xl:text-[5rem]
            "
          >
            {t.hero.title}
          </h1>

          <div
            className="
              mt-2
              flex
              items-center
              justify-center
              gap-2
              sm:mt-2.5
              md:mt-3
              md:gap-3
            "
          >
            <span className="h-px w-5 bg-brand-lavender-300/20 sm:w-7 md:w-10" />

            <p
              className="
                font-mono
                text-[8px]
                uppercase
                tracking-[0.2em]
                text-brand-lavender-300/70
                sm:text-[10px]
                sm:tracking-[0.25em]
                md:text-xs
              "
            >
              {t.hero.subtitle}
            </p>

            <span className="h-px w-5 bg-brand-lavender-300/20 sm:w-7 md:w-10" />
          </div>
        </motion.div>

        {/* Supporting statement */}

        <motion.p
          variants={fadeUpVariant}
          className="
            mt-3
            max-w-md
            px-5
            text-[10px]
            font-light
            leading-[1.45]
            text-brand-lavender-100/60
            sm:mt-4
            sm:text-xs
            md:mt-5
            md:max-w-2xl
            md:px-0
            md:text-sm
            lg:text-base
          "
        >
          {t.hero.tagline}
        </motion.p>

        {/* Instagram CTA */}

        <motion.div
          variants={fadeUpVariant}
          className="
            mt-4
            sm:mt-5
            md:mt-6
          "
        >
          <a
            href="https://www.instagram.com/lemeilleurdigital"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              relative
              inline-flex
              items-center
              gap-2.5
              rounded-full
              border
              border-transparent
              bg-white/[0.045]
              px-3.5
              py-2
              font-mono
              text-[9px]
              uppercase
              tracking-[0.18em]
              text-brand-lavender-100
              backdrop-blur-xl
              shadow-[0_7px_25px_rgba(139,59,242,0.1)]
              transition-all
              duration-300
              hover:bg-brand-lavender-300/[0.08]
              hover:shadow-[0_8px_30px_rgba(139,59,242,0.22)]
              active:scale-[0.97]
              md:gap-3
              md:px-4
              md:py-2.5
              md:text-[10px]
            "
          >
            {/* Instagram icon */}

            <span
              className="
                relative
                flex
                h-3.5
                w-3.5
                items-center
                justify-center
                rounded-[4px]
                border
                border-brand-lavender-300/55
                transition-transform
                duration-300
                group-hover:rotate-[-8deg]
                md:h-4
                md:w-4
              "
            >
              <span
                className="
                  h-[5px]
                  w-[5px]
                  rounded-full
                  border
                  border-brand-lavender-300/55
                  md:h-[6px]
                  md:w-[6px]
                "
              />

              <span
                className="
                  absolute
                  right-[2px]
                  top-[2px]
                  h-[2px]
                  w-[2px]
                  rounded-full
                  bg-brand-lavender-300/70
                "
              />
            </span>

            <span>{t.contact.instagram}</span>

            <ArrowUpRight
              size={12}
              strokeWidth={1.5}
              className="
                text-brand-lavender-300/50
                transition-all
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
                group-hover:text-white
                md:h-[14px]
                md:w-[14px]
              "
            />

            {/* Glass shimmer */}

            <span
              className="
                pointer-events-none
                absolute
                inset-0
                rounded-full
                bg-gradient-to-r
                from-transparent
                via-white/[0.05]
                to-transparent
                opacity-0
                transition-opacity
                duration-300
                group-hover:opacity-100
              "
            />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}

      <motion.a
        href="#studio"
        initial={{ opacity: 0 }}
        animate={{ opacity: hasLoaded ? 1 : 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="
          group
          absolute
          bottom-5
          left-1/2
          z-20
          flex
          -translate-x-1/2
          flex-col
          items-center
          gap-1.5
          text-center
          sm:bottom-7
          md:bottom-8
        "
      >
        <span
          className="
            font-mono
            text-[7px]
            uppercase
            tracking-[0.28em]
            text-brand-lavender-100/30
            transition-colors
            duration-300
            group-hover:text-brand-lavender-100/60
            sm:text-[8px]
          "
        >
          {language === 'ru' ? 'Листайте вниз' : 'Scroll down'}
        </span>

        <motion.span
          animate={{ y: [0, 4, 0] }}
          transition={{
            duration: 1.8,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
          className="
            flex
            h-6
            w-6
            items-center
            justify-center
            rounded-full
            bg-white/[0.025]
            text-brand-lavender-300/40
            backdrop-blur-sm
            transition-colors
            duration-300
            group-hover:bg-brand-lavender-300/[0.06]
            group-hover:text-brand-lavender-300/70
            sm:h-7
            sm:w-7
          "
        >
          <ChevronDown
            size={12}
            strokeWidth={1.4}
            className="sm:h-[13px] sm:w-[13px]"
          />
        </motion.span>
      </motion.a>
    </section>
  );
};