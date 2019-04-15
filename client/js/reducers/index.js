import { combineReducers } from 'redux';
import { playbackController } from './playbackController' ;
import { sketch } from './sketch';

export const reducer = combineReducers({
    playbackController,
    sketch
});
