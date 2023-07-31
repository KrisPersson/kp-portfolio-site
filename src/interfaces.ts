interface IProject {
    projectName: string;
    thumbnail?: string;
    links: {ui: string; code: string;};
    tech: string[];
}


export type { IProject }