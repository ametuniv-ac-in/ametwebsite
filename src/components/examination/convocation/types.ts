
export interface HonorisRecipient {
  name: string;
  title: string[];
}

export interface ConvocationData {
  id: string;
  number: string; // e.g., "13th"
  date: string;
  image?: string;
  graduatesCount: {
    undergraduate: number;
    postgraduate: number;
    phd: number;
  };
  honorisRecipients: HonorisRecipient[];
}
