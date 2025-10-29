export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
  status?: 'completed' | 'current' | 'pending';
}

export interface TimelineStep {
  id: number;
  title: string;
  description: string;
  date?: string;
  status?: 'completed' | 'current' | 'pending';
}

export interface Step {
  id: number;
  title: string;
  description: string;
  subtitle?: string;
  details?: string;
  icon?: React.ReactNode;
  status?: 'completed' | 'current' | 'pending';
}

export interface ProcessJourneyProps {
  steps?: Step[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export interface StepInfoCardProps {
  step: Step;
  index?: number;
}

export interface StepTimelineProps {
  steps: Step[];
  currentStep?: number;
  onStepClick?: (stepId: number) => void;
}