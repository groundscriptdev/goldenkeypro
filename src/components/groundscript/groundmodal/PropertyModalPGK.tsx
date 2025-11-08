"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Heart, Share2, MapPin, Bed, Bath, Square, DollarSign, Calendar, 
  Phone, Mail, Star, TrendingUp, Home, Camera, FileText, Brain, Scale,
  Car, Wifi, Dumbbell, Waves, Trees, Shield, CheckCircle, ChevronLeft, 
  ChevronRight, Maximize2, User
} from 'lucide-react';

// Importar tipos completos
import { 
  Property, 
  PropertyFinancials, 
  PropertyLocation, 
  PropertyAgent, 
  PropertyMedia, 
  PropertyAnalytics, 
  PropertyLegal, 
  PropertyAI,
  PropertyMarketing
} from '@/types/properties';

interface PropertyModalPGKProps {
  property?: Property;
  isOpen: boolean;
  onClose: () => void;
}

// Datos de ejemplo completos con todos los campos
const completePropertyData: Property = {
  // Campos principales
  id: "1",
  uuid: "582c8c5d-8a95-472c-b708-8af2caea39dc",
  slug: "the-commons-at-greenway-park",
  property_code: "PGK-000002",
  title: "The Commons at Greenway Park",
  subtitle: "Vista espectacular al mar y ciudad",
  type: "APARTMENT",
  subtype: "Luxury Penthouse",
  status: "VENTA",
  visibility: "public",
  bedrooms: 3,
  bathrooms: 2,
  half_baths: 1,
  area_built: 120,
  area_lot: 200,
  parking_spaces: 2,
  construction_year: 2020,
  furnishing: "Amueblado",
  view_type: "Ocean View",
  description: "Hermosa propiedad en ubicación privilegiada con acabados de lujo y vistas impresionantes. Ideal para inversión o residencia. Esta propiedad ofrece una combinación perfecta de lujo, comodidad y ubicación estratégica con acceso a todas las amenidades modernas.",
  features: [
    "Aire acondicionado central",
    "Piscina infinita",
    "Gimnasio equipado",
    "Seguridad 24/7",
    "Terraza privada",
    "Cocina gourmet",
    "Sala de cine",
    "Wine cellar"
  ],
  tags: [
    "Pet-friendly", 
    "In-unit laundry", 
    "Parking", 
    "Gym",
    "Ocean View",
    "Luxury",
    "Smart Home",
    "Eco-friendly"
  ],
  created_at: "2024-01-15T10:30:00Z",
  updated_at: "2024-11-08T14:12:55Z",
  published_at: "2024-01-15T10:30:00Z",

  // Campos de compatibilidad
  price: 450000,
  image_url: null,
  roi: "8.5%",

  // Información financiera completa
  financials: {
    id: "fin-001",
    property: "1",
    price: 450000,
    currency: "USD",
    previous_price: 480000,
    discount_percent: 6.25,
    hoa_fee: 250,
    annual_tax: 3500,
    mortgage_available: true,
    rental_yield_gross: 8.5,
    rental_yield_net: 6.8,
    roi_projected_min: 8.0,
    roi_projected_max: 12.0,
    cap_rate: 7.2,
    cashflow_projection_json: {
      year1: 25000,
      year2: 27000,
      year3: 29000,
      year4: 31000,
      year5: 34000
    },
    tokenized_investment_available: true,
    token_price_usd: 500,
    min_investment_usd: 2500,
    financing_terms: "30-year fixed at 4.5%",
    created_at: "2024-01-15T10:30:00Z",
    updated_at: "2024-11-08T14:12:55Z",
    price_formatted: "$450,000",
    roi_range: "8-12%",
    has_discount: true,
    discount_amount: 30000,
    is_good_investment: true,
    monthly_cashflow: 2083
  },

  // Ubicación completa
  location: {
    id: "loc-001",
    property: "1",
    address_full: "175 NW Common Pl, Waukee, IA 50263, Panama City, Panama",
    neighborhood: "Punta Pacifica",
    district: "San Francisco",
    province: "Panamá",
    country: "Panamá",
    latitude: 8.987,
    longitude: -79.511,
    walk_score: 85,
    transit_score: 78,
    distance_to_airport_km: 15,
    distance_to_beach_km: 2,
    distance_to_city_center_km: 5,
    distance_to_hospital_km: 3,
    distance_to_school_km: 1,
    flood_risk: "Low",
    seismic_zone: "Zone 3",
    zoning_type: "Residential High-Density",
    nearby_amenities: [
      "Shopping Mall",
      "Hospital",
      "International School",
      "Restaurants",
      "Banks",
      "Pharmacy"
    ],
    public_transportation: [
      "Metro Station",
      "Bus Stop",
      "Taxi Stand"
    ],
    description: "Prime residential area with excellent connectivity and amenities",
    created_at: "2024-01-15T10:30:00Z",
    updated_at: "2024-11-08T14:12:55Z",
    full_address: "175 NW Common Pl, Waukee, IA 50263, Panama City, Panama",
    coordinates: [8.987, -79.511],
    has_coordinates: true,
    walk_score_rating: "Very Walkable",
    transit_score_rating: "Excellent Transit",
    is_prime_location: true,
    is_beach_front: false,
    is_city_center: false
  },

  // Media completa
  media: {
    id: "med-001",
    property: "1",
    image_cover: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753376-12c8ac737936?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600047509358-9dc75557da31?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00a18b5b3f1a?w=800&h=600&fit=crop"
    ],
    video_tour_url: "https://example.com/video-tour",
    virtual_tour_url: "https://example.com/virtual-tour",
    floor_plan_pdf: "https://example.com/floor-plan.pdf",
    brochure_pdf: "https://example.com/brochure.pdf",
    drone_shots: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop"
    ],
    night_photos: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"
    ],
    interior_photos: [
      "https://images.unsplash.com/photo-1600566753376-12c8ac737936?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600047509358-9dc75557da31?w=800&h=600&fit=crop"
    ],
    exterior_photos: [
      "https://images.unsplash.com/photo-1600566753086-00a18b5b3f1a?w=800&h=600&fit=crop"
    ],
    neighborhood_video: "https://example.com/neighborhood",
    drone_video: "https://example.com/drone-footage",
    total_images: 8,
    total_videos: 3,
    has_virtual_tour: true,
    has_floor_plan: true,
    media_quality_score: 95,
    last_media_update: "2024-11-01T10:00:00Z",
    created_at: "2024-01-15T10:30:00Z",
    updated_at: "2024-11-08T14:12:55Z",
    all_images: [
      { url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop", type: "cover", description: "Main view" },
      { url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop", type: "interior", description: "Living room" }
    ],
    all_videos: [
      { url: "https://example.com/video-tour", type: "tour", description: "Property tour" }
    ],
    has_rich_media: true,
    media_completeness_score: 92,
    is_media_complete: true
  },

  // Agente completo
  agent: {
    id: "agent-001",
    property: "1",
    agent_name: "Carlos Rodríguez",
    agent_phone: "+507 6000-0000",
    agent_email: "carlos.rodriguez@pgk.com",
    agent_license: "License #12345",
    agent_photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    agent_bio: "Especialista en propiedades de lujo con más de 10 años de experiencia en el mercado panameño.",
    agency_name: "Panama Golden Key Realty",
    agency_logo: "https://example.com/agency-logo.png",
    agency_website: "https://pgk.com",
    agency_phone: "+507 8000-0000",
    agency_email: "info@pgk.com",
    commission_percent: 3,
    commission_fixed: undefined,
    commission_type: "percentage",
    specialties: ["Luxury Properties", "Investment Properties", "Beach Front"],
    years_experience: 12,
    languages_spoken: ["Español", "English", "Português"],
    whatsapp_number: "+507 6000-0000",
    linkedin_profile: "https://linkedin.com/in/carlosrodriguez",
    instagram_profile: "https://instagram.com/carlosrodriguez",
    facebook_profile: "https://facebook.com/carlosrodriguez",
    available_days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    working_hours: { start: "09:00", end: "18:00" },
    response_time_hours: 2,
    properties_sold: 156,
    average_sale_time_days: 45,
    client_satisfaction_score: 4.8,
    is_active: true,
    created_at: "2024-01-15T10:30:00Z",
    updated_at: "2024-11-08T14:12:55Z",
    full_contact_info: {
      name: "Carlos Rodríguez",
      phone: "+507 6000-0000",
      email: "carlos.rodriguez@pgk.com",
      whatsapp: "+507 6000-0000",
      agency: {
        name: "Panama Golden Key Realty",
        phone: "+507 8000-0000",
        email: "info@pgk.com",
        website: "https://pgk.com"
      }
    },
    social_media_profiles: {
      linkedin: "https://linkedin.com/in/carlosrodriguez",
      instagram: "https://instagram.com/carlosrodriguez",
      facebook: "https://facebook.com/carlosrodriguez"
    },
    has_social_media: true,
    commission_info: "3% of sale price",
    experience_level: "Senior",
    is_top_agent: true,
    response_quality: "Excellent"
  },

  // Información legal completa
  legal: {
    id: "legal-001",
    property: "1",
    title_deed_number: "TD-2024-001234",
    title_deed_date: "2020-03-15",
    registry_book: "Book 45",
    registry_page: "Page 123",
    registry_number: "RG-2020-0456",
    registry_link: "https://registro-publico.gob.pa/td-2024-001234",
    cadastral_link: "https://catastro.gob.pa/prop-001",
    gis_link: "https://sig.gob.pa/prop-001",
    due_diligence_status: "Completed",
    due_diligence_date: "2024-01-10T00:00:00Z",
    due_diligence_summary: "All legal documents verified and in order. No encumbrances found.",
    legal_owner_name: "Panama Golden Key Investments S.A.",
    legal_owner_type: "Corporation",
    company_id: "2024-12345-6-7890",
    tax_id: "2024-12345-6-7890",
    mortgage_status: "Clear",
    mortgage_amount: 0,
    mortgage_lender: undefined,
    liens_encumbrances: [],
    restrictions: ["Residential use only"],
    easements: ["Utility access"],
    zoning_restrictions: "Residential High-Density",
    building_permit_number: "BP-2020-0789",
    building_permit_date: "2020-01-15T00:00:00Z",
    occupancy_permit_number: "OP-2020-0456",
    occupancy_permit_date: "2020-03-15T00:00:00Z",
    documents: [
      { type: "title_deed", url: "https://example.com/title-deed.pdf", description: "Property Title Deed" },
      { type: "survey", url: "https://example.com/survey.pdf", description: "Property Survey" }
    ],
    title_insurance: "Insured by First American Title",
    survey_document: "https://example.com/survey.pdf",
    property_tax_status: "Current",
    property_tax_arrears: 0,
    created_at: "2024-01-15T10:30:00Z",
    updated_at: "2024-11-08T14:12:55Z",
    last_verified_date: "2024-11-01T00:00:00Z",
    has_clear_title: true,
    has_legal_issues: false,
    is_legally_compliant: true,
    legal_completeness_score: 98,
    risk_level: "Low"
  },

  // Analítica completa
  analytics: {
    id: "analytics-001",
    property: "1",
    views_count: 2547,
    unique_views_count: 1823,
    views_today: 45,
    views_this_week: 312,
    views_this_month: 1245,
    leads_count: 89,
    qualified_leads_count: 34,
    share_count: 156,
    favorite_count: 78,
    inquiry_count: 45,
    tour_requests_count: 12,
    conversion_rate: 3.5,
    lead_to_view_ratio: 0.035,
    view_to_favorite_ratio: 0.031,
    demand_index: 8.5,
    market_interest_score: 92,
    time_on_market_days: 45,
    price_vs_market_avg: 5.2,
    views_vs_similar_avg: 15.3,
    engagement_vs_avg: 22.7,
    website_views: 1234,
    portal_views: 890,
    social_media_views: 345,
    email_views: 234,
    direct_views: 156,
    peak_viewing_hour: 19,
    peak_viewing_day: "Sunday",
    views_by_country: { "Panama": 1845, "United States": 456, "Canada": 123, "Spain": 89, "Mexico": 34 },
    views_by_city: { "Panama City": 1456, "San Miguelito": 234, "David": 123, "Colón": 89, "Santiago": 45 },
    views_by_device: { "mobile": 1234, "desktop": 987, "tablet": 326 },
    quality_score: 94,
    completeness_score: 96,
    appeal_score: 91,
    trending_score: 87,
    momentum_score: 82,
    viral_coefficient: 0.15,
    created_at: "2024-01-15T10:30:00Z",
    updated_at: "2024-11-08T14:12:55Z",
    last_analyzed_date: "2024-11-08T00:00:00Z",
    total_views: 2547,
    engagement_rate: 8.7,
    lead_quality_rate: 38.2,
    performance_tier: "Premium",
    is_trending: true,
    is_high_demand: true,
    is_underperforming: false
  },

  // IA completa
  ai: {
    id: "ai-001",
    property: "1",
    ai_investment_score: 92,
    ai_rental_score: 88,
    ai_appreciation_score: 85,
    ai_lifestyle_score: 90,
    ai_location_score: 94,
    ai_description_long: "Esta propiedad de lujo en Punta Pacifica representa una oportunidad excepcional de inversión. Con vistas impresionantes al océano y acabados de alta calidad, ofrece un rendimiento potencial del 8-12% anual. La ubicación estratégica proporciona acceso fácil a centros comerciales, hospitales de clase mundial y el distrito financiero.",
    ai_summary_short: "Propiedad de lujo con alto potencial de inversión en ubicación premium.",
    ai_highlights: [
      "Alto rendimiento de inversión (8-12% anual)",
      "Ubicación premium con vistas al océano",
      "Acabados de lujo y amenidades modernas",
      "Fuerte demanda de alquiler en la zona"
    ],
    ai_tagline: "Lujo, Vista e Inversión Inteligente",
    ai_recommendation_reason: "Combinación perfecta de ubicación premium, calidad constructiva y potencial de apreciación.",
    ai_target_audience: ["Investors", "High-net-worth individuals", "Expatriates", "Retirees"],
    ai_improvement_suggestions: [
      "Actualizar sistema de domótica",
      "Instalar paneles solares",
      "Mejorar eficiencia energética"
    ],
    ai_marketing_angles: [
      "Ocean View Luxury Living",
      "Smart Investment Opportunity",
      "Premium Panama Lifestyle"
    ],
    market_trend_prediction: 12.5,
    price_appreciation_1yr: 8.5,
    price_appreciation_5yr: 45.2,
    rental_demand_forecast: 92,
    comparables: [
      { id: "comp-1", title: "Ocean Tower Penthouse", price: 480000, similarity_score: 89, differences: ["Higher price", "Smaller area"] },
      { id: "comp-2", title: "Pacific Heights Residence", price: 420000, similarity_score: 85, differences: ["No ocean view", "Older building"] }
    ],
    similar_properties: [],
    market_comparables: {},
    sentiment_analysis: { positive: 0.78, neutral: 0.18, negative: 0.04 },
    market_sentiment: "Positive",
    investment_risk_level: "Low",
    risk_factors: ["Market volatility", "Interest rate changes"],
    mitigation_strategies: ["Diversification", "Long-term holding"],
    competitiveness_score: 91,
    market_position: "Top 10%",
    ai_insights: [
      { priority: "high", title: "High Investment Potential", description: "Strong ROI indicators", impact_score: 92 },
      { priority: "medium", title: "Market Timing", description: "Current market conditions favorable", impact_score: 78 }
    ],
    hidden_opportunities: ["Short-term rental potential", "Value appreciation through renovations"],
    value_add_potential: { renovation_roi: 25, timeline_months: 6 },
    ai_model_version: "v2.1.0",
    ai_confidence_score: 94,
    ai_processing_time_ms: 1250,
    last_ai_analysis: "2024-11-08T00:00:00Z",
    created_at: "2024-01-15T10:30:00Z",
    updated_at: "2024-11-08T14:12:55Z",
    overall_ai_score: 90,
    investment_grade: "A+",
    is_ai_recommended: true,
    has_positive_outlook: true,
    risk_reward_ratio: 3.2,
    market_timing_advice: "Buy now - market conditions optimal"
  },

  // Marketing completo
  marketing: {
    id: "mkt-001",
    property: "1",
    utm_source: "google",
    utm_campaign: "luxury-properties",
    utm_medium: "cpc",
    utm_content: "panama-luxury",
    utm_term: "luxury apartments panama",
    tags_marketing: ["luxury", "investment", "ocean-view", "penthouse"],
    target_segments: ["High-net-worth individuals", "Investors", "Expats"],
    buyer_personas: ["Luxury Seeker", "Smart Investor", "International Buyer"],
    funnel_stage: "consideration",
    funnel_substage: "property_comparison",
    funnel_score: 75,
    marketing_spend: 2500,
    cost_per_lead: 28.09,
    cost_per_acquisition: 1250,
    marketing_roi: 360,
    active_channels: ["Google Ads", "Facebook", "Instagram", "Zillow", "Local MLS"],
    channel_performance: { "Google Ads": 45, "Facebook": 25, "Instagram": 20, "Zillow": 10 },
    best_performing_channel: "Google Ads",
    leads_count: 89,
    qualified_leads: 34,
    converted_leads: 2,
    lost_leads: 32,
    last_lead_contact_date: "2024-11-07T10:30:00Z",
    next_follow_up_date: "2024-11-10T10:30:00Z",
    follow_up_count: 3,
    crm_notes: "Highly interested in investment potential, requested financial details",
    crm_priority: "High",
    crm_assigned_to: "Carlos Rodríguez",
    competitor_analysis: {},
    competitive_advantages: ["Ocean view", "Premium location", "Luxury amenities"],
    market_positioning: "Premium luxury investment property",
    marketing_strategy: "Multi-channel digital marketing with focus on investment returns",
    value_proposition: "Luxury oceanfront living with strong investment returns",
    unique_selling_points: ["360° ocean views", "Smart home technology", "Premium amenities"],
    content_engagement: {},
    social_media_metrics: {},
    email_campaign_metrics: {},
    ab_test_results: [],
    optimization_suggestions: ["Increase video content", "Target international markets"],
    conversion_rate_optimization: 3.5,
    seasonal_performance: {},
    best_listing_months: ["December", "January", "February"],
    market_timing_score: 88,
    created_at: "2024-01-15T10:30:00Z",
    updated_at: "2024-11-08T14:12:55Z",
    last_marketing_review: "2024-11-01T00:00:00Z",
    conversion_rate: 2.25,
    qualification_rate: 38.2,
    lead_loss_rate: 35.9,
    funnel_health_score: 72,
    marketing_efficiency: "Good",
    is_hot_property: true,
    needs_marketing_attention: false,
    days_since_last_contact: 1
  },

  // Propiedades calculadas
  total_bathrooms: 2.5,
  price_per_sqmt: 3750,
  is_new: false,
  is_featured: true
};

