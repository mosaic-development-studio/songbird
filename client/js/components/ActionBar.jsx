import { BEAT_VALUES, BEATS_PER_MEASURE_VALUES } from '../constants/constants';
import { connect } from 'react-redux';
import { createSelectOptions } from '../lib/react-utils';
import {
    resetCurrentTime,
    setTempo,
    setBeatValue,
    setBeatsPerMeasure,
    stop,
    toggleNoteInputType,
    togglePlayState
} from '../actions/playbackController';
import React from 'react';
import { setInputTypeLabel, setPlayStateButtonLabel } from '../selectors';

const ActionBar = props => {
    const {
        inputTypeLabel,
        isPlaying,
        playStateButtonLabel,
        setTempo,
        setBeatValue,
        setBeatsPerMeasure,
        stop,
        tempo,
        timeSignature,
        toggleNoteInputType,
        togglePlayState
    } = props;

    return (
        <section id="actionBar" className="action-bar">
            <button className="action-bar__button" onClick={togglePlayState}>{playStateButtonLabel}</button>
            <button className="action-bar__button" onClick={resetCurrentTime}>Reset</button>
            <button className="action-bar__button" onClick={stop}>Stop</button>
            <input
                className="action-bar__tempo-input"
                defaultValue={tempo}
                disabled={isPlaying}
                onChange={e => setTempo(e.target.value)}
                pattern="[0-9]"
                type="number"
            />
            <div className="action-bar__time-signature-input">
                <select
                    disabled={isPlaying}
                    onChange={e => setBeatsPerMeasure(e.target.value)}
                    value={timeSignature.beatsPerMeasure}>
                    {BEATS_PER_MEASURE_VALUES.map(createSelectOptions)}
                </select>
                /
                <select
                    disabled={isPlaying}
                    onChange={e => setBeatValue(e.target.value)}
                    value={timeSignature.beatValue}>
                    {BEAT_VALUES.map(createSelectOptions)}
                </select>
            </div>
            <button
                className="action-bar__button--input-toggle"
                onClick={toggleNoteInputType}>
                {inputTypeLabel}
            </button>
        </section>
    );
}

const mapDispatchToProps = {
    resetCurrentTime,
    setTempo,
    setBeatValue,
    setBeatsPerMeasure,
    stop,
    toggleNoteInputType,
    togglePlayState
};

const mapStateToProps = state => {
    const { isPlaying, tempo, timeSignature } = state.playbackController;

    return {
        inputTypeLabel: setInputTypeLabel(state),
        isPlaying,
        playStateButtonLabel: setPlayStateButtonLabel(state),
        tempo,
        timeSignature
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActionBar);