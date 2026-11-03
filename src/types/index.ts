export type MachineCategory = 
  | 'semua'
  | 'perkakas'
  | 'pangan'
  | 'pertanian'
  | 'pengemasan'
  | 'otomasi';

export interface MachineItem {
  id: string;
  name: string;
  category: 'perkakas' | 'pangan' | 'pertanian' | 'pengemasan' | 'otomasi';
  categoryLabel: string;
  shortDesc: string;
  longDesc: string;
  targetIndustry: string;
  specs: {
    capacity: string;
    power: string;
    dimensions: string;
    material: string;
    weight: string;
    controlSystem: string;
    precision?: string;
  };
  features: string[];
  leadTime: string;
  warranty: string;
  suitability: string[];
  blueprintType: 'lathe' | 'mixer' | 'conveyor' | 'mill' | 'sealer' | 'dryer';
}

export interface ConfiguratorState {
  category: 'pangan' | 'pertanian' | 'pengemasan' | 'otomasi' | 'perkakas';
  materialGrade: 'SS304' | 'SS316' | 'MildSteel' | 'Hybrid';
  capacityKgHour: number;
  automationLevel: 'manual' | 'semi' | 'full';
  powerSource: '1phase' | '3phase' | 'fuel';
  targetOutput: string;
  customRequirements: string;
  customerName: string;
  customerPhone: string;
  customerCompany: string;
  customerCity: string;
}

export interface WorkflowStage {
  step: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  deliverables: string[];
  keyActivities: string[];
  toolsUsed: string[];
}

export interface CaseStudy {
  id: string;
  clientTitle: string;
  location: string;
  industry: string;
  machineBuilt: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    label: string;
    context: string;
  }[];
  materialUsed: string;
  completionTime: string;
}
