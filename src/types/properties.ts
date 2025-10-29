/**
 * Property Types - Tipos para la arquitectura angelical
 * Panama Golden Key PropTech - Tipos de datos para propiedades
 */

// Interfaz principal para propiedades (compatible con frontend actual)
export interface Property {
  id: string;
  uuid: string;
  slug: string;
  property_code: string;
  title: string;
  subtitle?: string;
  type: string;
  subtype?: string;
  status: string;
  visibility: string;
  bedrooms: number;
  bathrooms: number;
  half_baths: number;
  area_built: number;
  area_lot?: number;
  parking_spaces: number;
  construction_year?: number;
  furnishing?: string;
  view_type?: string;
  description: string;
  features: string[];
  tags: string[];
  created_at: string;
  updated_at: string;
  published_at: string;

  // Campos de compatibilidad con frontend actual
  price?: number;
  location?: PropertyLocation;
  image_url?: string;
  roi?: string;

  // Relaciones con arquitectura angelical
  financials?: PropertyFinancials;
  media?: PropertyMedia;
  agent?: PropertyAgent;
  legal?: PropertyLegal;
  analytics?: PropertyAnalytics;
  ai?: PropertyAI;
  marketing?: PropertyMarketing;

  // Propiedades calculadas
  total_bathrooms?: number;
  price_per_sqmt?: number;
  is_new?: boolean;
  is_featured?: boolean;
}

// Interfaz para información financiera
export interface PropertyFinancials {
  id: string;
  property: string;
  price: number;
  currency: string;
  previous_price?: number;
  discount_percent?: number;
  hoa_fee?: number;
  annual_tax?: number;
  mortgage_available: boolean;
  rental_yield_gross?: number;
  rental_yield_net?: number;
  roi_projected_min?: number;
  roi_projected_max?: number;
  cap_rate?: number;
  cashflow_projection_json: object;
  tokenized_investment_available: boolean;
  token_price_usd?: number;
  min_investment_usd?: number;
  financing_terms?: string;
  created_at: string;
  updated_at: string;

  // Propiedades calculadas
  price_formatted: string;
  roi_range: string;
  has_discount: boolean;
  discount_amount?: number;
  is_good_investment: boolean;
  monthly_cashflow?: number;
}

// Interfaz para información de ubicación
export interface PropertyLocation {
  id: string;
  property: string;
  address_full: string;
  neighborhood: string;
  district: string;
  province: string;
  country: string;
  latitude?: number;
  longitude?: number;
  walk_score?: number;
  transit_score?: number;
  distance_to_airport_km?: number;
  distance_to_beach_km?: number;
  distance_to_city_center_km?: number;
  distance_to_hospital_km?: number;
  distance_to_school_km?: number;
  flood_risk?: string;
  seismic_zone?: string;
  zoning_type?: string;
  nearby_amenities: string[];
  public_transportation: string[];
  description?: string;
  created_at: string;
  updated_at: string;

  // Propiedades calculadas
  full_address: string;
  coordinates?: [number, number];
  has_coordinates: boolean;
  walk_score_rating: string;
  transit_score_rating: string;
  is_prime_location: boolean;
  is_beach_front: boolean;
  is_city_center: boolean;
}

// Interfaz para contenido multimedia
export interface PropertyMedia {
  id: string;
  property: string;
  image_cover: string;
  gallery: string[];
  video_tour_url?: string;
  virtual_tour_url?: string;
  floor_plan_pdf?: string;
  brochure_pdf?: string;
  drone_shots: string[];
  night_photos: string[];
  interior_photos: string[];
  exterior_photos: string[];
  neighborhood_video?: string;
  drone_video?: string;
  total_images: number;
  total_videos: number;
  has_virtual_tour: boolean;
  has_floor_plan: boolean;
  media_quality_score?: number;
  last_media_update?: string;
  created_at: string;
  updated_at: string;

  // Propiedades calculadas
  all_images: MediaImage[];
  all_videos: MediaVideo[];
  has_rich_media: boolean;
  media_completeness_score: number;
  is_media_complete: boolean;
}

// Interfaz para imágenes multimedia
export interface MediaImage {
  url: string;
  type: string;
  description: string;
}

// Interfaz para videos multimedia
export interface MediaVideo {
  url: string;
  type: string;
  description: string;
}

