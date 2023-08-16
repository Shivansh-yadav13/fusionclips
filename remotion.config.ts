import {Config} from '@remotion/cli/config';
import {webpackOverride} from './webpack-override.mjs';

Config.overrideWebpackConfig(webpackOverride);
Config.setOverwriteOutput(true);
Config.setStillImageFormat('jpeg');
Config.setVideoImageFormat('jpeg');
