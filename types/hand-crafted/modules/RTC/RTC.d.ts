import Listenable from '../util/Listenable';
import JitsiLocalTrack from './JitsiLocalTrack';
import JitsiRemoteTrack from './JitsiRemoteTrack';
import TraceablePeerConnection from './TraceablePeerConnection';
import { MediaType } from '../../service/RTC/MediaType';
import SignalingLayer, { SourceName } from '../../service/RTC/SignalingLayer';
import { BridgeVideoType } from '../../service/RTC/BridgeVideoType';

export default class RTC extends Listenable {
  destroy: () => void;
  static createLocalTracks: ( tracksInfo: unknown[] ) => JitsiLocalTrack[]; // TODO:
  static obtainAudioAndVideoPermissions: ( options: { devices: unknown[], resolution: string, cameraDeviceId: string, micDeviceId: string } ) => Promise<unknown>; // TODO:
  initializeBridgeChannel: ( perrconnection: RTCPeerConnection, wsUrl: string ) => void;
  onCallEnded: () => void;
  setDesktopSharingFrameRate: (maxFps: number) => void;
  setReceiverVideoConstraint: ( maxFrameHeight: number ) => void;
  selectEndpoints: ( ids: string[] ) => void;
  static addListener: ( eventType: string, listener: unknown ) => void; // TODO: this should be typed to an enum of eventTypes with appropriate definition for the listeners
  static removeListener: ( eventType: string, listener: unknown ) => void; // TODO: this should be typed to an enum of eventTypes with appropriate definition for the listeners
  static init: ( options: unknown ) => unknown; // TODO:
  createPeerConnection: ( signaling: SignalingLayer, pcConfig: unknown, isP2P: boolean, options: { enableInsertableStreams: boolean, disableSimulcast: boolean, disableRtx: boolean, startSilent: boolean } ) => TraceablePeerConnection; // TODO:
  addLocalTrack: ( track: JitsiLocalTrack ) => void;
  getForwardedSources: () => string[] | null;
  getLocalVideoTrack: () => JitsiLocalTrack | undefined;
  getLocalVideoTracks: () => JitsiLocalTrack[];
  getLocalAudioTrack: () => JitsiLocalTrack | undefined;
  getLocalEndpointId: () => string;
  getLocalTracks: ( mediaType: MediaType ) => JitsiLocalTrack[];
  getRemoteTracks: ( mediaType: MediaType ) => JitsiRemoteTrack[];
  setAudioMute: ( value: unknown ) => Promise<unknown>; // TODO:
  removeLocalTrack: ( track: JitsiLocalTrack ) => void;
  static attachMediaStream: ( elSelector: unknown, stream: unknown ) => unknown; // TODO:
  static getStreamID: ( stream: MediaStream ) => unknown; // TODO:
  static getTrackID: ( track: MediaStreamTrack ) => unknown; // TODO:
  static isDeviceListAvailable: () => unknown; // TODO:
  static isDeviceChangeAvailable: ( deviceType: string ) => boolean; // TODO: check if deviceType should be an enum
  static isWebRtcSupported: () => boolean;
  static getAudioOutputDevice: () => string;
  static getCurrentlyAvailableMediaDevices: () => unknown[]; // TODO:
  static getEventDataForActiveDevice: () => MediaDeviceInfo;
  static setAudioOutputDevice: ( deviceId: string ) => Promise<unknown>; // TODO:
  static isUserStream: ( stream: MediaStream ) => boolean;
  static isUserStreamById: ( streamId: string ) => boolean;
  static enumerateDevices: ( callback: () => unknown ) => void; // TODO:
  static stopMediaStream: ( mediaStream: MediaStream ) => void;
  static isDesktopSharingEnabled: () => boolean;
  closeBridgeChannel: () => void;
  setAudioLevel: ( tpc: TraceablePeerConnection, ssrc: number, audioLevel: number, isLocal: boolean ) => void;
  sendChannelMessage: ( to: string, payload: unknown ) => void; // TODO:
  setLastN: ( value: number ) => void;
  isInLastN: ( id: string ) => boolean;
  isInForwardedSources: ( sourceName: string ) => boolean;
  setNewReceiverVideoConstraints: ( constraints: unknown ) => void; // TODO:
  setVideoType: ( videoType: BridgeVideoType ) => void;
  /**
   * Sends the track's  video type to the JVB.
   */
  sendSourceVideoType(sourceName: SourceName, videoType: BridgeVideoType): void;
  setVideoMute: ( value: unknown ) => Promise<unknown>; // TODO:
  arePermissionsGrantedForAvailableDevices: () => boolean;
  sendEndpointStatsMessage: ( payload: unknown ) => void; // TODO:
}
