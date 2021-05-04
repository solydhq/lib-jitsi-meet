export const enum RTCEvents {
  CREATE_ANSWER_FAILED = 'rtc.create_answer_failed',
  CREATE_OFFER_FAILED = 'rtc.create_offer_failed',
  DATA_CHANNEL_OPEN = 'rtc.data_channel_open',
  ENDPOINT_CONN_STATUS_CHANGED = 'rtc.endpoint_conn_status_changed',
  DOMINANT_SPEAKER_CHANGED = 'rtc.dominant_speaker_changed',
  LASTN_ENDPOINT_CHANGED = 'rtc.lastn_endpoint_changed',
  PERMISSIONS_CHANGED = 'rtc.permissions_changed',
  SENDER_VIDEO_CONSTRAINTS_CHANGED = 'rtc.sender_video_constraints_changed',
  LASTN_VALUE_CHANGED = 'rtc.lastn_value_changed',
  LOCAL_TRACK_SSRC_UPDATED = 'rtc.local_track_ssrc_updated',
  LOCAL_TRACK_MAX_ENABLED_RESOLUTION_CHANGED = 'rtc.local_track_max_enabled_resolution_changed',
  TRACK_ATTACHED = 'rtc.track_attached',
  REMOTE_TRACK_ADDED = 'rtc.remote_track_added',
  REMOTE_TRACK_MUTE = 'rtc.remote_track_mute',
  REMOTE_TRACK_REMOVED = 'rtc.remote_track_removed',
  REMOTE_TRACK_UNMUTE = 'rtc.remote_track_unmute',
  SET_LOCAL_DESCRIPTION_FAILED = 'rtc.set_local_description_failed',
  SET_REMOTE_DESCRIPTION_FAILED = 'rtc.set_remote_description_failed',
  AUDIO_OUTPUT_DEVICE_CHANGED = 'rtc.audio_output_device_changed',
  DEVICE_LIST_CHANGED = 'rtc.device_list_changed',
  DEVICE_LIST_WILL_CHANGE = 'rtc.device_list_will_change',
  DEVICE_LIST_AVAILABLE = 'rtc.device_list_available',
  ENDPOINT_MESSAGE_RECEIVED = 'rtc.endpoint_message_received',
  ENDPOINT_STATS_RECEIVED = 'rtc.endpoint_stats_received',
  LOCAL_UFRAG_CHANGED = 'rtc.local_ufrag_changed',
  REMOTE_UFRAG_CHANGED = 'rtc.remote_ufrag_changed'
}
