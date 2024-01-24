import {
  AudioPlayerContainer,
  AudioPlayerElement
} from './MeditationAudioPlayer.style';
import { Icon } from '@components/Icon';
import { useRef, useState } from 'react';
import { ICON_NAME_PAUSE, ICON_NAME_PLAY } from '@pages/meditation/constants';

const MeditationAudioPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  // This Audio Source is Free Licensed from below site.
  // https://pixabay.com/sound-effects/search/night%20ambience/
  const audioSrc =
    'https://drive.google.com/file/d/13kC8CorTL7nV6Zp5m9jnClsRdxWFEXZn/view?usp=sharing';

  const togglePlaying = () => {
    if (playing) {
      audioRef.current?.pause();
    } else {
      void audioRef.current?.play();
    }
    setPlaying(!playing);
  };

  return (
    <AudioPlayerContainer>
      <AudioPlayerElement onClick={() => togglePlaying()}>
        <Icon
          name={playing ? ICON_NAME_PAUSE : ICON_NAME_PLAY}
          size={50}
          color={'white'}
        />
        <audio
          ref={audioRef}
          src={audioSrc}
          loop
        />
      </AudioPlayerElement>
    </AudioPlayerContainer>
  );
};

export default MeditationAudioPlayer;
