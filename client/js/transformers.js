export const transformStateForHash = state => {
    const {
        playbackController: {
            tempo,
            timeSignature: {
                beatValue,
                beatsPerMeasure
            }
        },
        sketch
    } = state;

    return {
        beatValue,
        beatsPerMeasure,
        sketch,
        tempo
    };
};

export const transformTrimmedStatetoState = (trimmedState, defaultState) => {
    const {
        sketch,
        tempo,
        ...timeSignature
    } = trimmedState;

    return {
        playbackController: {
            ...defaultState.playbackController,
            tempo,
            timeSignature
        },
        sketch
    };
};