/**
 * Fakes local SDP exposed to {@link JingleSessionPC} through the local
 * description getter. Modifies the SDP, so that it will contain muted local
 * video tracks description, even though their underlying {MediaStreamTrack}s
 * are no longer in the WebRTC peerconnection. That prevents from SSRC updates
 * being sent to Jicofo/remote peer and prevents sRD/sLD cycle on the remote
 * side.
 */
export default class LocalSdpMunger {
    /**
     * Creates new <tt>LocalSdpMunger</tt> instance.
     *
     * @param {TraceablePeerConnection} tpc
     */
    constructor(tpc: any);
    tpc: any;
    /**
     * Makes sure that muted local video tracks associated with the parent
     * {@link TraceablePeerConnection} are described in the local SDP. It's done
     * in order to prevent from sending 'source-remove'/'source-add' Jingle
     * notifications when local video track is muted (<tt>MediaStream</tt> is
     * removed from the peerconnection).
     *
     * NOTE 1 video track is assumed
     *
     * @param {SdpTransformWrap} transformer the transformer instance which will
     * be used to process the SDP.
     * @return {boolean} <tt>true</tt> if there were any modifications to
     * the SDP wrapped by <tt>transformer</tt>.
     * @private
     */
    private _addMutedLocalVideoTracksToSDP;
    /**
     * Modifies 'cname', 'msid', 'label' and 'mslabel' by appending
     * the id of {@link LocalSdpMunger#tpc} at the end, preceding by a dash
     * sign.
     *
     * @param {MLineWrap} mediaSection - The media part (audio or video) of the
     * session description which will be modified in place.
     * @returns {void}
     * @private
     */
    private _transformMediaIdentifiers;
    /**
     * Maybe modifies local description to fake local video tracks SDP when
     * those are muted.
     *
     * @param {object} desc the WebRTC SDP object instance for the local
     * description.
     * @returns {RTCSessionDescription}
     */
    maybeAddMutedLocalVideoTracksToSDP(desc: object): RTCSessionDescription;
    /**
     * This transformation will make sure that stream identifiers are unique
     * across all of the local PeerConnections even if the same stream is used
     * by multiple instances at the same time.
     * Each PeerConnection assigns different SSRCs to the same local
     * MediaStream, but the MSID remains the same as it's used to identify
     * the stream by the WebRTC backend. The transformation will append
     * {@link TraceablePeerConnection#id} at the end of each stream's identifier
     * ("cname", "msid", "label" and "mslabel").
     *
     * @param {RTCSessionDescription} sessionDesc - The local session
     * description (this instance remains unchanged).
     * @return {RTCSessionDescription} - Transformed local session description
     * (a modified copy of the one given as the input).
     */
    transformStreamIdentifiers(sessionDesc: RTCSessionDescription): RTCSessionDescription;
}
