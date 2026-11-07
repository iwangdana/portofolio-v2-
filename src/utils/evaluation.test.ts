import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateCompositeQaScore,
  getQaBenchmarkEvaluation,
  normalizeIndonesianPhone,
  buildWhatsAppUrl,
  buildMailtoUrl,
  validateContactForm,
} from './evaluation.ts';

test('calculateCompositeQaScore computes accurate weighted score', () => {
  const scores = {
    naturalness: 4,
    prosody: 3,
    factuality: 4,
    multiturnConsistency: 4,
    grammar: 4,
  };
  const result = calculateCompositeQaScore(scores);
  assert.equal(result, 3.8);
});

test('calculateCompositeQaScore clamps values within 1 to 4', () => {
  const outOfBounds = {
    naturalness: 10,
    prosody: 0,
    factuality: 5,
    multiturnConsistency: 5,
    grammar: 5,
  };
  const result = calculateCompositeQaScore(outOfBounds);
  assert.ok(result >= 1.0 && result <= 4.0);
});

test('getQaBenchmarkEvaluation calculates 3.13 against 2.00 benchmark', () => {
  const comparison = getQaBenchmarkEvaluation(3.13, 2.00);
  assert.equal(comparison.score, 3.13);
  assert.equal(comparison.benchmark, 2.00);
  assert.equal(comparison.percentageAboveTarget, 57);
  assert.equal(comparison.status, 'exceptional');
  assert.equal(comparison.statusLabelEn, 'Exceptional (Far Exceeds Target)');
});

test('normalizeIndonesianPhone formats various Indonesian phone notations', () => {
  assert.equal(normalizeIndonesianPhone('0889 8906 5312'), '6288989065312');
  assert.equal(normalizeIndonesianPhone('+62 889-8906-5312'), '6288989065312');
  assert.equal(normalizeIndonesianPhone('6288989065312'), '6288989065312');
});

test('buildWhatsAppUrl constructs valid wa.me link', () => {
  const url = buildWhatsAppUrl('0889 8906 5312', 'Halo Mas Yusuf Iwang Pradana');
  assert.ok(url.startsWith('https://wa.me/6288989065312?text=Halo%20Mas%20Yusuf%20Iwang%20Pradana'));
});

test('buildMailtoUrl encodes parameters properly', () => {
  const mailto = buildMailtoUrl('iwangdana1@gmail.com', 'Inquiry Portofolio', 'Halo Yusuf');
  assert.ok(mailto.includes('mailto:iwangdana1@gmail.com'));
  assert.ok(mailto.includes('subject=Inquiry+Portofolio'));
  assert.ok(mailto.includes('body=Halo+Yusuf'));
});

test('validateContactForm flags empty required fields', () => {
  const emptyForm = { name: '', email: '', subject: '', message: '' };
  const result = validateContactForm(emptyForm, 'id');
  assert.equal(result.isValid, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.email);
  assert.ok(result.errors.subject);
  assert.ok(result.errors.message);
});

test('validateContactForm rejects malformed emails and short messages', () => {
  const invalidForm = {
    name: 'Budi',
    email: 'budi-invalid-email',
    subject: 'Hi',
    message: 'Short',
  };
  const result = validateContactForm(invalidForm, 'en');
  assert.equal(result.isValid, false);
  assert.ok(result.errors.email?.includes('Invalid email'));
  assert.ok(result.errors.subject?.includes('at least 3'));
  assert.ok(result.errors.message?.includes('at least 10'));
});

test('validateContactForm accepts clean and valid contact data', () => {
  const validForm = {
    name: 'Sarah Connor',
    email: 'sarah.connor@ai-lab.io',
    subject: 'Opportunity for AI Software Engineer',
    message: 'We would love to discuss an AI Software Engineer role with your team.',
  };
  const result = validateContactForm(validForm, 'en');
  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});
