export interface IEducation {
    institution: string;
    degree: string;
    years: string;
    logo: string;
}

export interface IButton {
    icon: string[];
    label: string;
    url: string;
}

export interface IProfile {
    name: string;
    title: string;
    location: string;
    image: string;
    overview: string;
}

export interface IExperience {
    company: string;
    title: string;
    years: string;
    tags: string[];
    logo: string;
    description: string;
}

export interface IExperienceItem {
    company: string;
    title: string;
    description: string;
    logo: string;
    tags: string[];
}
