export type Language = 'id' | 'en';

export interface DimensionScores {
  naturalness: number;      // 1 to 5
  prosody: number;          // 1 to 5
  factuality: number;       // 1 to 5
  multiturnConsistency: number; // 1 to 5
  grammar: number;          // 1 to 5
}

export interface WorkExperience {
  id: string;
  role: { id: string; en: string };
  company: string;
  location: string;
  period: { id: string; en: string };
  badge?: string;
  summary: { id: string; en: string };
  bulletPoints: { id: string; en: string }[];
  skills: string[];
  category: 'ai-finance' | 'ai-eval' | 'data-admin' | 'lms-instruction';
  projectRefUrl?: string;
}

export interface FeaturedProject {
  id: string;
  title: { id: string; en: string };
  category: string;
  badge?: string;
  overview: { id: string; en: string };
  metrics: {
    label: { id: string; en: string };
    value: string;
  }[];
  tags: string[];
  impact: { id: string; en: string };
  methodology: { id: string; en: string };
  link?: string;
  githubUrl?: string;
}

export interface EvaluationScenario {
  id: string;
  title: { id: string; en: string };
  domain: string;
  inputPrompt: { id: string; en: string };
  audioDuration: string;
  modelResponse: { id: string; en: string };
  targetAspect: string;
  annotations: {
    type: 'success' | 'warning' | 'critical';
    note: { id: string; en: string };
  }[];
  recommendedScores: DimensionScores;
  auditorNotes: { id: string; en: string };
}

export interface SkillCategory {
  title: { id: string; en: string };
  icon: string;
  skills: {
    name: string;
    level?: string;
    focus: { id: string; en: string };
  }[];
}

export interface EducationItem {
  institution: string;
  degree: { id: string; en: string };
  period: string;
  gpa?: string;
  highlights: { id: string; en: string }[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
  credentialId?: string;
  category: 'Cloud' | 'Automotive' | 'AI & Tech';
  description: { id: string; en: string };
}

export interface TechnicalResponsibilityCard {
  id: string;
  title: string;
  category: string;
  description: string;
  focusAreas: string[];
}

export interface TechnicalCaseStudy {
  id: string;
  title: string;
  objective: string;
  testMethod: string;
  expectedBehavior: string;
  evidenceStatus: 'Evaluation area' | 'Testing framework' | 'In progress';
  evidenceLink?: string;
  riskMitigated: string;
  keyCriteria: string[];
}

export interface QaMethodologyStep {
  step: number;
  title: string;
  description: string;
  keyCheck: string;
}

export interface InstitutionalMetricItem {
  key: string;
  label: string;
  value: string;
  targetOrBenchmark: string;
  category: string;
  status: 'Not provided' | 'Recorded' | 'Benchmark';
  description: string;
}

export interface SkillCategoryGroup {
  group: 'AI & LLMs' | 'Data Quality & QA' | 'Financial Market Intelligence' | 'System Reliability';
  description: string;
  skills: {
    name: string;
    confirmed: boolean;
    detail: string;
  }[];
}
