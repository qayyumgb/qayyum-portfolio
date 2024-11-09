export interface faq {
  query: string
  ans: any
}

export interface ServiceDto {
  id: string,
  mainTitle: string
  Technologies: string
  trustedImages: any[]
  faq:faq[]
  techImages?: any[]
  servicelink?: string
  servicesFeatures?: any[]
  serviceDetail?: string,
  serviceName?: string,
  serviceIcon?: string
  bannerImg?: string
}
