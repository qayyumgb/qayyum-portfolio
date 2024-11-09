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
    ProjectDetail: string
    ProjectDescription: string
    ProjectImg: any[]
    imgFluid: string[]
    projectLink: string[]
    id?: any,
    caseid?:any,
    bannerTitle: string[],
    bannerDescription: string,
    bannerImg: string,
    projIntro: string,
    projwebLink: string[],
    projGoal: string[],
    projChallenge: string[]
    projMainimg: string
    technologyStack: string[]
}

export interface ClientDTO {
    projectlogo: string,
    ProjectImg: string[],
    projectTag1: string,
    projectTag2: string,
    clientreview: string,
    clientName: string[],
    clientIntro: string[],
    taglist: string[],
    clientImg: string[]
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