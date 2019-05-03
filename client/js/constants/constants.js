import { createReversedArray } from '../lib/utils';

export const BEAT_VALUES = [1, 2, 4, 8, 16];
export const BEATS_PER_MEASURE_VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
export const DEFAULT_BAR_COUNT = 8;

// TODO: replace with frequencies
// https://en.wikipedia.org/wiki/Piano_key_frequencies
export const PITCH_TABLE = {
    '37': 'A',
    '38': 'A#',
    '39': 'B',
    '40': 'C',
    '41': 'C#',
    '42': 'D',
    '43': 'D#',
    '44': 'E',
    '45': 'F',
    '46': 'F#',
    '47': 'G',
    '48': 'G#',
    '49': 'A',
    '50': 'A#',
    '51': 'B',
    '52': 'C',
    '53': 'C#',
    '54': 'D',
    '55': 'D#',
    '56': 'E',
    '57': 'F',
    '58': 'F#',
    '59': 'G',
    '60': 'G#',
    '61': 'A',
    '62': 'A#',
    '63': 'B',
    '64': 'C'
};

export const PITCH_TABLE_KEYS = Object.keys(PITCH_TABLE);
export const PITCH_TABLE_LENGTH = PITCH_TABLE_KEYS.length;
export const REVERSED_PITCH_TABLE_KEYS = createReversedArray(PITCH_TABLE_KEYS);
export const SUBDIVISION_BEAT_TYPE = 16;