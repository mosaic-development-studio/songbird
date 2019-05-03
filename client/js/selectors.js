export const getTimeSignature = ({ playbackController }) => playbackController.timeSignature;

export const getNoteStatus = (state, props) => {
    return state.sketch.some(noteDetails => {
        return noteDetails.bar === props.bar
            && noteDetails.pitch === props.pitch
            && noteDetails.subdivision === props.subdivision;
    });
};

export const setInputTypeLabel = ({ erase }) => erase ? 'cursor' : 'eraser';

export const setPlayStateButtonLabel = ({ isPlaying }) => isPlaying ? 'pause' : 'play';