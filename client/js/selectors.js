export const getTimeSignature = ({ playbackController }) => playbackController.timeSignature;

export const setInputTypeLabel = ({ erase }) => erase ? 'cursor' : 'eraser';

export const setPlayStateButtonLabel = ({ isPlaying }) => isPlaying ? 'pause' : 'play';