// Interfaz para información de agentes
export interface PropertyAgent {
  id: string;
  property: string;
  agent_name: string;
  agent_phone: string;
  agent_email: string;
  agent_license?: string;
  agent_photo?: string;
  agent_bio?: string;
  agency_name: string;
  agency_logo?: string;
  agency_website?: string;
  agency_phone?: string;
  agency_email?: string;
  commission_percent: number;
  commission_fixed?: number;
  commission_type: string;
  specialties: string[];
  years_experience?: number;
  languages_spoken: string[];
  whatsapp_number?: string;
  linkedin_profile?: string;
  instagram_profile?: string;
  facebook_profile?: string;
  available_days: string[];
  working_hours: object;
  response_time_hours?: number;
  properties_sold: number;
  average_sale_time_days?: number;
  client_satisfaction_score?: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;

  // Propiedades calculadas
  full_contact_info: AgentContactInfo;
  social_media_profiles: SocialMediaProfiles;
  has_social_media: boolean;
  commission_info: string;
  experience_level: string;
  is_top_agent: boolean;
  response_quality: string;
}

// Interfaz para información de contacto de agentes
export interface AgentContactInfo {
  name: string;
  phone: string;
  email: string;
  whatsapp: string;
  agency?: AgencyInfo;
}

// Interfaz para información de agencia
export interface AgencyInfo {
  name: string;
  phone: string;
  email: string;
  website: string;
}

// Interfaz para perfiles de redes sociales
export interface SocialMediaProfiles {
  linkedin?: string;
  instagram?: string;
  facebook?: string;
}

// Interfaz para información legal
export interface PropertyLegal {
  id: string;
  property: string;
  title_deed_number?: string;
  title_deed_date?: string;
  registry_book?: string;
  registry_page?: string;
  registry_number?: string;
  registry_link?: string;
  cadastral_link?: string;
  gis_link?: string;
  due_diligence_status: string;
  due_diligence_date?: string;
  due_diligence_summary?: string;
  legal_owner_name?: string;
  legal_owner_type?: string;
  company_id?: string;
  tax_id?: string;
  mortgage_status?: string;
  mortgage_amount?: number;
  mortgage_lender?: string;
  liens_encumbrances: string[];
  restrictions: string[];
  easements: string[];
  zoning_restrictions?: string;
  building_permit_number?: string;
  building_permit_date?: string;
  occupancy_permit_number?: string;
  occupancy_permit_date?: string;
  documents: LegalDocument[];
  title_insurance?: string;
  survey_document?: string;
  property_tax_status: string;
  property_tax_arrears?: number;
  created_at: string;
  updated_at: string;
  last_verified_date?: string;

  // Propiedades calculadas
  has_clear_title: boolean;
  has_legal_issues: boolean;
  is_legally_compliant: boolean;
  legal_completeness_score: number;
  risk_level: string;
}

// Interfaz para documentos legales
export interface LegalDocument {
  type: string;
  url: string;
  description?: string;
}

// Interfaz para analítica de propiedades
export interface PropertyAnalytics {
  id: string;
  property: string;
  views_count: number;
  unique_views_count: number;
  views_today: number;
  views_this_week: number;
  views_this_month: number;
  leads_count: number;
  qualified_leads_count: number;
  share_count: number;
  favorite_count: number;
  inquiry_count: number;
  tour_requests_count: number;
  conversion_rate?: number;
  lead_to_view_ratio?: number;
  view_to_favorite_ratio?: number;
  demand_index?: number;
  market_interest_score?: number;
  time_on_market_days?: number;
  price_vs_market_avg?: number;
  views_vs_similar_avg?: number;
  engagement_vs_avg?: number;
  website_views: number;
  portal_views: number;
  social_media_views: number;
  email_views: number;
  direct_views: number;
  peak_viewing_hour?: number;
  peak_viewing_day?: string;
  views_by_country: object;
  views_by_city: object;
  views_by_device: object;
  quality_score?: number;
  completeness_score?: number;
  appeal_score?: number;
  trending_score?: number;
  momentum_score?: number;
  viral_coefficient?: number;
  created_at: string;
  updated_at: string;
  last_analyzed_date?: string;

  // Propiedades calculadas
  total_views: number;
  engagement_rate: number;
  lead_quality_rate: number;
  performance_tier: string;
  is_trending: boolean;
  is_high_demand: boolean;
  is_underperforming: boolean;
}

