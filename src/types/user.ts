import { Country } from "./country";

export interface UserData {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  name: string;
  email: string;
  phone_number: string;
  postal_code: null | string;
  role: string | null;
  custom_role: null | string;
  language: string;
  profile_image: null | string;
  analytics_identifier: string;
  profile_completeness: UserProfileComplete;
  referred_by: null | string;
  is_verified: boolean;
  phone_number_only: string;
  country_code: string;
  country: Country;
  country_fk: number;
  terms_and_condition_acceptance_date: null | string;
  privacy_policy_acceptance_date: null | string;
  disclaimer_acceptance_date: null | string;
  message_portal_admins: Array<never> | Array<string>;
  opt_in_for_marketing_messages: boolean;
  is_sign_up_completed: boolean;
  user_features: Array<never> | Array<string>;
  admin_features: Array<never> | Array<string>;
  can_view_forecast: boolean;
  connected_services: null | unknown;
  token: string | null;
  token_expiry_time: number | null;
  is_admin_staff?: boolean;
  user_overview_id?: number | null;
  last_login?: null | string;
}

export interface UserProfileComplete {
  percentage: number;
  has_role: boolean;
  is_phonenumber_verified: boolean;
  has_region: boolean;
  has_cluster: boolean;
  has_crop: boolean;
  has_farm: boolean;
  has_field: boolean;
}
