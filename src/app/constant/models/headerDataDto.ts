export interface headerDataDto {
    id?: any;
    title?: string | null
    subTitle?: string | null
    tagline?: string | null
    button?: string | null
}

export interface ProjectDTO {
    caseName: string,
    technology: string[],
    projectTitle: string,
    ProjectDescription: string
    ProjectImg: any[]
    imgFluid: string[]
    projectLink: string[]
    id?: any,
    industry: string
}

export interface ClientDTO {
    projectlogo: string,
    clientreview: string,
    clientName: string[],
    clientIntro: string[],
    taglist: string[],
    clientImg: string[],
    heading: string[],
    initials: string[]
}

export interface projectDataDTO {
    id: any,
    bannerTitle: string[],
    bannerDescription: string,
    bannerImg: string,
    projIntro: string,
    projwebLink: string[],
    projGoal: string[],
    projChallenge: string[]
}

export interface jobDetailDTO{
    id?: any;
    jobs?: any;
    jobTitle?: string;
    jobResponsibilities: string
    jobRequirements: string
    skillsAndexperience: string

}