// Interfaz para análisis de IA
export interface PropertyAI {
  id: string;
  property: string;
  ai_investment_score?: number;
  ai_rental_score?: number;
  ai_appreciation_score?: number;
  ai_lifestyle_score?: number;
  ai_location_score?: number;
  ai_description_long?: string;
  ai_summary_short?: string;
  ai_highlights: string[];
  ai_tagline?: string;
  ai_recommendation_reason?: string;
  ai_target_audience: string[];
  ai_improvement_suggestions: string[];
  ai_marketing_angles: string[];
  market_trend_prediction?: number;
  price_appreciation_1yr?: number;
  price_appreciation_5yr?: number;
  rental_demand_forecast?: number;
  comparables: PropertyComparable[];
  similar_properties: Property[];
  market_comparables: object;
  sentiment_analysis: object;
  market_sentiment?: string;
  investment_risk_level?: string;
  risk_factors: string[];
  mitigation_strategies: string[];
  competitiveness_score?: number;
  market_position?: string;
  ai_insights: AIInsight[];
  hidden_opportunities: string[];
  value_add_potential: object;
  ai_model_version?: string;
  ai_confidence_score?: number;
  ai_processing_time_ms?: number;
  last_ai_analysis?: string;
  created_at: string;
  updated_at: string;

  // Propiedades calculadas
  overall_ai_score?: number;
  investment_grade: string;
  is_ai_recommended: boolean;
  has_positive_outlook: boolean;
  risk_reward_ratio?: number;
  market_timing_advice: string;
}

// Interfaz para propiedades comparables
export interface PropertyComparable {
  id: string;
  title: string;
  price: number;
  similarity_score: number;
  differences: string[];
}

// Interfaz para insights de IA
export interface AIInsight {
  priority: string;
  title: string;
  description: string;
  impact_score: number;
}

// Interfaz para marketing de propiedades
export interface PropertyMarketing {
  id: string;
  property: string;
  utm_source?: string;
  utm_campaign?: string;
  utm_medium?: string;
  utm_content?: string;
  utm_term?: string;
  tags_marketing: string[];
  target_segments: string[];
  buyer_personas: string[];
  funnel_stage?: string;
  funnel_substage?: string;
  funnel_score?: number;
  marketing_spend?: number;
  cost_per_lead?: number;
  cost_per_acquisition?: number;
  marketing_roi?: number;
  active_channels: string[];
  channel_performance: object;
  best_performing_channel?: string;
  leads_count: number;
  qualified_leads: number;
  converted_leads: number;
  lost_leads: number;
  last_lead_contact_date?: string;
  next_follow_up_date?: string;
  follow_up_count: number;
  crm_notes?: string;
  crm_priority: string;
  crm_assigned_to?: string;
  competitor_analysis: object;
  competitive_advantages: string[];
  market_positioning?: string;
  marketing_strategy?: string;
  value_proposition?: string;
  unique_selling_points: string[];
  content_engagement: object;
  social_media_metrics: object;
  email_campaign_metrics: object;
  ab_test_results: MarketingABTest[];
  optimization_suggestions: string[];
  conversion_rate_optimization?: number;
  seasonal_performance: object;
  best_listing_months: string[];
  market_timing_score?: number;
  created_at: string;
  updated_at: string;
  last_marketing_review?: string;

  // Propiedades calculadas
  conversion_rate: number;
  qualification_rate: number;
  lead_loss_rate: number;
  funnel_health_score: number;
  marketing_efficiency: string;
  is_hot_property: boolean;
  needs_marketing_attention: boolean;
  days_since_last_contact?: number;
}

// Interfaz para pruebas A/B de marketing
export interface MarketingABTest {
  id: string;
  name: string;
  description: string;
  variants: MarketingABVariant[];
  start_date: string;
  end_date?: string;
  status: string;
  results: MarketingABResult[];
}

// Interfaz para variantes de pruebas A/B
export interface MarketingABVariant {
  id: string;
  name: string;
  description: string;
  traffic_percentage: number;
  conversion_rate: number;
}

// Interfaz para resultados de pruebas A/B
export interface MarketingABResult {
  metric: string;
  variant_a_value: number;
  variant_b_value: number;
  winner: string;
  confidence_level: number;
}

