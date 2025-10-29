"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  Calendar,
  Clock,
  User,
  Video,
  MapPin,
  Check,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

interface ConsultationType {
  id: string;
  name: string;
  description: string;
  duration: number;
  price: string;
  icon: React.ReactNode;
}

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  consultationType: string;
  date: string;
  timeSlot: string;
  timezone: string;
  notes: string;
  consent: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  consultationType?: string;
  date?: string;
  timeSlot?: string;
  timezone?: string;
  notes?: string;
  consent?: string;
}

export function ConsultationBooking() {
  const t = useTranslations("consultation_booking");

  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    email: "",
    phone: "",
    consultationType: "",
    date: "",
    timeSlot: "",
    timezone: "",
    notes: "",
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const totalSteps = 4;
  const stepTitles = [
    t("steps.consultation_type"),
    t("steps.personal_info"),
    t("steps.select_datetime"),
    t("steps.confirmation"),
  ];

  const consultationTypes: ConsultationType[] = [
    {
      id: "general",
      name: t("consultation_types.general.name"),
      description: t("consultation_types.general.description"),
      duration: 30,
      price: t("consultation_types.general.price"),
      icon: <User className="w-5 h-5" />,
    },
    {
      id: "residency",
      name: t("consultation_types.residency.name"),
      description: t("consultation_types.residency.description"),
      duration: 60,
      price: t("consultation_types.residency.price"),
      icon: <User className="w-5 h-5" />,
    },
    {
      id: "investment",
      name: t("consultation_types.investment.name"),
      description: t("consultation_types.investment.description"),
      duration: 60,
      price: t("consultation_types.investment.price"),
      icon: <User className="w-5 h-5" />,
    },
    {
      id: "comprehensive",
      name: t("consultation_types.comprehensive.name"),
      description: t("consultation_types.comprehensive.description"),
      duration: 90,
      price: t("consultation_types.comprehensive.price"),
      icon: <User className="w-5 h-5" />,
    },
  ];

  const timeSlots: TimeSlot[] = [
    { id: "1", time: "09:00", available: true },
    { id: "2", time: "09:30", available: true },
    { id: "3", time: "10:00", available: false },
    { id: "4", time: "10:30", available: true },
    { id: "5", time: "11:00", available: true },
    { id: "6", time: "11:30", available: true },
    { id: "7", time: "14:00", available: true },
    { id: "8", time: "14:30", available: false },
    { id: "9", time: "15:00", available: true },
    { id: "10", time: "15:30", available: true },
    { id: "11", time: "16:00", available: true },
    { id: "12", time: "16:30", available: true },
  ];

  const timezones = [
    { value: "utc-8", label: "PST (UTC-8)" },
    { value: "utc-5", label: "EST (UTC-5)" },
    { value: "utc+0", label: "GMT (UTC+0)" },
    { value: "utc+8", label: "CST (UTC+8)" },
  ];

  // Generate dates for the next 14 days
  const generateDates = () => {
    const dates = [];
    const today = new Date();

    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      dates.push({
        value: date.toISOString().split("T")[0],
        label: date.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
        }),
      });
    }

    return dates;
  };

  const availableDates = generateDates();

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
    if (errors[name as keyof BookingFormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: FormErrors = {};

    if (step === 0) {
      // Consultation type validation
      if (!formData.consultationType) {
        newErrors.consultationType = t("errors.consultation_type_required");
      }
    } else if (step === 1) {
      // Personal info validation
      if (!formData.name.trim()) {
        newErrors.name = t("errors.name_required");
      }

      if (!formData.email.trim()) {
        newErrors.email = t("errors.email_required");
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = t("errors.email_invalid");
      }

      if (!formData.phone.trim()) {
        newErrors.phone = t("errors.phone_required");
      }
    } else if (step === 2) {
      // Date and time validation
      if (!formData.date) {
        newErrors.date = t("errors.date_required");
      }

      if (!formData.timeSlot) {
        newErrors.timeSlot = t("errors.time_required");
      }

      if (!formData.timezone) {
        newErrors.timezone = t("errors.timezone_required");
      }
    } else if (step === 3) {
      // Confirmation validation
      if (!formData.consent) {
        newErrors.consent = t("errors.consent_required");
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      if (currentStep < totalSteps - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        handleSubmit();
      }
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) {
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
      console.error("Booking submission error:", error);
      setSubmitError(t("errors.submission_failed"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetBooking = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      consultationType: "",
      date: "",
      timeSlot: "",
      timezone: "",
      notes: "",
      consent: false,
    });
    setErrors({});
    setCurrentStep(0);
    setIsSubmitted(false);
    setSubmitError(null);
  };

  const getSelectedConsultationType = () => {
    return consultationTypes.find(
      (type) => type.id === formData.consultationType
    );
  };

  const getSelectedTimeSlot = () => {
    return timeSlots.find((slot) => slot.id === formData.timeSlot);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-jade-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-jade-green" />
          </div>
          <h3 className="text-2xl font-brand text-jade-green font-bold mb-4">
            {t("success_title")}
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            {t("success_message")}
          </p>

          {/* Booking Details */}
          <div className="bg-jade-green/5 rounded-lg p-6 mb-6 text-left max-w-md mx-auto">
            <h4 className="font-semibold text-foreground mb-3">
              {t("booking_details")}
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">
                  {t("consultation_type")}:
                </span>
                <span className="font-medium">
                  {getSelectedConsultationType()?.name}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">{t("date")}:</span>
                <span className="font-medium">{formData.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">{t("time")}:</span>
                <span className="font-medium">
                  {getSelectedTimeSlot()?.time}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={resetBooking}
              variant="outline"
              className="border-jade-green text-jade-green hover:bg-jade-green/10"
            >
              {t("book_another")}
            </Button>
            <Button className="bg-gold text-jade-green hover:bg-gold/90 font-brand">
              {t("add_to_calendar")}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <div className="flex items-center mb-6">
        <Calendar className="w-6 h-6 text-jade-green mr-2" />
        <h2 className="text-2xl font-brand text-jade-green font-bold">
          {t("title")}
        </h2>
      </div>

      <p className="text-muted-foreground mb-8">{t("description")}</p>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            {stepTitles.map((title, index) => (
              <div key={index} className="flex items-center">
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
                    index <= currentStep
                      ? "bg-jade-green text-white"
                      : "bg-gray-200 text-gray-600"
                  )}
                >
                  {index < currentStep ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    index + 1
                  )}
                </div>
                {index < stepTitles.length - 1 && (
                  <div
                    className={cn(
                      "w-16 h-1 mx-2",
                      index < currentStep ? "bg-jade-green" : "bg-gray-200"
                    )}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          {t("current_step", {
            current: currentStep + 1,
            total: totalSteps,
            title: stepTitles[currentStep],
          })}
        </p>
      </div>

      {/* Step Content */}
      <div className="mb-8">
        {currentStep === 0 && (
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              {t("select_consultation_type")}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t("consultation_type_description")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {consultationTypes.map((type) => (
                <div
                  key={type.id}
                  className={cn(
                    "p-4 border rounded-lg cursor-pointer transition-all",
                    formData.consultationType === type.id
                      ? "border-jade-green bg-jade-green/5"
                      : "border-gray-200 hover:border-gold/50"
                  )}
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      consultationType: type.id,
                    }))
                  }
                >
                  <div className="flex items-start space-x-3">
                    <div
                      className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center",
                        formData.consultationType === type.id
                          ? "bg-jade-green text-white"
                          : "bg-gray-100 text-gray-600"
                      )}
                    >
                      {type.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">
                        {type.name}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {type.description}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-jade-green">
                          {type.duration} {t("minutes")}
                        </span>
                        <span className="text-xs font-medium text-gold">
                          {type.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {errors.consultationType && (
              <p className="mt-2 text-sm text-chinese-red">
                {errors.consultationType}
              </p>
            )}
          </div>
        )}

        {currentStep === 1 && (
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              {t("personal_information")}
            </h3>
            <div className="space-y-4">
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
                  <p className="mt-1 text-sm text-chinese-red">
                    {errors.email}
                  </p>
                )}
              </div>

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
                  <p className="mt-1 text-sm text-chinese-red">
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              {t("select_date_time")}
            </h3>
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  {t("fields.date")} *
                </label>
                <select
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={cn(
                    "w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-jade-green/50",
                    errors.date ? "border-chinese-red" : "border-gray-300"
                  )}
                >
                  <option value="">{t("placeholders.select_date")}</option>
                  {availableDates.map((date) => (
                    <option key={date.value} value={date.value}>
                      {date.label}
                    </option>
                  ))}
                </select>
                {errors.date && (
                  <p className="mt-1 text-sm text-chinese-red">{errors.date}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="timezone"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  {t("fields.timezone")} *
                </label>
                <select
                  id="timezone"
                  name="timezone"
                  value={formData.timezone}
                  onChange={handleChange}
                  className={cn(
                    "w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-jade-green/50",
                    errors.timezone ? "border-chinese-red" : "border-gray-300"
                  )}
                >
                  <option value="">{t("placeholders.select_timezone")}</option>
                  {timezones.map((timezone) => (
                    <option key={timezone.value} value={timezone.value}>
                      {timezone.label}
                    </option>
                  ))}
                </select>
                {errors.timezone && (
                  <p className="mt-1 text-sm text-chinese-red">
                    {errors.timezone}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t("fields.time")} *
                </label>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot.id}
                      type="button"
                      disabled={!slot.available}
                      className={cn(
                        "p-2 text-sm border rounded-md transition-colors",
                        formData.timeSlot === slot.id
                          ? "border-jade-green bg-jade-green/10 text-jade-green"
                          : slot.available
                            ? "border-gray-200 text-gray-700 hover:border-gold/50"
                            : "border-gray-100 text-gray-400 cursor-not-allowed"
                      )}
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, timeSlot: slot.id }))
                      }
                    >
                      {slot.time}
                    </button>
                  ))}
                </div>
                {errors.timeSlot && (
                  <p className="mt-1 text-sm text-chinese-red">
                    {errors.timeSlot}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="notes"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  {t("fields.notes")}
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder={t("placeholders.notes")}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-jade-green/50"
                />
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              {t("confirmation")}
            </h3>
            <div className="space-y-4">
              {/* Booking Summary */}
              <div className="bg-jade-green/5 rounded-lg p-6">
                <h4 className="font-semibold text-foreground mb-3">
                  {t("booking_summary")}
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      {t("consultation_type")}:
                    </span>
                    <span className="font-medium">
                      {getSelectedConsultationType()?.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      {t("duration")}:
                    </span>
                    <span className="font-medium">
                      {getSelectedConsultationType()?.duration} {t("minutes")}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t("price")}:</span>
                    <span className="font-medium">
                      {getSelectedConsultationType()?.price}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t("name")}:</span>
                    <span className="font-medium">{formData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t("email")}:</span>
                    <span className="font-medium">{formData.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t("phone")}:</span>
                    <span className="font-medium">{formData.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t("date")}:</span>
                    <span className="font-medium">{formData.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t("time")}:</span>
                    <span className="font-medium">
                      {getSelectedTimeSlot()?.time}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      {t("timezone")}:
                    </span>
                    <span className="font-medium">
                      {
                        timezones.find((tz) => tz.value === formData.timezone)
                          ?.label
                      }
                    </span>
                  </div>
                  {formData.notes && (
                    <div className="pt-2 border-t border-jade-green/20">
                      <span className="text-muted-foreground">
                        {t("notes")}:
                      </span>
                      <p className="font-medium mt-1">{formData.notes}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Consultation Format */}
              <div className="p-4 bg-gold/10 rounded-lg border border-gold/20">
                <div className="flex items-center">
                  <Video className="w-5 h-5 text-gold mr-2" />
                  <span className="text-sm font-medium text-foreground">
                    {t("consultation_format")}
                  </span>
                </div>
                <p className="text-sm text-foreground mt-1">
                  {t("consultation_format_description")}
                </p>
              </div>

              {/* Consent */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 text-jade-green border-gray-300 rounded focus:ring-jade-green/50"
                />
                <label
                  htmlFor="consent"
                  className="ml-3 text-sm text-foreground"
                >
                  {t("fields.consent")} *
                </label>
              </div>
              {errors.consent && (
                <p className="mt-1 text-sm text-chinese-red ml-7">
                  {errors.consent}
                </p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Error Message */}
      {submitError && (
        <div className="mb-6 p-4 bg-chinese-red/10 border border-chinese-red/20 rounded-lg flex items-center">
          <span className="text-sm text-chinese-red">{submitError}</span>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={handlePreviousStep}
          disabled={currentStep === 0}
          className="border-jade-green text-jade-green hover:bg-jade-green/10"
        >
          {t("previous")}
        </Button>

        <Button
          onClick={handleNextStep}
          disabled={isSubmitting}
          className="bg-jade-green hover:bg-jade-green/90 text-white flex items-center"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
              {t("submitting")}
            </>
          ) : (
            <>
              {currentStep < totalSteps - 1 ? t("next") : t("confirm_booking")}
              <ChevronRight className="w-4 h-4 ml-1" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
