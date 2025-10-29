"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  country: string;
  investmentType: string;
  investmentAmount: string;
  timeline: string;
  message: string;
  consent: boolean;
  newsletter: boolean;
}

interface ContactFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  country?: string;
  investmentType?: string;
  investmentAmount?: string;
  timeline?: string;
  message?: string;
  consent?: string;
  newsletter?: string;
}

interface FormField {
  name: keyof ContactFormData;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
  options?: { value: string; label: string }[];
}

export function ContactForm() {
  const t = useTranslations("contact_form");

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    country: "",
    investmentType: "",
    investmentAmount: "",
    timeline: "",
    message: "",
    consent: false,
    newsletter: false,
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const investmentTypes = [
    { value: "residency", label: t("investment_types.residency") },
    { value: "real_estate", label: t("investment_types.real_estate") },
    { value: "medical_tourism", label: t("investment_types.medical_tourism") },
    { value: "infrastructure", label: t("investment_types.infrastructure") },
    { value: "other", label: t("investment_types.other") },
  ];

  const investmentAmounts = [
    { value: "under_100k", label: t("investment_amounts.under_100k") },
    { value: "100k_300k", label: t("investment_amounts.100k_300k") },
    { value: "300k_500k", label: t("investment_amounts.300k_500k") },
    { value: "500k_1m", label: t("investment_amounts.500k_1m") },
    { value: "over_1m", label: t("investment_amounts.over_1m") },
  ];

  const timelines = [
    { value: "immediately", label: t("timelines.immediately") },
    { value: "1_3_months", label: t("timelines.1_3_months") },
    { value: "3_6_months", label: t("timelines.3_6_months") },
    { value: "6_12_months", label: t("timelines.6_12_months") },
    { value: "over_1_year", label: t("timelines.over_1_year") },
  ];

  const countries = [
    { value: "china", label: t("countries.china") },
    { value: "hong_kong", label: t("countries.hong_kong") },
    { value: "taiwan", label: t("countries.taiwan") },
    { value: "singapore", label: t("countries.singapore") },
    { value: "malaysia", label: t("countries.malaysia") },
    { value: "other", label: t("countries.other") },
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // Clear error for this field when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: ContactFormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = t("errors.name_required");
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = t("errors.email_required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("errors.email_invalid");
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = t("errors.phone_required");
    }

    // Country validation
    if (!formData.country) {
      newErrors.country = t("errors.country_required");
    }

    // Investment type validation
    if (!formData.investmentType) {
      newErrors.investmentType = t("errors.investment_type_required");
    }

    // Investment amount validation
    if (!formData.investmentAmount) {
      newErrors.investmentAmount = t("errors.investment_amount_required");
    }

    // Timeline validation
    if (!formData.timeline) {
      newErrors.timeline = t("errors.timeline_required");
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = t("errors.message_required");
    }

    // Consent validation
    if (!formData.consent) {
      newErrors.consent = t("errors.consent_required");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // In a real implementation, this would be an API call
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitError(t("errors.submission_failed"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      country: "",
      investmentType: "",
      investmentAmount: "",
      timeline: "",
      message: "",
      consent: false,
      newsletter: false,
    });
    setErrors({});
    setIsSubmitted(false);
    setSubmitError(null);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-jade-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-jade-green" />
          </div>
          <h3 className="text-2xl font-brand text-jade-green font-bold mb-4">
            {t("success_title")}
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            {t("success_message")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={resetForm}
              variant="outline"
              className="border-jade-green text-jade-green hover:bg-jade-green/10"
            >
              {t("submit_another")}
            </Button>
            <Button className="bg-gold text-jade-green hover:bg-gold/90 font-brand">
              {t("schedule_consultation")}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <div className="flex items-center mb-6">
        <Mail className="w-6 h-6 text-jade-green mr-2" />
        <h2 className="text-2xl font-brand text-jade-green font-bold">
          {t("title")}
        </h2>
      </div>

      <p className="text-muted-foreground mb-8">{t("description")}</p>

      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="flex items-center space-x-3 p-4 bg-jade-green/5 rounded-lg">
          <Phone className="w-5 h-5 text-jade-green" />
          <div>
            <p className="text-sm font-medium text-foreground">
              {t("contact.phone")}
            </p>
            <p className="text-sm text-muted-foreground">+507 123-45678</p>
          </div>
        </div>

        <div className="flex items-center space-x-3 p-4 bg-jade-green/5 rounded-lg">
          <Mail className="w-5 h-5 text-jade-green" />
          <div>
            <p className="text-sm font-medium text-foreground">
              {t("contact.email")}
            </p>
            <p className="text-sm text-muted-foreground">
              info@panamagoldenkey.com
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3 p-4 bg-jade-green/5 rounded-lg">
          <MapPin className="w-5 h-5 text-jade-green" />
          <div>
            <p className="text-sm font-medium text-foreground">
              {t("contact.wechat")}
            </p>
            <p className="text-sm text-muted-foreground">PanamaGoldenKey</p>
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-foreground mb-2"
            >
              {t("fields.name")} *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t("placeholders.name")}
              className={cn(
                "w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-jade-green/50",
                errors.name ? "border-chinese-red" : "border-gray-300"
              )}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-chinese-red">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-foreground mb-2"
            >
              {t("fields.email")} *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t("placeholders.email")}
              className={cn(
                "w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-jade-green/50",
                errors.email ? "border-chinese-red" : "border-gray-300"
              )}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-chinese-red">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-foreground mb-2"
            >
              {t("fields.phone")} *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={t("placeholders.phone")}
              className={cn(
                "w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-jade-green/50",
                errors.phone ? "border-chinese-red" : "border-gray-300"
              )}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-chinese-red">{errors.phone}</p>
            )}
          </div>

          {/* Country */}
          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-foreground mb-2"
            >
              {t("fields.country")} *
            </label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className={cn(
                "w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-jade-green/50",
                errors.country ? "border-chinese-red" : "border-gray-300"
              )}
            >
              <option value="">{t("placeholders.select_country")}</option>
              {countries.map((country) => (
                <option key={country.value} value={country.value}>
                  {country.label}
                </option>
              ))}
            </select>
            {errors.country && (
              <p className="mt-1 text-sm text-chinese-red">{errors.country}</p>
            )}
          </div>

          {/* Investment Type */}
          <div>
            <label
              htmlFor="investmentType"
              className="block text-sm font-medium text-foreground mb-2"
            >
              {t("fields.investment_type")} *
            </label>
            <select
              id="investmentType"
              name="investmentType"
              value={formData.investmentType}
              onChange={handleChange}
              className={cn(
                "w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-jade-green/50",
                errors.investmentType ? "border-chinese-red" : "border-gray-300"
              )}
            >
              <option value="">
                {t("placeholders.select_investment_type")}
              </option>
              {investmentTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
            {errors.investmentType && (
              <p className="mt-1 text-sm text-chinese-red">
                {errors.investmentType}
              </p>
            )}
          </div>

          {/* Investment Amount */}
          <div>
            <label
              htmlFor="investmentAmount"
              className="block text-sm font-medium text-foreground mb-2"
            >
              {t("fields.investment_amount")} *
            </label>
            <select
              id="investmentAmount"
              name="investmentAmount"
              value={formData.investmentAmount}
              onChange={handleChange}
              className={cn(
                "w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-jade-green/50",
                errors.investmentAmount
                  ? "border-chinese-red"
                  : "border-gray-300"
              )}
            >
              <option value="">
                {t("placeholders.select_investment_amount")}
              </option>
              {investmentAmounts.map((amount) => (
                <option key={amount.value} value={amount.value}>
                  {amount.label}
                </option>
              ))}
            </select>
            {errors.investmentAmount && (
              <p className="mt-1 text-sm text-chinese-red">
                {errors.investmentAmount}
              </p>
            )}
          </div>

          {/* Timeline */}
          <div>
            <label
              htmlFor="timeline"
              className="block text-sm font-medium text-foreground mb-2"
            >
              {t("fields.timeline")} *
            </label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className={cn(
                "w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-jade-green/50",
                errors.timeline ? "border-chinese-red" : "border-gray-300"
              )}
            >
              <option value="">{t("placeholders.select_timeline")}</option>
              {timelines.map((timeline) => (
                <option key={timeline.value} value={timeline.value}>
                  {timeline.label}
                </option>
              ))}
            </select>
            {errors.timeline && (
              <p className="mt-1 text-sm text-chinese-red">{errors.timeline}</p>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-foreground mb-2"
          >
            {t("fields.message")} *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t("placeholders.message")}
            rows={5}
            className={cn(
              "w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-jade-green/50",
              errors.message ? "border-chinese-red" : "border-gray-300"
            )}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-chinese-red">{errors.message}</p>
          )}
        </div>

        {/* Consent and Newsletter */}
        <div className="space-y-4">
          <div className="flex items-start">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="mt-1 w-4 h-4 text-jade-green border-gray-300 rounded focus:ring-jade-green/50"
            />
            <label htmlFor="consent" className="ml-3 text-sm text-foreground">
              {t("fields.consent")} *
            </label>
          </div>
          {errors.consent && (
            <p className="mt-1 text-sm text-chinese-red ml-7">
              {errors.consent}
            </p>
          )}

          <div className="flex items-start">
            <input
              type="checkbox"
              id="newsletter"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleChange}
              className="mt-1 w-4 h-4 text-jade-green border-gray-300 rounded focus:ring-jade-green/50"
            />
            <label
              htmlFor="newsletter"
              className="ml-3 text-sm text-foreground"
            >
              {t("fields.newsletter")}
            </label>
          </div>
        </div>

        {/* Error Message */}
        {submitError && (
          <div className="p-4 bg-chinese-red/10 border border-chinese-red/20 rounded-lg flex items-center">
            <AlertCircle className="w-5 h-5 text-chinese-red mr-2" />
            <p className="text-sm text-chinese-red">{submitError}</p>
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-jade-green hover:bg-jade-green/90 text-white font-brand py-3"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
              {t("submitting")}
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <Send className="w-5 h-5 mr-2" />
              {t("submit")}
            </div>
          )}
        </Button>
      </form>
    </div>
  );
}