// Filtros de búsqueda (compatibles con frontend actual)
export interface PropertyFilters {
  search?: string;
  min_price?: number;
  max_price?: number;
  bedrooms?: number;
  bathrooms?: number;
  property_types?: string[];
  city?: string;
  province?: string;
  neighborhood?: string;
  min_area?: number;
  max_area?: number;
  min_year?: number;
  max_year?: number;
  features?: string[];
  status?: string;
  has_virtual_tour?: boolean;
  has_floor_plan?: boolean;
  furnished?: boolean;
  parking_spaces?: number;
  walk_score_min?: number;
  transit_score_min?: number;
  distance_to_beach_max?: number;
  distance_to_city_center_max?: number;
  roi_min?: number;
  investment_grade?: string;
  ai_recommended?: boolean;
  market_trend?: string;
  funnel_stage?: string;
  marketing_priority?: string;
  page?: number;
  page_size?: number;
}

// Paginación de propiedades
export interface PropertyPagination {
  count: number;
  next?: string;
  previous?: string;
  page_size: number;
  current_page: number;
  total_pages: number;
  has_next: boolean;
  has_previous: boolean;
}

// Respuesta de API de propiedades
export interface PropertyResponse {
  count: number;
  next?: string;
  previous?: string;
  results: Property[];
  pagination?: PropertyPagination;
}

// Respuesta de búsqueda de propiedades
export interface PropertySearchResponse {
  count: number;
  query?: object;
  results: Property[];
  facets?: SearchFacets;
  suggestions?: string[];
}

// Facetas de búsqueda
export interface SearchFacets {
  property_types: PropertyTypeFacet[];
  provinces: ProvinceFacet[];
  price_ranges: PriceRangeFacet[];
  bedroom_counts: BedroomCountFacet[];
  bathroom_counts: BathroomCountFacet[];
  area_ranges: AreaRangeFacet[];
}

// Faceta de tipo de propiedad
export interface PropertyTypeFacet {
  type: string;
  count: number;
  label: string;
}

// Faceta de provincia
export interface ProvinceFacet {
  province: string;
  count: number;
  label: string;
}

// Faceta de rango de precios
export interface PriceRangeFacet {
  min: number;
  max: number;
  count: number;
  label: string;
}

// Faceta de conteo de habitaciones
export interface BedroomCountFacet {
  bedrooms: number;
  count: number;
  label: string;
}

// Faceta de conteo de baños
export interface BathroomCountFacet {
  bathrooms: number;
  count: number;
  label: string;
}

// Faceta de rango de áreas
export interface AreaRangeFacet {
  min: number;
  max: number;
  count: number;
  label: string;
}

// Estadísticas de propiedades
export interface PropertyStats {
  total_properties: number;
  avg_price: number;
  min_price: number;
  max_price: number;
  avg_sqft: number;
  property_types: PropertyTypeStats[];
  status_counts: PropertyStatusStats[];
  price_distribution: PriceDistribution[];
  area_distribution: AreaDistribution[];
  bedroom_distribution: BedroomDistribution[];
  bathroom_distribution: BathroomDistribution[];
}

// Estadísticas de tipos de propiedad
export interface PropertyTypeStats {
  type: string;
  count: number;
  percentage: number;
  avg_price: number;
}

// Estadísticas de estados de propiedad
export interface PropertyStatusStats {
  status: string;
  count: number;
  percentage: number;
}

// Distribución de precios
export interface PriceDistribution {
  range: string;
  count: number;
  percentage: number;
}

// Distribución de áreas
export interface AreaDistribution {
  range: string;
  count: number;
  percentage: number;
}

// Distribución de habitaciones
export interface BedroomDistribution {
  bedrooms: number;
  count: number;
  percentage: number;
}

// Distribución de baños
export interface BathroomDistribution {
  bathrooms: number;
  count: number;
  percentage: number;
}

// Datos de mapa para propiedades
export interface PropertyMapData {
  id: string;
  title: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  type: string;
  status: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  location: {
    address: string;
    neighborhood: string;
    province: string;
  };
  image_url?: string;
}

// Respuesta de datos de mapa
export interface PropertyMapResponse {
  count: number;
  results: PropertyMapData[];
}

// Oportunidades de inversión
export interface InvestmentOpportunity {
  id: string;
  title: string;
  price: number;
  roi_min: number;
  roi_max: number;
  rental_yield: number;
  demand_index: number;
  ai_score: number;
  investment_grade: string;
  market_trend: string;
  location: {
    province: string;
    neighborhood: string;
  };
  image_url?: string;
}

// Respuesta de oportunidades de inversión
export interface InvestmentOpportunityResponse {
  count: number;
  results: InvestmentOpportunity[];
}

