'use client';
import dynamic from 'next/dynamic';

const Player = dynamic(
  () => import('@lottiefiles/react-lottie-player').then((m) => m.Player),
  { ssr: false }
);

type Props = {
  path: any;
  className?: string;
};

const ShowLottie = ({ path, className = '' }: Props) => {
  return (
    <div className={`max-w-sm md:max-w-md ${className}`}>
      <Player autoplay loop src={path}></Player>
    </div>
  );
};

export default ShowLottie;
