import { SUBDIVISION_BEAT_TYPE } from '../constants/constants';

export const subdivisionsPerBar = timeSignature => {
    const { beatsPerMeasure, beatValue } = timeSignature;

    return subdivisionsPerBeat(beatValue) * beatsPerMeasure;
};

export const subdivisionsPerBeat = beatValue => SUBDIVISION_BEAT_TYPE / beatValue;