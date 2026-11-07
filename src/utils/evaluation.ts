/**
 * Pure evaluation and utility logic for AI quality assessment scoring,
 * benchmark comparisons, contact validation, and communication URLs.
 */

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof ContactFormData, string>>;
}

export interface DimensionScores {
  naturalness: number;      // 1 to 4
  prosody: number;          // 1 to 4
  factuality: number;       // 1 to 4
  multiturnConsistency: number; // 1 to 4
  grammar: number;          // 1 to 4
}

export const DEFAULT_WEIGHTS: Record<keyof DimensionScores, number> = {
  naturalness: 0.25,
  prosody: 0.20,
  factuality: 0.25,
  multiturnConsistency: 0.15,
  grammar: 0.15,
};

/**
 * Calculates a weighted composite QA score between 1.00 and 4.00
 */
export function calculateCompositeQaScore(
  scores: DimensionScores,
  weights: Record<keyof DimensionScores, number> = DEFAULT_WEIGHTS
): number {
  let totalWeight = 0;
  let weightedSum = 0;

  for (const key of Object.keys(DEFAULT_WEIGHTS) as (keyof DimensionScores)[]) {
    const rawScore = Number(scores[key]) || 0;
    const clampedScore = Math.min(4, Math.max(1, rawScore));
    const weight = weights[key] ?? 0;
    weightedSum += clampedScore * weight;
    totalWeight += weight;
  }

  if (totalWeight === 0) return 1.0;
  const finalScore = weightedSum / totalWeight;
  return Math.round(finalScore * 100) / 100;
}

export interface BenchmarkComparison {
  score: number;
  benchmark: number;
  percentageAboveTarget: number;
  status: 'exceptional' | 'exceeds' | 'meets' | 'below';
  statusLabelId: string;
  statusLabelEn: string;
}

/**
 * Compares an evaluation score against an institutional benchmark (e.g., 2.00 target)
 */
export function getQaBenchmarkEvaluation(
  score: number,
  benchmark: number = 2.00
): BenchmarkComparison {
  const scoreCents = Math.round(score * 100);
  const benchCents = Math.round(benchmark * 100);
  // Multiply first to preserve integer precision: (113 * 100) / 200 = 56.5 -> round to 57
  const percentage = Math.round(((scoreCents - benchCents) * 100) / benchCents);

  let status: 'exceptional' | 'exceeds' | 'meets' | 'below' = 'meets';
  let statusLabelId = 'Memenuhi Standar';
  let statusLabelEn = 'Meets Target';

  if (score >= 3.0) {
    status = 'exceptional';
    statusLabelId = 'Sangat Unggul (Jauh Melampaui Target)';
    statusLabelEn = 'Exceptional (Far Exceeds Target)';
  } else if (score > benchmark) {
    status = 'exceeds';
    statusLabelId = 'Melampaui Target Kualitas';
    statusLabelEn = 'Exceeds Target Quality';
  } else if (score < benchmark) {
    status = 'below';
    statusLabelId = 'Perlu Peningkatan';
    statusLabelEn = 'Needs Improvement';
  }

  return {
    score,
    benchmark,
    percentageAboveTarget: percentage,
    status,
    statusLabelId,
    statusLabelEn,
  };
}

/**
 * Normalizes Indonesian mobile numbers to international format (62...)
 */
export function normalizeIndonesianPhone(phone: string): string {
  const cleaned = phone.replace(/[^\d+]/g, '');
  if (cleaned.startsWith('+62')) {
    return cleaned.slice(1);
  }
  if (cleaned.startsWith('62')) {
    return cleaned;
  }
  if (cleaned.startsWith('0')) {
    return '62' + cleaned.slice(1);
  }
  return cleaned;
}

/**
 * Generates direct WhatsApp click-to-chat URL
 */
export function buildWhatsAppUrl(phone: string, text: string): string {
  const normalized = normalizeIndonesianPhone(phone);
  const encoded = encodeURIComponent(text.trim());
  return `https://wa.me/${normalized}?text=${encoded}`;
}

/**
 * Generates direct mailto link
 */
export function buildMailtoUrl(email: string, subject: string, body: string): string {
  const params = new URLSearchParams();
  if (subject) params.append('subject', subject);
  if (body) params.append('body', body);
  return `mailto:${email}?${params.toString()}`;
}

/**
 * Validates interactive contact form fields
 */
export function validateContactForm(
  data: ContactFormData,
  lang: 'id' | 'en' = 'id'
): ContactFormValidationResult {
  const errors: Partial<Record<keyof ContactFormData, string>> = {};

  // Name validation
  const trimmedName = (data.name || '').trim();
  if (!trimmedName) {
    errors.name = lang === 'id' ? 'Nama lengkap wajib diisi.' : 'Full name is required.';
  } else if (trimmedName.length < 2) {
    errors.name = lang === 'id' ? 'Nama minimal 2 karakter.' : 'Name must be at least 2 characters.';
  }

  // Email validation
  const trimmedEmail = (data.email || '').trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!trimmedEmail) {
    errors.email = lang === 'id' ? 'Alamat email wajib diisi.' : 'Email address is required.';
  } else if (!emailRegex.test(trimmedEmail)) {
    errors.email = lang === 'id' ? 'Format email tidak valid (contoh: nama@domain.com).' : 'Invalid email format (e.g. name@domain.com).';
  }

  // Subject validation
  const trimmedSubject = (data.subject || '').trim();
  if (!trimmedSubject) {
    errors.subject = lang === 'id' ? 'Subjek pesan wajib diisi.' : 'Subject is required.';
  } else if (trimmedSubject.length < 3) {
    errors.subject = lang === 'id' ? 'Subjek minimal 3 karakter.' : 'Subject must be at least 3 characters.';
  }

  // Message validation
  const trimmedMessage = (data.message || '').trim();
  if (!trimmedMessage) {
    errors.message = lang === 'id' ? 'Isi pesan wajib diisi.' : 'Message content is required.';
  } else if (trimmedMessage.length < 10) {
    errors.message = lang === 'id' ? 'Pesan minimal 10 karakter agar informatif.' : 'Message must be at least 10 characters long.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
