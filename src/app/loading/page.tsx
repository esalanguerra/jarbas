'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

const Menu = dynamic(() => import('../menu/page'), { ssr: false });

const Loading: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          router.push('/view_doc_new');
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [router]);

  return (
    <div>
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="w-full flex justify-center items-center min-h-screen">
        <div className="w-full max-w-md bg-gray-200 rounded-full h-4 overflow-hidden">
          <div
            className="bg-yellow-500 h-4 text-xs font-medium text-white text-center p-0.5 leading-none rounded-l-full"
            style={{ width: `${progress}%` }}
          >
            {progress}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
