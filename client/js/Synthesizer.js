class Synthesizer {
    constructor(config) {
        /*
            oscillator 1 position
            oscillator 1 wavetable position
            oscillator 1 type
            oscillator 1 pitch
            oscillator 1 volume
            filter
            polyphony


            const config = {
                filterValues: {
                    lowPass: <Int>
                },
                polyphony: <Bool>,
                oscillators: [
                    {
                        type: <String>,
                        frequency: <Int>,
                        volume: <Int>
                    }
                    ...oscillators
                ]
            }

        */
        this.audioContext = new window.AudioContext;
        this.config = { ...config };

        this.createOscillator = this.createOscillator.bind(this);
        this.createOscillators = this.createOscillators.bind(this);
        this.initialize = this.initialize.bind(this);

        this.initialize();
    }

    set masterVolume() {
        // sets overall volume node
    }

    createOscillator(oscillatorConfig) {
        const oscillator = this.audioContext.createOscillator();

        oscillator.type = oscillatorConfig.type;
        oscillator.connect(this.audioContext.destination);

        return oscillator;
        // need oscillator volume
    }

    createOscillators() {
        this.oscillators = this.config.oscillators.map(this.createOscillator);
    }

    initialize() {
        this.createOscillators();

        return this;
    }

    mute() {
        // set masterVolume to 0
    }

    start() {
        // initialize oscillators start()
    }

    stop() {
        // initialize oscillators stop()
    }

    unmute() {
        // set masterVolume to its previously unmuted value
    }
}

const config = {
    oscillators: [
        {
            type: 'sine',
            frequency: 500
        },
        {
            type: 'sawtooth',
            frequency: 500
        }
    ]
};

const synth = new Synthesizer(config);