// Propiedades similares
export interface SimilarProperty {
  id: string;
  title: string;
  price: number;
  image_url?: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  type: string;
  similarity_score: number;
}

// Respuesta de propiedades similares
export interface SimilarPropertyResponse {
  property_id: string;
  similar_count: number;
  results: SimilarProperty[];
}

// Eventos de seguimiento de propiedades
export interface PropertyTrackingEvent {
  event_type: "view" | "favorite" | "share" | "inquiry" | "tour_request";
  property_id: string;
  timestamp: string;
  user_id?: string;
  session_id?: string;
  referrer?: string;
  user_agent?: string;
  ip_address?: string;
}

// Respuesta de eventos de seguimiento
export interface PropertyTrackingResponse {
  success: boolean;
  message: string;
  property_id: string;
  event_id?: string;
}

// Preferencias de usuario para propiedades
export interface PropertyUserPreferences {
  favorite_properties: string[];
  saved_searches: PropertySearch[];
  price_alerts: PriceAlert[];
  viewing_history: PropertyViewingHistory[];
  contact_history: PropertyContactHistory[];
  notification_settings: NotificationSettings;
}

// Alertas de precios
export interface PriceAlert {
  id: string;
  property_id: string;
  price_threshold: number;
  price_type: "below" | "above";
  is_active: boolean;
  created_at: string;
}

// Historial de visualización de propiedades
export interface PropertyViewingHistory {
  id: string;
  property_id: string;
  viewed_at: string;
  duration_seconds?: number;
  referrer?: string;
}

// Historial de contacto de propiedades
export interface PropertyContactHistory {
  id: string;
  property_id: string;
  contacted_at: string;
  contact_type: "email" | "phone" | "whatsapp" | "form";
  agent_id?: string;
  status: "pending" | "responded" | "converted";
}

// Configuración de notificaciones
export interface NotificationSettings {
  email_notifications: boolean;
  sms_notifications: boolean;
  push_notifications: boolean;
  price_alerts: boolean;
  new_listings: boolean;
  viewing_reminders: boolean;
  marketing_updates: boolean;
}

// Datos de comparación de propiedades
export interface PropertyComparison {
  properties: Property[];
  comparison_criteria: string[];
  results: ComparisonResult[];
}

// Resultados de comparación
export interface ComparisonResult {
  criterion: string;
  winner: string;
  scores: ComparisonScore[];
}

// Puntuaciones de comparación
export interface ComparisonScore {
  property_id: string;
  score: number;
  details: string;
}

// Reportes de propiedades
export interface PropertyReport {
  id: string;
  name: string;
  type:
    | "market_analysis"
    | "investment_analysis"
    | "performance_report"
    | "compliance_report";
  parameters: object;
  generated_at: string;
  file_url?: string;
  data: object;
}

// Respuesta de reportes
export interface PropertyReportResponse {
  report: PropertyReport;
  status: "generating" | "completed" | "failed";
  download_url?: string;
}

// Formulario de contacto con agente
export interface ContactAgentForm {
  name: string;
  email: string;
  phone: string;
  message: string;
  preferred_contact_method: "email" | "phone" | "whatsapp";
  best_time_to_contact?: string;
  property_id: string;
}

// Formulario de programación de tour
export interface ScheduleTourForm {
  name: string;
  email: string;
  phone: string;
  preferred_date: string;
  preferred_time: string;
  tour_type: "in_person" | "virtual" | "video_call";
  message?: string;
  property_id: string;
}

// Búsqueda de propiedades (alias para compatibilidad)
export interface SearchParams extends PropertyFilters {}

// Bounds del mapa
export interface MapBounds {
  northEast: {
    lat: number;
    lng: number;
  };
  southWest: {
    lat: number;
    lng: number;
  };
}

// Búsqueda guardada
export interface PropertySearch {
  id: string;
  name: string;
  filters: PropertyFilters;
  created_at: string;
  last_used?: string;
  notification_enabled: boolean;
}

// Agente (simplificado para compatibilidad)
export interface Agent {
  id: string;
  name: string;
  email: string;
  phone: string;
  photo?: string;
  agency?: string;
  license?: string;
  specialties: string[];
  languages: string[];
  rating?: number;
  properties_sold: number;
  experience_years?: number;
}

// PaginatedResponse (alias para compatibilidad)
export interface PaginatedResponse<T = any> {
  count: number;
  next?: string;
  previous?: string;
  results: T[];
}
