import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const carouselImages = [
  'WOW 2019 RECAP card.png',
  'WHF_Shootequipment.png',
  'WHF_SFC_Mikeepps2.jpg',
  'WHF_SFC_Mikeepps.jpg',
  'WHF_SFC_DanceBattle.png',
  'WHF_SFC_2Juvenile1.jpg',
  'WHF_SFC_2chainz.jpg',
  'WHF_SFC tablet.png',
  'WHF_NextEdit.png',
  'WHF_MackWilds.png',
  'WHF_MMGatSirius.png',
  'WHF_MMG_Edit.png',
  'WHF_MIB3_Edit.png',
  'WHF_LatoyaLucketPlay.png',
  'WHF_Keyboard_1.png',
  'WHF_Keenan.png',
  'WHF_KdotSFCopen.png',
  'WHF_Crew2.jpg',
  'WHF_Crew1.jpg',
  'WHF_ChuckandBootsie.png',
  'WHF_ChuckLive.png',
  'WHF_ChuckDJSFC.png',
  'WHF_ChuckBMCC.png',
  'WHF LOGO ANIM.gif'
];

const projects = [
  {
    category: 'Docs & Series',
    items: [
      {
        src: '/Thumbs/TOT_BMI_thumb.png',
        link: 'https://www.youtube.com/watch?v=vio2cfps5PY',
        alt: 'Inside Royal Studios with Soul Legend Al Green',
      },{
        src: '/Thumbs/TOT_Thumb.png',
        link: 'https://www.youtube.com/watch?v=MdymD8jlaBE&t=8s',
        alt: 'Tale of the Tape',
      },
      {
        src: '/Thumbs/DDD_Thumb.png',
        link: 'https://f.io/cSZ274lF',
        alt: "Demario’s Devoted Dreamers",
      },
      {
        src: '/Thumbs/HipHouse_Thumb.png',
        link: 'https://www.youtube.com/watch?v=ysSQ16gkS1c',
        alt: 'In Our DNA: Hip House',
      },
      {
        title: 'Smoke: Marijuana + Black America',
        thumbnail: 'Smoke_Thumb.png',
        link: 'https://www.youtube.com/watch?v=MG-wuUMnnGM',
        extraClass: 'col-span-1',
      },
    ],
  },
  {
    category: 'Branded Content',
    items: [
      {
        src: '/Thumbs/Cheetos_thumb.png',
        link: 'https://f.io/HgsoPVFa',
        alt: 'Cheetos Rap Boyz',
      },
      {
        src: '/Thumbs/RMProducerSer_thumb.png',
        link: 'https://f.io/amjaKzdF',
        alt: 'Live Nation Presents:Remy Martin Producer Series Season 5',
      },
      {
        src: '/Thumbs/DDBS-Essence_Thumb.png',
        link: 'https://f.io/vmK_C9yr',
        alt: 'INSIDE ESSENCE:Conversation with Dapper Dan &  Bevy Smith',
      },
      {
        title: 'Rule Model Queens',
        thumbnail: 'BKRMQ_thumb.png',
        link: 'https://f.io/o_H4fdfD',
        extraClass: 'col-span-1',
      },
    ],
  },
  {
    category: 'News Specials',
    items: [
      {
        src: '/Thumbs/BeyondLimits_Thumb.png',
        link: 'https://f.io/d_AUTAYo',
        alt: 'BEYOND LIMITS : THIS IS FOOTBALL (TRAILER)',
      },
      {
        src: '/Thumbs/NABJ_CBS_thumb.png',
        link: 'https://f.io/hXXI7v9G',
        alt: 'NABJ Post Floyd Moments',
      },
      {
        src: '/Thumbs/BeyondLimits_Thumb.png',
        link: 'https://f.io/8fnKAjle',
        alt: 'BEYOND LIMITS : THIS IS FOOTBALL (Segment)',
      },
    ],
  },
  {
    category: 'Social Media',
    items: [
      {
        src: '/Thumbs/SwayDoom_thumb.png',
        link: 'https://f.io/CTVYTp_m',
        alt: 'Sway In The Morning : Doomsday Cypher',
      },
      {
        src: '/Thumbs/EssenceImpact_Thumb.png',
        link: 'https://f.io/ZdJ0Orca',
        alt: 'ESSENCE FEST Impact',
      },
      {
        src: '/Thumbs/300Sizzle_thumb.png',
        link: 'https://f.io/i7DGRllY',
        alt: '300 Unplugged Sizzle',
      },
    ],
  },
  {
    category: 'Music Video',
    items: [
      {
        src: '/Thumbs/PJ_FirstBegan_thumb.png',
        link: 'https://www.youtube.com/watch?v=C1fRIyBW4kk&list=RDC1fRIyBW4kk&start_radio=1',
        alt: 'PJ Morton First Began Official Music Video',
      },
    ],
  },
];

export default function Work() {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-12 overflow-y-scroll">
      <h1 className="text-5xl font-handdrawn text-center mb-16 glitch-on-hover">The Work</h1>

      {projects.map((section, index) => (
        <div key={index} className="mb-20">
          <h2 className="text-3xl font-handdrawn mb-8 glitch-on-hover text-center">{section.category}</h2>
          <div
            className={`grid gap-8 justify-items-center ${
              section.items.length === 1
                ? 'grid-cols-1'
                : section.items.length === 2
                ? 'grid-cols-1 sm:grid-cols-2'
                : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
            }`}
          >
            {section.items.map((project, idx) => (
              <a
                key={project.title || project.alt}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative rounded-lg overflow-hidden border border-white p-4 transform hover:scale-105 transition duration-300 bg-black ${project.extraClass || ''}`}
              >
                <Image
                  src={project.src || `/Thumbs/${project.thumbnail}`}
                  alt={project.alt || project.title}
                  width={640}
                  height={360}
                  className="w-full h-auto object-cover rounded-2xl"
                />
                <div className="absolute inset-0 rounded-2xl pointer-events-none shimmer-tile"></div>
              </a>
            ))}
          </div>
        </div>
      ))}

      {/* Carousel */}
      <div className="overflow-hidden mt-20 mb-10 flex justify-center">
        <div className="flex animate-scroll-x space-x-6 w-max">
          {[...carouselImages, ...carouselImages].map((file, idx) => (
            <Image
              key={idx}
              src={`/${file}`}
              alt={`WHF Image ${idx + 1}`}
              width={200}
              height={120}
              className="object-contain h-[100px] w-auto rounded-md"
            />
          ))}
        </div>
      </div>

      {/* Scroll to top + home */}
      <div className="flex justify-between items-center px-4">
        <Link href="/" className="text-white underline hover:text-gray-300 transition">
          Back to Home
        </Link>
        <button
          className="bg-white text-black p-3 rounded-full shadow-md hover:scale-110 transition"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ↑
        </button>
      </div>
    </div>
  );
}