const PropertyModalPGK: React.FC<PropertyModalPGKProps> = ({ 
  property = completePropertyData, 
  isOpen, 
  onClose 
}) => {
  const [activeSection, setActiveSection] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [isImageTransitioning, setIsImageTransitioning] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const images = property.media?.gallery || [];
  const currentImage = images[currentImageIndex];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle scroll to detect active section
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;
      
      const container = scrollContainerRef.current;
      const scrollPosition = container.scrollTop + 100; // Offset for better detection
      
      // Find the section that is currently in view
      const sectionElements = container.querySelectorAll('[data-section]');
      
      sectionElements.forEach((element) => {
        const sectionId = element.getAttribute('data-section');
        const htmlElement = element as HTMLElement;
        const elementTop = htmlElement.offsetTop;
        const elementBottom = elementTop + htmlElement.offsetHeight;
        
        if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
          setActiveSection(sectionId || 'overview');
        }
      });
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll(); // Check initial position
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const targetElement = container.querySelector(`[data-section="${sectionId}"]`);
    
    if (targetElement) {
      // Actualizar el estado activeSection inmediatamente al hacer clic
      setActiveSection(sectionId);
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleNextImage = () => {
    setIsImageTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
      setIsImageTransitioning(false);
    }, 150);
  };

  const handlePrevImage = () => {
    setIsImageTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
      setIsImageTransitioning(false);
    }, 150);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: property.title,
        text: property.subtitle,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    setShowContactForm(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const sections = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'financials', label: 'Financials', icon: DollarSign },
    { id: 'location', label: 'Location', icon: MapPin },
   /*  { id: 'agent', label: 'Agent', icon: User }, */
    { id: 'media', label: 'Media', icon: Camera },
    { id: 'legal', label: 'Legal', icon: Scale }
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-white rounded-lg shadow-2xl max-w-7xl w-full max-h-[95vh] overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with Image Carousel - Doble altura */}
          <div className="relative h-[1200px] md:h-[1600px] bg-gray-100 overflow-hidden">
            
            {/* Barra negra con blur absoluta sobre el carrusel */}
            <div
              className="absolute top-0 left-0 right-0 text-white px-6 py-4 z-20"
              style={{
                background: '#000000c7',
                backdropFilter: 'blur(30px)'
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <Home className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-xs font-medium text-emerald-100">{property.property_code}</span>
                    <span className="px-2 py-0.5 bg-white/20 rounded-full text-xs font-medium">
                      {property.status}
                    </span>
                    <span className="text-emerald-100 text-sm">•</span>
                    <span className="text-emerald-100 text-sm">{property.type}</span>
                    <span className="text-emerald-100 text-sm">•</span>
                    <span className="text-emerald-100 text-sm">{property.location?.neighborhood || 'Panama City'}, {property.location?.province || 'Panama'}</span>
                  </div>
                  <h2 className="text-xl font-bold text-white mt-1 truncate">{property.title} • {property.subtitle}</h2>
                </div>
                
                {/* Controles a la derecha */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-white'}`} />
                  </button>
                  <button
                    onClick={handleShare}
                    className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <Share2 className="w-5 h-5 text-white" />
                  </button>
                  <button
                    onClick={onClose}
                    className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
            {currentImage && (
              <motion.img
                key={currentImageIndex}
                src={currentImage}
                alt={property.title}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{
                  opacity: isImageTransitioning ? 0 : 1,
                  scale: isImageTransitioning ? 0.95 : 1
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            )}
            

            {/* Image Navigation */}
            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors z-10"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors z-10"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>
              </>
            )}

            {/* Image Counter */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full flex items-center gap-2 z-10">
                <Camera className="w-4 h-4" />
                <span className="text-sm">
                  {currentImageIndex + 1} / {images.length}
                </span>
              </div>
            )}

            {/* Price and Status Overlay */}
            <div
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 backdrop-blur-[30px] rounded-lg p-4 shadow-lg z-10"
              style={{
                background: '#00000085'
              }}
            >
              <div className="text-center">
                <h2 className="text-2xl font-bold" style={{ color: 'rgb(255, 206, 58)' }}>
                  {formatPrice(property.financials?.price || property.price || 450000)}
                </h2>
                <div className="flex items-center justify-center mt-1">
                  <MapPin className="w-4 h-4 mr-1" style={{ color: '#E8F5E8' }} />
                  <span className="text-sm" style={{ color: '#E8F5E8' }}>
                    {property.location?.address_full || property.location?.neighborhood || 'Panama City'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="sticky top-0 bg-white border-b border-gray-200 z-10 mx-auto">
            <div className="flex overflow-x-auto scrollbar-hide">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`flex items-center space-x-2 px-4 py-3 border-b-2 transition-colors whitespace-nowrap ${
                      activeSection === section.id
                        ? 'border-jade text-jade bg-jade/5'
                        : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{section.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Scrollable Content */}
          <div
            ref={scrollContainerRef}
            className="flex-1 overflow-y-auto bg-white relative"
          >
            <div className="grid md:grid-cols-3 gap-6 p-6">
              {/* Main Content - 2/3 del ancho */}
              <div className="md:col-span-2 space-y-6 pr-0 md:pr-6">
                {/* Overview Section */}
                <section data-section="overview" className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900">Descripción</h3>
                    <div className="flex gap-2">
                      {property.status && (
                        <span className="px-3 py-1 bg-jade text-white rounded-full text-sm font-semibold">
                          {property.status === "VENTA" ? "En Venta" : "Alquiler"}
                        </span>
                      )}
                      <span className="px-3 py-1 border border-jade text-jade rounded-full text-sm font-semibold">
                        {property.type}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed">{property.description}</p>
                  
                  {/* Quick Stats */}
                  <div className="grid grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-gray-700 mb-1">
                        <Bed className="w-4 h-4" />
                        <span className="font-semibold text-lg">{property.bedrooms}</span>
                      </div>
                      <span className="text-sm text-gray-600">Habitaciones</span>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-gray-700 mb-1">
                        <Bath className="w-4 h-4" />
                        <span className="font-semibold text-lg">{property.bathrooms}</span>
                      </div>
                      <span className="text-sm text-gray-600">Baños</span>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-gray-700 mb-1">
                        <Square className="w-4 h-4" />
                        <span className="font-semibold text-lg">{property.area_built}</span>
                      </div>
                      <span className="text-sm text-gray-600">m²</span>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-gray-700 mb-1">
                        <Car className="w-4 h-4" />
                        <span className="font-semibold text-lg">{property.parking_spaces}</span>
                      </div>
                      <span className="text-sm text-gray-600">Estacionamiento</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Características</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {property.features?.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-jade" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Etiquetas</h4>
                    <div className="flex flex-wrap gap-2">
                      {property.tags?.map((tag, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Financials Section */}
                <section data-section="financials" className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">Información Financiera</h3>
                  
                  <div className="bg-gradient-to-r from-jade to-jade/80 p-6 rounded-xl text-white">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm opacity-90">Precio</p>
                        <p className="text-2xl font-bold">
                          {formatPrice(property.financials?.price || property.price || 0)}
                        </p>
                        {property.financials?.has_discount && (
                          <p className="text-sm line-through opacity-75">
                            {formatPrice(property.financials.previous_price || 0)}
                          </p>
                        )}
                      </div>
                      <div>
                        <p className="text-sm opacity-90">Rendimiento de alquiler</p>
                        <p className="text-2xl font-bold">
                          {property.financials?.rental_yield_gross || property.roi}%
                        </p>
                      </div>
                      <div>
                        <p className="text-sm opacity-90">ROI Proyectado</p>
                        <p className="text-xl font-bold">
                          {property.financials?.roi_range || "8-12%"}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm opacity-90">Cap Rate</p>
                        <p className="text-xl font-bold">
                          {property.financials?.cap_rate || 7.2}%
                        </p>
                      </div>
                    </div>
                  </div>

                  {property.financials?.tokenized_investment_available && (
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Inversión Tokenizada</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-600">Precio por token</p>
                          <p className="text-xl font-bold text-jade">
                            ${property.financials.token_price_usd}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Inversión mínima</p>
                          <p className="text-xl font-bold text-jade">
                            ${property.financials.min_investment_usd}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </section>

                {/* Location Section */}
                <section data-section="location" className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">Ubicación</h3>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-center gap-2 mb-4">
                      <MapPin className="w-5 h-5 text-jade" />
                      <h4 className="text-lg font-semibold text-gray-900">
                        {property.location?.address_full}
                      </h4>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-600">Barrio</p>
                        <p className="font-semibold">{property.location?.neighborhood}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Distrito</p>
                        <p className="font-semibold">{property.location?.district}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Provincia</p>
                        <p className="font-semibold">{property.location?.province}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Walk Score</p>
                        <p className="font-semibold">{property.location?.walk_score}/100</p>
                      </div>
                    </div>

                    <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                      <MapPin className="w-8 h-8 text-gray-400" />
                      <span className="ml-2 text-gray-500">Mapa interactivo</span>
                    </div>
                  </div>
                </section>

                {/* Media Section */}
                <section data-section="media" className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">Galería Completa</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {images.map((image, index) => (
                      <motion.div
                        key={index}
                        className={`aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer relative ${
                          currentImageIndex === index ? 'ring-2 ring-emerald-500' : ''
                        }`}
                        onClick={() => {
                          setIsImageTransitioning(true);
                          setTimeout(() => {
                            setCurrentImageIndex(index);
                            setIsImageTransitioning(false);
                          }, 150);
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        <img
                          src={image}
                          alt={`Property image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        {currentImageIndex === index && (
                          <div className="absolute inset-0 bg-emerald-500/20 flex items-center justify-center">
                            <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                              <Camera className="w-4 h-4 text-white" />
                            </div>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </section>


                {/* Legal Section */}
                <section data-section="legal" className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">Información Legal</h3>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-600">Número de escritura</p>
                        <p className="font-semibold">{property.legal?.title_deed_number}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Propietario legal</p>
                        <p className="font-semibold">{property.legal?.legal_owner_name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Estado del título</p>
                        <p className="font-semibold text-green-600">
                          {property.legal?.has_clear_title ? "Libre de gravámenes" : "Con restricciones"}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Nivel de riesgo</p>
                        <p className="font-semibold">{property.legal?.risk_level}</p>
                      </div>
                    </div>
                  </div>
                </section>

              </div>

              {/* Sidebar Flotante - 1/3 del ancho */}
              <div className="hidden md:block md:col-span-1">
                <div className="sticky top-6 space-y-6">
                {/* Contact Card */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Contactar Agente</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-jade rounded-full flex items-center justify-center">
                      {property.agent?.agent_photo ? (
                        <img 
                          src={property.agent.agent_photo} 
                          alt={property.agent.agent_name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                      ) : (
                        <User className="w-8 h-8 text-white" />
                      )}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {property.agent?.agent_name || "Agente Inmobiliario"}
                      </div>
                      <div className="text-sm text-gray-600">
                        {property.agent?.agency_name || "Panama Golden Key Realty"}
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm text-gray-600">
                          {property.agent?.client_satisfaction_score || 4.8} ({property.agent?.properties_sold || 156} ventas)
                        </span>
                      </div>
                    </div>
                  </div>

                  {!showContactForm ? (
                    <div className="space-y-3">
                      <button
                        className="w-full bg-jade text-white py-3 px-6 rounded-xl font-semibold hover:bg-jade/90 transition-colors"
                        onClick={() => setShowContactForm(true)}
                      >
                        <Mail className="w-4 h-4 mr-2 inline" />
                        Contactar Agente
                      </button>
                      <button
                        className="w-full border border-jade text-jade py-3 px-6 rounded-xl font-semibold hover:bg-jade hover:text-white transition-colors"
                      >
                        <Phone className="w-4 h-4 mr-2 inline" />
                        {property.agent?.agent_phone || "+507 6000-0000"}
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-3">
                      <input
                        type="text"
                        name="name"
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jade"
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Tu email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jade"
                        required
                      />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Tu teléfono"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jade"
                      />
                      <textarea
                        name="message"
                        placeholder="Mensaje (opcional)"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jade"
                      />
                      <div className="flex gap-2">
                        <button
                          type="submit"
                          className="flex-1 bg-jade text-white py-2 px-4 rounded-lg font-semibold hover:bg-jade/90 transition-colors"
                        >
                          Enviar mensaje
                        </button>
                        <button
                          type="button"
                          onClick={() => setShowContactForm(false)}
                          className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                        >
                          Cancelar
                        </button>
                      </div>
                    </form>
                  )}
                </div>

                {/* Property Facts */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Información de la Propiedad</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tipo de propiedad</span>
                      <span className="font-medium text-gray-900">{property.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Año de construcción</span>
                      <span className="font-medium text-gray-900">{property.construction_year || "N/A"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Estado</span>
                      <span className="font-medium text-gray-900">
                        {property.status === "VENTA" ? "En Venta" : "Alquiler"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Listado</span>
                      <span className="font-medium text-gray-900">
                        {new Date(property.created_at).toLocaleDateString("es-ES", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Precio por m²</span>
                      <span className="font-medium text-gray-900">
                        ${property.price_per_sqmt?.toLocaleString() || "N/A"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Amenities */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Amenidades</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: <Car className="w-5 h-5" />, label: "Estacionamiento" },
                      { icon: <Wifi className="w-5 h-5" />, label: "Internet alta velocidad" },
                      { icon: <Dumbbell className="w-5 h-5" />, label: "Gimnasio" },
                      { icon: <Waves className="w-5 h-5" />, label: "Piscina" },
                      { icon: <Trees className="w-5 h-5" />, label: "Áreas verdes" },
                      { icon: <Shield className="w-5 h-5" />, label: "Seguridad 24/7" },
                    ].map((amenity, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="text-jade">{amenity.icon}</div>
                        <span className="text-sm text-gray-700">{amenity.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Save Property */}
                <button
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-colors ${
                    isFavorite 
                      ? "bg-red-50 border border-red-200 text-red-600" 
                      : "border border-jade text-jade hover:bg-jade hover:text-white"
                  }`}
                  onClick={() => setIsFavorite(!isFavorite)}
                >
                  <Heart className={`w-4 h-4 mr-2 inline ${isFavorite ? 'fill-current' : ''}`} />
                  {isFavorite ? "Propiedad Guardada" : "Guardar Propiedad"}
                </button>
                </div>
              </div>

              {/* Sidebar para móvil - Normal */}
              <div className="md:hidden space-y-6">
                {/* Contact Card */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Contactar Agente</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-jade rounded-full flex items-center justify-center">
                      {property.agent?.agent_photo ? (
                        <img
                          src={property.agent.agent_photo}
                          alt={property.agent.agent_name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                      ) : (
                        <User className="w-8 h-8 text-white" />
                      )}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {property.agent?.agent_name || "Agente Inmobiliario"}
                      </div>
                      <div className="text-sm text-gray-600">
                        {property.agent?.agency_name || "Panama Golden Key Realty"}
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm text-gray-600">
                          {property.agent?.client_satisfaction_score || 4.8} ({property.agent?.properties_sold || 156} ventas)
                        </span>
                      </div>
                    </div>
                  </div>

                  {!showContactForm ? (
                    <div className="space-y-3">
                      <button
                        className="w-full bg-jade text-white py-3 px-6 rounded-xl font-semibold hover:bg-jade/90 transition-colors"
                        onClick={() => setShowContactForm(true)}
                      >
                        <Mail className="w-4 h-4 mr-2 inline" />
                        Contactar Agente
                      </button>
                      <button
                        className="w-full border border-jade text-jade py-3 px-6 rounded-xl font-semibold hover:bg-jade hover:text-white transition-colors"
                      >
                        <Phone className="w-4 h-4 mr-2 inline" />
                        {property.agent?.agent_phone || "+507 6000-0000"}
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-3">
                      <input
                        type="text"
                        name="name"
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jade"
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Tu email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jade"
                        required
                      />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Tu teléfono"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jade"
                      />
                      <textarea
                        name="message"
                        placeholder="Mensaje (opcional)"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jade"
                      />
                      <div className="flex gap-2">
                        <button
                          type="submit"
                          className="flex-1 bg-jade text-white py-2 px-4 rounded-lg font-semibold hover:bg-jade/90 transition-colors"
                        >
                          Enviar mensaje
                        </button>
                        <button
                          type="button"
                          onClick={() => setShowContactForm(false)}
                          className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                        >
                          Cancelar
                        </button>
                      </div>
                    </form>
                  )}
                </div>

                {/* Property Facts */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Información de la Propiedad</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tipo de propiedad</span>
                      <span className="font-medium text-gray-900">{property.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Año de construcción</span>
                      <span className="font-medium text-gray-900">{property.construction_year || "N/A"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Estado</span>
                      <span className="font-medium text-gray-900">
                        {property.status === "VENTA" ? "En Venta" : "Alquiler"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Listado</span>
                      <span className="font-medium text-gray-900">
                        {new Date(property.created_at).toLocaleDateString("es-ES", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Precio por m²</span>
                      <span className="font-medium text-gray-900">
                        ${property.price_per_sqmt?.toLocaleString() || "N/A"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Amenities */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Amenidades</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: <Car className="w-5 h-5" />, label: "Estacionamiento" },
                      { icon: <Wifi className="w-5 h-5" />, label: "Internet alta velocidad" },
                      { icon: <Dumbbell className="w-5 h-5" />, label: "Gimnasio" },
                      { icon: <Waves className="w-5 h-5" />, label: "Piscina" },
                      { icon: <Trees className="w-5 h-5" />, label: "Áreas verdes" },
                      { icon: <Shield className="w-5 h-5" />, label: "Seguridad 24/7" },
                    ].map((amenity, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="text-jade">{amenity.icon}</div>
                        <span className="text-sm text-gray-700">{amenity.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Save Property */}
                <button
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-colors ${
                    isFavorite
                      ? "bg-red-50 border border-red-200 text-red-600"
                      : "border border-jade text-jade hover:bg-jade hover:text-white"
                  }`}
                  onClick={() => setIsFavorite(!isFavorite)}
                >
                  <Heart className={`w-4 h-4 mr-2 inline ${isFavorite ? 'fill-current' : ''}`} />
                  {isFavorite ? "Propiedad Guardada" : "Guardar Propiedad"}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PropertyModalPGK;