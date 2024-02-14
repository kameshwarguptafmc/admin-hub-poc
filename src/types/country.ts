export interface Country {
  id: number;
  name: string;
  trap_name_visibility_threshold: number;
  trap_clickable_threshold: number;
  measurement_system: string;
  date_preference: string;
  is_message_portal_enabled: boolean;
  skip_sms_validation: boolean;
  is_in_app_scouting_enabled: boolean;
  default_zoom_level: number;
  min_zoom_level: number;
  max_zoom_level: number;
  track_users_location_enabled: boolean;
  require_farms_and_fields_for_scouting: boolean;
  enable_farms_and_fields_for_scouting: boolean;
  hide_farms_and_fields_from_trap_setup: boolean;
  enable_farm_entry: boolean;
  time_preference: string;
  area_measurement_unit: string;
  field_monitoring_enabled: boolean;
  is_message_portal_v2_enabled: boolean;
  trap_check_photos_required: boolean;
  qr_code_validation_required: boolean;
  is_postal_code_required: boolean;
  is_field_monitoring_feature_enabled: boolean;
  default_language: string;
  default_language_code: string;
  is_weather_feature_enabled: boolean;
  is_john_deere_feature_enabled: boolean;
  arc_ui_v2?: boolean;
  enable_trap_connectivity_view?: boolean;
  trap_management?: boolean;
  is_product_catalog_enabled?: boolean;
  is_gdd_enabled?: boolean;
  is_gdd_plus_enabled?: boolean;
}