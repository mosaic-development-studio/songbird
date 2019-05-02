import { POSITION_BEAT_VALUE } from '../constants/constants';

export const positionsPerBar = timeSignature => {
    const { beatsPerMeasure, beatValue } = timeSignature;

    return positionsPerBeat(beatValue) * beatsPerMeasure;
};

export const positionsPerBeat = beatValue => POSITION_BEAT_VALUE / beatValue;