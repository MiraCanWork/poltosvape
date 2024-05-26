type SiteConfig = {
  resendCodeTime: number
  sessionStorage: {
    utm: string
  }
  localStorage: {
    redirectUrl: string
  }
}

export const siteConfig: SiteConfig = {
  resendCodeTime: 2 * 60 * 1000,
  sessionStorage: {
    utm: 'utm'
  },
  localStorage: {
    redirectUrl: 'redirectUrl'
  }
}
